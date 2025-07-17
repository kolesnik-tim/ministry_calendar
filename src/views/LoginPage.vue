<template>
  <div>
    <h2>{{ isRegistering ? 'Регистрация' : 'Вход' }}</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Пароль" />
    <button @click="isRegistering ? register() : login()">
      {{ isRegistering ? 'Зарегистрироваться' : 'Войти' }}
    </button>

    <p @click="toggleMode" style="cursor: pointer; color: blue">
      {{ isRegistering ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться' }}
    </p>

    <p style="color: red">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "@/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const email = ref("");
const password = ref("");
const error = ref("");
const isRegistering = ref(false);
const router = useRouter();

function toggleMode() {
  isRegistering.value = !isRegistering.value;
  error.value = "";
}

async function login() {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push("/home");
  } catch (err) {
    error.value = "Ошибка входа: " + err.message;
  }
}

async function register() {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    // Пользователь зарегистрирован — user.uid доступен
    const user = userCredential.user;

    // Можно здесь, например, добавить данные пользователя в Firestore (опционально)

    router.push("/home");
  } catch (err) {
    error.value = "Ошибка регистрации: " + err.message;
  }
}
</script>
