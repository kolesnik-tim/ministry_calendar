<template>
  <div>

    <h2>Мои записи служения</h2>
    <ul>
      <li v-for="item in ministryItems" :key="item.id">
        {{ item.date.toDate().toLocaleString() }} — {{ item.comment }} — {{ item.time_in_ministry }} мин — Кредит: {{
          item.is_credit }}
      </li>
    </ul>
    <p v-if="ministryItems.length === 0">Записей нет</p>




    <h2>Добавить запись служения</h2>
    <input v-model="comment" placeholder="Комментарий" />
    <input type="number" v-model.number="time" placeholder="Время (в минутах)" />
    <label>
      <input type="checkbox" v-model="isCredit" /> Это кредит?
    </label>
    <button @click="addRecord">Добавить</button>
    <p style="color: green" v-if="successMessage">{{ successMessage }}</p>
    <p style="color: red" v-if="error">{{ error }}</p>

    <br>
    <br> 
    <button @click="logout">Выйти</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
  doc,
  getDoc,
  runTransaction,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  Timestamp
} from "firebase/firestore";
import { db, auth } from "@/firebase";

const comment = ref("");
const time = ref(0);
const isCredit = ref(false);
const successMessage = ref("");
const error = ref("");
const ministryItems = ref([]);


// Функция для загрузки списка записей
async function loadMinistryItems() {
  const user = auth.currentUser;

  if (!user) {
    ministryItems.value = [];
    return;
  }

  const q = query(
    collection(db, "ministry"),
    where("user_id", "==", user.uid)
  );

  const snapshot = await getDocs(q);
  ministryItems.value = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}


onMounted(async () => {
  loadMinistryItems();
});

async function addRecord() {
  const user = auth.currentUser;
  if (!user) {
    error.value = "Пользователь не авторизован";
    return;
  }

  try {

    await addRecordWithCounter({
      comment: comment.value,
      date: Timestamp.now(),
      is_credit: isCredit.value,
      time_in_ministry: time.value,
      user_id: user.uid,
    });
    successMessage.value = "Запись добавлена!";
    comment.value = "";
    time.value = 0;
    isCredit.value = false;
    error.value = "";

    // После добавления обновляем список
    await loadMinistryItems();

  } catch (err) {
    error.value = "Ошибка добавления: " + err.message;
  }
}


async function addRecordWithCounter(newRecordData) {
  const counterRef = doc(db, "counters", "ministryCounter");

  try {
    await runTransaction(db, async (transaction) => {
      const counterDoc = await transaction.get(counterRef);

      let newId = 1;
      if (counterDoc.exists()) {
        newId = counterDoc.data().count + 1;
      }

      transaction.set(counterRef, { count: newId });

      const docRef = doc(db, "ministry", String(newId));
      transaction.set(docRef, newRecordData);
    });

    console.log("Добавлена запись с числовым ID");
  } catch (e) {
    console.error("Ошибка транзакции: ", e);
  }
}

async function logout() {
  await signOut(auth);
  router.push("/");
}
</script>
