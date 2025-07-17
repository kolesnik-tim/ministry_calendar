(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ul(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Pe={},Hr=[],en=()=>{},K_=()=>!1,sa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),hl=n=>n.startsWith("onUpdate:"),ft=Object.assign,fl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Q_=Object.prototype.hasOwnProperty,Re=(n,e)=>Q_.call(n,e),ie=Array.isArray,zr=n=>wi(n)==="[object Map]",ia=n=>wi(n)==="[object Set]",lh=n=>wi(n)==="[object Date]",le=n=>typeof n=="function",qe=n=>typeof n=="string",cn=n=>typeof n=="symbol",Ve=n=>n!==null&&typeof n=="object",Ld=n=>(Ve(n)||le(n))&&le(n.then)&&le(n.catch),Fd=Object.prototype.toString,wi=n=>Fd.call(n),J_=n=>wi(n).slice(8,-1),Ud=n=>wi(n)==="[object Object]",dl=n=>qe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Hs=ul(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Y_=/-(\w)/g,Lt=oa(n=>n.replace(Y_,(e,t)=>t?t.toUpperCase():"")),X_=/\B([A-Z])/g,Sr=oa(n=>n.replace(X_,"-$1").toLowerCase()),aa=oa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Za=oa(n=>n?`on${aa(n)}`:""),zn=(n,e)=>!Object.is(n,e),fo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ac=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Rc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let uh;const ca=()=>uh||(uh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pl(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=qe(r)?ny(r):pl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(n)||Ve(n))return n}const Z_=/;(?![^(]*\))/g,ey=/:([^]+)/,ty=/\/\*[^]*?\*\//g;function ny(n){const e={};return n.replace(ty,"").split(Z_).forEach(t=>{if(t){const r=t.split(ey);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function gl(n){let e="";if(qe(n))e=n;else if(ie(n))for(let t=0;t<n.length;t++){const r=gl(n[t]);r&&(e+=r+" ")}else if(Ve(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ry="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sy=ul(ry);function jd(n){return!!n||n===""}function iy(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=la(n[r],e[r]);return t}function la(n,e){if(n===e)return!0;let t=lh(n),r=lh(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=cn(n),r=cn(e),t||r)return n===e;if(t=ie(n),r=ie(e),t||r)return t&&r?iy(n,e):!1;if(t=Ve(n),r=Ve(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const c=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!la(n[a],e[a]))return!1}}return String(n)===String(e)}function Bd(n,e){return n.findIndex(t=>la(t,e))}const $d=n=>!!(n&&n.__v_isRef===!0),jt=n=>qe(n)?n:n==null?"":ie(n)||Ve(n)&&(n.toString===Fd||!le(n.toString))?$d(n)?jt(n.value):JSON.stringify(n,qd,2):String(n),qd=(n,e)=>$d(e)?qd(n,e.value):zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[ec(r,i)+" =>"]=s,t),{})}:ia(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ec(t))}:cn(e)?ec(e):Ve(e)&&!ie(e)&&!Ud(e)?String(e):e,ec=(n,e="")=>{var t;return cn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vt;class oy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=vt,!e&&vt&&(this.index=(vt.scopes||(vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=vt;try{return vt=this,e()}finally{vt=t}}}on(){++this._on===1&&(this.prevScope=vt,vt=this)}off(){this._on>0&&--this._on===0&&(vt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ay(){return vt}let ke;const tc=new WeakSet;class Hd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,vt&&vt.active&&vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,tc.has(this)&&(tc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hh(this),Gd(this);const e=ke,t=Ht;ke=this,Ht=!0;try{return this.fn()}finally{Kd(this),ke=e,Ht=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)yl(e);this.deps=this.depsTail=void 0,hh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?tc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bc(this)&&this.run()}get dirty(){return bc(this)}}let zd=0,zs,Ws;function Wd(n,e=!1){if(n.flags|=8,e){n.next=Ws,Ws=n;return}n.next=zs,zs=n}function ml(){zd++}function _l(){if(--zd>0)return;if(Ws){let e=Ws;for(Ws=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;zs;){let e=zs;for(zs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Gd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),yl(r),cy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function bc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Qd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ai)||(n.globalVersion=ai,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!bc(n))))return;n.flags|=2;const e=n.dep,t=ke,r=Ht;ke=n,Ht=!0;try{Gd(n);const s=n.fn(n._value);(e.version===0||zn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=t,Ht=r,Kd(n),n.flags&=-3}}function yl(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)yl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function cy(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ht=!0;const Jd=[];function wn(){Jd.push(Ht),Ht=!1}function An(){const n=Jd.pop();Ht=n===void 0?!0:n}function hh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ke;ke=void 0;try{e()}finally{ke=t}}}let ai=0;class ly{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ke||!Ht||ke===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ke)t=this.activeLink=new ly(ke,this),ke.deps?(t.prevDep=ke.depsTail,ke.depsTail.nextDep=t,ke.depsTail=t):ke.deps=ke.depsTail=t,Yd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=ke.depsTail,t.nextDep=void 0,ke.depsTail.nextDep=t,ke.depsTail=t,ke.deps===t&&(ke.deps=r)}return t}trigger(e){this.version++,ai++,this.notify(e)}notify(e){ml();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{_l()}}}function Yd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Yd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Sc=new WeakMap,Er=Symbol(""),Pc=Symbol(""),ci=Symbol("");function ct(n,e,t){if(Ht&&ke){let r=Sc.get(n);r||Sc.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new vl),s.map=r,s.key=t),s.track()}}function _n(n,e,t,r,s,i){const a=Sc.get(n);if(!a){ai++;return}const c=l=>{l&&l.trigger()};if(ml(),e==="clear")a.forEach(c);else{const l=ie(n),h=l&&dl(t);if(l&&t==="length"){const f=Number(r);a.forEach((p,g)=>{(g==="length"||g===ci||!cn(g)&&g>=f)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(ci)),e){case"add":l?h&&c(a.get("length")):(c(a.get(Er)),zr(n)&&c(a.get(Pc)));break;case"delete":l||(c(a.get(Er)),zr(n)&&c(a.get(Pc)));break;case"set":zr(n)&&c(a.get(Er));break}}_l()}function Mr(n){const e=Ae(n);return e===n?e:(ct(e,"iterate",ci),Mt(n)?e:e.map(et))}function ua(n){return ct(n=Ae(n),"iterate",ci),n}const uy={__proto__:null,[Symbol.iterator](){return nc(this,Symbol.iterator,et)},concat(...n){return Mr(this).concat(...n.map(e=>ie(e)?Mr(e):e))},entries(){return nc(this,"entries",n=>(n[1]=et(n[1]),n))},every(n,e){return dn(this,"every",n,e,void 0,arguments)},filter(n,e){return dn(this,"filter",n,e,t=>t.map(et),arguments)},find(n,e){return dn(this,"find",n,e,et,arguments)},findIndex(n,e){return dn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return dn(this,"findLast",n,e,et,arguments)},findLastIndex(n,e){return dn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return dn(this,"forEach",n,e,void 0,arguments)},includes(...n){return rc(this,"includes",n)},indexOf(...n){return rc(this,"indexOf",n)},join(n){return Mr(this).join(n)},lastIndexOf(...n){return rc(this,"lastIndexOf",n)},map(n,e){return dn(this,"map",n,e,void 0,arguments)},pop(){return Os(this,"pop")},push(...n){return Os(this,"push",n)},reduce(n,...e){return fh(this,"reduce",n,e)},reduceRight(n,...e){return fh(this,"reduceRight",n,e)},shift(){return Os(this,"shift")},some(n,e){return dn(this,"some",n,e,void 0,arguments)},splice(...n){return Os(this,"splice",n)},toReversed(){return Mr(this).toReversed()},toSorted(n){return Mr(this).toSorted(n)},toSpliced(...n){return Mr(this).toSpliced(...n)},unshift(...n){return Os(this,"unshift",n)},values(){return nc(this,"values",et)}};function nc(n,e,t){const r=ua(n),s=r[e]();return r!==n&&!Mt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const hy=Array.prototype;function dn(n,e,t,r,s,i){const a=ua(n),c=a!==n&&!Mt(n),l=a[e];if(l!==hy[e]){const p=l.apply(n,i);return c?et(p):p}let h=t;a!==n&&(c?h=function(p,g){return t.call(this,et(p),g,n)}:t.length>2&&(h=function(p,g){return t.call(this,p,g,n)}));const f=l.call(a,h,r);return c&&s?s(f):f}function fh(n,e,t,r){const s=ua(n);let i=t;return s!==n&&(Mt(n)?t.length>3&&(i=function(a,c,l){return t.call(this,a,c,l,n)}):i=function(a,c,l){return t.call(this,a,et(c),l,n)}),s[e](i,...r)}function rc(n,e,t){const r=Ae(n);ct(r,"iterate",ci);const s=r[e](...t);return(s===-1||s===!1)&&Il(t[0])?(t[0]=Ae(t[0]),r[e](...t)):s}function Os(n,e,t=[]){wn(),ml();const r=Ae(n)[e].apply(n,t);return _l(),An(),r}const fy=ul("__proto__,__v_isRef,__isVue"),Xd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(cn));function dy(n){cn(n)||(n=String(n));const e=Ae(this);return ct(e,"has",n),e.hasOwnProperty(n)}class Zd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?wy:rp:i?np:tp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ie(e);if(!s){let l;if(a&&(l=uy[t]))return l;if(t==="hasOwnProperty")return dy}const c=Reflect.get(e,t,ht(e)?e:r);return(cn(t)?Xd.has(t):fy(t))||(s||ct(e,"get",t),i)?c:ht(c)?a&&dl(t)?c:c.value:Ve(c)?s?ip(c):ha(c):c}}class ep extends Zd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const l=Xn(i);if(!Mt(r)&&!Xn(r)&&(i=Ae(i),r=Ae(r)),!ie(e)&&ht(i)&&!ht(r))return l?!1:(i.value=r,!0)}const a=ie(e)&&dl(t)?Number(t)<e.length:Re(e,t),c=Reflect.set(e,t,r,ht(e)?e:s);return e===Ae(s)&&(a?zn(r,i)&&_n(e,"set",t,r):_n(e,"add",t,r)),c}deleteProperty(e,t){const r=Re(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&_n(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!cn(t)||!Xd.has(t))&&ct(e,"has",t),r}ownKeys(e){return ct(e,"iterate",ie(e)?"length":Er),Reflect.ownKeys(e)}}class py extends Zd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const gy=new ep,my=new py,_y=new ep(!0);const Cc=n=>n,no=n=>Reflect.getPrototypeOf(n);function yy(n,e,t){return function(...r){const s=this.__v_raw,i=Ae(s),a=zr(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),f=t?Cc:e?So:et;return!e&&ct(i,"iterate",l?Pc:Er),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function ro(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function vy(n,e){const t={get(s){const i=this.__v_raw,a=Ae(i),c=Ae(s);n||(zn(s,c)&&ct(a,"get",s),ct(a,"get",c));const{has:l}=no(a),h=e?Cc:n?So:et;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&ct(Ae(s),"iterate",Er),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Ae(i),c=Ae(s);return n||(zn(s,c)&&ct(a,"has",s),ct(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=Ae(c),h=e?Cc:n?So:et;return!n&&ct(l,"iterate",Er),c.forEach((f,p)=>s.call(i,h(f),h(p),a))}};return ft(t,n?{add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear")}:{add(s){!e&&!Mt(s)&&!Xn(s)&&(s=Ae(s));const i=Ae(this);return no(i).has.call(i,s)||(i.add(s),_n(i,"add",s,s)),this},set(s,i){!e&&!Mt(i)&&!Xn(i)&&(i=Ae(i));const a=Ae(this),{has:c,get:l}=no(a);let h=c.call(a,s);h||(s=Ae(s),h=c.call(a,s));const f=l.call(a,s);return a.set(s,i),h?zn(i,f)&&_n(a,"set",s,i):_n(a,"add",s,i),this},delete(s){const i=Ae(this),{has:a,get:c}=no(i);let l=a.call(i,s);l||(s=Ae(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&_n(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,a=s.clear();return i&&_n(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=yy(s,n,e)}),t}function El(n,e){const t=vy(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Re(t,s)&&s in r?t:r,s,i)}const Ey={get:El(!1,!1)},Ty={get:El(!1,!0)},Iy={get:El(!0,!1)};const tp=new WeakMap,np=new WeakMap,rp=new WeakMap,wy=new WeakMap;function Ay(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ry(n){return n.__v_skip||!Object.isExtensible(n)?0:Ay(J_(n))}function ha(n){return Xn(n)?n:Tl(n,!1,gy,Ey,tp)}function sp(n){return Tl(n,!1,_y,Ty,np)}function ip(n){return Tl(n,!0,my,Iy,rp)}function Tl(n,e,t,r,s){if(!Ve(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=Ry(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function Wr(n){return Xn(n)?Wr(n.__v_raw):!!(n&&n.__v_isReactive)}function Xn(n){return!!(n&&n.__v_isReadonly)}function Mt(n){return!!(n&&n.__v_isShallow)}function Il(n){return n?!!n.__v_raw:!1}function Ae(n){const e=n&&n.__v_raw;return e?Ae(e):n}function by(n){return!Re(n,"__v_skip")&&Object.isExtensible(n)&&Ac(n,"__v_skip",!0),n}const et=n=>Ve(n)?ha(n):n,So=n=>Ve(n)?ip(n):n;function ht(n){return n?n.__v_isRef===!0:!1}function Bt(n){return op(n,!1)}function Sy(n){return op(n,!0)}function op(n,e){return ht(n)?n:new Py(n,e)}class Py{constructor(e,t){this.dep=new vl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ae(e),this._value=t?e:et(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Mt(e)||Xn(e);e=r?e:Ae(e),zn(e,t)&&(this._rawValue=e,this._value=r?e:et(e),this.dep.trigger())}}function Gr(n){return ht(n)?n.value:n}const Cy={get:(n,e,t)=>e==="__v_raw"?n:Gr(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return ht(s)&&!ht(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function ap(n){return Wr(n)?n:new Proxy(n,Cy)}class ky{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new vl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ai-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return Wd(this,!0),!0}get value(){const e=this.dep.track();return Qd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Vy(n,e,t=!1){let r,s;return le(n)?r=n:(r=n.get,s=n.set),new ky(r,s,t)}const so={},Po=new WeakMap;let gr;function Dy(n,e=!1,t=gr){if(t){let r=Po.get(t);r||Po.set(t,r=[]),r.push(n)}}function Oy(n,e,t=Pe){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=q=>s?q:Mt(q)||s===!1||s===0?yn(q,1):yn(q);let f,p,g,_,C=!1,V=!1;if(ht(n)?(p=()=>n.value,C=Mt(n)):Wr(n)?(p=()=>h(n),C=!0):ie(n)?(V=!0,C=n.some(q=>Wr(q)||Mt(q)),p=()=>n.map(q=>{if(ht(q))return q.value;if(Wr(q))return h(q);if(le(q))return l?l(q,2):q()})):le(n)?e?p=l?()=>l(n,2):n:p=()=>{if(g){wn();try{g()}finally{An()}}const q=gr;gr=f;try{return l?l(n,3,[_]):n(_)}finally{gr=q}}:p=en,e&&s){const q=p,he=s===!0?1/0:s;p=()=>yn(q(),he)}const L=ay(),W=()=>{f.stop(),L&&L.active&&fl(L.effects,f)};if(i&&e){const q=e;e=(...he)=>{q(...he),W()}}let j=V?new Array(n.length).fill(so):so;const $=q=>{if(!(!(f.flags&1)||!f.dirty&&!q))if(e){const he=f.run();if(s||C||(V?he.some((fe,w)=>zn(fe,j[w])):zn(he,j))){g&&g();const fe=gr;gr=f;try{const w=[he,j===so?void 0:V&&j[0]===so?[]:j,_];j=he,l?l(e,3,w):e(...w)}finally{gr=fe}}}else f.run()};return c&&c($),f=new Hd(p),f.scheduler=a?()=>a($,!1):$,_=q=>Dy(q,!1,f),g=f.onStop=()=>{const q=Po.get(f);if(q){if(l)l(q,4);else for(const he of q)he();Po.delete(f)}},e?r?$(!0):j=f.run():a?a($.bind(null,!0),!0):f.run(),W.pause=f.pause.bind(f),W.resume=f.resume.bind(f),W.stop=W,W}function yn(n,e=1/0,t){if(e<=0||!Ve(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,ht(n))yn(n.value,e,t);else if(ie(n))for(let r=0;r<n.length;r++)yn(n[r],e,t);else if(ia(n)||zr(n))n.forEach(r=>{yn(r,e,t)});else if(Ud(n)){for(const r in n)yn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&yn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ai(n,e,t,r){try{return r?n(...r):n()}catch(s){fa(s,e,t)}}function ln(n,e,t,r){if(le(n)){const s=Ai(n,e,t,r);return s&&Ld(s)&&s.catch(i=>{fa(i,e,t)}),s}if(ie(n)){const s=[];for(let i=0;i<n.length;i++)s.push(ln(n[i],e,t,r));return s}}function fa(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Pe;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](n,l,h)===!1)return}c=c.parent}if(i){wn(),Ai(i,null,10,[n,l,h]),An();return}}Ny(n,t,s,r,a)}function Ny(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const _t=[];let Jt=-1;const Kr=[];let Ln=null,Lr=0;const cp=Promise.resolve();let Co=null;function lp(n){const e=Co||cp;return n?e.then(this?n.bind(this):n):e}function xy(n){let e=Jt+1,t=_t.length;for(;e<t;){const r=e+t>>>1,s=_t[r],i=li(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function wl(n){if(!(n.flags&1)){const e=li(n),t=_t[_t.length-1];!t||!(n.flags&2)&&e>=li(t)?_t.push(n):_t.splice(xy(e),0,n),n.flags|=1,up()}}function up(){Co||(Co=cp.then(fp))}function My(n){ie(n)?Kr.push(...n):Ln&&n.id===-1?Ln.splice(Lr+1,0,n):n.flags&1||(Kr.push(n),n.flags|=1),up()}function dh(n,e,t=Jt+1){for(;t<_t.length;t++){const r=_t[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;_t.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function hp(n){if(Kr.length){const e=[...new Set(Kr)].sort((t,r)=>li(t)-li(r));if(Kr.length=0,Ln){Ln.push(...e);return}for(Ln=e,Lr=0;Lr<Ln.length;Lr++){const t=Ln[Lr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ln=null,Lr=0}}const li=n=>n.id==null?n.flags&2?-1:1/0:n.id;function fp(n){try{for(Jt=0;Jt<_t.length;Jt++){const e=_t[Jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ai(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jt<_t.length;Jt++){const e=_t[Jt];e&&(e.flags&=-2)}Jt=-1,_t.length=0,hp(),Co=null,(_t.length||Kr.length)&&fp()}}let bt=null,dp=null;function ko(n){const e=bt;return bt=n,dp=n&&n.type.__scopeId||null,e}function Ly(n,e=bt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&wh(-1);const i=ko(e);let a;try{a=n(...s)}finally{ko(i),r._d&&wh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Gs(n,e){if(bt===null)return n;const t=ma(bt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Pe]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&yn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function dr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(wn(),ln(l,t,8,[n.el,c,n,e]),An())}}const Fy=Symbol("_vte"),Uy=n=>n.__isTeleport;function Al(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Al(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function pp(n,e){return le(n)?ft({name:n.name},e,{setup:n}):n}function gp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ks(n,e,t,r,s=!1){if(ie(n)){n.forEach((C,V)=>Ks(C,e&&(ie(e)?e[V]:e),t,r,s));return}if(Qs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ks(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?ma(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,f=c.refs===Pe?c.refs={}:c.refs,p=c.setupState,g=Ae(p),_=p===Pe?()=>!1:C=>Re(g,C);if(h!=null&&h!==l&&(qe(h)?(f[h]=null,_(h)&&(p[h]=null)):ht(h)&&(h.value=null)),le(l))Ai(l,c,12,[a,f]);else{const C=qe(l),V=ht(l);if(C||V){const L=()=>{if(n.f){const W=C?_(l)?p[l]:f[l]:l.value;s?ie(W)&&fl(W,i):ie(W)?W.includes(i)||W.push(i):C?(f[l]=[i],_(l)&&(p[l]=f[l])):(l.value=[i],n.k&&(f[n.k]=l.value))}else C?(f[l]=a,_(l)&&(p[l]=a)):V&&(l.value=a,n.k&&(f[n.k]=a))};a?(L.id=-1,At(L,t)):L()}}}ca().requestIdleCallback;ca().cancelIdleCallback;const Qs=n=>!!n.type.__asyncLoader,mp=n=>n.type.__isKeepAlive;function jy(n,e){_p(n,"a",e)}function By(n,e){_p(n,"da",e)}function _p(n,e,t=lt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(da(e,r,t),t){let s=t.parent;for(;s&&s.parent;)mp(s.parent.vnode)&&$y(r,e,t,s),s=s.parent}}function $y(n,e,t,r){const s=da(e,n,r,!0);vp(()=>{fl(r[e],s)},t)}function da(n,e,t=lt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{wn();const c=Ri(t),l=ln(e,t,n,a);return c(),An(),l});return r?s.unshift(i):s.push(i),i}}const Pn=n=>(e,t=lt)=>{(!hi||n==="sp")&&da(n,(...r)=>e(...r),t)},qy=Pn("bm"),yp=Pn("m"),Hy=Pn("bu"),zy=Pn("u"),Wy=Pn("bum"),vp=Pn("um"),Gy=Pn("sp"),Ky=Pn("rtg"),Qy=Pn("rtc");function Jy(n,e=lt){da("ec",n,e)}const Yy="components";function Xy(n,e){return ev(Yy,n,!0,e)||n}const Zy=Symbol.for("v-ndc");function ev(n,e,t=!0,r=!1){const s=bt||lt;if(s){const i=s.type;{const c=Bv(i,!1);if(c&&(c===e||c===Lt(e)||c===aa(Lt(e))))return i}const a=ph(s[n]||i[n],e)||ph(s.appContext[n],e);return!a&&r?i:a}}function ph(n,e){return n&&(n[e]||n[Lt(e)]||n[aa(Lt(e))])}function tv(n,e,t,r){let s;const i=t,a=ie(n);if(a||qe(n)){const c=a&&Wr(n);let l=!1,h=!1;c&&(l=!Mt(n),h=Xn(n),n=ua(n)),s=new Array(n.length);for(let f=0,p=n.length;f<p;f++)s[f]=e(l?h?So(et(n[f])):et(n[f]):n[f],f,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(Ve(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(n[f],f,l,i)}}else s=[];return s}const kc=n=>n?Bp(n)?ma(n):kc(n.parent):null,Js=ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>kc(n.parent),$root:n=>kc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Tp(n),$forceUpdate:n=>n.f||(n.f=()=>{wl(n.update)}),$nextTick:n=>n.n||(n.n=lp.bind(n.proxy)),$watch:n=>Iv.bind(n)}),sc=(n,e)=>n!==Pe&&!n.__isScriptSetup&&Re(n,e),nv={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;let h;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(sc(r,e))return a[e]=1,r[e];if(s!==Pe&&Re(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&Re(h,e))return a[e]=3,i[e];if(t!==Pe&&Re(t,e))return a[e]=4,t[e];Vc&&(a[e]=0)}}const f=Js[e];let p,g;if(f)return e==="$attrs"&&ct(n.attrs,"get",""),f(n);if((p=c.__cssModules)&&(p=p[e]))return p;if(t!==Pe&&Re(t,e))return a[e]=4,t[e];if(g=l.config.globalProperties,Re(g,e))return g[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return sc(s,e)?(s[e]=t,!0):r!==Pe&&Re(r,e)?(r[e]=t,!0):Re(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!t[a]||n!==Pe&&Re(n,a)||sc(e,a)||(c=i[0])&&Re(c,a)||Re(r,a)||Re(Js,a)||Re(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Re(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function gh(n){return ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Vc=!0;function rv(n){const e=Tp(n),t=n.proxy,r=n.ctx;Vc=!1,e.beforeCreate&&mh(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:C,activated:V,deactivated:L,beforeDestroy:W,beforeUnmount:j,destroyed:$,unmounted:q,render:he,renderTracked:fe,renderTriggered:w,errorCaptured:v,serverPrefetch:I,expose:A,inheritAttrs:R,components:S,directives:T,filters:pt}=e;if(h&&sv(h,r,null),a)for(const _e in a){const pe=a[_e];le(pe)&&(r[_e]=pe.bind(t))}if(s){const _e=s.call(t,t);Ve(_e)&&(n.data=ha(_e))}if(Vc=!0,i)for(const _e in i){const pe=i[_e],It=le(pe)?pe.bind(t,t):le(pe.get)?pe.get.bind(t,t):en,Ft=!le(pe)&&le(pe.set)?pe.set.bind(t):en,kt=$t({get:It,set:Ft});Object.defineProperty(r,_e,{enumerable:!0,configurable:!0,get:()=>kt.value,set:Ne=>kt.value=Ne})}if(c)for(const _e in c)Ep(c[_e],r,t,_e);if(l){const _e=le(l)?l.call(t):l;Reflect.ownKeys(_e).forEach(pe=>{po(pe,_e[pe])})}f&&mh(f,n,"c");function Ue(_e,pe){ie(pe)?pe.forEach(It=>_e(It.bind(t))):pe&&_e(pe.bind(t))}if(Ue(qy,p),Ue(yp,g),Ue(Hy,_),Ue(zy,C),Ue(jy,V),Ue(By,L),Ue(Jy,v),Ue(Qy,fe),Ue(Ky,w),Ue(Wy,j),Ue(vp,q),Ue(Gy,I),ie(A))if(A.length){const _e=n.exposed||(n.exposed={});A.forEach(pe=>{Object.defineProperty(_e,pe,{get:()=>t[pe],set:It=>t[pe]=It})})}else n.exposed||(n.exposed={});he&&n.render===en&&(n.render=he),R!=null&&(n.inheritAttrs=R),S&&(n.components=S),T&&(n.directives=T),I&&gp(n)}function sv(n,e,t=en){ie(n)&&(n=Dc(n));for(const r in n){const s=n[r];let i;Ve(s)?"default"in s?i=tn(s.from||r,s.default,!0):i=tn(s.from||r):i=tn(s),ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function mh(n,e,t){ln(ie(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ep(n,e,t,r){let s=r.includes(".")?Np(t,r):()=>t[r];if(qe(n)){const i=e[n];le(i)&&go(s,i)}else if(le(n))go(s,n.bind(t));else if(Ve(n))if(ie(n))n.forEach(i=>Ep(i,e,t,r));else{const i=le(n.handler)?n.handler.bind(t):e[n.handler];le(i)&&go(s,i,n)}}function Tp(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>Vo(l,h,a,!0)),Vo(l,e,a)),Ve(e)&&i.set(e,l),l}function Vo(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Vo(n,i,t,!0),s&&s.forEach(a=>Vo(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=iv[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const iv={data:_h,props:yh,emits:yh,methods:Ms,computed:Ms,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Ms,directives:Ms,watch:av,provide:_h,inject:ov};function _h(n,e){return e?n?function(){return ft(le(n)?n.call(this,this):n,le(e)?e.call(this,this):e)}:e:n}function ov(n,e){return Ms(Dc(n),Dc(e))}function Dc(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function mt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ms(n,e){return n?ft(Object.create(null),n,e):e}function yh(n,e){return n?ie(n)&&ie(e)?[...new Set([...n,...e])]:ft(Object.create(null),gh(n),gh(e??{})):e}function av(n,e){if(!n)return e;if(!e)return n;const t=ft(Object.create(null),n);for(const r in e)t[r]=mt(n[r],e[r]);return t}function Ip(){return{app:null,config:{isNativeTag:K_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cv=0;function lv(n,e){return function(r,s=null){le(r)||(r=ft({},r)),s!=null&&!Ve(s)&&(s=null);const i=Ip(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:cv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:qv,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&le(f.install)?(a.add(f),f.install(h,...p)):le(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!l){const _=h._ceVNode||Pt(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),n(_,f,g),l=!0,h._container=f,f.__vue_app__=h,ma(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(ln(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Qr;Qr=h;try{return f()}finally{Qr=p}}};return h}}let Qr=null;function po(n,e){if(lt){let t=lt.provides;const r=lt.parent&&lt.parent.provides;r===t&&(t=lt.provides=Object.create(r)),t[n]=e}}function tn(n,e,t=!1){const r=lt||bt;if(r||Qr){let s=Qr?Qr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&le(e)?e.call(r&&r.proxy):e}}const wp={},Ap=()=>Object.create(wp),Rp=n=>Object.getPrototypeOf(n)===wp;function uv(n,e,t,r=!1){const s={},i=Ap();n.propsDefaults=Object.create(null),bp(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:sp(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function hv(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=Ae(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(pa(n.emitsOptions,g))continue;const _=e[g];if(l)if(Re(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const C=Lt(g);s[C]=Oc(l,c,C,_,n,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{bp(n,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=Sr(p))===p||!Re(e,f)))&&(l?t&&(t[p]!==void 0||t[f]!==void 0)&&(s[p]=Oc(l,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&_n(n.attrs,"set","")}function bp(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if(Hs(l))continue;const h=e[l];let f;s&&Re(s,f=Lt(l))?!i||!i.includes(f)?t[f]=h:(c||(c={}))[f]=h:pa(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=Ae(t),h=c||Pe;for(let f=0;f<i.length;f++){const p=i[f];t[p]=Oc(s,l,p,h[p],n,!Re(h,p))}}return a}function Oc(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=Re(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&le(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const f=Ri(s);r=h[t]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Sr(t))&&(r=!0))}return r}const fv=new WeakMap;function Sp(n,e,t=!1){const r=t?fv:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!le(n)){const f=p=>{l=!0;const[g,_]=Sp(p,e,!0);ft(a,g),_&&c.push(..._)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!l)return Ve(n)&&r.set(n,Hr),Hr;if(ie(i))for(let f=0;f<i.length;f++){const p=Lt(i[f]);vh(p)&&(a[p]=Pe)}else if(i)for(const f in i){const p=Lt(f);if(vh(p)){const g=i[f],_=a[p]=ie(g)||le(g)?{type:g}:ft({},g),C=_.type;let V=!1,L=!0;if(ie(C))for(let W=0;W<C.length;++W){const j=C[W],$=le(j)&&j.name;if($==="Boolean"){V=!0;break}else $==="String"&&(L=!1)}else V=le(C)&&C.name==="Boolean";_[0]=V,_[1]=L,(V||Re(_,"default"))&&c.push(p)}}const h=[a,c];return Ve(n)&&r.set(n,h),h}function vh(n){return n[0]!=="$"&&!Hs(n)}const Rl=n=>n[0]==="_"||n==="$stable",bl=n=>ie(n)?n.map(Zt):[Zt(n)],dv=(n,e,t)=>{if(e._n)return e;const r=Ly((...s)=>bl(e(...s)),t);return r._c=!1,r},Pp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Rl(s))continue;const i=n[s];if(le(i))e[s]=dv(s,i,r);else if(i!=null){const a=bl(i);e[s]=()=>a}}},Cp=(n,e)=>{const t=bl(e);n.slots.default=()=>t},kp=(n,e,t)=>{for(const r in e)(t||!Rl(r))&&(n[r]=e[r])},pv=(n,e,t)=>{const r=n.slots=Ap();if(n.vnode.shapeFlag&32){const s=e.__;s&&Ac(r,"__",s,!0);const i=e._;i?(kp(r,e,t),t&&Ac(r,"_",i,!0)):Pp(e,r)}else e&&Cp(n,e)},gv=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Pe;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:kp(s,e,t):(i=!e.$stable,Pp(e,s)),a=e}else e&&(Cp(n,e),a={default:1});if(i)for(const c in s)!Rl(c)&&a[c]==null&&delete s[c]},At=Cv;function mv(n){return _v(n)}function _v(n,e){const t=ca();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=en,insertStaticContent:C}=n,V=(y,E,b,N=null,F=null,x=null,K=void 0,H=null,B=!!E.dynamicChildren)=>{if(y===E)return;y&&!Ns(y,E)&&(N=O(y),Ne(y,F,x,!0),y=null),E.patchFlag===-2&&(B=!1,E.dynamicChildren=null);const{type:U,ref:te,shapeFlag:G}=E;switch(U){case ga:L(y,E,b,N);break;case Zn:W(y,E,b,N);break;case oc:y==null&&j(E,b,N,K);break;case Xt:S(y,E,b,N,F,x,K,H,B);break;default:G&1?he(y,E,b,N,F,x,K,H,B):G&6?T(y,E,b,N,F,x,K,H,B):(G&64||G&128)&&U.process(y,E,b,N,F,x,K,H,B,Z)}te!=null&&F?Ks(te,y&&y.ref,x,E||y,!E):te==null&&y&&y.ref!=null&&Ks(y.ref,null,x,y,!0)},L=(y,E,b,N)=>{if(y==null)r(E.el=c(E.children),b,N);else{const F=E.el=y.el;E.children!==y.children&&h(F,E.children)}},W=(y,E,b,N)=>{y==null?r(E.el=l(E.children||""),b,N):E.el=y.el},j=(y,E,b,N)=>{[y.el,y.anchor]=C(y.children,E,b,N,y.el,y.anchor)},$=({el:y,anchor:E},b,N)=>{let F;for(;y&&y!==E;)F=g(y),r(y,b,N),y=F;r(E,b,N)},q=({el:y,anchor:E})=>{let b;for(;y&&y!==E;)b=g(y),s(y),y=b;s(E)},he=(y,E,b,N,F,x,K,H,B)=>{E.type==="svg"?K="svg":E.type==="math"&&(K="mathml"),y==null?fe(E,b,N,F,x,K,H,B):I(y,E,F,x,K,H,B)},fe=(y,E,b,N,F,x,K,H)=>{let B,U;const{props:te,shapeFlag:G,transition:ee,dirs:ae}=y;if(B=y.el=a(y.type,x,te&&te.is,te),G&8?f(B,y.children):G&16&&v(y.children,B,null,N,F,ic(y,x),K,H),ae&&dr(y,null,N,"created"),w(B,y,y.scopeId,K,N),te){for(const ue in te)ue!=="value"&&!Hs(ue)&&i(B,ue,null,te[ue],x,N);"value"in te&&i(B,"value",null,te.value,x),(U=te.onVnodeBeforeMount)&&Qt(U,N,y)}ae&&dr(y,null,N,"beforeMount");const se=yv(F,ee);se&&ee.beforeEnter(B),r(B,E,b),((U=te&&te.onVnodeMounted)||se||ae)&&At(()=>{U&&Qt(U,N,y),se&&ee.enter(B),ae&&dr(y,null,N,"mounted")},F)},w=(y,E,b,N,F)=>{if(b&&_(y,b),N)for(let x=0;x<N.length;x++)_(y,N[x]);if(F){let x=F.subTree;if(E===x||Mp(x.type)&&(x.ssContent===E||x.ssFallback===E)){const K=F.vnode;w(y,K,K.scopeId,K.slotScopeIds,F.parent)}}},v=(y,E,b,N,F,x,K,H,B=0)=>{for(let U=B;U<y.length;U++){const te=y[U]=H?Fn(y[U]):Zt(y[U]);V(null,te,E,b,N,F,x,K,H)}},I=(y,E,b,N,F,x,K)=>{const H=E.el=y.el;let{patchFlag:B,dynamicChildren:U,dirs:te}=E;B|=y.patchFlag&16;const G=y.props||Pe,ee=E.props||Pe;let ae;if(b&&pr(b,!1),(ae=ee.onVnodeBeforeUpdate)&&Qt(ae,b,E,y),te&&dr(E,y,b,"beforeUpdate"),b&&pr(b,!0),(G.innerHTML&&ee.innerHTML==null||G.textContent&&ee.textContent==null)&&f(H,""),U?A(y.dynamicChildren,U,H,b,N,ic(E,F),x):K||pe(y,E,H,null,b,N,ic(E,F),x,!1),B>0){if(B&16)R(H,G,ee,b,F);else if(B&2&&G.class!==ee.class&&i(H,"class",null,ee.class,F),B&4&&i(H,"style",G.style,ee.style,F),B&8){const se=E.dynamicProps;for(let ue=0;ue<se.length;ue++){const ye=se[ue],Qe=G[ye],Je=ee[ye];(Je!==Qe||ye==="value")&&i(H,ye,Qe,Je,F,b)}}B&1&&y.children!==E.children&&f(H,E.children)}else!K&&U==null&&R(H,G,ee,b,F);((ae=ee.onVnodeUpdated)||te)&&At(()=>{ae&&Qt(ae,b,E,y),te&&dr(E,y,b,"updated")},N)},A=(y,E,b,N,F,x,K)=>{for(let H=0;H<E.length;H++){const B=y[H],U=E[H],te=B.el&&(B.type===Xt||!Ns(B,U)||B.shapeFlag&198)?p(B.el):b;V(B,U,te,null,N,F,x,K,!0)}},R=(y,E,b,N,F)=>{if(E!==b){if(E!==Pe)for(const x in E)!Hs(x)&&!(x in b)&&i(y,x,E[x],null,F,N);for(const x in b){if(Hs(x))continue;const K=b[x],H=E[x];K!==H&&x!=="value"&&i(y,x,H,K,F,N)}"value"in b&&i(y,"value",E.value,b.value,F)}},S=(y,E,b,N,F,x,K,H,B)=>{const U=E.el=y?y.el:c(""),te=E.anchor=y?y.anchor:c("");let{patchFlag:G,dynamicChildren:ee,slotScopeIds:ae}=E;ae&&(H=H?H.concat(ae):ae),y==null?(r(U,b,N),r(te,b,N),v(E.children||[],b,te,F,x,K,H,B)):G>0&&G&64&&ee&&y.dynamicChildren?(A(y.dynamicChildren,ee,b,F,x,K,H),(E.key!=null||F&&E===F.subTree)&&Vp(y,E,!0)):pe(y,E,b,te,F,x,K,H,B)},T=(y,E,b,N,F,x,K,H,B)=>{E.slotScopeIds=H,y==null?E.shapeFlag&512?F.ctx.activate(E,b,N,K,B):pt(E,b,N,F,x,K,B):Ct(y,E,B)},pt=(y,E,b,N,F,x,K)=>{const H=y.component=Mv(y,N,F);if(mp(y)&&(H.ctx.renderer=Z),Lv(H,!1,K),H.asyncDep){if(F&&F.registerDep(H,Ue,K),!y.el){const B=H.subTree=Pt(Zn);W(null,B,E,b)}}else Ue(H,y,E,b,F,x,K)},Ct=(y,E,b)=>{const N=E.component=y.component;if(Sv(y,E,b))if(N.asyncDep&&!N.asyncResolved){_e(N,E,b);return}else N.next=E,N.update();else E.el=y.el,N.vnode=E},Ue=(y,E,b,N,F,x,K)=>{const H=()=>{if(y.isMounted){let{next:G,bu:ee,u:ae,parent:se,vnode:ue}=y;{const rt=Dp(y);if(rt){G&&(G.el=ue.el,_e(y,G,K)),rt.asyncDep.then(()=>{y.isUnmounted||H()});return}}let ye=G,Qe;pr(y,!1),G?(G.el=ue.el,_e(y,G,K)):G=ue,ee&&fo(ee),(Qe=G.props&&G.props.onVnodeBeforeUpdate)&&Qt(Qe,se,G,ue),pr(y,!0);const Je=Th(y),Vt=y.subTree;y.subTree=Je,V(Vt,Je,p(Vt.el),O(Vt),y,F,x),G.el=Je.el,ye===null&&Pv(y,Je.el),ae&&At(ae,F),(Qe=G.props&&G.props.onVnodeUpdated)&&At(()=>Qt(Qe,se,G,ue),F)}else{let G;const{el:ee,props:ae}=E,{bm:se,m:ue,parent:ye,root:Qe,type:Je}=y,Vt=Qs(E);pr(y,!1),se&&fo(se),!Vt&&(G=ae&&ae.onVnodeBeforeMount)&&Qt(G,ye,E),pr(y,!0);{Qe.ce&&Qe.ce._def.shadowRoot!==!1&&Qe.ce._injectChildStyle(Je);const rt=y.subTree=Th(y);V(null,rt,b,N,y,F,x),E.el=rt.el}if(ue&&At(ue,F),!Vt&&(G=ae&&ae.onVnodeMounted)){const rt=E;At(()=>Qt(G,ye,rt),F)}(E.shapeFlag&256||ye&&Qs(ye.vnode)&&ye.vnode.shapeFlag&256)&&y.a&&At(y.a,F),y.isMounted=!0,E=b=N=null}};y.scope.on();const B=y.effect=new Hd(H);y.scope.off();const U=y.update=B.run.bind(B),te=y.job=B.runIfDirty.bind(B);te.i=y,te.id=y.uid,B.scheduler=()=>wl(te),pr(y,!0),U()},_e=(y,E,b)=>{E.component=y;const N=y.vnode.props;y.vnode=E,y.next=null,hv(y,E.props,N,b),gv(y,E.children,b),wn(),dh(y),An()},pe=(y,E,b,N,F,x,K,H,B=!1)=>{const U=y&&y.children,te=y?y.shapeFlag:0,G=E.children,{patchFlag:ee,shapeFlag:ae}=E;if(ee>0){if(ee&128){Ft(U,G,b,N,F,x,K,H,B);return}else if(ee&256){It(U,G,b,N,F,x,K,H,B);return}}ae&8?(te&16&&yt(U,F,x),G!==U&&f(b,G)):te&16?ae&16?Ft(U,G,b,N,F,x,K,H,B):yt(U,F,x,!0):(te&8&&f(b,""),ae&16&&v(G,b,N,F,x,K,H,B))},It=(y,E,b,N,F,x,K,H,B)=>{y=y||Hr,E=E||Hr;const U=y.length,te=E.length,G=Math.min(U,te);let ee;for(ee=0;ee<G;ee++){const ae=E[ee]=B?Fn(E[ee]):Zt(E[ee]);V(y[ee],ae,b,null,F,x,K,H,B)}U>te?yt(y,F,x,!0,!1,G):v(E,b,N,F,x,K,H,B,G)},Ft=(y,E,b,N,F,x,K,H,B)=>{let U=0;const te=E.length;let G=y.length-1,ee=te-1;for(;U<=G&&U<=ee;){const ae=y[U],se=E[U]=B?Fn(E[U]):Zt(E[U]);if(Ns(ae,se))V(ae,se,b,null,F,x,K,H,B);else break;U++}for(;U<=G&&U<=ee;){const ae=y[G],se=E[ee]=B?Fn(E[ee]):Zt(E[ee]);if(Ns(ae,se))V(ae,se,b,null,F,x,K,H,B);else break;G--,ee--}if(U>G){if(U<=ee){const ae=ee+1,se=ae<te?E[ae].el:N;for(;U<=ee;)V(null,E[U]=B?Fn(E[U]):Zt(E[U]),b,se,F,x,K,H,B),U++}}else if(U>ee)for(;U<=G;)Ne(y[U],F,x,!0),U++;else{const ae=U,se=U,ue=new Map;for(U=se;U<=ee;U++){const Ye=E[U]=B?Fn(E[U]):Zt(E[U]);Ye.key!=null&&ue.set(Ye.key,U)}let ye,Qe=0;const Je=ee-se+1;let Vt=!1,rt=0;const Vn=new Array(Je);for(U=0;U<Je;U++)Vn[U]=0;for(U=ae;U<=G;U++){const Ye=y[U];if(Qe>=Je){Ne(Ye,F,x,!0);continue}let Dt;if(Ye.key!=null)Dt=ue.get(Ye.key);else for(ye=se;ye<=ee;ye++)if(Vn[ye-se]===0&&Ns(Ye,E[ye])){Dt=ye;break}Dt===void 0?Ne(Ye,F,x,!0):(Vn[Dt-se]=U+1,Dt>=rt?rt=Dt:Vt=!0,V(Ye,E[Dt],b,null,F,x,K,H,B),Qe++)}const Es=Vt?vv(Vn):Hr;for(ye=Es.length-1,U=Je-1;U>=0;U--){const Ye=se+U,Dt=E[Ye],ji=Ye+1<te?E[Ye+1].el:N;Vn[U]===0?V(null,Dt,b,ji,F,x,K,H,B):Vt&&(ye<0||U!==Es[ye]?kt(Dt,b,ji,2):ye--)}}},kt=(y,E,b,N,F=null)=>{const{el:x,type:K,transition:H,children:B,shapeFlag:U}=y;if(U&6){kt(y.component.subTree,E,b,N);return}if(U&128){y.suspense.move(E,b,N);return}if(U&64){K.move(y,E,b,Z);return}if(K===Xt){r(x,E,b);for(let G=0;G<B.length;G++)kt(B[G],E,b,N);r(y.anchor,E,b);return}if(K===oc){$(y,E,b);return}if(N!==2&&U&1&&H)if(N===0)H.beforeEnter(x),r(x,E,b),At(()=>H.enter(x),F);else{const{leave:G,delayLeave:ee,afterLeave:ae}=H,se=()=>{y.ctx.isUnmounted?s(x):r(x,E,b)},ue=()=>{G(x,()=>{se(),ae&&ae()})};ee?ee(x,se,ue):ue()}else r(x,E,b)},Ne=(y,E,b,N=!1,F=!1)=>{const{type:x,props:K,ref:H,children:B,dynamicChildren:U,shapeFlag:te,patchFlag:G,dirs:ee,cacheIndex:ae}=y;if(G===-2&&(F=!1),H!=null&&(wn(),Ks(H,null,b,y,!0),An()),ae!=null&&(E.renderCache[ae]=void 0),te&256){E.ctx.deactivate(y);return}const se=te&1&&ee,ue=!Qs(y);let ye;if(ue&&(ye=K&&K.onVnodeBeforeUnmount)&&Qt(ye,E,y),te&6)Kt(y.component,b,N);else{if(te&128){y.suspense.unmount(b,N);return}se&&dr(y,null,E,"beforeUnmount"),te&64?y.type.remove(y,E,b,Z,N):U&&!U.hasOnce&&(x!==Xt||G>0&&G&64)?yt(U,E,b,!1,!0):(x===Xt&&G&384||!F&&te&16)&&yt(B,E,b),N&&xe(y)}(ue&&(ye=K&&K.onVnodeUnmounted)||se)&&At(()=>{ye&&Qt(ye,E,y),se&&dr(y,null,E,"unmounted")},b)},xe=y=>{const{type:E,el:b,anchor:N,transition:F}=y;if(E===Xt){kn(b,N);return}if(E===oc){q(y);return}const x=()=>{s(b),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(y.shapeFlag&1&&F&&!F.persisted){const{leave:K,delayLeave:H}=F,B=()=>K(b,x);H?H(y.el,x,B):B()}else x()},kn=(y,E)=>{let b;for(;y!==E;)b=g(y),s(y),y=b;s(E)},Kt=(y,E,b)=>{const{bum:N,scope:F,job:x,subTree:K,um:H,m:B,a:U,parent:te,slots:{__:G}}=y;Eh(B),Eh(U),N&&fo(N),te&&ie(G)&&G.forEach(ee=>{te.renderCache[ee]=void 0}),F.stop(),x&&(x.flags|=8,Ne(K,y,E,b)),H&&At(H,E),At(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},yt=(y,E,b,N=!1,F=!1,x=0)=>{for(let K=x;K<y.length;K++)Ne(y[K],E,b,N,F)},O=y=>{if(y.shapeFlag&6)return O(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const E=g(y.anchor||y.el),b=E&&E[Fy];return b?g(b):E};let Y=!1;const Q=(y,E,b)=>{y==null?E._vnode&&Ne(E._vnode,null,null,!0):V(E._vnode||null,y,E,null,null,null,b),E._vnode=y,Y||(Y=!0,dh(),hp(),Y=!1)},Z={p:V,um:Ne,m:kt,r:xe,mt:pt,mc:v,pc:pe,pbc:A,n:O,o:n};return{render:Q,hydrate:void 0,createApp:lv(Q)}}function ic({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function pr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function yv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Vp(n,e,t=!1){const r=n.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Fn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&Vp(a,c)),c.type===ga&&(c.el=a.el),c.type===Zn&&!c.el&&(c.el=a.el)}}function vv(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Dp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dp(e)}function Eh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Ev=Symbol.for("v-scx"),Tv=()=>tn(Ev);function go(n,e,t){return Op(n,e,t)}function Op(n,e,t=Pe){const{immediate:r,deep:s,flush:i,once:a}=t,c=ft({},t),l=e&&r||!e&&i!=="post";let h;if(hi){if(i==="sync"){const _=Tv();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=en,_.resume=en,_.pause=en,_}}const f=lt;c.call=(_,C,V)=>ln(_,f,C,V);let p=!1;i==="post"?c.scheduler=_=>{At(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,C)=>{C?_():wl(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=Oy(n,e,c);return hi&&(h?h.push(g):l&&g()),g}function Iv(n,e,t){const r=this.proxy,s=qe(n)?n.includes(".")?Np(r,n):()=>r[n]:n.bind(r,r);let i;le(e)?i=e:(i=e.handler,t=e);const a=Ri(this),c=Op(s,i.bind(r),t);return a(),c}function Np(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const wv=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Lt(e)}Modifiers`]||n[`${Sr(e)}Modifiers`];function Av(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Pe;let s=t;const i=e.startsWith("update:"),a=i&&wv(r,e.slice(7));a&&(a.trim&&(s=t.map(f=>qe(f)?f.trim():f)),a.number&&(s=t.map(Rc)));let c,l=r[c=Za(e)]||r[c=Za(Lt(e))];!l&&i&&(l=r[c=Za(Sr(e))]),l&&ln(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,ln(h,n,6,s)}}function xp(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!le(n)){const l=h=>{const f=xp(h,e,!0);f&&(c=!0,ft(a,f))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(Ve(n)&&r.set(n,null),null):(ie(i)?i.forEach(l=>a[l]=null):ft(a,i),Ve(n)&&r.set(n,a),a)}function pa(n,e){return!n||!sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(n,e[0].toLowerCase()+e.slice(1))||Re(n,Sr(e))||Re(n,e))}function Th(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:_,ctx:C,inheritAttrs:V}=n,L=ko(n);let W,j;try{if(t.shapeFlag&4){const q=s||r,he=q;W=Zt(h.call(he,q,f,p,_,g,C)),j=c}else{const q=e;W=Zt(q.length>1?q(p,{attrs:c,slots:a,emit:l}):q(p,null)),j=e.props?c:Rv(c)}}catch(q){Ys.length=0,fa(q,n,1),W=Pt(Zn)}let $=W;if(j&&V!==!1){const q=Object.keys(j),{shapeFlag:he}=$;q.length&&he&7&&(i&&q.some(hl)&&(j=bv(j,i)),$=rs($,j,!1,!0))}return t.dirs&&($=rs($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(t.dirs):t.dirs),t.transition&&Al($,t.transition),W=$,ko(L),W}const Rv=n=>{let e;for(const t in n)(t==="class"||t==="style"||sa(t))&&((e||(e={}))[t]=n[t]);return e},bv=(n,e)=>{const t={};for(const r in n)(!hl(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Sv(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Ih(r,a,h):!!a;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(a[g]!==r[g]&&!pa(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Ih(r,a,h):!0:!!a;return!1}function Ih(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!pa(t,i))return!0}return!1}function Pv({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Mp=n=>n.__isSuspense;function Cv(n,e){e&&e.pendingBranch?ie(n)?e.effects.push(...n):e.effects.push(n):My(n)}const Xt=Symbol.for("v-fgt"),ga=Symbol.for("v-txt"),Zn=Symbol.for("v-cmt"),oc=Symbol.for("v-stc"),Ys=[];let St=null;function mn(n=!1){Ys.push(St=n?null:[])}function kv(){Ys.pop(),St=Ys[Ys.length-1]||null}let ui=1;function wh(n,e=!1){ui+=n,n<0&&St&&e&&(St.hasOnce=!0)}function Lp(n){return n.dynamicChildren=ui>0?St||Hr:null,kv(),ui>0&&St&&St.push(n),n}function mr(n,e,t,r,s,i){return Lp(He(n,e,t,r,s,i,!0))}function Fp(n,e,t,r,s){return Lp(Pt(n,e,t,r,s,!0))}function Do(n){return n?n.__v_isVNode===!0:!1}function Ns(n,e){return n.type===e.type&&n.key===e.key}const Up=({key:n})=>n??null,mo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?qe(n)||ht(n)||le(n)?{i:bt,r:n,k:e,f:!!t}:n:null);function He(n,e=null,t=null,r=0,s=null,i=n===Xt?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Up(e),ref:e&&mo(e),scopeId:dp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return c?(Sl(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=qe(t)?8:16),ui>0&&!a&&St&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&St.push(l),l}const Pt=Vv;function Vv(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===Zy)&&(n=Zn),Do(n)){const c=rs(n,e,!0);return t&&Sl(c,t),ui>0&&!i&&St&&(c.shapeFlag&6?St[St.indexOf(n)]=c:St.push(c)),c.patchFlag=-2,c}if($v(n)&&(n=n.__vccOpts),e){e=Dv(e);let{class:c,style:l}=e;c&&!qe(c)&&(e.class=gl(c)),Ve(l)&&(Il(l)&&!ie(l)&&(l=ft({},l)),e.style=pl(l))}const a=qe(n)?1:Mp(n)?128:Uy(n)?64:Ve(n)?4:le(n)?2:0;return He(n,e,t,r,s,a,i,!0)}function Dv(n){return n?Il(n)||Rp(n)?ft({},n):n:null}function rs(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?Ov(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Up(h),ref:e&&e.ref?t&&i?ie(i)?i.concat(mo(e)):[i,mo(e)]:mo(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Xt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&rs(n.ssContent),ssFallback:n.ssFallback&&rs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&Al(f,l.clone(f)),f}function jp(n=" ",e=0){return Pt(ga,null,n,e)}function ac(n="",e=!1){return e?(mn(),Fp(Zn,null,n)):Pt(Zn,null,n)}function Zt(n){return n==null||typeof n=="boolean"?Pt(Zn):ie(n)?Pt(Xt,null,n.slice()):Do(n)?Fn(n):Pt(ga,null,String(n))}function Fn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:rs(n)}function Sl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ie(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Sl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Rp(e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:bt},t=32):(e=String(e),r&64?(t=16,e=[jp(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ov(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=gl([e.class,r.class]));else if(s==="style")e.style=pl([e.style,r.style]);else if(sa(s)){const i=e[s],a=r[s];a&&i!==a&&!(ie(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Qt(n,e,t,r=null){ln(n,e,7,[t,r])}const Nv=Ip();let xv=0;function Mv(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||Nv,i={uid:xv++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new oy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sp(r,s),emitsOptions:xp(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Av.bind(null,i),n.ce&&n.ce(i),i}let lt=null,Oo,Nc;{const n=ca(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Oo=e("__VUE_INSTANCE_SETTERS__",t=>lt=t),Nc=e("__VUE_SSR_SETTERS__",t=>hi=t)}const Ri=n=>{const e=lt;return Oo(n),n.scope.on(),()=>{n.scope.off(),Oo(e)}},Ah=()=>{lt&&lt.scope.off(),Oo(null)};function Bp(n){return n.vnode.shapeFlag&4}let hi=!1;function Lv(n,e=!1,t=!1){e&&Nc(e);const{props:r,children:s}=n.vnode,i=Bp(n);uv(n,r,i,e),pv(n,s,t||e);const a=i?Fv(n,e):void 0;return e&&Nc(!1),a}function Fv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,nv);const{setup:r}=t;if(r){wn();const s=n.setupContext=r.length>1?jv(n):null,i=Ri(n),a=Ai(r,n,0,[n.props,s]),c=Ld(a);if(An(),i(),(c||n.sp)&&!Qs(n)&&gp(n),c){if(a.then(Ah,Ah),e)return a.then(l=>{Rh(n,l)}).catch(l=>{fa(l,n,0)});n.asyncDep=a}else Rh(n,a)}else $p(n)}function Rh(n,e,t){le(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ve(e)&&(n.setupState=ap(e)),$p(n)}function $p(n,e,t){const r=n.type;n.render||(n.render=r.render||en);{const s=Ri(n);wn();try{rv(n)}finally{An(),s()}}}const Uv={get(n,e){return ct(n,"get",""),n[e]}};function jv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Uv),slots:n.slots,emit:n.emit,expose:e}}function ma(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ap(by(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Js)return Js[t](n)},has(e,t){return t in e||t in Js}})):n.proxy}function Bv(n,e=!0){return le(n)?n.displayName||n.name:n.name||e&&n.__name}function $v(n){return le(n)&&"__vccOpts"in n}const $t=(n,e)=>Vy(n,e,hi);function qp(n,e,t){const r=arguments.length;return r===2?Ve(e)&&!ie(e)?Do(e)?Pt(n,null,[e]):Pt(n,e):Pt(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Do(t)&&(t=[t]),Pt(n,e,t))}const qv="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xc;const bh=typeof window<"u"&&window.trustedTypes;if(bh)try{xc=bh.createPolicy("vue",{createHTML:n=>n})}catch{}const Hp=xc?n=>xc.createHTML(n):n=>n,Hv="http://www.w3.org/2000/svg",zv="http://www.w3.org/1998/Math/MathML",gn=typeof document<"u"?document:null,Sh=gn&&gn.createElement("template"),Wv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?gn.createElementNS(Hv,n):e==="mathml"?gn.createElementNS(zv,n):t?gn.createElement(n,{is:t}):gn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>gn.createTextNode(n),createComment:n=>gn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>gn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Sh.innerHTML=Hp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=Sh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Gv=Symbol("_vtc");function Kv(n,e,t){const r=n[Gv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ph=Symbol("_vod"),Qv=Symbol("_vsh"),Jv=Symbol(""),Yv=/(^|;)\s*display\s*:/;function Xv(n,e,t){const r=n.style,s=qe(t);let i=!1;if(t&&!s){if(e)if(qe(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&_o(r,c,"")}else for(const a in e)t[a]==null&&_o(r,a,"");for(const a in t)a==="display"&&(i=!0),_o(r,a,t[a])}else if(s){if(e!==t){const a=r[Jv];a&&(t+=";"+a),r.cssText=t,i=Yv.test(t)}}else e&&n.removeAttribute("style");Ph in n&&(n[Ph]=i?r.display:"",n[Qv]&&(r.display="none"))}const Ch=/\s*!important$/;function _o(n,e,t){if(ie(t))t.forEach(r=>_o(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Zv(n,e);Ch.test(t)?n.setProperty(Sr(r),t.replace(Ch,""),"important"):n[r]=t}}const kh=["Webkit","Moz","ms"],cc={};function Zv(n,e){const t=cc[e];if(t)return t;let r=Lt(e);if(r!=="filter"&&r in n)return cc[e]=r;r=aa(r);for(let s=0;s<kh.length;s++){const i=kh[s]+r;if(i in n)return cc[e]=i}return e}const Vh="http://www.w3.org/1999/xlink";function Dh(n,e,t,r,s,i=sy(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Vh,e.slice(6,e.length)):n.setAttributeNS(Vh,e,t):t==null||i&&!jd(t)?n.removeAttribute(e):n.setAttribute(e,i?"":cn(t)?String(t):t)}function Oh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Hp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=jd(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function yr(n,e,t,r){n.addEventListener(e,t,r)}function eE(n,e,t,r){n.removeEventListener(e,t,r)}const Nh=Symbol("_vei");function tE(n,e,t,r,s=null){const i=n[Nh]||(n[Nh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=nE(e);if(r){const h=i[e]=iE(r,s);yr(n,c,h,l)}else a&&(eE(n,c,a,l),i[e]=void 0)}}const xh=/(?:Once|Passive|Capture)$/;function nE(n){let e;if(xh.test(n)){e={};let r;for(;r=n.match(xh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Sr(n.slice(2)),e]}let lc=0;const rE=Promise.resolve(),sE=()=>lc||(rE.then(()=>lc=0),lc=Date.now());function iE(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;ln(oE(r,t.value),e,5,[r])};return t.value=n,t.attached=sE(),t}function oE(n,e){if(ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,aE=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Kv(n,r,a):e==="style"?Xv(n,t,r):sa(e)?hl(e)||tE(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cE(n,e,r,a))?(Oh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Dh(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?Oh(n,Lt(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Dh(n,e,r,a))};function cE(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Mh(e)&&le(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Mh(e)&&qe(t)?!1:e in n}const No=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ie(e)?t=>fo(e,t):e};function lE(n){n.target.composing=!0}function Lh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jr=Symbol("_assign"),xo={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Jr]=No(s);const i=r||s.props&&s.props.type==="number";yr(n,e?"change":"input",a=>{if(a.target.composing)return;let c=n.value;t&&(c=c.trim()),i&&(c=Rc(c)),n[Jr](c)}),t&&yr(n,"change",()=>{n.value=n.value.trim()}),e||(yr(n,"compositionstart",lE),yr(n,"compositionend",Lh),yr(n,"change",Lh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Jr]=No(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?Rc(n.value):n.value,l=e??"";c!==l&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l))}},uE={deep:!0,created(n,e,t){n[Jr]=No(t),yr(n,"change",()=>{const r=n._modelValue,s=hE(n),i=n.checked,a=n[Jr];if(ie(r)){const c=Bd(r,s),l=c!==-1;if(i&&!l)a(r.concat(s));else if(!i&&l){const h=[...r];h.splice(c,1),a(h)}}else if(ia(r)){const c=new Set(r);i?c.add(s):c.delete(s),a(c)}else a(zp(n,i))})},mounted:Fh,beforeUpdate(n,e,t){n[Jr]=No(t),Fh(n,e,t)}};function Fh(n,{value:e,oldValue:t},r){n._modelValue=e;let s;if(ie(e))s=Bd(e,r.props.value)>-1;else if(ia(e))s=e.has(r.props.value);else{if(e===t)return;s=la(e,zp(n,!0))}n.checked!==s&&(n.checked=s)}function hE(n){return"_value"in n?n._value:n.value}function zp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const fE=ft({patchProp:aE},Wv);let Uh;function dE(){return Uh||(Uh=mv(fE))}const pE=(...n)=>{const e=dE().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=mE(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,gE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function gE(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function mE(n){return qe(n)?document.querySelector(n):n}const _E=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},yE={};function vE(n,e){const t=Xy("router-view");return mn(),Fp(t)}const EE=_E(yE,[["render",vE]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Fr=typeof document<"u";function Wp(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function TE(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Wp(n.default)}const we=Object.assign;function uc(n,e){const t={};for(const r in e){const s=e[r];t[r]=zt(s)?s.map(n):n(s)}return t}const Xs=()=>{},zt=Array.isArray,Gp=/#/g,IE=/&/g,wE=/\//g,AE=/=/g,RE=/\?/g,Kp=/\+/g,bE=/%5B/g,SE=/%5D/g,Qp=/%5E/g,PE=/%60/g,Jp=/%7B/g,CE=/%7C/g,Yp=/%7D/g,kE=/%20/g;function Pl(n){return encodeURI(""+n).replace(CE,"|").replace(bE,"[").replace(SE,"]")}function VE(n){return Pl(n).replace(Jp,"{").replace(Yp,"}").replace(Qp,"^")}function Mc(n){return Pl(n).replace(Kp,"%2B").replace(kE,"+").replace(Gp,"%23").replace(IE,"%26").replace(PE,"`").replace(Jp,"{").replace(Yp,"}").replace(Qp,"^")}function DE(n){return Mc(n).replace(AE,"%3D")}function OE(n){return Pl(n).replace(Gp,"%23").replace(RE,"%3F")}function NE(n){return n==null?"":OE(n).replace(wE,"%2F")}function fi(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const xE=/\/$/,ME=n=>n.replace(xE,"");function hc(n,e,t="/"){let r,s={},i="",a="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=n(i)),c>-1&&(r=r||e.slice(0,c),a=e.slice(c,e.length)),r=jE(r??e,t),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:fi(a)}}function LE(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function jh(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function FE(n,e,t){const r=e.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&ss(e.matched[r],t.matched[s])&&Xp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ss(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Xp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!UE(n[t],e[t]))return!1;return!0}function UE(n,e){return zt(n)?Bh(n,e):zt(e)?Bh(e,n):n===e}function Bh(n,e){return zt(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function jE(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=t.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var di;(function(n){n.pop="pop",n.push="push"})(di||(di={}));var Zs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Zs||(Zs={}));function BE(n){if(!n)if(Fr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ME(n)}const $E=/^[^#]+#/;function qE(n,e){return n.replace($E,"#")+e}function HE(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const _a=()=>({left:window.scrollX,top:window.scrollY});function zE(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=HE(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function $h(n,e){return(history.state?history.state.position-e:-1)+n}const Lc=new Map;function WE(n,e){Lc.set(n,e)}function GE(n){const e=Lc.get(n);return Lc.delete(n),e}let KE=()=>location.protocol+"//"+location.host;function Zp(n,e){const{pathname:t,search:r,hash:s}=e,i=n.indexOf("#");if(i>-1){let c=s.includes(n.slice(i))?n.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),jh(l,"")}return jh(t,n)+r+s}function QE(n,e,t,r){let s=[],i=[],a=null;const c=({state:g})=>{const _=Zp(n,location),C=t.value,V=e.value;let L=0;if(g){if(t.value=_,e.value=g,a&&a===C){a=null;return}L=V?g.position-V.position:0}else r(_);s.forEach(W=>{W(t.value,C,{delta:L,type:di.pop,direction:L?L>0?Zs.forward:Zs.back:Zs.unknown})})};function l(){a=t.value}function h(g){s.push(g);const _=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(_),_}function f(){const{history:g}=window;g.state&&g.replaceState(we({},g.state,{scroll:_a()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function qh(n,e,t,r=!1,s=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:s?_a():null}}function JE(n){const{history:e,location:t}=window,r={value:Zp(n,t)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=n.indexOf("#"),g=p>-1?(t.host&&document.querySelector("base")?n:n.slice(p))+l:KE()+n+l;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),t[f?"replace":"assign"](g)}}function a(l,h){const f=we({},e.state,qh(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=we({},s.value,e.state,{forward:l,scroll:_a()});i(f.current,f,!0);const p=we({},qh(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:a}}function YE(n){n=BE(n);const e=JE(n),t=QE(n,e.state,e.location,e.replace);function r(i,a=!0){a||t.pauseListeners(),history.go(i)}const s=we({location:"",base:n,go:r,createHref:qE.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function XE(n){return typeof n=="string"||n&&typeof n=="object"}function eg(n){return typeof n=="string"||typeof n=="symbol"}const tg=Symbol("");var Hh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Hh||(Hh={}));function is(n,e){return we(new Error,{type:n,[tg]:!0},e)}function pn(n,e){return n instanceof Error&&tg in n&&(e==null||!!(n.type&e))}const zh="[^/]+?",ZE={sensitive:!1,strict:!1,start:!0,end:!0},eT=/[.+*?^${}()[\]/\\]/g;function tT(n,e){const t=we({},ZE,e),r=[];let s=t.start?"^":"";const i=[];for(const h of n){const f=h.length?[]:[90];t.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(t.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(eT,"\\$&"),_+=40;else if(g.type===1){const{value:C,repeatable:V,optional:L,regexp:W}=g;i.push({name:C,repeatable:V,optional:L});const j=W||zh;if(j!==zh){_+=10;try{new RegExp(`(${j})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${C}" (${j}): `+q.message)}}let $=V?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||($=L&&h.length<2?`(?:/${$})`:"/"+$),L&&($+="?"),s+=$,_+=20,L&&(_+=-8),V&&(_+=-20),j===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(t.strict&&t.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,t.sensitive?"":"i");function c(h){const f=h.match(a),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",C=i[g-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function l(h){let f="",p=!1;for(const g of n){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:C,repeatable:V,optional:L}=_,W=C in h?h[C]:"";if(zt(W)&&!V)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const j=zt(W)?W.join("/"):W;if(!j)if(L)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=j}}return f||"/"}return{re:a,score:r,keys:i,parse:c,stringify:l}}function nT(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ng(n,e){let t=0;const r=n.score,s=e.score;for(;t<r.length&&t<s.length;){const i=nT(r[t],s[t]);if(i)return i;t++}if(Math.abs(s.length-r.length)===1){if(Wh(r))return 1;if(Wh(s))return-1}return s.length-r.length}function Wh(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const rT={type:0,value:""},sT=/[a-zA-Z0-9_]/;function iT(n){if(!n)return[[]];if(n==="/")return[[rT]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(_){throw new Error(`ERR (${t})/"${h}": ${_}`)}let t=0,r=t;const s=[];let i;function a(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(t===0?i.push({type:0,value:h}):t===1||t===2||t===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<n.length;){if(l=n[c++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(h&&p(),a()):l===":"?(p(),t=1):g();break;case 4:g(),t=r;break;case 1:l==="("?t=2:sT.test(l)?g():(p(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:t=3:f+=l;break;case 3:p(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function oT(n,e,t){const r=tT(iT(n.path),t),s=we(r,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function aT(n,e){const t=[],r=new Map;e=Jh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const C=!_,V=Kh(p);V.aliasOf=_&&_.record;const L=Jh(e,p),W=[V];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const he of q)W.push(Kh(we({},V,{components:_?_.record.components:V.components,path:he,aliasOf:_?_.record:V})))}let j,$;for(const q of W){const{path:he}=q;if(g&&he[0]!=="/"){const fe=g.record.path,w=fe[fe.length-1]==="/"?"":"/";q.path=g.record.path+(he&&w+he)}if(j=oT(q,g,L),_?_.alias.push(j):($=$||j,$!==j&&$.alias.push(j),C&&p.name&&!Qh(j)&&a(p.name)),rg(j)&&l(j),V.children){const fe=V.children;for(let w=0;w<fe.length;w++)i(fe[w],j,_&&_.children[w])}_=_||j}return $?()=>{a($)}:Xs}function a(p){if(eg(p)){const g=r.get(p);g&&(r.delete(p),t.splice(t.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=t.indexOf(p);g>-1&&(t.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function c(){return t}function l(p){const g=uT(p,t);t.splice(g,0,p),p.record.name&&!Qh(p)&&r.set(p.record.name,p)}function h(p,g){let _,C={},V,L;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw is(1,{location:p});L=_.record.name,C=we(Gh(g.params,_.keys.filter($=>!$.optional).concat(_.parent?_.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&Gh(p.params,_.keys.map($=>$.name))),V=_.stringify(C)}else if(p.path!=null)V=p.path,_=t.find($=>$.re.test(V)),_&&(C=_.parse(V),L=_.record.name);else{if(_=g.name?r.get(g.name):t.find($=>$.re.test(g.path)),!_)throw is(1,{location:p,currentLocation:g});L=_.record.name,C=we({},g.params,p.params),V=_.stringify(C)}const W=[];let j=_;for(;j;)W.unshift(j.record),j=j.parent;return{name:L,path:V,params:C,matched:W,meta:lT(W)}}n.forEach(p=>i(p));function f(){t.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Gh(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function Kh(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:cT(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function cT(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function Qh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function lT(n){return n.reduce((e,t)=>we(e,t.meta),{})}function Jh(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function uT(n,e){let t=0,r=e.length;for(;t!==r;){const i=t+r>>1;ng(n,e[i])<0?r=i:t=i+1}const s=hT(n);return s&&(r=e.lastIndexOf(s,r-1)),r}function hT(n){let e=n;for(;e=e.parent;)if(rg(e)&&ng(n,e)===0)return e}function rg({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function fT(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Kp," "),a=i.indexOf("="),c=fi(a<0?i:i.slice(0,a)),l=a<0?null:fi(i.slice(a+1));if(c in e){let h=e[c];zt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Yh(n){let e="";for(let t in n){const r=n[t];if(t=DE(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(zt(r)?r.map(i=>i&&Mc(i)):[r&&Mc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function dT(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const pT=Symbol(""),Xh=Symbol(""),ya=Symbol(""),sg=Symbol(""),Fc=Symbol("");function xs(){let n=[];function e(r){return n.push(r),()=>{const s=n.indexOf(r);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Un(n,e,t,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(is(4,{from:t,to:e})):g instanceof Error?l(g):XE(g)?l(is(2,{from:e,to:g})):(a&&r.enterCallbacks[s]===a&&typeof g=="function"&&a.push(g),c())},f=i(()=>n.call(r&&r.instances[s],e,t,h));let p=Promise.resolve(f);n.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function fc(n,e,t,r,s=i=>i()){const i=[];for(const a of n)for(const c in a.components){let l=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(Wp(l)){const f=(l.__vccOpts||l)[e];f&&i.push(Un(f,t,r,a,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const p=TE(f)?f.default:f;a.mods[c]=f,a.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&Un(_,t,r,a,c,s)()}))}}return i}function Zh(n){const e=tn(ya),t=tn(sg),r=$t(()=>{const l=Gr(n.to);return e.resolve(l)}),s=$t(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=t.matched;if(!f||!p.length)return-1;const g=p.findIndex(ss.bind(null,f));if(g>-1)return g;const _=ef(l[h-2]);return h>1&&ef(f)===_&&p[p.length-1].path!==_?p.findIndex(ss.bind(null,l[h-2])):g}),i=$t(()=>s.value>-1&&vT(t.params,r.value.params)),a=$t(()=>s.value>-1&&s.value===t.matched.length-1&&Xp(t.params,r.value.params));function c(l={}){if(yT(l)){const h=e[Gr(n.replace)?"replace":"push"](Gr(n.to)).catch(Xs);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:$t(()=>r.value.href),isActive:i,isExactActive:a,navigate:c}}function gT(n){return n.length===1?n[0]:n}const mT=pp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Zh,setup(n,{slots:e}){const t=ha(Zh(n)),{options:r}=tn(ya),s=$t(()=>({[tf(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[tf(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&gT(e.default(t));return n.custom?i:qp("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},i)}}}),_T=mT;function yT(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function vT(n,e){for(const t in e){const r=e[t],s=n[t];if(typeof r=="string"){if(r!==s)return!1}else if(!zt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function ef(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const tf=(n,e,t)=>n??e??t,ET=pp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=tn(Fc),s=$t(()=>n.route||r.value),i=tn(Xh,0),a=$t(()=>{let h=Gr(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=$t(()=>s.value.matched[a.value]);po(Xh,$t(()=>a.value+1)),po(pT,c),po(Fc,s);const l=Bt();return go(()=>[l.value,c.value,n.name],([h,f,p],[g,_,C])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!ss(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,f=n.name,p=c.value,g=p&&p.components[f];if(!g)return nf(t.default,{Component:g,route:h});const _=p.props[f],C=_?_===!0?h.params:typeof _=="function"?_(h):_:null,L=qp(g,we({},C,e,{onVnodeUnmounted:W=>{W.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return nf(t.default,{Component:L,route:h})||L}}});function nf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const TT=ET;function IT(n){const e=aT(n.routes,n),t=n.parseQuery||fT,r=n.stringifyQuery||Yh,s=n.history,i=xs(),a=xs(),c=xs(),l=Sy(xn);let h=xn;Fr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=uc.bind(null,O=>""+O),p=uc.bind(null,NE),g=uc.bind(null,fi);function _(O,Y){let Q,Z;return eg(O)?(Q=e.getRecordMatcher(O),Z=Y):Z=O,e.addRoute(Z,Q)}function C(O){const Y=e.getRecordMatcher(O);Y&&e.removeRoute(Y)}function V(){return e.getRoutes().map(O=>O.record)}function L(O){return!!e.getRecordMatcher(O)}function W(O,Y){if(Y=we({},Y||l.value),typeof O=="string"){const b=hc(t,O,Y.path),N=e.resolve({path:b.path},Y),F=s.createHref(b.fullPath);return we(b,N,{params:g(N.params),hash:fi(b.hash),redirectedFrom:void 0,href:F})}let Q;if(O.path!=null)Q=we({},O,{path:hc(t,O.path,Y.path).path});else{const b=we({},O.params);for(const N in b)b[N]==null&&delete b[N];Q=we({},O,{params:p(b)}),Y.params=p(Y.params)}const Z=e.resolve(Q,Y),Te=O.hash||"";Z.params=f(g(Z.params));const y=LE(r,we({},O,{hash:VE(Te),path:Z.path})),E=s.createHref(y);return we({fullPath:y,hash:Te,query:r===Yh?dT(O.query):O.query||{}},Z,{redirectedFrom:void 0,href:E})}function j(O){return typeof O=="string"?hc(t,O,l.value.path):we({},O)}function $(O,Y){if(h!==O)return is(8,{from:Y,to:O})}function q(O){return w(O)}function he(O){return q(we(j(O),{replace:!0}))}function fe(O){const Y=O.matched[O.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let Z=typeof Q=="function"?Q(O):Q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=j(Z):{path:Z},Z.params={}),we({query:O.query,hash:O.hash,params:Z.path!=null?{}:O.params},Z)}}function w(O,Y){const Q=h=W(O),Z=l.value,Te=O.state,y=O.force,E=O.replace===!0,b=fe(Q);if(b)return w(we(j(b),{state:typeof b=="object"?we({},Te,b.state):Te,force:y,replace:E}),Y||Q);const N=Q;N.redirectedFrom=Y;let F;return!y&&FE(r,Z,Q)&&(F=is(16,{to:N,from:Z}),kt(Z,Z,!0,!1)),(F?Promise.resolve(F):A(N,Z)).catch(x=>pn(x)?pn(x,2)?x:Ft(x):pe(x,N,Z)).then(x=>{if(x){if(pn(x,2))return w(we({replace:E},j(x.to),{state:typeof x.to=="object"?we({},Te,x.to.state):Te,force:y}),Y||N)}else x=S(N,Z,!0,E,Te);return R(N,Z,x),x})}function v(O,Y){const Q=$(O,Y);return Q?Promise.reject(Q):Promise.resolve()}function I(O){const Y=kn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(O):O()}function A(O,Y){let Q;const[Z,Te,y]=wT(O,Y);Q=fc(Z.reverse(),"beforeRouteLeave",O,Y);for(const b of Z)b.leaveGuards.forEach(N=>{Q.push(Un(N,O,Y))});const E=v.bind(null,O,Y);return Q.push(E),yt(Q).then(()=>{Q=[];for(const b of i.list())Q.push(Un(b,O,Y));return Q.push(E),yt(Q)}).then(()=>{Q=fc(Te,"beforeRouteUpdate",O,Y);for(const b of Te)b.updateGuards.forEach(N=>{Q.push(Un(N,O,Y))});return Q.push(E),yt(Q)}).then(()=>{Q=[];for(const b of y)if(b.beforeEnter)if(zt(b.beforeEnter))for(const N of b.beforeEnter)Q.push(Un(N,O,Y));else Q.push(Un(b.beforeEnter,O,Y));return Q.push(E),yt(Q)}).then(()=>(O.matched.forEach(b=>b.enterCallbacks={}),Q=fc(y,"beforeRouteEnter",O,Y,I),Q.push(E),yt(Q))).then(()=>{Q=[];for(const b of a.list())Q.push(Un(b,O,Y));return Q.push(E),yt(Q)}).catch(b=>pn(b,8)?b:Promise.reject(b))}function R(O,Y,Q){c.list().forEach(Z=>I(()=>Z(O,Y,Q)))}function S(O,Y,Q,Z,Te){const y=$(O,Y);if(y)return y;const E=Y===xn,b=Fr?history.state:{};Q&&(Z||E?s.replace(O.fullPath,we({scroll:E&&b&&b.scroll},Te)):s.push(O.fullPath,Te)),l.value=O,kt(O,Y,Q,E),Ft()}let T;function pt(){T||(T=s.listen((O,Y,Q)=>{if(!Kt.listening)return;const Z=W(O),Te=fe(Z);if(Te){w(we(Te,{replace:!0,force:!0}),Z).catch(Xs);return}h=Z;const y=l.value;Fr&&WE($h(y.fullPath,Q.delta),_a()),A(Z,y).catch(E=>pn(E,12)?E:pn(E,2)?(w(we(j(E.to),{force:!0}),Z).then(b=>{pn(b,20)&&!Q.delta&&Q.type===di.pop&&s.go(-1,!1)}).catch(Xs),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),pe(E,Z,y))).then(E=>{E=E||S(Z,y,!1),E&&(Q.delta&&!pn(E,8)?s.go(-Q.delta,!1):Q.type===di.pop&&pn(E,20)&&s.go(-1,!1)),R(Z,y,E)}).catch(Xs)}))}let Ct=xs(),Ue=xs(),_e;function pe(O,Y,Q){Ft(O);const Z=Ue.list();return Z.length?Z.forEach(Te=>Te(O,Y,Q)):console.error(O),Promise.reject(O)}function It(){return _e&&l.value!==xn?Promise.resolve():new Promise((O,Y)=>{Ct.add([O,Y])})}function Ft(O){return _e||(_e=!O,pt(),Ct.list().forEach(([Y,Q])=>O?Q(O):Y()),Ct.reset()),O}function kt(O,Y,Q,Z){const{scrollBehavior:Te}=n;if(!Fr||!Te)return Promise.resolve();const y=!Q&&GE($h(O.fullPath,0))||(Z||!Q)&&history.state&&history.state.scroll||null;return lp().then(()=>Te(O,Y,y)).then(E=>E&&zE(E)).catch(E=>pe(E,O,Y))}const Ne=O=>s.go(O);let xe;const kn=new Set,Kt={currentRoute:l,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:L,getRoutes:V,resolve:W,options:n,push:q,replace:he,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:a.add,afterEach:c.add,onError:Ue.add,isReady:It,install(O){const Y=this;O.component("RouterLink",_T),O.component("RouterView",TT),O.config.globalProperties.$router=Y,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Gr(l)}),Fr&&!xe&&l.value===xn&&(xe=!0,q(s.location).catch(Te=>{}));const Q={};for(const Te in xn)Object.defineProperty(Q,Te,{get:()=>l.value[Te],enumerable:!0});O.provide(ya,Y),O.provide(sg,sp(Q)),O.provide(Fc,l);const Z=O.unmount;kn.add(O),O.unmount=function(){kn.delete(O),kn.size<1&&(h=xn,T&&T(),T=null,l.value=xn,xe=!1,_e=!1),Z()}}};function yt(O){return O.reduce((Y,Q)=>Y.then(()=>I(Q)),Promise.resolve())}return Kt}function wT(n,e){const t=[],r=[],s=[],i=Math.max(e.matched.length,n.matched.length);for(let a=0;a<i;a++){const c=e.matched[a];c&&(n.matched.find(h=>ss(h,c))?r.push(c):t.push(c));const l=n.matched[a];l&&(e.matched.find(h=>ss(h,l))||s.push(l))}return[t,r,s]}function AT(){return tn(ya)}const RT=()=>{};var rf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},bT=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},og={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,_=h&63;l||(_=64,a||(g=64)),r.push(t[f],t[p],t[g],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ig(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new ST;const g=i<<2|c>>4;if(r.push(g),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ST extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PT=function(n){const e=ig(n);return og.encodeByteArray(e,!0)},Mo=function(n){return PT(n).replace(/\./g,"")},ag=function(n){try{return og.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=()=>CT().__FIREBASE_DEFAULTS__,VT=()=>{if(typeof process>"u"||typeof rf>"u")return;const n=rf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},DT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ag(n[1]);return e&&JSON.parse(e)},va=()=>{try{return RT()||kT()||VT()||DT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cg=n=>{var e,t;return(t=(e=va())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},OT=n=>{const e=cg(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},lg=()=>{var n;return(n=va())===null||n===void 0?void 0:n.config},ug=n=>{var e;return(e=va())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hg(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Mo(JSON.stringify(t)),Mo(JSON.stringify(a)),""].join(".")}const ei={};function MT(){const n={prod:[],emulator:[]};for(const e of Object.keys(ei))ei[e]?n.emulator.push(e):n.prod.push(e);return n}function LT(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let sf=!1;function fg(n,e){if(typeof window>"u"||typeof document>"u"||!ds(window.location.host)||ei[n]===e||ei[n]||sf)return;ei[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=MT().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{sf=!0,a()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=LT(r),_=t("text"),C=document.getElementById(_)||document.createElement("span"),V=t("learnmore"),L=document.getElementById(V)||document.createElement("a"),W=t("preprendIcon"),j=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const $=g.element;c($),f(L,V);const q=h();l(j,W),$.append(j,C,L,q),document.body.appendChild($)}i?(C.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function UT(){var n;const e=(n=va())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function BT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $T(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qT(){const n=dt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function HT(){return!UT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zT(){try{return typeof indexedDB=="object"}catch{return!1}}function WT(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="FirebaseError";class Cn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=GT,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bi.prototype.create)}}class bi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?KT(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Cn(s,c,r)}}function KT(n,e){return n.replace(QT,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const QT=/\{\$([^}]+)}/g;function JT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ir(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(of(i)&&of(a)){if(!Ir(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function of(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ls(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Fs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function YT(n,e){const t=new XT(n,e);return t.subscribe.bind(t)}class XT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ZT(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=dc),s.error===void 0&&(s.error=dc),s.complete===void 0&&(s.complete=dc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZT(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function dc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n){return n&&n._delegate?n._delegate:n}class wr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new NT;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nI(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tI(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tI(n){return n===_r?void 0:n}function nI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new eI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ge||(ge={}));const sI={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},iI=ge.INFO,oI={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},aI=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=oI[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cl{constructor(e){this.name=e,this._logLevel=iI,this._logHandler=aI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const cI=(n,e)=>e.some(t=>n instanceof t);let af,cf;function lI(){return af||(af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uI(){return cf||(cf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dg=new WeakMap,Uc=new WeakMap,pg=new WeakMap,pc=new WeakMap,kl=new WeakMap;function hI(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Wn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&dg.set(t,n)}).catch(()=>{}),kl.set(e,n),e}function fI(n){if(Uc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Uc.set(n,e)}let jc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Uc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pg.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function dI(n){jc=n(jc)}function pI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(gc(this),e,...t);return pg.set(r,e.sort?e.sort():[e]),Wn(r)}:uI().includes(n)?function(...e){return n.apply(gc(this),e),Wn(dg.get(this))}:function(...e){return Wn(n.apply(gc(this),e))}}function gI(n){return typeof n=="function"?pI(n):(n instanceof IDBTransaction&&fI(n),cI(n,lI())?new Proxy(n,jc):n)}function Wn(n){if(n instanceof IDBRequest)return hI(n);if(pc.has(n))return pc.get(n);const e=gI(n);return e!==n&&(pc.set(n,e),kl.set(e,n)),e}const gc=n=>kl.get(n);function mI(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Wn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Wn(a.result),l.oldVersion,l.newVersion,Wn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const _I=["get","getKey","getAll","getAllKeys","count"],yI=["put","add","delete","clear"],mc=new Map;function lf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(mc.get(e))return mc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=yI.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_I.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return mc.set(e,i),i}dI(n=>({...n,get:(e,t,r)=>lf(e,t)||n.get(e,t,r),has:(e,t)=>!!lf(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(EI(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function EI(n){const e=n.getComponent();return e?.type==="VERSION"}const Bc="@firebase/app",uf="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Cl("@firebase/app"),TI="@firebase/app-compat",II="@firebase/analytics-compat",wI="@firebase/analytics",AI="@firebase/app-check-compat",RI="@firebase/app-check",bI="@firebase/auth",SI="@firebase/auth-compat",PI="@firebase/database",CI="@firebase/data-connect",kI="@firebase/database-compat",VI="@firebase/functions",DI="@firebase/functions-compat",OI="@firebase/installations",NI="@firebase/installations-compat",xI="@firebase/messaging",MI="@firebase/messaging-compat",LI="@firebase/performance",FI="@firebase/performance-compat",UI="@firebase/remote-config",jI="@firebase/remote-config-compat",BI="@firebase/storage",$I="@firebase/storage-compat",qI="@firebase/firestore",HI="@firebase/ai",zI="@firebase/firestore-compat",WI="firebase",GI="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="[DEFAULT]",KI={[Bc]:"fire-core",[TI]:"fire-core-compat",[wI]:"fire-analytics",[II]:"fire-analytics-compat",[RI]:"fire-app-check",[AI]:"fire-app-check-compat",[bI]:"fire-auth",[SI]:"fire-auth-compat",[PI]:"fire-rtdb",[CI]:"fire-data-connect",[kI]:"fire-rtdb-compat",[VI]:"fire-fn",[DI]:"fire-fn-compat",[OI]:"fire-iid",[NI]:"fire-iid-compat",[xI]:"fire-fcm",[MI]:"fire-fcm-compat",[LI]:"fire-perf",[FI]:"fire-perf-compat",[UI]:"fire-rc",[jI]:"fire-rc-compat",[BI]:"fire-gcs",[$I]:"fire-gcs-compat",[qI]:"fire-fst",[zI]:"fire-fst-compat",[HI]:"fire-vertex","fire-js":"fire-js",[WI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Map,QI=new Map,qc=new Map;function hf(n,e){try{n.container.addComponent(e)}catch(t){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function os(n){const e=n.name;if(qc.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;qc.set(e,n);for(const t of Lo.values())hf(t,n);for(const t of QI.values())hf(t,n);return!0}function Vl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ot(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new bi("app","Firebase",JI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=GI;function gg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$c,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Gn.create("bad-app-name",{appName:String(s)});if(t||(t=lg()),!t)throw Gn.create("no-options");const i=Lo.get(s);if(i){if(Ir(t,i.options)&&Ir(r,i.config))return i;throw Gn.create("duplicate-app",{appName:s})}const a=new rI(s);for(const l of qc.values())a.addComponent(l);const c=new YI(t,r,a);return Lo.set(s,c),c}function mg(n=$c){const e=Lo.get(n);if(!e&&n===$c&&lg())return gg();if(!e)throw Gn.create("no-app",{appName:n});return e}function Kn(n,e,t){var r;let s=(r=KI[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(c.join(" "));return}os(new wr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="firebase-heartbeat-database",ZI=1,pi="firebase-heartbeat-store";let _c=null;function _g(){return _c||(_c=mI(XI,ZI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(pi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Gn.create("idb-open",{originalErrorMessage:n.message})})),_c}async function ew(n){try{const t=(await _g()).transaction(pi),r=await t.objectStore(pi).get(yg(n));return await t.done,r}catch(e){if(e instanceof Cn)Rn.warn(e.message);else{const t=Gn.create("idb-get",{originalErrorMessage:e?.message});Rn.warn(t.message)}}}async function ff(n,e){try{const r=(await _g()).transaction(pi,"readwrite");await r.objectStore(pi).put(e,yg(n)),await r.done}catch(t){if(t instanceof Cn)Rn.warn(t.message);else{const r=Gn.create("idb-set",{originalErrorMessage:t?.message});Rn.warn(r.message)}}}function yg(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=1024,nw=30;class rw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new iw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=df();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>nw){const a=ow(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=df(),{heartbeatsToSend:r,unsentEntries:s}=sw(this._heartbeatsCache.heartbeats),i=Mo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Rn.warn(t),""}}}function df(){return new Date().toISOString().substring(0,10)}function sw(n,e=tw){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),pf(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),pf(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class iw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zT()?WT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ew(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ff(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ff(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pf(n){return Mo(JSON.stringify({version:2,heartbeats:n})).length}function ow(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(n){os(new wr("platform-logger",e=>new vI(e),"PRIVATE")),os(new wr("heartbeat",e=>new rw(e),"PRIVATE")),Kn(Bc,uf,n),Kn(Bc,uf,"esm2017"),Kn("fire-js","")}aw("");var cw="firebase",lw="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn(cw,lw,"app");function Dl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function vg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uw=vg,Eg=new bi("auth","Firebase",vg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Cl("@firebase/auth");function hw(n,...e){Fo.logLevel<=ge.WARN&&Fo.warn(`Auth (${ps}): ${n}`,...e)}function yo(n,...e){Fo.logLevel<=ge.ERROR&&Fo.error(`Auth (${ps}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(n,...e){throw Ol(n,...e)}function nn(n,...e){return Ol(n,...e)}function Tg(n,e,t){const r=Object.assign(Object.assign({},uw()),{[e]:t});return new bi("auth","Firebase",r).create(e,{appName:n.name})}function Tn(n){return Tg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ol(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Eg.create(n,...e)}function oe(n,e,...t){if(!n)throw Ol(e,...t)}function vn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw yo(e),new Error(e)}function bn(n,e){n||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function fw(){return gf()==="http:"||gf()==="https:"}function gf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fw()||BT()||"connection"in navigator)?navigator.onLine:!0}function pw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.shortDelay=e,this.longDelay=t,bn(t>e,"Short delay should be less than long delay!"),this.isMobile=FT()||$T()}get(){return dw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(n,e){bn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_w=new Pi(3e4,6e4);function ar(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function cr(n,e,t,r,s={}){return wg(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Si(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return jT()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ds(n.emulatorConfig.host)&&(h.credentials="include"),Ig.fetch()(await Ag(n,n.config.apiHost,t,c),h)})}async function wg(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},gw),e);try{const s=new vw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw io(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw io(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw io(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Tg(n,f,h);Wt(n,f)}}catch(s){if(s instanceof Cn)throw s;Wt(n,"network-request-failed",{message:String(s)})}}async function Ci(n,e,t,r,s={}){const i=await cr(n,e,t,r,s);return"mfaPendingCredential"in i&&Wt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ag(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Nl(n.config,s):`${n.config.apiScheme}://${s}`;return mw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function yw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),_w.get())})}}function io(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=nn(n,e,r);return s.customData._tokenResponse=t,s}function mf(n){return n!==void 0&&n.enterprise!==void 0}class Ew{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Tw(n,e){return cr(n,"GET","/v2/recaptchaConfig",ar(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(n,e){return cr(n,"POST","/v1/accounts:delete",e)}async function Uo(n,e){return cr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ww(n,e=!1){const t=tt(n),r=await t.getIdToken(e),s=xl(r);oe(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:ti(yc(s.auth_time)),issuedAtTime:ti(yc(s.iat)),expirationTime:ti(yc(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function yc(n){return Number(n)*1e3}function xl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return yo("JWT malformed, contained fewer than 3 sections"),null;try{const s=ag(t);return s?JSON.parse(s):(yo("Failed to decode base64 JWT payload"),null)}catch(s){return yo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function _f(n){const e=xl(n);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Cn&&Aw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Aw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await gi(n,Uo(t,{idToken:r}));oe(s?.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rg(i.providerUserInfo):[],c=Sw(n.providerData,a),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!c?.length,f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new zc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function bw(n){const e=tt(n);await jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Rg(n){return n.map(e=>{var{providerId:t}=e,r=Dl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pw(n,e){const t=await wg(n,{},async()=>{const r=Si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Ag(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&ds(n.emulatorConfig.host)&&(l.credentials="include"),Ig.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Cw(n,e){return cr(n,"POST","/v2/accounts:revokeToken",ar(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_f(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const t=_f(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Pw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Yr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(n,e){oe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Dl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await gi(this,this.stsTokenManager.getToken(this.auth,e));return oe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ww(this,e)}reload(){return bw(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(Tn(this.auth));const e=await this.getIdToken();return await gi(this,Iw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,h,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,_=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,L=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,W=(h=t.createdAt)!==null&&h!==void 0?h:void 0,j=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:$,emailVerified:q,isAnonymous:he,providerData:fe,stsTokenManager:w}=t;oe($&&w,e,"internal-error");const v=Yr.fromJSON(this.name,w);oe(typeof $=="string",e,"internal-error"),Mn(p,e.name),Mn(g,e.name),oe(typeof q=="boolean",e,"internal-error"),oe(typeof he=="boolean",e,"internal-error"),Mn(_,e.name),Mn(C,e.name),Mn(V,e.name),Mn(L,e.name),Mn(W,e.name),Mn(j,e.name);const I=new qt({uid:$,auth:e,email:g,emailVerified:q,displayName:p,isAnonymous:he,photoURL:C,phoneNumber:_,tenantId:V,stsTokenManager:v,createdAt:W,lastLoginAt:j});return fe&&Array.isArray(fe)&&(I.providerData=fe.map(A=>Object.assign({},A))),L&&(I._redirectEventId=L),I}static async _fromIdTokenResponse(e,t,r=!1){const s=new Yr;s.updateFromServerResponse(t);const i=new qt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await jo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Rg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new Yr;c.updateFromIdToken(r);const l=new qt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=new Map;function En(n){bn(n instanceof Function,"Expected a class definition");let e=yf.get(n);return e?(bn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,yf.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}bg.type="NONE";const vf=bg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n,e,t){return`firebase:${n}:${e}:${t}`}class Xr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vo(this.userKey,s.apiKey,i),this.fullPersistenceKey=vo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Uo(this.auth,{idToken:e}).catch(()=>{});return t?qt._fromGetAccountInfoResponse(this.auth,t,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Xr(En(vf),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||En(vf);const a=vo(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const g=await Uo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await qt._fromGetAccountInfoResponse(e,g,f)}else p=qt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Xr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Xr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dg(e))return"Blackberry";if(Og(e))return"Webos";if(Pg(e))return"Safari";if((e.includes("chrome/")||Cg(e))&&!e.includes("edge/"))return"Chrome";if(Vg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Sg(n=dt()){return/firefox\//i.test(n)}function Pg(n=dt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cg(n=dt()){return/crios\//i.test(n)}function kg(n=dt()){return/iemobile/i.test(n)}function Vg(n=dt()){return/android/i.test(n)}function Dg(n=dt()){return/blackberry/i.test(n)}function Og(n=dt()){return/webos/i.test(n)}function Ml(n=dt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function kw(n=dt()){var e;return Ml(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vw(){return qT()&&document.documentMode===10}function Ng(n=dt()){return Ml(n)||Vg(n)||Og(n)||Dg(n)||/windows phone/i.test(n)||kg(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(n,e=[]){let t;switch(n){case"Browser":t=Ef(dt());break;case"Worker":t=`${Ef(dt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ow(n,e={}){return cr(n,"GET","/v2/passwordPolicy",ar(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=6;class xw{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Nw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tf(this),this.idTokenSubscription=new Tf(this),this.beforeStateQueue=new Dw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=En(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uo(this,{idToken:e}),r=await qt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ot(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await jo(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(Tn(this));const t=e?tt(e):null;return t&&oe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ow(this),t=new xw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&En(e)||this._popupRedirectResolver;oe(t,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[En(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&hw(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Pr(n){return tt(n)}class Tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=YT(t=>this.observer=t)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lw(n){Ea=n}function Mg(n){return Ea.loadJS(n)}function Fw(){return Ea.recaptchaEnterpriseScript}function Uw(){return Ea.gapiScript}function jw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Bw{constructor(){this.enterprise=new $w}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class $w{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const qw="recaptcha-enterprise",Lg="NO_RECAPTCHA";class Hw{constructor(e){this.type=qw,this.auth=Pr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Tw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Ew(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;mf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(Lg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Bw().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&mf(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Fw();l.length!==0&&(l+=c),Mg(l).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function If(n,e,t,r=!1,s=!1){const i=new Hw(n);let a;if(s)a=Lg;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Wc(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await If(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await If(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(n,e){const t=Vl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ir(i,e??{}))return s;Wt(s,"already-initialized")}return t.initialize({options:e})}function Ww(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(En);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Gw(n,e,t){const r=Pr(n);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Fg(e),{host:a,port:c}=Kw(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(Ir(h,r.config.emulator)&&Ir(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ds(a)?(hg(`${i}//${a}${l}`),fg("Auth",!0)):Qw()}function Fg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Kw(n){const e=Fg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:wf(a)}}}function wf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Qw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,t){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function Jw(n,e){return cr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(n,e){return Ci(n,"POST","/v1/accounts:signInWithPassword",ar(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(n,e){return Ci(n,"POST","/v1/accounts:signInWithEmailLink",ar(n,e))}async function Zw(n,e){return Ci(n,"POST","/v1/accounts:signInWithEmailLink",ar(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends Ll{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new mi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new mi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wc(e,t,"signInWithPassword",Yw);case"emailLink":return Xw(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wc(e,r,"signUpPassword",Jw);case"emailLink":return Zw(e,{idToken:t,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(n,e){return Ci(n,"POST","/v1/accounts:signInWithIdp",ar(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="http://localhost";class Ar extends Ll{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Dl(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ar(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Zr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Zr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zr(e,t)}buildRequest(){const e={requestUri:eA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Si(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nA(n){const e=Ls(Fs(n)).link,t=e?Ls(Fs(e)).deep_link_id:null,r=Ls(Fs(n)).deep_link_id;return(r?Ls(Fs(r)).link:null)||r||t||e||n}class Fl{constructor(e){var t,r,s,i,a,c;const l=Ls(Fs(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=tA((s=l.mode)!==null&&s!==void 0?s:null);oe(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.lang)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=nA(e);try{return new Fl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.providerId=gs.PROVIDER_ID}static credential(e,t){return mi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Fl.parseLink(t);return oe(r,"argument-error"),mi._fromEmailAndCode(e,r.code,r.tenantId)}}gs.PROVIDER_ID="password";gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Ug{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends ki{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ar._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Bn.credential(t,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends ki{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends ki{constructor(){super("twitter.com")}static credential(e,t){return Ar._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return qn.credential(t,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(n,e){return Ci(n,"POST","/v1/accounts:signUp",ar(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await qt._fromIdTokenResponse(e,r,s),a=Af(r);return new Rr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Af(r);return new Rr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Af(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends Cn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Bo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Bo(e,t,r,s)}}function jg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bo._fromErrorAndOperation(n,i,e,r):i})}async function sA(n,e,t=!1){const r=await gi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Rr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(n,e,t=!1){const{auth:r}=n;if(Ot(r.app))return Promise.reject(Tn(r));const s="reauthenticate";try{const i=await gi(n,jg(r,s,e,n),t);oe(i.idToken,r,"internal-error");const a=xl(i.idToken);oe(a,r,"internal-error");const{sub:c}=a;return oe(n.uid===c,r,"user-mismatch"),Rr._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Wt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bg(n,e,t=!1){if(Ot(n.app))return Promise.reject(Tn(n));const r="signIn",s=await jg(n,r,e),i=await Rr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function oA(n,e){return Bg(Pr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(n){const e=Pr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function aA(n,e,t){if(Ot(n.app))return Promise.reject(Tn(n));const r=Pr(n),a=await Wc(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&$g(n),l}),c=await Rr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function cA(n,e,t){return Ot(n.app)?Promise.reject(Tn(n)):oA(tt(n),gs.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$g(n),r})}function lA(n,e,t,r){return tt(n).onIdTokenChanged(e,t,r)}function uA(n,e,t){return tt(n).beforeAuthStateChanged(e,t)}const $o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=1e3,fA=10;class Hg extends qg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ng(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Vw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fA):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},hA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hg.type="LOCAL";const dA=Hg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg extends qg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zg.type="SESSION";const Wg=zg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await pA(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Ul("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function mA(n){rn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function _A(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yA(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function vA(){return Gg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="firebaseLocalStorageDb",EA=1,qo="firebaseLocalStorage",Qg="fbase_key";class Vi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ia(n,e){return n.transaction([qo],e?"readwrite":"readonly").objectStore(qo)}function TA(){const n=indexedDB.deleteDatabase(Kg);return new Vi(n).toPromise()}function Gc(){const n=indexedDB.open(Kg,EA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(qo,{keyPath:Qg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(qo)?e(r):(r.close(),await TA(),e(await Gc()))})})}async function Rf(n,e,t){const r=Ia(n,!0).put({[Qg]:e,value:t});return new Vi(r).toPromise()}async function IA(n,e){const t=Ia(n,!1).get(e),r=await new Vi(t).toPromise();return r===void 0?null:r.value}function bf(n,e){const t=Ia(n,!0).delete(e);return new Vi(t).toPromise()}const wA=800,AA=3;class Jg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>AA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ta._getInstance(vA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _A(),!this.activeServiceWorker)return;this.sender=new gA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gc();return await Rf(e,$o,"1"),await bf(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>IA(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ia(s,!1).getAll();return new Vi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jg.type="LOCAL";const RA=Jg;new Pi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(n,e){return e?En(e):(oe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends Ll{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function SA(n){return Bg(n.auth,new jl(n),n.bypassAuthState)}function PA(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),iA(t,new jl(n),n.bypassAuthState)}async function CA(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),sA(t,new jl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SA;case"linkViaPopup":case"linkViaRedirect":return CA;case"reauthViaPopup":case"reauthViaRedirect":return PA;default:Wt(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=new Pi(2e3,1e4);class qr extends Yg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qr.currentPopupAction&&qr.currentPopupAction.cancel(),qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=Ul();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kA.get())};e()}}qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="pendingRedirect",Eo=new Map;class DA extends Yg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Eo.get(this.auth._key());if(!e){try{const r=await OA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Eo.set(this.auth._key(),e)}return this.bypassAuthState||Eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OA(n,e){const t=MA(e),r=xA(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function NA(n,e){Eo.set(n._key(),e)}function xA(n){return En(n._redirectPersistence)}function MA(n){return vo(VA,n.config.apiKey,n.name)}async function LA(n,e,t=!1){if(Ot(n.app))return Promise.reject(Tn(n));const r=Pr(n),s=bA(r,e),a=await new DA(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=10*60*1e3;class UA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Xg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(nn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sf(e))}saveEventToCache(e){this.cachedEventUids.add(Sf(e)),this.lastProcessedEventTime=Date.now()}}function Sf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xg({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function jA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xg(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(n,e={}){return cr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qA=/^https?/;async function HA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await BA(n);for(const t of e)try{if(zA(t))return}catch{}Wt(n,"unauthorized-domain")}function zA(n){const e=Hc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!qA.test(t))return!1;if($A.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=new Pi(3e4,6e4);function Pf(){const n=rn().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function GA(n){return new Promise((e,t)=>{var r,s,i;function a(){Pf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pf(),t(nn(n,"network-request-failed"))},timeout:WA.get()})}if(!((s=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rn().gapi)===null||i===void 0)&&i.load)a();else{const c=jw("iframefcb");return rn()[c]=()=>{gapi.load?a():t(nn(n,"network-request-failed"))},Mg(`${Uw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw To=null,e})}let To=null;function KA(n){return To=To||GA(n),To}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=new Pi(5e3,15e3),JA="__/auth/iframe",YA="emulator/auth/iframe",XA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function e0(n){const e=n.config;oe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Nl(e,YA):`https://${n.config.authDomain}/${JA}`,r={apiKey:e.apiKey,appName:n.name,v:ps},s=ZA.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Si(r).slice(1)}`}async function t0(n){const e=await KA(n),t=rn().gapi;return oe(t,n,"internal-error"),e.open({where:document.body,url:e0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=nn(n,"network-request-failed"),c=rn().setTimeout(()=>{i(a)},QA.get());function l(){rn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},r0=500,s0=600,i0="_blank",o0="http://localhost";class Cf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function a0(n,e,t,r=r0,s=s0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},n0),{width:r.toString(),height:s.toString(),top:i,left:a}),h=dt().toLowerCase();t&&(c=Cg(h)?i0:t),Sg(h)&&(e=e||o0,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[_,C])=>`${g}${_}=${C},`,"");if(kw(h)&&c!=="_self")return c0(e||"",c),new Cf(null);const p=window.open(e||"",c,f);oe(p,n,"popup-blocked");try{p.focus()}catch{}return new Cf(p)}function c0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="__/auth/handler",u0="emulator/auth/handler",h0=encodeURIComponent("fac");async function kf(n,e,t,r,s,i){oe(n.config.authDomain,n,"auth-domain-config-required"),oe(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ps,eventId:s};if(e instanceof Ug){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",JT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof ki){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${h0}=${encodeURIComponent(l)}`:"";return`${f0(n)}?${Si(c).slice(1)}${h}`}function f0({config:n}){return n.emulator?Nl(n,u0):`https://${n.authDomain}/${l0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="webStorageSupport";class d0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wg,this._completeRedirectFn=LA,this._overrideRedirectResult=NA}async _openPopup(e,t,r,s){var i;bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await kf(e,t,r,Hc(),s);return a0(e,a,Ul())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await kf(e,t,r,Hc(),s);return mA(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await t0(e),r=new UA(e);return t.register("authEvent",s=>(oe(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vc,{type:vc},s=>{var i;const a=(i=s?.[0])===null||i===void 0?void 0:i[vc];a!==void 0&&t(!!a),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=HA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ng()||Pg()||Ml()}}const p0=d0;var Vf="@firebase/auth",Df="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _0(n){os(new wr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;oe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xg(n)},h=new Mw(r,s,i,l);return Ww(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),os(new wr("auth-internal",e=>{const t=Pr(e.getProvider("auth").getImmediate());return(r=>new g0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(Vf,Df,m0(n)),Kn(Vf,Df,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=5*60,v0=ug("authIdTokenMaxAge")||y0;let Of=null;const E0=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>v0)return;const s=t?.token;Of!==s&&(Of=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function T0(n=mg()){const e=Vl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=zw(n,{popupRedirectResolver:p0,persistence:[RA,dA,Wg]}),r=ug("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=E0(i.toString());uA(t,a,()=>a(t.currentUser)),lA(t,c=>a(c))}}const s=cg("auth");return s&&Gw(t,`http://${s}`),t}function I0(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Lw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=nn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",I0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_0("Browser");var Nf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qn,Zg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function I(){}I.prototype=v.prototype,w.D=v.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(A,R,S){for(var T=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)T[pt-2]=arguments[pt];return v.prototype[R].apply(A,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,I){I||(I=0);var A=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)A[R]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(R=0;16>R;++R)A[R]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=w.g[0],I=w.g[1],R=w.g[2];var S=w.g[3],T=v+(S^I&(R^S))+A[0]+3614090360&4294967295;v=I+(T<<7&4294967295|T>>>25),T=S+(R^v&(I^R))+A[1]+3905402710&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(I^S&(v^I))+A[2]+606105819&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(v^R&(S^v))+A[3]+3250441966&4294967295,I=R+(T<<22&4294967295|T>>>10),T=v+(S^I&(R^S))+A[4]+4118548399&4294967295,v=I+(T<<7&4294967295|T>>>25),T=S+(R^v&(I^R))+A[5]+1200080426&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(I^S&(v^I))+A[6]+2821735955&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(v^R&(S^v))+A[7]+4249261313&4294967295,I=R+(T<<22&4294967295|T>>>10),T=v+(S^I&(R^S))+A[8]+1770035416&4294967295,v=I+(T<<7&4294967295|T>>>25),T=S+(R^v&(I^R))+A[9]+2336552879&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(I^S&(v^I))+A[10]+4294925233&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(v^R&(S^v))+A[11]+2304563134&4294967295,I=R+(T<<22&4294967295|T>>>10),T=v+(S^I&(R^S))+A[12]+1804603682&4294967295,v=I+(T<<7&4294967295|T>>>25),T=S+(R^v&(I^R))+A[13]+4254626195&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(I^S&(v^I))+A[14]+2792965006&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(v^R&(S^v))+A[15]+1236535329&4294967295,I=R+(T<<22&4294967295|T>>>10),T=v+(R^S&(I^R))+A[1]+4129170786&4294967295,v=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(v^I))+A[6]+3225465664&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^I&(S^v))+A[11]+643717713&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^v&(R^S))+A[0]+3921069994&4294967295,I=R+(T<<20&4294967295|T>>>12),T=v+(R^S&(I^R))+A[5]+3593408605&4294967295,v=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(v^I))+A[10]+38016083&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^I&(S^v))+A[15]+3634488961&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^v&(R^S))+A[4]+3889429448&4294967295,I=R+(T<<20&4294967295|T>>>12),T=v+(R^S&(I^R))+A[9]+568446438&4294967295,v=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(v^I))+A[14]+3275163606&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^I&(S^v))+A[3]+4107603335&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^v&(R^S))+A[8]+1163531501&4294967295,I=R+(T<<20&4294967295|T>>>12),T=v+(R^S&(I^R))+A[13]+2850285829&4294967295,v=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(v^I))+A[2]+4243563512&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^I&(S^v))+A[7]+1735328473&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^v&(R^S))+A[12]+2368359562&4294967295,I=R+(T<<20&4294967295|T>>>12),T=v+(I^R^S)+A[5]+4294588738&4294967295,v=I+(T<<4&4294967295|T>>>28),T=S+(v^I^R)+A[8]+2272392833&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^I)+A[11]+1839030562&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^v)+A[14]+4259657740&4294967295,I=R+(T<<23&4294967295|T>>>9),T=v+(I^R^S)+A[1]+2763975236&4294967295,v=I+(T<<4&4294967295|T>>>28),T=S+(v^I^R)+A[4]+1272893353&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^I)+A[7]+4139469664&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^v)+A[10]+3200236656&4294967295,I=R+(T<<23&4294967295|T>>>9),T=v+(I^R^S)+A[13]+681279174&4294967295,v=I+(T<<4&4294967295|T>>>28),T=S+(v^I^R)+A[0]+3936430074&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^I)+A[3]+3572445317&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^v)+A[6]+76029189&4294967295,I=R+(T<<23&4294967295|T>>>9),T=v+(I^R^S)+A[9]+3654602809&4294967295,v=I+(T<<4&4294967295|T>>>28),T=S+(v^I^R)+A[12]+3873151461&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^I)+A[15]+530742520&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^v)+A[2]+3299628645&4294967295,I=R+(T<<23&4294967295|T>>>9),T=v+(R^(I|~S))+A[0]+4096336452&4294967295,v=I+(T<<6&4294967295|T>>>26),T=S+(I^(v|~R))+A[7]+1126891415&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~I))+A[14]+2878612391&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~v))+A[5]+4237533241&4294967295,I=R+(T<<21&4294967295|T>>>11),T=v+(R^(I|~S))+A[12]+1700485571&4294967295,v=I+(T<<6&4294967295|T>>>26),T=S+(I^(v|~R))+A[3]+2399980690&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~I))+A[10]+4293915773&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~v))+A[1]+2240044497&4294967295,I=R+(T<<21&4294967295|T>>>11),T=v+(R^(I|~S))+A[8]+1873313359&4294967295,v=I+(T<<6&4294967295|T>>>26),T=S+(I^(v|~R))+A[15]+4264355552&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~I))+A[6]+2734768916&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~v))+A[13]+1309151649&4294967295,I=R+(T<<21&4294967295|T>>>11),T=v+(R^(I|~S))+A[4]+4149444226&4294967295,v=I+(T<<6&4294967295|T>>>26),T=S+(I^(v|~R))+A[11]+3174756917&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~I))+A[2]+718787259&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~v))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var I=v-this.blockSize,A=this.B,R=this.h,S=0;S<v;){if(R==0)for(;S<=I;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<v;)if(A[R++]=w.charCodeAt(S++),R==this.blockSize){s(this,A),R=0;break}}else for(;S<v;)if(A[R++]=w[S++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var I=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=I&255,I/=256;for(this.u(w),w=Array(16),v=I=0;4>v;++v)for(var A=0;32>A;A+=8)w[I++]=this.g[v]>>>A&255;return w};function i(w,v){var I=c;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=v(w)}function a(w,v){this.h=v;for(var I=[],A=!0,R=w.length-1;0<=R;R--){var S=w[R]|0;A&&S==v||(I[R]=S,A=!1)}this.g=I}var c={};function l(w){return-128<=w&&128>w?i(w,function(v){return new a([v|0],0>v?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return L(h(-w));for(var v=[],I=1,A=0;w>=I;A++)v[A]=w/I|0,I*=4294967296;return new a(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return L(f(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(v,8)),A=p,R=0;R<w.length;R+=8){var S=Math.min(8,w.length-R),T=parseInt(w.substring(R,R+S),v);8>S?(S=h(Math.pow(v,S)),A=A.j(S).add(h(T))):(A=A.j(I),A=A.add(h(T)))}return A}var p=l(0),g=l(1),_=l(16777216);n=a.prototype,n.m=function(){if(V(this))return-L(this).m();for(var w=0,v=1,I=0;I<this.g.length;I++){var A=this.i(I);w+=(0<=A?A:4294967296+A)*v,v*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(V(this))return"-"+L(this).toString(w);for(var v=h(Math.pow(w,6)),I=this,A="";;){var R=q(I,v).g;I=W(I,R.j(v));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=R,C(I))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function V(w){return w.h==-1}n.l=function(w){return w=W(this,w),V(w)?-1:C(w)?0:1};function L(w){for(var v=w.g.length,I=[],A=0;A<v;A++)I[A]=~w.g[A];return new a(I,~w.h).add(g)}n.abs=function(){return V(this)?L(this):this},n.add=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0,R=0;R<=v;R++){var S=A+(this.i(R)&65535)+(w.i(R)&65535),T=(S>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);A=T>>>16,S&=65535,T&=65535,I[R]=T<<16|S}return new a(I,I[I.length-1]&-2147483648?-1:0)};function W(w,v){return w.add(L(v))}n.j=function(w){if(C(this)||C(w))return p;if(V(this))return V(w)?L(this).j(L(w)):L(L(this).j(w));if(V(w))return L(this.j(L(w)));if(0>this.l(_)&&0>w.l(_))return h(this.m()*w.m());for(var v=this.g.length+w.g.length,I=[],A=0;A<2*v;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<w.g.length;R++){var S=this.i(A)>>>16,T=this.i(A)&65535,pt=w.i(R)>>>16,Ct=w.i(R)&65535;I[2*A+2*R]+=T*Ct,j(I,2*A+2*R),I[2*A+2*R+1]+=S*Ct,j(I,2*A+2*R+1),I[2*A+2*R+1]+=T*pt,j(I,2*A+2*R+1),I[2*A+2*R+2]+=S*pt,j(I,2*A+2*R+2)}for(A=0;A<v;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=v;A<2*v;A++)I[A]=0;return new a(I,0)};function j(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function $(w,v){this.g=w,this.h=v}function q(w,v){if(C(v))throw Error("division by zero");if(C(w))return new $(p,p);if(V(w))return v=q(L(w),v),new $(L(v.g),L(v.h));if(V(v))return v=q(w,L(v)),new $(L(v.g),v.h);if(30<w.g.length){if(V(w)||V(v))throw Error("slowDivide_ only works with positive integers.");for(var I=g,A=v;0>=A.l(w);)I=he(I),A=he(A);var R=fe(I,1),S=fe(A,1);for(A=fe(A,2),I=fe(I,2);!C(A);){var T=S.add(A);0>=T.l(w)&&(R=R.add(I),S=T),A=fe(A,1),I=fe(I,1)}return v=W(w,R.j(v)),new $(R,v)}for(R=p;0<=w.l(v);){for(I=Math.max(1,Math.floor(w.m()/v.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(I),T=S.j(v);V(T)||0<T.l(w);)I-=A,S=h(I),T=S.j(v);C(S)&&(S=g),R=R.add(S),w=W(w,T)}return new $(R,w)}n.A=function(w){return q(this,w).h},n.and=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)&w.i(A);return new a(I,this.h&w.h)},n.or=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)|w.i(A);return new a(I,this.h|w.h)},n.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)^w.i(A);return new a(I,this.h^w.h)};function he(w){for(var v=w.g.length+1,I=[],A=0;A<v;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new a(I,w.h)}function fe(w,v){var I=v>>5;v%=32;for(var A=w.g.length-I,R=[],S=0;S<A;S++)R[S]=0<v?w.i(S+I)>>>v|w.i(S+I+1)<<32-v:w.i(S+I);return new a(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Qn=a}).apply(typeof Nf<"u"?Nf:typeof self<"u"?self:typeof window<"u"?window:{});var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var em,Us,tm,Io,Kc,nm,rm,sm;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof oo=="object"&&oo];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var P=o[m];if(!(P in d))break e;d=d[P]}o=o[o.length-1],m=d[o],u=u(m),u!=m&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,m=!1,P={next:function(){if(!m&&d<o.length){var k=d++;return{value:u(k,o[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function g(o,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function _(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function C(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,P,k){for(var z=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)z[Se-2]=arguments[Se];return u.prototype[P].apply(m,z)}}function V(o){const u=o.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=o[m];return d}return[]}function L(o,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const P=o.length||0,k=m.length||0;o.length=P+k;for(let z=0;z<k;z++)o[P+z]=m[z]}else o.push(m)}}class W{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(o){return/^[\s\xa0]*$/.test(o)}function $(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var he=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function fe(o,u,d){for(const m in o)u.call(d,o[m],m,o)}function w(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function v(o){const u={};for(const d in o)u[d]=o[d];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)o[d]=m[d];for(let k=0;k<I.length;k++)d=I[k],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function R(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function S(o){c.setTimeout(()=>{throw o},0)}function T(){var o=It;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class pt{constructor(){this.h=this.g=null}add(u,d){const m=Ct.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Ct=new W(()=>new Ue,o=>o.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,pe=!1,It=new pt,Ft=()=>{const o=c.Promise.resolve(void 0);_e=()=>{o.then(kt)}};var kt=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(d){S(d)}var u=Ct;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}pe=!1};function Ne(){this.s=this.s,this.C=this.C}Ne.prototype.s=!1,Ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var kn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o}();function Kt(o,u){if(xe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(he){e:{try{q(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:yt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Kt.aa.h.call(this)}}C(Kt,xe);var yt={2:"touch",3:"pen",4:"mouse"};Kt.prototype.h=function(){Kt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(o,u,d,m,P){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=P,this.key=++Y,this.da=this.fa=!1}function Z(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Te(o){this.src=o,this.g={},this.h=0}Te.prototype.add=function(o,u,d,m,P){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var z=E(o,u,m,P);return-1<z?(u=o[z],d||(u.fa=!1)):(u=new Q(u,this.src,k,!!m,P),u.fa=d,o.push(u)),u};function y(o,u){var d=u.type;if(d in o.g){var m=o.g[d],P=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=P)&&Array.prototype.splice.call(m,P,1),k&&(Z(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function E(o,u,d,m){for(var P=0;P<o.length;++P){var k=o[P];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==m)return P}return-1}var b="closure_lm_"+(1e6*Math.random()|0),N={};function F(o,u,d,m,P){if(Array.isArray(u)){for(var k=0;k<u.length;k++)F(o,u[k],d,m,P);return null}return d=ae(d),o&&o[O]?o.K(u,d,h(m)?!!m.capture:!1,P):x(o,u,d,!1,m,P)}function x(o,u,d,m,P,k){if(!u)throw Error("Invalid event type");var z=h(P)?!!P.capture:!!P,Se=G(o);if(Se||(o[b]=Se=new Te(o)),d=Se.add(u,d,m,z,k),d.proxy)return d;if(m=K(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)kn||(P=z),P===void 0&&(P=!1),o.addEventListener(u.toString(),m,P);else if(o.attachEvent)o.attachEvent(U(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function K(){function o(d){return u.call(o.src,o.listener,d)}const u=te;return o}function H(o,u,d,m,P){if(Array.isArray(u))for(var k=0;k<u.length;k++)H(o,u[k],d,m,P);else m=h(m)?!!m.capture:!!m,d=ae(d),o&&o[O]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],d=E(k,d,m,P),-1<d&&(Z(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=G(o))&&(u=o.g[u.toString()],o=-1,u&&(o=E(u,d,m,P)),(d=-1<o?u[o]:null)&&B(d))}function B(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[O])y(u.i,o);else{var d=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(d,m,o.capture):u.detachEvent?u.detachEvent(U(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=G(u))?(y(d,o),d.h==0&&(d.src=null,u[b]=null)):Z(o)}}}function U(o){return o in N?N[o]:N[o]="on"+o}function te(o,u){if(o.da)o=!0;else{u=new Kt(u,this);var d=o.listener,m=o.ha||o.src;o.fa&&B(o),o=d.call(m,u)}return o}function G(o){return o=o[b],o instanceof Te?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(u){return o.handleEvent(u)}),o[ee])}function se(){Ne.call(this),this.i=new Te(this),this.M=this,this.F=null}C(se,Ne),se.prototype[O]=!0,se.prototype.removeEventListener=function(o,u,d,m){H(this,o,u,d,m)};function ue(o,u){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new xe(u,o);else if(u instanceof xe)u.target=u.target||o;else{var P=u;u=new xe(m,o),A(u,P)}if(P=!0,d)for(var k=d.length-1;0<=k;k--){var z=u.g=d[k];P=ye(z,m,!0,u)&&P}if(z=u.g=o,P=ye(z,m,!0,u)&&P,P=ye(z,m,!1,u)&&P,d)for(k=0;k<d.length;k++)z=u.g=d[k],P=ye(z,m,!1,u)&&P}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],m=0;m<d.length;m++)Z(d[m]);delete o.g[u],o.h--}}this.F=null},se.prototype.K=function(o,u,d,m){return this.i.add(String(o),u,!1,d,m)},se.prototype.L=function(o,u,d,m){return this.i.add(String(o),u,!0,d,m)};function ye(o,u,d,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,k=0;k<u.length;++k){var z=u[k];if(z&&!z.da&&z.capture==d){var Se=z.listener,Xe=z.ha||z.src;z.fa&&y(o.i,z),P=Se.call(Xe,m)!==!1&&P}}return P&&!m.defaultPrevented}function Qe(o,u,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Je(o){o.g=Qe(()=>{o.g=null,o.i&&(o.i=!1,Je(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Vt extends Ne{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Je(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rt(o){Ne.call(this),this.h=o,this.g={}}C(rt,Ne);var Vn=[];function Es(o){fe(o.g,function(u,d){this.g.hasOwnProperty(d)&&B(u)},o),o.g={}}rt.prototype.N=function(){rt.aa.N.call(this),Es(this)},rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ye=c.JSON.stringify,Dt=c.JSON.parse,ji=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Fa(){}Fa.prototype.h=null;function yu(o){return o.h||(o.h=o.i())}function vu(){}var Ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ua(){xe.call(this,"d")}C(Ua,xe);function ja(){xe.call(this,"c")}C(ja,xe);var lr={},Eu=null;function Bi(){return Eu=Eu||new se}lr.La="serverreachability";function Tu(o){xe.call(this,lr.La,o)}C(Tu,xe);function Is(o){const u=Bi();ue(u,new Tu(u))}lr.STAT_EVENT="statevent";function Iu(o,u){xe.call(this,lr.STAT_EVENT,o),this.stat=u}C(Iu,xe);function gt(o){const u=Bi();ue(u,new Iu(u,o))}lr.Ma="timingevent";function wu(o,u){xe.call(this,lr.Ma,o),this.size=u}C(wu,xe);function ws(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function As(){this.g=!0}As.prototype.xa=function(){this.g=!1};function R_(o,u,d,m,P,k){o.info(function(){if(o.g)if(k)for(var z="",Se=k.split("&"),Xe=0;Xe<Se.length;Xe++){var Ie=Se[Xe].split("=");if(1<Ie.length){var st=Ie[0];Ie=Ie[1];var it=st.split("_");z=2<=it.length&&it[1]=="type"?z+(st+"="+Ie+"&"):z+(st+"=redacted&")}}else z=null;else z=k;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+d+`
`+z})}function b_(o,u,d,m,P,k,z){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+d+`
`+k+" "+z})}function Dr(o,u,d,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+P_(o,d)+(m?" "+m:"")})}function S_(o,u){o.info(function(){return"TIMEOUT: "+u})}As.prototype.info=function(){};function P_(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var k=P[0];if(k!="noop"&&k!="stop"&&k!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return Ye(d)}catch{return u}}var $i={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Au={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ba;function qi(){}C(qi,Fa),qi.prototype.g=function(){return new XMLHttpRequest},qi.prototype.i=function(){return{}},Ba=new qi;function Dn(o,u,d,m){this.j=o,this.i=u,this.l=d,this.R=m||1,this.U=new rt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ru}function Ru(){this.i=null,this.g="",this.h=!1}var bu={},$a={};function qa(o,u,d){o.L=1,o.v=Gi(hn(u)),o.m=d,o.P=!0,Su(o,null)}function Su(o,u){o.F=Date.now(),Hi(o),o.A=hn(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Bu(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Ru,o.g=ih(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Vt(g(o.Y,o,o.g),o.O)),u=o.U,d=o.g,m=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Vn[0]=P.toString()),P=Vn);for(var k=0;k<P.length;k++){var z=F(d,P[k],m||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Is(),R_(o.i,o.u,o.A,o.l,o.R,o.m)}Dn.prototype.ca=function(o){o=o.target;const u=this.M;u&&fn(o)==3?u.j():this.Y(o)},Dn.prototype.Y=function(o){try{if(o==this.g)e:{const it=fn(this.g);var u=this.g.Ba();const xr=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Ku(this.g)))){this.J||it!=4||u==7||(u==8||0>=xr?Is(3):Is(2)),Ha(this);var d=this.g.Z();this.X=d;t:if(Pu(this)){var m=Ku(this.g);o="";var P=m.length,k=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),Rs(this);var z="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(k&&u==P-1)});m.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,b_(this.i,this.u,this.A,this.l,this.R,it,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,Xe=this.g;if((Se=Xe.g?Xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Se)){var Ie=Se;break t}}Ie=null}if(d=Ie)Dr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,za(this,d);else{this.o=!1,this.s=3,gt(12),ur(this),Rs(this);break e}}if(this.P){d=!0;let Ut;for(;!this.J&&this.C<z.length;)if(Ut=C_(this,z),Ut==$a){it==4&&(this.s=4,gt(14),d=!1),Dr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==bu){this.s=4,gt(15),Dr(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Dr(this.i,this.l,Ut,null),za(this,Ut);if(Pu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||z.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)Dr(this.i,this.l,z,"[Invalid Chunked Response]"),ur(this),Rs(this);else if(0<z.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Ya(st),st.M=!0,gt(11))}}else Dr(this.i,this.l,z,null),za(this,z);it==4&&ur(this),this.o&&!this.J&&(it==4?th(this.j,this):(this.o=!1,Hi(this)))}else W_(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),ur(this),Rs(this)}}}catch{}finally{}};function Pu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function C_(o,u){var d=o.C,m=u.indexOf(`
`,d);return m==-1?$a:(d=Number(u.substring(d,m)),isNaN(d)?bu:(m+=1,m+d>u.length?$a:(u=u.slice(m,m+d),o.C=m+d,u)))}Dn.prototype.cancel=function(){this.J=!0,ur(this)};function Hi(o){o.S=Date.now()+o.I,Cu(o,o.I)}function Cu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ws(g(o.ba,o),u)}function Ha(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Dn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(S_(this.i,this.A),this.L!=2&&(Is(),gt(17)),ur(this),this.s=2,Rs(this)):Cu(this,this.S-o)};function Rs(o){o.j.G==0||o.J||th(o.j,o)}function ur(o){Ha(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Es(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function za(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Wa(d.h,o))){if(!o.K&&Wa(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Zi(d),Yi(d);else break e;Ja(d),gt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=ws(g(d.Za,d),6e3));if(1>=Du(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else fr(d,11)}else if((o.K||d.g==o)&&Zi(d),!j(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Ie=P[u];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const st=Ie[3];st!=null&&(d.la=st,d.j.info("VER="+d.la));const it=Ie[4];it!=null&&(d.Aa=it,d.j.info("SVER="+d.Aa));const xr=Ie[5];xr!=null&&typeof xr=="number"&&0<xr&&(m=1.5*xr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ut=o.g;if(Ut){const to=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(to){var k=m.h;k.g||to.indexOf("spdy")==-1&&to.indexOf("quic")==-1&&to.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Ga(k,k.h),k.h=null))}if(m.D){const Xa=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Xa&&(m.ya=Xa,De(m.I,m.D,Xa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var z=o;if(m.qa=sh(m,m.J?m.ia:null,m.W),z.K){Ou(m.h,z);var Se=z,Xe=m.L;Xe&&(Se.I=Xe),Se.B&&(Ha(Se),Hi(Se)),m.g=z}else Zu(m);0<d.i.length&&Xi(d)}else Ie[0]!="stop"&&Ie[0]!="close"||fr(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?fr(d,7):Qa(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}Is(4)}catch{}}var k_=class{constructor(o,u){this.g=o,this.map=u}};function ku(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Du(o){return o.h?1:o.g?o.g.size:0}function Wa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ga(o,u){o.g?o.g.add(u):o.h=u}function Ou(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}ku.prototype.cancel=function(){if(this.i=Nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Nu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return V(o.i)}function V_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],d=o.length,m=0;m<d;m++)u.push(o[m]);return u}u=[],d=0;for(m in o)u[d++]=o[m];return u}function D_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const m in o)u[d++]=m;return u}}}function xu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=D_(o),m=V_(o),P=m.length,k=0;k<P;k++)u.call(void 0,m[k],d&&d[k],o)}var Mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function O_(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),P=null;if(0<=m){var k=o[d].substring(0,m);P=o[d].substring(m+1)}else k=o[d];u(k,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function hr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof hr){this.h=o.h,zi(this,o.j),this.o=o.o,this.g=o.g,Wi(this,o.s),this.l=o.l;var u=o.i,d=new Ps;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Lu(this,d),this.m=o.m}else o&&(u=String(o).match(Mu))?(this.h=!1,zi(this,u[1]||"",!0),this.o=bs(u[2]||""),this.g=bs(u[3]||"",!0),Wi(this,u[4]),this.l=bs(u[5]||"",!0),Lu(this,u[6]||"",!0),this.m=bs(u[7]||"")):(this.h=!1,this.i=new Ps(null,this.h))}hr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ss(u,Fu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ss(u,Fu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ss(d,d.charAt(0)=="/"?M_:x_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ss(d,F_)),o.join("")};function hn(o){return new hr(o)}function zi(o,u,d){o.j=d?bs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Wi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Lu(o,u,d){u instanceof Ps?(o.i=u,U_(o.i,o.h)):(d||(u=Ss(u,L_)),o.i=new Ps(u,o.h))}function De(o,u,d){o.i.set(u,d)}function Gi(o){return De(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function bs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ss(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,N_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function N_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Fu=/[#\/\?@]/g,x_=/[#\?:]/g,M_=/[#\?]/g,L_=/[#\?@]/g,F_=/#/g;function Ps(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function On(o){o.g||(o.g=new Map,o.h=0,o.i&&O_(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Ps.prototype,n.add=function(o,u){On(this),this.i=null,o=Or(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Uu(o,u){On(o),u=Or(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function ju(o,u){return On(o),u=Or(o,u),o.g.has(u)}n.forEach=function(o,u){On(this),this.g.forEach(function(d,m){d.forEach(function(P){o.call(u,P,m,this)},this)},this)},n.na=function(){On(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const P=o[m];for(let k=0;k<P.length;k++)d.push(u[m])}return d},n.V=function(o){On(this);let u=[];if(typeof o=="string")ju(this,o)&&(u=u.concat(this.g.get(Or(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return On(this),this.i=null,o=Or(this,o),ju(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Bu(o,u,d){Uu(o,u),0<d.length&&(o.i=null,o.g.set(Or(o,u),V(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const k=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var P=k;z[m]!==""&&(P+="="+encodeURIComponent(String(z[m]))),o.push(P)}}return this.i=o.join("&")};function Or(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function U_(o,u){u&&!o.j&&(On(o),o.i=null,o.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&(Uu(this,m),Bu(this,P,d))},o)),o.j=u}function j_(o,u){const d=new As;if(c.Image){const m=new Image;m.onload=_(Nn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=_(Nn,d,"TestLoadImage: error",!1,u,m),m.onabort=_(Nn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=_(Nn,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function B_(o,u){const d=new As,m=new AbortController,P=setTimeout(()=>{m.abort(),Nn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(k=>{clearTimeout(P),k.ok?Nn(d,"TestPingServer: ok",!0,u):Nn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Nn(d,"TestPingServer: error",!1,u)})}function Nn(o,u,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function $_(){this.g=new ji}function q_(o,u,d){const m=d||"";try{xu(o,function(P,k){let z=P;h(P)&&(z=Ye(P)),u.push(m+k+"="+encodeURIComponent(z))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function Ki(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Ki,Fa),Ki.prototype.g=function(){return new Qi(this.l,this.j)},Ki.prototype.i=function(o){return function(){return o}}({});function Qi(o,u){se.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Qi,se),n=Qi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ks(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$u(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function $u(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Cs(this):ks(this),this.readyState==3&&$u(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Cs(this))},n.Qa=function(o){this.g&&(this.response=o,Cs(this))},n.ga=function(){this.g&&Cs(this)};function Cs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ks(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function ks(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function qu(o){let u="";return fe(o,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Ka(o,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=qu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):De(o,u,d))}function Me(o){se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Me,se);var H_=/^https?$/i,z_=["POST","PUT"];n=Me.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ba.g(),this.v=this.o?yu(this.o):yu(Ba),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){Hu(this,k);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())d.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),P=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(z_,u,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,z]of d)this.g.setRequestHeader(k,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gu(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){Hu(this,k)}};function Hu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,zu(o),Ji(o)}function zu(o){o.A||(o.A=!0,ue(o,"complete"),ue(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ue(this,"complete"),ue(this,"abort"),Ji(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ji(this,!0)),Me.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Wu(this):this.bb())},n.bb=function(){Wu(this)};function Wu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||fn(o)!=4||o.Z()!=2)){if(o.u&&fn(o)==4)Qe(o.Ea,0,o);else if(ue(o,"readystatechange"),fn(o)==4){o.h=!1;try{const z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=z===0){var P=String(o.D).match(Mu)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),m=!H_.test(P?P.toLowerCase():"")}d=m}if(d)ue(o,"complete"),ue(o,"success");else{o.m=6;try{var k=2<fn(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",zu(o)}}finally{Ji(o)}}}}function Ji(o,u){if(o.g){Gu(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ue(o,"ready");try{d.onreadystatechange=m}catch{}}}function Gu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function fn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Dt(u)}};function Ku(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function W_(o){const u={};o=(o.g&&2<=fn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(j(o[m]))continue;var d=R(o[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[P]||[];u[P]=k,k.push(d)}w(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Qu(o){this.Aa=0,this.i=[],this.j=new As,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vs("baseRetryDelayMs",5e3,o),this.cb=Vs("retryDelaySeedMs",1e4,o),this.Wa=Vs("forwardChannelMaxRetries",2,o),this.wa=Vs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ku(o&&o.concurrentRequestLimit),this.Da=new $_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Qu.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,m){gt(0),this.W=o,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=sh(this,null,this.W),Xi(this)};function Qa(o){if(Ju(o),o.G==3){var u=o.U++,d=hn(o.I);if(De(d,"SID",o.K),De(d,"RID",u),De(d,"TYPE","terminate"),Ds(o,d),u=new Dn(o,o.j,u),u.L=2,u.v=Gi(hn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=ih(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Hi(u)}rh(o)}function Yi(o){o.g&&(Ya(o),o.g.cancel(),o.g=null)}function Ju(o){Yi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Zi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Xi(o){if(!Vu(o.h)&&!o.s){o.s=!0;var u=o.Ga;_e||Ft(),pe||(_e(),pe=!0),It.add(u,o),o.B=0}}function G_(o,u){return Du(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ws(g(o.Ga,o,u),nh(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Dn(this,this.j,o);let k=this.o;if(this.S&&(k?(k=v(k),A(k,this.S)):k=this.S),this.m!==null||this.O||(P.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Xu(this,P,u),d=hn(this.I),De(d,"RID",o),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),Ds(this,d),k&&(this.O?u="headers="+encodeURIComponent(String(qu(k)))+"&"+u:this.m&&Ka(d,this.m,k)),Ga(this.h,P),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",u),De(d,"SID","null"),P.T=!0,qa(P,d,null)):qa(P,d,u),this.G=2}}else this.G==3&&(o?Yu(this,o):this.i.length==0||Vu(this.h)||Yu(this))};function Yu(o,u){var d;u?d=u.l:d=o.U++;const m=hn(o.I);De(m,"SID",o.K),De(m,"RID",d),De(m,"AID",o.T),Ds(o,m),o.m&&o.o&&Ka(m,o.m,o.o),d=new Dn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Xu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ga(o.h,d),qa(d,m,u)}function Ds(o,u){o.H&&fe(o.H,function(d,m){De(u,m,d)}),o.l&&xu({},function(d,m){De(u,m,d)})}function Xu(o,u,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var P=o.i;let k=-1;for(;;){const z=["count="+d];k==-1?0<d?(k=P[0].g,z.push("ofs="+k)):k=0:z.push("ofs="+k);let Se=!0;for(let Xe=0;Xe<d;Xe++){let Ie=P[Xe].g;const st=P[Xe].map;if(Ie-=k,0>Ie)k=Math.max(0,P[Xe].g-100),Se=!1;else try{q_(st,z,"req"+Ie+"_")}catch{m&&m(st)}}if(Se){m=z.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,m}function Zu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;_e||Ft(),pe||(_e(),pe=!0),It.add(u,o),o.v=0}}function Ja(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ws(g(o.Fa,o),nh(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,eh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ws(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Yi(this),eh(this))};function Ya(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function eh(o){o.g=new Dn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=hn(o.qa);De(u,"RID","rpc"),De(u,"SID",o.K),De(u,"AID",o.T),De(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&De(u,"TO",o.ja),De(u,"TYPE","xmlhttp"),Ds(o,u),o.m&&o.o&&Ka(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Gi(hn(u)),d.m=null,d.P=!0,Su(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Yi(this),Ja(this),gt(19))};function Zi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function th(o,u){var d=null;if(o.g==u){Zi(o),Ya(o),o.g=null;var m=2}else if(Wa(o.h,u))d=u.D,Ou(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;m=Bi(),ue(m,new wu(m,d)),Xi(o)}else Zu(o);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&G_(o,u)||m==2&&Ja(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),P){case 1:fr(o,5);break;case 4:fr(o,10);break;case 3:fr(o,6);break;default:fr(o,2)}}}function nh(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function fr(o,u){if(o.j.info("Error code "+u),u==2){var d=g(o.fb,o),m=o.Xa;const P=!m;m=new hr(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||zi(m,"https"),Gi(m),P?j_(m.toString(),d):B_(m.toString(),d)}else gt(2);o.G=0,o.l&&o.l.sa(u),rh(o),Ju(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function rh(o){if(o.G=0,o.ka=[],o.l){const u=Nu(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function sh(o,u,d){var m=d instanceof hr?hn(d):new hr(d);if(m.g!="")u&&(m.g=u+"."+m.g),Wi(m,m.s);else{var P=c.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var k=new hr(null);m&&zi(k,m),u&&(k.g=u),P&&Wi(k,P),d&&(k.l=d),m=k}return d=o.D,u=o.ya,d&&u&&De(m,d,u),De(m,"VER",o.la),Ds(o,m),m}function ih(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Me(new Ki({eb:d})):new Me(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function oh(){}n=oh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function eo(){}eo.prototype.g=function(o,u){return new wt(o,u)};function wt(o,u){se.call(this),this.g=new Qu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!j(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Nr(this)}C(wt,se),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Qa(this.g)},wt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Ye(o),o=d);u.i.push(new k_(u.Ya++,o)),u.G==3&&Xi(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,Qa(this.g),delete this.g,wt.aa.N.call(this)};function ah(o){Ua.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}C(ah,Ua);function ch(){ja.call(this),this.status=1}C(ch,ja);function Nr(o){this.g=o}C(Nr,oh),Nr.prototype.ua=function(){ue(this.g,"a")},Nr.prototype.ta=function(o){ue(this.g,new ah(o))},Nr.prototype.sa=function(o){ue(this.g,new ch)},Nr.prototype.ra=function(){ue(this.g,"b")},eo.prototype.createWebChannel=eo.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,sm=function(){return new eo},rm=function(){return Bi()},nm=lr,Kc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$i.NO_ERROR=0,$i.TIMEOUT=8,$i.HTTP_ERROR=6,Io=$i,Au.COMPLETE="complete",tm=Au,vu.EventType=Ts,Ts.OPEN="a",Ts.CLOSE="b",Ts.ERROR="c",Ts.MESSAGE="d",se.prototype.listen=se.prototype.K,Us=vu,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,em=Me}).apply(typeof oo<"u"?oo:typeof self<"u"?self:typeof window<"u"?window:{});const xf="@firebase/firestore",Mf="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new Cl("@firebase/firestore");function Ur(){return br.logLevel}function X(n,...e){if(br.logLevel<=ge.DEBUG){const t=e.map(Bl);br.debug(`Firestore (${ms}): ${n}`,...t)}}function Sn(n,...e){if(br.logLevel<=ge.ERROR){const t=e.map(Bl);br.error(`Firestore (${ms}): ${n}`,...t)}}function er(n,...e){if(br.logLevel<=ge.WARN){const t=e.map(Bl);br.warn(`Firestore (${ms}): ${n}`,...t)}}function Bl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,im(n,r,t)}function im(n,e,t){let r=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Sn(r),new Error(r)}function Ce(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||im(e,s,r)}function me(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Cn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class w0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(at.UNAUTHENTICATED))}shutdown(){}}class A0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class R0{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ce(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string",31837,{l:r}),new om(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string",2055,{h:e}),new at(e)}}class b0{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class S0{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new b0(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P0{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ce(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Lf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ce(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Lf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=C0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function de(n,e){return n<e?-1:n>e?1:0}function Qc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return de(r,s);{const i=am(),a=k0(i.encode(Ff(n,t)),i.encode(Ff(e,t)));return a!==0?a:de(r,s)}}t+=r>65535?2:1}return de(n.length,e.length)}function Ff(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function k0(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return de(n[t],e[t]);return de(n.length,e.length)}function as(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="__name__";class Yt{constructor(e,t,r){t===void 0?t=0:t>e.length&&re(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&re(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Yt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Yt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return de(e.length,t.length)}static compareSegments(e,t){const r=Yt.isNumericId(e),s=Yt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Yt.extractNumericId(e).compare(Yt.extractNumericId(t)):Qc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qn.fromString(e.substring(4,e.length-2))}}class be extends Yt{construct(e,t,r){return new be(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new be(t)}static emptyPath(){return new be([])}}const V0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Yt{construct(e,t,r){return new ut(e,t,r)}static isValidIdentifier(e){return V0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Uf}static keyField(){return new ut([Uf])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new J(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new J(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(t)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(be.fromString(e))}static fromName(e){return new ne(be.fromString(e).popFirst(5))}static empty(){return new ne(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new be(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(n,e,t){if(!t)throw new J(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function D0(n,e,t,r){if(e===!0&&r===!0)throw new J(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function jf(n){if(!ne.isDocumentKey(n))throw new J(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Bf(n){if(ne.isDocumentKey(n))throw new J(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function lm(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function wa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":re(12329,{type:typeof n})}function Ho(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wa(n);throw new J(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n,e){const t={typeString:n};return e&&(t.value=e),t}function Di(n,e){if(!lm(n))throw new J(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new J(D.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=-62135596800,qf=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*qf);return new Oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$f)throw new J(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qf}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Di(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$f;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:$e("string",Oe._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Oe(0,0))}static max(){return new ce(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=-1;function O0(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new Oe(t+1,0):new Oe(t,r));return new tr(s,ne.empty(),e)}function N0(n){return new tr(n.readTime,n.key,_i)}class tr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new tr(ce.min(),ne.empty(),_i)}static max(){return new tr(ce.max(),ne.empty(),_i)}}function x0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ne.comparator(n.documentKey,e.documentKey),t!==0?t:de(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class L0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==M0)throw n;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):M.reject(t)}static resolve(e){return new M((t,r)=>{t(e)})}static reject(e){return new M((t,r)=>{r(e)})}static waitFor(e){return new M((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next(s=>s?M.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new M((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new M((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function F0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function _s(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ra.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=-1;function Oi(n){return n==null}function zo(n){return n===0&&1/n==-1/0}function j0(n){return typeof n=="number"&&Number.isInteger(n)&&!zo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="";function B0(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Hf(e)),e=$0(n.get(t),e);return Hf(e)}function $0(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case um:t+="";break;default:t+=i}}return t}function Hf(n){return n+um+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Cr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new Fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ao(this.root,e,this.comparator,!0)}}class ao{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ze(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw re(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw re(57766)}get value(){throw re(16141)}get color(){throw re(16727)}get left(){throw re(29726)}get right(){throw re(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wf(this.data.getIterator())}getIteratorFrom(e){return new Wf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new We(this.comparator);return t.data=e,t}}class Wf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new xt([])}unionWith(e){let t=new We(ut.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new xt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fm("Invalid base64 string: "+i):i}}(e);return new nt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const q0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(n){if(Ce(!!n,39018),typeof n=="string"){let e=0;const t=q0.exec(n);if(Ce(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function rr(n){return typeof n=="string"?nt.fromBase64String(n):nt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="server_timestamp",pm="__type__",gm="__previous_value__",mm="__local_write_time__";function ql(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[pm])===null||t===void 0?void 0:t.stringValue)===dm}function ba(n){const e=n.mapValue.fields[gm];return ql(e)?ba(e):e}function yi(n){const e=nr(n.mapValue.fields[mm].timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,t,r,s,i,a,c,l,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const Wo="(default)";class vi{constructor(e,t){this.projectId=e,this.database=t||Wo}static empty(){return new vi("","")}get isDefaultDatabase(){return this.database===Wo}isEqual(e){return e instanceof vi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="__type__",z0="__max__",co={mapValue:{}},ym="__vector__",Go="value";function sr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ql(n)?4:G0(n)?9007199254740991:W0(n)?10:11:re(28295,{value:n})}function un(n,e){if(n===e)return!0;const t=sr(n);if(t!==sr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return yi(n).isEqual(yi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=nr(s.timestampValue),c=nr(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return rr(s.bytesValue).isEqual(rr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Le(s.doubleValue),c=Le(i.doubleValue);return a===c?zo(a)===zo(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return as(n.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(zf(a)!==zf(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!un(a[l],c[l])))return!1;return!0}(n,e);default:return re(52216,{left:n})}}function Ei(n,e){return(n.values||[]).find(t=>un(t,e))!==void 0}function cs(n,e){if(n===e)return 0;const t=sr(n),r=sr(e);if(t!==r)return de(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return de(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Le(i.integerValue||i.doubleValue),l=Le(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Gf(n.timestampValue,e.timestampValue);case 4:return Gf(yi(n),yi(e));case 5:return Qc(n.stringValue,e.stringValue);case 6:return function(i,a){const c=rr(i),l=rr(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=de(c[h],l[h]);if(f!==0)return f}return de(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=de(Le(i.latitude),Le(a.latitude));return c!==0?c:de(Le(i.longitude),Le(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Kf(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,h,f;const p=i.fields||{},g=a.fields||{},_=(c=p[Go])===null||c===void 0?void 0:c.arrayValue,C=(l=g[Go])===null||l===void 0?void 0:l.arrayValue,V=de(((h=_?.values)===null||h===void 0?void 0:h.length)||0,((f=C?.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:Kf(_,C)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===co.mapValue&&a===co.mapValue)return 0;if(i===co.mapValue)return 1;if(a===co.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=Qc(l[p],f[p]);if(g!==0)return g;const _=cs(c[l[p]],h[f[p]]);if(_!==0)return _}return de(l.length,f.length)}(n.mapValue,e.mapValue);default:throw re(23264,{le:t})}}function Gf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return de(n,e);const t=nr(n),r=nr(e),s=de(t.seconds,r.seconds);return s!==0?s:de(t.nanos,r.nanos)}function Kf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=cs(t[s],r[s]);if(i)return i}return de(t.length,r.length)}function ls(n){return Jc(n)}function Jc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=nr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return rr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ne.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Jc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Jc(t.fields[a])}`;return s+"}"}(n.mapValue):re(61005,{value:n})}function wo(n){switch(sr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ba(n);return e?16+wo(e):16;case 5:return 2*n.stringValue.length;case 6:return rr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+wo(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Cr(r.fields,(i,a)=>{s+=i.length+wo(a)}),s}(n.mapValue);default:throw re(13486,{value:n})}}function Qf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Yc(n){return!!n&&"integerValue"in n}function Hl(n){return!!n&&"arrayValue"in n}function Jf(n){return!!n&&"nullValue"in n}function Yf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ec(n){return!!n&&"mapValue"in n}function W0(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[_m])===null||t===void 0?void 0:t.stringValue)===ym}function ni(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Cr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ni(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ni(n.arrayValue.values[t]);return e}return Object.assign({},n)}function G0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===z0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ec(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ni(t)}setAll(e){let t=ut.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ni(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ec(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ec(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Cr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(ni(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ke(e,0,ce.min(),ce.min(),ce.min(),Tt.empty(),0)}static newFoundDocument(e,t,r,s){return new Ke(e,1,t,ce.min(),r,s,0)}static newNoDocument(e,t){return new Ke(e,2,t,ce.min(),ce.min(),Tt.empty(),0)}static newUnknownDocument(e,t){return new Ke(e,3,t,ce.min(),ce.min(),Tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t){this.position=e,this.inclusive=t}}function Xf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(a.referenceValue),t.key):r=cs(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!un(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t="asc"){this.field=e,this.dir=t}}function K0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{}class Be extends vm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new J0(e,t,r):t==="array-contains"?new Z0(e,r):t==="in"?new eR(e,r):t==="not-in"?new tR(e,r):t==="array-contains-any"?new nR(e,r):new Be(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Y0(e,r):new X0(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(cs(t,this.value)):t!==null&&sr(this.value)===sr(t)&&this.matchesComparison(cs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends vm{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Gt(e,t)}matches(e){return Em(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Em(n){return n.op==="and"}function Tm(n){return Q0(n)&&Em(n)}function Q0(n){for(const e of n.filters)if(e instanceof Gt)return!1;return!0}function Xc(n){if(n instanceof Be)return n.field.canonicalString()+n.op.toString()+ls(n.value);if(Tm(n))return n.filters.map(e=>Xc(e)).join(",");{const e=n.filters.map(t=>Xc(t)).join(",");return`${n.op}(${e})`}}function Im(n,e){return n instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.field.isEqual(s.field)&&un(r.value,s.value)}(n,e):n instanceof Gt?function(r,s){return s instanceof Gt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Im(a,s.filters[c]),!0):!1}(n,e):void re(19439)}function wm(n){return n instanceof Be?function(t){return`${t.field.canonicalString()} ${t.op} ${ls(t.value)}`}(n):n instanceof Gt?function(t){return t.op.toString()+" {"+t.getFilters().map(wm).join(" ,")+"}"}(n):"Filter"}class J0 extends Be{constructor(e,t,r){super(e,t,r),this.key=ne.fromName(r.referenceValue)}matches(e){const t=ne.comparator(e.key,this.key);return this.matchesComparison(t)}}class Y0 extends Be{constructor(e,t){super(e,"in",t),this.keys=Am("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class X0 extends Be{constructor(e,t){super(e,"not-in",t),this.keys=Am("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Am(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ne.fromName(r.referenceValue))}class Z0 extends Be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Hl(t)&&Ei(t.arrayValue,this.value)}}class eR extends Be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ei(this.value.arrayValue,t)}}class tR extends Be{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ei(this.value.arrayValue,t)}}class nR extends Be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Hl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ei(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function ed(n,e=null,t=[],r=[],s=null,i=null,a=null){return new rR(n,e,t,r,s,i,a)}function zl(n){const e=me(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Xc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Oi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ls(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ls(r)).join(",")),e.Pe=t}return e.Pe}function Wl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!K0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Im(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Zf(n.startAt,e.startAt)&&Zf(n.endAt,e.endAt)}function Zc(n){return ne.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function sR(n,e,t,r,s,i,a,c){return new Ni(n,e,t,r,s,i,a,c)}function Rm(n){return new Ni(n)}function td(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bm(n){return n.collectionGroup!==null}function ri(n){const e=me(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new We(ut.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Qo(i,r))}),t.has(ut.keyField().canonicalString())||e.Te.push(new Qo(ut.keyField(),r))}return e.Te}function sn(n){const e=me(n);return e.Ie||(e.Ie=iR(e,ri(n))),e.Ie}function iR(n,e){if(n.limitType==="F")return ed(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qo(s.field,i)});const t=n.endAt?new Ko(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ko(n.startAt.position,n.startAt.inclusive):null;return ed(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function el(n,e){const t=n.filters.concat([e]);return new Ni(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function tl(n,e,t){return new Ni(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Sa(n,e){return Wl(sn(n),sn(e))&&n.limitType===e.limitType}function Sm(n){return`${zl(sn(n))}|lt:${n.limitType}`}function jr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>wm(s)).join(", ")}]`),Oi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>ls(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>ls(s)).join(",")),`Target(${r})`}(sn(n))}; limitType=${n.limitType})`}function Pa(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ri(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=Xf(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,ri(r),s)||r.endAt&&!function(a,c,l){const h=Xf(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,ri(r),s))}(n,e)}function oR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Pm(n){return(e,t)=>{let r=!1;for(const s of ri(n)){const i=aR(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function aR(n,e,t){const r=n.field.isKeyField()?ne.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?cs(l,h):re(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return re(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return hm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new Fe(ne.comparator);function ir(){return cR}const Cm=new Fe(ne.comparator);function js(...n){let e=Cm;for(const t of n)e=e.insert(t.key,t);return e}function lR(n){let e=Cm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function vr(){return si()}function km(){return si()}function si(){return new kr(n=>n.toString(),(n,e)=>n.isEqual(e))}const uR=new We(ne.comparator);function Ee(...n){let e=uR;for(const t of n)e=e.add(t);return e}const hR=new We(de);function fR(){return hR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zo(e)?"-0":e}}function Vm(n){return{integerValue:""+n}}function dR(n,e){return j0(e)?Vm(e):Gl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(){this._=void 0}}function pR(n,e,t){return n instanceof Jo?function(s,i){const a={fields:{[pm]:{stringValue:dm},[mm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ql(i)&&(i=ba(i)),i&&(a.fields[gm]=i),{mapValue:a}}(t,e):n instanceof Ti?Dm(n,e):n instanceof Ii?Om(n,e):function(s,i){const a=mR(s,i),c=nd(a)+nd(s.Ee);return Yc(a)&&Yc(s.Ee)?Vm(c):Gl(s.serializer,c)}(n,e)}function gR(n,e,t){return n instanceof Ti?Dm(n,e):n instanceof Ii?Om(n,e):t}function mR(n,e){return n instanceof Yo?function(r){return Yc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Jo extends Ca{}class Ti extends Ca{constructor(e){super(),this.elements=e}}function Dm(n,e){const t=Nm(e);for(const r of n.elements)t.some(s=>un(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ii extends Ca{constructor(e){super(),this.elements=e}}function Om(n,e){let t=Nm(e);for(const r of n.elements)t=t.filter(s=>!un(s,r));return{arrayValue:{values:t}}}class Yo extends Ca{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function nd(n){return Le(n.integerValue||n.doubleValue)}function Nm(n){return Hl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function _R(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Ti&&s instanceof Ti||r instanceof Ii&&s instanceof Ii?as(r.elements,s.elements,un):r instanceof Yo&&s instanceof Yo?un(r.Ee,s.Ee):r instanceof Jo&&s instanceof Jo}(n.transform,e.transform)}class Nt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ao(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ka{}function xm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Kl(n.key,Nt.none()):new xi(n.key,n.data,Nt.none());{const t=n.data,r=Tt.empty();let s=new We(ut.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Vr(n.key,r,new xt(s.toArray()),Nt.none())}}function yR(n,e,t){n instanceof xi?function(s,i,a){const c=s.value.clone(),l=sd(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Vr?function(s,i,a){if(!Ao(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=sd(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Mm(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ii(n,e,t,r){return n instanceof xi?function(i,a,c,l){if(!Ao(i.precondition,a))return c;const h=i.value.clone(),f=id(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Vr?function(i,a,c,l){if(!Ao(i.precondition,a))return c;const h=id(i.fieldTransforms,l,a),f=a.data;return f.setAll(Mm(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,c){return Ao(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function rd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&as(r,s,(i,a)=>_R(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class xi extends ka{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vr extends ka{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function sd(n,e,t){const r=new Map;Ce(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,gR(a,c,t[s]))}return r}function id(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,pR(i,a,e))}return r}class Kl extends ka{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lm extends ka{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&yR(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ii(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ii(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=km();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=xm(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ee())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(t,r)=>rd(t,r))&&as(this.baseMutations,e.baseMutations,(t,r)=>rd(t,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,ve;function IR(n){switch(n){case D.OK:return re(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return re(15467,{code:n})}}function Fm(n){if(n===void 0)return Sn("GRPC error has no .code"),D.UNKNOWN;switch(n){case je.OK:return D.OK;case je.CANCELLED:return D.CANCELLED;case je.UNKNOWN:return D.UNKNOWN;case je.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case je.INTERNAL:return D.INTERNAL;case je.UNAVAILABLE:return D.UNAVAILABLE;case je.UNAUTHENTICATED:return D.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case je.NOT_FOUND:return D.NOT_FOUND;case je.ALREADY_EXISTS:return D.ALREADY_EXISTS;case je.PERMISSION_DENIED:return D.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case je.ABORTED:return D.ABORTED;case je.OUT_OF_RANGE:return D.OUT_OF_RANGE;case je.UNIMPLEMENTED:return D.UNIMPLEMENTED;case je.DATA_LOSS:return D.DATA_LOSS;default:return re(39323,{code:n})}}(ve=je||(je={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=new Qn([4294967295,4294967295],0);function od(n){const e=am().encode(n),t=new Zg;return t.update(e),new Uint8Array(t.digest())}function ad(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qn([t,r],0),new Qn([s,i],0)]}class Ql{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Bs(`Invalid padding: ${t}`);if(r<0)throw new Bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Qn.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Qn.fromNumber(r)));return s.compare(wR)===1&&(s=new Qn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=od(e),[r,s]=ad(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ql(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.fe===0)return;const t=od(e),[r,s]=ad(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Mi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Va(ce.min(),s,new Fe(de),ir(),Ee())}}class Mi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Mi(r,t,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Um{constructor(e,t){this.targetId=e,this.De=t}}class jm{constructor(e,t,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class cd{constructor(){this.ve=0,this.Ce=ld(),this.Fe=nt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ee(),t=Ee(),r=Ee();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:re(38017,{changeType:i})}}),new Mi(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=ld()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ce(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class AR{constructor(e){this.We=e,this.Ge=new Map,this.ze=ir(),this.je=lo(),this.Je=lo(),this.He=new Fe(de)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:re(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,s)=>{this.nt(s)&&t(s)})}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Zc(i))if(r===0){const a=new ne(i.path);this.Xe(t,a,Ke.newNoDocument(a,ce.min()))}else Ce(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),l=c?this.ut(c,e,a):1;if(l!==0){this.rt(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=rr(r).toUint8Array()}catch(l){if(l instanceof fm)return er("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ql(a,s,i)}catch(l){return er(l instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)}),s}Pt(e){const t=new Map;this.Ge.forEach((i,a)=>{const c=this.st(a);if(c){if(i.current&&Zc(c.target)){const l=new ne(c.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,Ke.newNoDocument(l,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}});let r=Ee();this.Je.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.st(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ze.forEach((i,a)=>a.setReadTime(e));const s=new Va(e,t,this.He,this.ze,r);return this.ze=ir(),this.je=lo(),this.Je=lo(),this.He=new Fe(de),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new cd,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new We(de),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new We(de),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||X("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new cd),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function lo(){return new Fe(ne.comparator)}function ld(){return new Fe(ne.comparator)}const RR={asc:"ASCENDING",desc:"DESCENDING"},bR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SR={and:"AND",or:"OR"};class PR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nl(n,e){return n.useProto3Json||Oi(e)?e:{value:e}}function Xo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function CR(n,e){return Xo(n,e.toTimestamp())}function In(n){return Ce(!!n,49232),ce.fromTimestamp(function(t){const r=nr(t);return new Oe(r.seconds,r.nanos)}(n))}function Jl(n,e){return rl(n,e).canonicalString()}function rl(n,e){const t=function(s){return new be(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function $m(n){const e=be.fromString(n);return Ce(Gm(e),10190,{key:e.toString()}),e}function Zo(n,e){return Jl(n.databaseId,e.path)}function oi(n,e){const t=$m(e);if(t.get(1)!==n.databaseId.projectId)throw new J(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new J(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ne(Hm(t))}function qm(n,e){return Jl(n.databaseId,e)}function kR(n){const e=$m(n);return e.length===4?be.emptyPath():Hm(e)}function ud(n){return new be(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hm(n){return Ce(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function hd(n,e,t){return{name:Zo(n,e),fields:t.value.mapValue.fields}}function VR(n,e){return"found"in e?function(r,s){Ce(!!s.found,43571),s.found.name,s.found.updateTime;const i=oi(r,s.found.name),a=In(s.found.updateTime),c=s.found.createTime?In(s.found.createTime):ce.min(),l=new Tt({mapValue:{fields:s.found.fields}});return Ke.newFoundDocument(i,a,c,l)}(n,e):"missing"in e?function(r,s){Ce(!!s.missing,3894),Ce(!!s.readTime,22933);const i=oi(r,s.missing),a=In(s.readTime);return Ke.newNoDocument(i,a)}(n,e):re(7234,{result:e})}function DR(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:re(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ce(f===void 0||typeof f=="string",58123),nt.fromBase64String(f||"")):(Ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),nt.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?D.UNKNOWN:Fm(h.code);return new J(f,h.message||"")}(a);t=new jm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=oi(n,r.document.name),i=In(r.document.updateTime),a=r.document.createTime?In(r.document.createTime):ce.min(),c=new Tt({mapValue:{fields:r.document.fields}}),l=Ke.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Ro(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=oi(n,r.document),i=r.readTime?In(r.readTime):ce.min(),a=Ke.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Ro([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=oi(n,r.document),i=r.removedTargetIds||[];t=new Ro([],i,s,null)}else{if(!("filter"in e))return re(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new TR(s,i),c=r.targetId;t=new Um(c,a)}}return t}function OR(n,e){let t;if(e instanceof xi)t={update:hd(n,e.key,e.value)};else if(e instanceof Kl)t={delete:Zo(n,e.key)};else if(e instanceof Vr)t={update:hd(n,e.key,e.data),updateMask:BR(e.fieldMask)};else{if(!(e instanceof Lm))return re(16599,{Rt:e.type});t={verify:Zo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Jo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ti)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ii)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Yo)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw re(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:CR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re(27497)}(n,e.precondition)),t}function NR(n,e){return{documents:[qm(n,e.path)]}}function xR(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=qm(n,s);const i=function(h){if(h.length!==0)return Wm(Gt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Br(g.field),direction:FR(g.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=nl(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:t,parent:s}}function MR(n){let e=kR(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ce(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const g=zm(p);return g instanceof Gt&&Tm(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(g=>function(C){return new Qo($r(C.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Oi(g)?null:g}(t.limit));let l=null;t.startAt&&(l=function(p){const g=!!p.before,_=p.values||[];return new Ko(_,g)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new Ko(_,g)}(t.endAt)),sR(e,s,a,i,c,"F",l,h)}function LR(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=$r(t.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=$r(t.unaryFilter.field);return Be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$r(t.unaryFilter.field);return Be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=$r(t.unaryFilter.field);return Be.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return re(61313);default:return re(60726)}}(n):n.fieldFilter!==void 0?function(t){return Be.create($r(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return re(58110);default:return re(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Gt.create(t.compositeFilter.filters.map(r=>zm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re(1026)}}(t.compositeFilter.op))}(n):re(30097,{filter:n})}function FR(n){return RR[n]}function UR(n){return bR[n]}function jR(n){return SR[n]}function Br(n){return{fieldPath:n.canonicalString()}}function $r(n){return ut.fromServerFormat(n.fieldPath)}function Wm(n){return n instanceof Be?function(t){if(t.op==="=="){if(Yf(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NAN"}};if(Jf(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Yf(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NOT_NAN"}};if(Jf(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Br(t.field),op:UR(t.op),value:t.value}}}(n):n instanceof Gt?function(t){const r=t.getFilters().map(s=>Wm(s));return r.length===1?r[0]:{compositeFilter:{op:jR(t.op),filters:r}}}(n):re(54877,{filter:n})}function BR(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Gm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t,r,s,i=ce.min(),a=ce.min(),c=nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.gt=e}}function qR(n){const e=MR({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?tl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.Dn=new zR}addToCollectionParentIndex(e,t){return this.Dn.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(tr.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(tr.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class zR{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new We(be.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new We(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Km=41943040;class Et{static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(Km,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new us(0)}static ur(){return new us(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="LruGarbageCollector",WR=1048576;function pd([n,e],[t,r]){const s=de(n,t);return s===0?de(e,r):s}class GR{constructor(e){this.Tr=e,this.buffer=new We(pd),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();pd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class KR{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){X(dd,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){_s(t)?X(dd,"Ignoring IndexedDB error during garbage collection: ",t):await Aa(t)}await this.Rr(3e5)})}}class QR{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return M.resolve(Ra.ue);const r=new GR(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(fd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fd):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Ur()<=ge.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function JR(n,e){return new QR(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(){this.changes=new kr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ii(r.mutation,s,xt.empty(),Oe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ee()){const s=vr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=js();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=vr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ee()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=ir();const a=si(),c=function(){return si()}();return t.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Vr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ii(f.mutation,h,f.mutation.getFieldMask(),Oe.now())):a.set(h.key,xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new XR(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const r=si();let s=new Fe((a,c)=>a-c),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||xt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||Ee()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=km();f.forEach(g=>{if(!i.has(g)){const _=xm(t.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return ne.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):M.resolve(vr());let c=_i,l=i;return a.next(h=>M.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Ee())).next(f=>({batchId:c,changes:lR(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ne(t)).next(r=>{let s=js();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=js();return this.indexManager.getCollectionParents(e,i).next(c=>M.forEach(c,l=>{const h=function(p,g){return new Ni(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ke.newInvalidDocument(f)))});let c=js();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ii(f.mutation,h,xt.empty(),Oe.now()),Pa(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return M.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(s){return{id:s.id,version:s.version,createTime:In(s.createTime)}}(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(s){return{name:s.name,query:qR(s.bundledQuery),readTime:In(s.readTime)}}(t)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.overlays=new Fe(ne.comparator),this.kr=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=vr();return M.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.wt(e,t,i)}),M.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const s=vr(),i=t.length+1,a=new ne(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Fe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=vr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=vr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return M.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ER(t,r));let i=this.kr.get(t);i===void 0&&(i=Ee(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.qr=new We(Ge.Qr),this.$r=new We(Ge.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Ge(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Ge(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new ne(new be([])),r=new Ge(t,e),s=new Ge(t,e+1),i=[];return this.$r.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ne(new be([])),r=new Ge(t,e),s=new Ge(t,e+1);let i=Ee();return this.$r.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ge(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ne.comparator(e.key,t.key)||de(e.Hr,t.Hr)}static Ur(e,t){return de(e.Hr,t.Hr)||ne.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new We(Ge.Qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new vR(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new Ge(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?U0:this.er-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ge(t,0),s=new Ge(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],a=>{const c=this.Zr(a.Hr);i.push(c)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new We(de);return t.forEach(s=>{const i=new Ge(s,0),a=new Ge(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],c=>{r=r.add(c.Hr)})}),M.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const a=new Ge(new ne(i),0);let c=new We(de);return this.Yr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)},a),M.resolve(this.ei(c))}ei(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ce(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return M.forEach(t.mutations,s=>{const i=new Ge(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new Ge(t,0),s=this.Yr.firstAfterOrEqual(r);return M.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.ni=e,this.docs=function(){return new Fe(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():Ke.newInvalidDocument(t))}getEntries(e,t){let r=ir();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ke.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=ir();const a=t.path,c=new ne(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||x0(N0(f),r)<=0||(s.has(f.key)||Pa(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,t,r,s){re(9500)}ri(e,t){return M.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ib(this)}getSize(e){return M.resolve(this.size)}}class ib extends YR{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),M.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.persistence=e,this.ii=new kr(t=>zl(t),Wl),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.si=0,this.oi=new Yl,this.targetCount=0,this._i=us.ar()}forEachTarget(e,t){return this.ii.forEach((r,s)=>t(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),M.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new us(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.hr(t),M.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),M.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ra(0),this.ci=!1,this.ci=!0,this.li=new nb,this.referenceDelegate=e(this),this.hi=new ob(this),this.indexManager=new HR,this.remoteDocumentCache=function(s){return new sb(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new $R(t),this.Ti=new eb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new rb(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){X("MemoryPersistence","Starting transaction:",e);const s=new ab(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return M.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class ab extends L0{constructor(e){super(),this.currentSequenceNumber=e}}class Xl{constructor(e){this.persistence=e,this.Ai=new Yl,this.Ri=null}static Vi(e){return new Xl(e)}get mi(){if(this.Ri)return this.Ri;throw re(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),M.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.mi,r=>{const s=ne.fromPath(r);return this.fi(e,s).next(i=>{i||t.removeEntry(s,ce.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return M.or([()=>M.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ea{constructor(e,t){this.persistence=e,this.gi=new kr(r=>B0(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=JR(this,t)}static Vi(e,t){return new ea(e,t)}Ii(){}di(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return M.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?M.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,a=>this.Sr(e,a,t).next(c=>{c||(r++,i.removeEntry(a,ce.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),M.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=wo(e.data.value)),t}Sr(e,t,r){return M.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=Ee(),s=Ee();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return HT()?8:F0(dt())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ys(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new cb;return this.ws(e,t,a).next(c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)})}).next(()=>i.result)}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Ur()<=ge.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",jr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Ur()<=ge.DEBUG&&X("QueryEngine","Query:",jr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ur()<=ge.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",jr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(t))):M.resolve())}ps(e,t){if(td(t))return M.resolve(null);let r=sn(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=tl(t,null,"F"),r=sn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Ee(...i);return this.gs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.bs(t,c);return this.Ds(t,h,a,l.readTime)?this.ps(e,tl(t,null,"F")):this.vs(e,h,t,l)}))})))}ys(e,t,r,s){return td(t)||s.isEqual(ce.min())?M.resolve(null):this.gs.getDocuments(e,r).next(i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?M.resolve(null):(Ur()<=ge.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jr(t)),this.vs(e,a,t,O0(s,_i)).next(c=>c))})}bs(e,t){let r=new We(Pm(e));return t.forEach((s,i)=>{Pa(e,i)&&(r=r.add(i))}),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Ur()<=ge.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",jr(t)),this.gs.getDocumentsMatchingQuery(e,t,tr.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="LocalStore",ub=3e8;class hb{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Fe(de),this.Ms=new kr(i=>zl(i),Wl),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function fb(n,e,t,r){return new hb(n,e,t,r)}async function Jm(n,e){const t=me(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=Ee();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(h=>({Bs:h,removedBatchIds:a,addedBatchIds:c}))})})}function Ym(n){const e=me(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function db(n,e){const t=me(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(t.hi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.hi.addMatchingKeys(i,f.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(nt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(V,L,W){return V.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=ub?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(g,_,f)&&c.push(t.hi.updateTargetData(i,_))});let l=ir(),h=Ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(pb(i,a,e.documentUpdates).next(f=>{l=f.Ls,h=f.ks})),!r.isEqual(ce.min())){const f=t.hi.getLastRemoteSnapshotVersion(i).next(p=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return M.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.Fs=s,i))}function pb(n,e,t){let r=Ee(),s=Ee();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=ir();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):X(eu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ls:a,ks:s}})}function gb(n,e){const t=me(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.hi.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):t.hi.allocateTargetId(r).next(a=>(s=new Hn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function sl(n,e,t){const r=me(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!_s(a))throw a;X(eu,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function gd(n,e,t){const r=me(n);let s=ce.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const p=me(l),g=p.Ms.get(f);return g!==void 0?M.resolve(p.Fs.get(g)):p.hi.getTargetData(h,f)}(r,a,sn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:ce.min(),t?i:Ee())).next(c=>(mb(r,oR(e),c),{documents:c,qs:i})))}function mb(n,e,t){let r=n.xs.get(e)||ce.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.xs.set(e,r)}class md{constructor(){this.activeTargetIds=fR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _b{constructor(){this.Fo=new md,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new md,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="ConnectivityMonitor";class yd{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){X(_d,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){X(_d,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo=null;function il(){return uo===null?uo=function(){return 268435456+Math.round(2147483648*Math.random())}():uo++,"0x"+uo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="RestConnection",vb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Eb{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Wo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=il(),c=this.Go(e,t.toUriEncodedString());X(Tc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:h}=new URL(c),f=ds(h);return this.jo(e,c,l,r,f).then(p=>(X(Tc,`Received RPC '${e}' ${a}: `,p),p),p=>{throw er(Tc,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p})}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ms}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,t){const r=vb[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class Ib extends Eb{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=il();return new Promise((c,l)=>{const h=new em;h.setWithCredentials(!0),h.listenOnce(tm.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Io.NO_ERROR:const p=h.getResponseJson();X(ot,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case Io.TIMEOUT:X(ot,`RPC '${e}' ${a} timed out`),l(new J(D.DEADLINE_EXCEEDED,"Request time out"));break;case Io.HTTP_ERROR:const g=h.getStatus();if(X(ot,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let _=h.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_?.error;if(C&&C.status&&C.message){const V=function(W){const j=W.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(j)>=0?j:D.UNKNOWN}(C.status);l(new J(V,C.message))}else l(new J(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new J(D.UNAVAILABLE,"Connection failed."));break;default:re(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{X(ot,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);X(ot,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}P_(e,t,r){const s=il(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=sm(),c=rm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(ot,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=a.createWebChannel(f,l);this.T_(p);let g=!1,_=!1;const C=new Tb({Ho:L=>{_?X(ot,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(g||(X(ot,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(ot,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},Yo:()=>p.close()}),V=(L,W,j)=>{L.listen(W,$=>{try{j($)}catch(q){setTimeout(()=>{throw q},0)}})};return V(p,Us.EventType.OPEN,()=>{_||(X(ot,`RPC '${e}' stream ${s} transport opened.`),C.s_())}),V(p,Us.EventType.CLOSE,()=>{_||(_=!0,X(ot,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(p))}),V(p,Us.EventType.ERROR,L=>{_||(_=!0,er(ot,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),C.__(new J(D.UNAVAILABLE,"The operation could not be completed")))}),V(p,Us.EventType.MESSAGE,L=>{var W;if(!_){const j=L.data[0];Ce(!!j,16349);const $=j,q=$?.error||((W=$[0])===null||W===void 0?void 0:W.error);if(q){X(ot,`RPC '${e}' stream ${s} received error:`,q);const he=q.status;let fe=function(I){const A=je[I];if(A!==void 0)return Fm(A)}(he),w=q.message;fe===void 0&&(fe=D.INTERNAL,w="Unknown error status: "+he+" with message "+q.message),_=!0,C.__(new J(fe,w)),p.close()}else X(ot,`RPC '${e}' stream ${s} received:`,j),C.a_(j)}}),V(c,nm.STAT_EVENT,L=>{L.stat===Kc.PROXY?X(ot,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===Kc.NOPROXY&&X(ot,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.o_()},0),C}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function Ic(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n){return new PR(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="PersistentStream";class wb{constructor(e,t,r,s,i,a,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new tu(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(Sn(t.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===t&&this.W_(r,s)},r=>{e(()=>{const s=new J(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return X(vd,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(X(vd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ab extends wb{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=DR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ce.min():a.readTime?In(a.readTime):ce.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=ud(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=Zc(l)?{documents:NR(i,l)}:{query:xR(i,l).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Bm(i,a.resumeToken);const h=nl(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ce.min())>0){c.readTime=Xo(i,a.snapshotVersion.toTimestamp());const h=nl(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=LR(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=ud(this.serializer),t.removeTarget=e,this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{}class bb extends Rb{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new J(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,rl(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(D.UNKNOWN,i.toString())})}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Jo(e,rl(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new J(D.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Sb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Sn(t),this._a=!1):X("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="RemoteStore";class Pb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{Fi(this)&&(X(hs,"Restarting streams for network reachability change."),await async function(l){const h=me(l);h.Ia.add(4),await Li(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Oa(h)}(this))})}),this.Aa=new Sb(r,s)}}async function Oa(n){if(Fi(n))for(const e of n.da)await e(!0)}async function Li(n){for(const e of n.da)await e(!1)}function Xm(n,e){const t=me(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),iu(t)?su(t):ys(t).x_()&&ru(t,e))}function nu(n,e){const t=me(n),r=ys(t);t.Ta.delete(e),r.x_()&&Zm(t,e),t.Ta.size===0&&(r.x_()?r.B_():Fi(t)&&t.Aa.set("Unknown"))}function ru(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ys(n).H_(e)}function Zm(n,e){n.Ra.$e(e),ys(n).Y_(e)}function su(n){n.Ra=new AR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ys(n).start(),n.Aa.aa()}function iu(n){return Fi(n)&&!ys(n).M_()&&n.Ta.size>0}function Fi(n){return me(n).Ia.size===0}function e_(n){n.Ra=void 0}async function Cb(n){n.Aa.set("Online")}async function kb(n){n.Ta.forEach((e,t)=>{ru(n,e)})}async function Vb(n,e){e_(n),iu(n)?(n.Aa.la(e),su(n)):n.Aa.set("Unknown")}async function Db(n,e,t){if(n.Aa.set("Online"),e instanceof jm&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))}(n,e)}catch(r){X(hs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ed(n,r)}else if(e instanceof Ro?n.Ra.Ye(e):e instanceof Um?n.Ra.it(e):n.Ra.et(e),!t.isEqual(ce.min()))try{const r=await Ym(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ta.get(h);f&&i.Ta.set(h,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Ta.get(l);if(!f)return;i.Ta.set(l,f.withResumeToken(nt.EMPTY_BYTE_STRING,f.snapshotVersion)),Zm(i,l);const p=new Hn(f.target,l,h,f.sequenceNumber);ru(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){X(hs,"Failed to raise snapshot:",r),await Ed(n,r)}}async function Ed(n,e,t){if(!_s(e))throw e;n.Ia.add(1),await Li(n),n.Aa.set("Offline"),t||(t=()=>Ym(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{X(hs,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Oa(n)})}async function Td(n,e){const t=me(n);t.asyncQueue.verifyOperationInProgress(),X(hs,"RemoteStore received new credentials");const r=Fi(t);t.Ia.add(3),await Li(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Oa(t)}async function Ob(n,e){const t=me(n);e?(t.Ia.delete(2),await Oa(t)):e||(t.Ia.add(2),await Li(t),t.Aa.set("Unknown"))}function ys(n){return n.Va||(n.Va=function(t,r,s){const i=me(t);return i.ia(),new Ab(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:Cb.bind(null,n),e_:kb.bind(null,n),n_:Vb.bind(null,n),J_:Db.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),iu(n)?su(n):n.Aa.set("Unknown")):(await n.Va.stop(),e_(n))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new ou(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function t_(n,e){if(Sn("AsyncQueue",`${e}: ${n}`),_s(n))return new J(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{static emptySet(e){return new es(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ne.comparator(t.key,r.key):(t,r)=>ne.comparator(t.key,r.key),this.keyedMap=js(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this.fa=new Fe(ne.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):re(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class fs{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new fs(e,t,es.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class xb{constructor(){this.queries=wd(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=me(t),i=s.queries;s.queries=wd(),i.forEach((a,c)=>{for(const l of c.wa)l.onError(r)})})(this,new J(D.ABORTED,"Firestore shutting down"))}}function wd(){return new kr(n=>Sm(n),Sa)}async function Mb(n,e){const t=me(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new Nb,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=t_(a,`Initialization of query '${jr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&au(t)}async function Lb(n,e){const t=me(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Fb(n,e){const t=me(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&au(t)}function Ub(n,e,t){const r=me(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function au(n){n.Da.forEach(e=>{e.next()})}var ol,Ad;(Ad=ol||(ol={})).Fa="default",Ad.Cache="cache";class jb{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ol.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.key=e}}class r_{constructor(e){this.key=e}}class Bb{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ee(),this.mutatedKeys=Ee(),this.Xa=Pm(e),this.eu=new es(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Id,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),_=Pa(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),V=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let L=!1;g&&_?g.data.isEqual(_.data)?C!==V&&(r.track({type:3,doc:_}),L=!0):this.iu(g,_)||(r.track({type:2,doc:_}),L=!0,(l&&this.Xa(_,l)>0||h&&this.Xa(_,h)<0)&&(c=!0)):!g&&_?(r.track({type:0,doc:_}),L=!0):g&&!_&&(r.track({type:1,doc:g}),L=!0,(l||h)&&(c=!0)),L&&(_?(a=a.add(_),i=V?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((f,p)=>function(_,C){const V=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re(20277,{At:L})}};return V(_)-V(C)}(f.type,p.type)||this.Xa(f.doc,p.doc)),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,h=l!==this.Ya;return this.Ya=l,a.length!==0||h?{snapshot:new fs(this.query,e.eu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Id,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ee(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new r_(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new n_(r))}),t}uu(e){this.Ha=e.qs,this.Za=Ee();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return fs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const cu="SyncEngine";class $b{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class qb{constructor(e){this.key=e,this.lu=!1}}class Hb{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new kr(c=>Sm(c),Sa),this.Tu=new Map,this.Iu=new Set,this.du=new Fe(ne.comparator),this.Eu=new Map,this.Au=new Yl,this.Ru={},this.Vu=new Map,this.mu=us.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function zb(n,e,t=!0){const r=c_(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await s_(r,e,t,!0),s}async function Wb(n,e){const t=c_(n);await s_(t,e,!0,!1)}async function s_(n,e,t,r){const s=await gb(n.localStore,sn(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Gb(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Xm(n.remoteStore,s),c}async function Gb(n,e,t,r,s){n.gu=(p,g,_)=>async function(V,L,W,j){let $=L.view.nu(W);$.Ds&&($=await gd(V.localStore,L.query,!1).then(({documents:w})=>L.view.nu(w,$)));const q=j&&j.targetChanges.get(L.targetId),he=j&&j.targetMismatches.get(L.targetId)!=null,fe=L.view.applyChanges($,V.isPrimaryClient,q,he);return bd(V,L.targetId,fe._u),fe.snapshot}(n,p,g,_);const i=await gd(n.localStore,e,!0),a=new Bb(e,i.qs),c=a.nu(i.documents),l=Mi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);bd(n,t,h._u);const f=new $b(e,t,a);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function Kb(n,e,t){const r=me(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(a=>!Sa(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await sl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&nu(r.remoteStore,s.targetId),al(r,s.targetId)}).catch(Aa)):(al(r,s.targetId),await sl(r.localStore,s.targetId,!0))}async function Qb(n,e){const t=me(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),nu(t.remoteStore,r.targetId))}async function i_(n,e){const t=me(n);try{const r=await db(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Eu.get(i);a&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Ce(a.lu,14607):s.removedDocuments.size>0&&(Ce(a.lu,42227),a.lu=!1))}),await a_(t,r,e)}catch(r){await Aa(r)}}function Rd(n,e,t){const r=me(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=me(a);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.wa)g.va(c)&&(h=!0)}),h&&au(l)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Jb(n,e,t){const r=me(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Fe(ne.comparator);a=a.insert(i,Ke.newNoDocument(i,ce.min()));const c=Ee().add(i),l=new Va(ce.min(),new Map,new Fe(de),a,c);await i_(r,l),r.du=r.du.remove(i),r.Eu.delete(e),lu(r)}else await sl(r.localStore,e,!1).then(()=>al(r,e,t)).catch(Aa)}function al(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||o_(n,r)})}function o_(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(nu(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),lu(n))}function bd(n,e,t){for(const r of t)r instanceof n_?(n.Au.addReference(r.key,e),Yb(n,r)):r instanceof r_?(X(cu,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||o_(n,r.key)):re(19791,{yu:r})}function Yb(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(X(cu,"New document in limbo: "+t),n.Iu.add(r),lu(n))}function lu(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ne(be.fromString(e)),r=n.mu.next();n.Eu.set(r,new qb(t)),n.du=n.du.insert(t,r),Xm(n.remoteStore,new Hn(sn(Rm(t.path)),r,"TargetPurposeLimboResolution",Ra.ue))}}async function a_(n,e,t){const r=me(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((c,l)=>{a.push(r.gu(l,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t?.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Zl.Es(l.targetId,h);i.push(p)}}))}),await Promise.all(a),r.hu.J_(s),await async function(l,h){const f=me(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,g=>M.forEach(g.Is,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>M.forEach(g.ds,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!_s(p))throw p;X(eu,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=f.Fs.get(g),C=_.snapshotVersion,V=_.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(g,V)}}}(r.localStore,i))}async function Xb(n,e){const t=me(n);if(!t.currentUser.isEqual(e)){X(cu,"User change. New user:",e.toKey());const r=await Jm(t.localStore,e);t.currentUser=e,function(i,a){i.Vu.forEach(c=>{c.forEach(l=>{l.reject(new J(D.CANCELLED,a))})}),i.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await a_(t,r.Bs)}}function Zb(n,e){const t=me(n),r=t.Eu.get(e);if(r&&r.lu)return Ee().add(r.key);{let s=Ee();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function c_(n){const e=me(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=i_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jb.bind(null,e),e.hu.J_=Fb.bind(null,e.eventManager),e.hu.pu=Ub.bind(null,e.eventManager),e}class ta{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Da(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return fb(this.persistence,new lb,e.initialUser,this.serializer)}Du(e){return new Qm(Xl.Vi,this.serializer)}bu(e){return new _b}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ta.provider={build:()=>new ta};class eS extends ta{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ce(this.persistence.referenceDelegate instanceof ea,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new KR(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Qm(r=>ea.Vi(r,t),this.serializer)}}class cl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xb.bind(null,this.syncEngine),await Ob(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xb}()}createDatastore(e){const t=Da(e.databaseInfo.databaseId),r=function(i){return new Ib(i)}(e.databaseInfo);return function(i,a,c,l){return new bb(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new Pb(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Rd(this.syncEngine,t,0),function(){return yd.C()?new yd:new yb}())}createSyncEngine(e,t){return function(s,i,a,c,l,h,f){const p=new Hb(s,i,a,c,l,h);return f&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=me(s);X(hs,"RemoteStore shutting down."),i.Ia.add(5),await Li(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}cl.provider={build:()=>new cl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new J(D.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(s,i){const a=me(s),c={documents:i.map(p=>Zo(a.serializer,p))},l=await a.Jo("BatchGetDocuments",a.serializer.databaseId,be.emptyPath(),c,i.length),h=new Map;l.forEach(p=>{const g=VR(a.serializer,p);h.set(g.key.toString(),g)});const f=[];return i.forEach(p=>{const g=h.get(p.toString());Ce(!!g,55234,{key:p}),f.push(g)}),f}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Kl(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const s=ne.fromPath(r);this.mutations.push(new Lm(s,this.precondition(s)))}),await async function(r,s){const i=me(r),a={writes:s.map(c=>OR(i.serializer,c))};await i.Wo("Commit",i.serializer.databaseId,be.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw re(50498,{Wu:e.constructor.name});t=ce.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new J(D.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ce.min())?Nt.exists(!1):Nt.updateTime(t):Nt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ce.min()))throw new J(D.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Nt.updateTime(t)}return Nt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.Gu=r.maxAttempts,this.F_=new tu(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_(async()=>{const e=new nS(this.datastore),t=this.Ju(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Hu(s)}))}).catch(r=>{this.Hu(r)})})}Ju(e){try{const t=this.updateFunction(e);return!Oi(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget(()=>(this.ju(),Promise.resolve()))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!IR(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="FirestoreClient";class sS{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=$l.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{X(or,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(X(or,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=t_(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wc(n,e){n.asyncQueue.verifyOperationInProgress(),X(or,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Jm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{er("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{X("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{er("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=e}async function Sd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await iS(n);X(or,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Td(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Td(e.remoteStore,s)),n._onlineComponents=e}async function iS(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){X(or,"Using user provided OfflineComponentProvider");try{await wc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;er("Error using user provided cache. Falling back to memory cache: "+t),await wc(n,new ta)}}else X(or,"Using default OfflineComponentProvider"),await wc(n,new eS(void 0));return n._offlineComponents}async function l_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(X(or,"Using user provided OnlineComponentProvider"),await Sd(n,n._uninitializedComponentsProvider._online)):(X(or,"Using default OnlineComponentProvider"),await Sd(n,new cl))),n._onlineComponents}function oS(n){return l_(n).then(e=>e.datastore)}async function aS(n){const e=await l_(n),t=e.eventManager;return t.onListen=zb.bind(null,e.syncEngine),t.onUnlisten=Kb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Wb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Qb.bind(null,e.syncEngine),t}function cS(n,e,t={}){const r=new Jn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new tS({next:g=>{f.Ou(),a.enqueueAndForget(()=>Lb(i,p)),g.fromCache&&l.source==="server"?h.reject(new J(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new jb(c,f,{includeMetadataChanges:!0,ka:!0});return Mb(i,p)}(await aS(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="firestore.googleapis.com",Cd=!0;class kd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=h_,this.ssl=Cd}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Cd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Km;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<WR)throw new J(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}D0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=u_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Na{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new w0;switch(r.type){case"firstParty":return new S0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Pd.get(t);r&&(X("ComponentProvider","Removing Datastore"),Pd.delete(t),r.terminate())}(this),Promise.resolve()}}function lS(n,e,t,r={}){var s;n=Ho(n,Na);const i=ds(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(hg(`https://${l}`),fg("Firestore",!0)),a.host!==h_&&a.host!==l&&er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!Ir(h,c)&&(n._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=at.MOCK_USER;else{f=xT(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new J(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new at(g)}n._authCredentials=new A0(new om(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vs(this.firestore,e,this._query)}}class ze{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}toJSON(){return{type:ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Di(t,ze._jsonSchema))return new ze(e,r||null,new ne(be.fromString(t.referencePath)))}}ze._jsonSchemaVersion="firestore/documentReference/1.0",ze._jsonSchema={type:$e("string",ze._jsonSchemaVersion),referencePath:$e("string")};class Yn extends vs{constructor(e,t,r){super(e,t,Rm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new ne(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function uS(n,e,...t){if(n=tt(n),cm("collection","path",e),n instanceof Na){const r=be.fromString(e,...t);return Bf(r),new Yn(n,null,r)}{if(!(n instanceof ze||n instanceof Yn))throw new J(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(be.fromString(e,...t));return Bf(r),new Yn(n.firestore,null,r)}}function Vd(n,e,...t){if(n=tt(n),arguments.length===1&&(e=$l.newId()),cm("doc","path",e),n instanceof Na){const r=be.fromString(e,...t);return jf(r),new ze(n,null,new ne(r))}{if(!(n instanceof ze||n instanceof Yn))throw new J(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(be.fromString(e,...t));return jf(r),new ze(n.firestore,n instanceof Yn?n.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="AsyncQueue";class Od{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new tu(this,"async_queue_retry"),this.oc=()=>{const r=Ic();r&&X(Dd,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Ic();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ic();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Jn;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!_s(e))throw e;X(Dd,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Sn("INTERNAL UNHANDLED ERROR: ",Nd(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=ou.createAndSchedule(this,e,t,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&re(47125,{hc:Nd(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Nd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class uu extends Na{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Od,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Od(e),this._firestoreClient=void 0,await e}}}function hS(n,e){const t=typeof n=="object"?n:mg(),r=typeof n=="string"?n:Wo,s=Vl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=OT("firestore");i&&lS(s,...i)}return s}function f_(n){if(n._terminated)throw new J(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||fS(n),n._firestoreClient}function fS(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,h,f){return new H0(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,u_(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new sS(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(nt.fromBase64String(e))}catch(t){throw new J(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rt(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Di(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:$e("string",Rt._jsonSchemaVersion),bytes:$e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:on._jsonSchemaVersion}}static fromJSON(e){if(Di(e,on._jsonSchema))return new on(e.latitude,e.longitude)}}on._jsonSchemaVersion="firestore/geoPoint/1.0",on._jsonSchema={type:$e("string",on._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:an._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Di(e,an._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new an(e.vectorValues);throw new J(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}an._jsonSchemaVersion="firestore/vectorValue/1.0",an._jsonSchema={type:$e("string",an._jsonSchemaVersion),vectorValues:$e("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=/^__.*__$/;class pS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,t,this.fieldTransforms):new xi(e,this.data,t,this.fieldTransforms)}}class d_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Vr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function p_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re(40011,{Ec:n})}}class fu{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new fu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return na(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(p_(this.Ec)&&dS.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class gS{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Da(e)}Dc(e,t,r,s=!1){return new fu({Ec:e,methodName:t,bc:r,path:ut.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function g_(n){const e=n._freezeSettings(),t=Da(n._databaseId);return new gS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function mS(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);du("Data must be an object, but it was:",a,r);const c=m_(r,a);let l,h;if(i.merge)l=new xt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=ll(e,p,t);if(!a.contains(g))throw new J(D.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);y_(f,g)||f.push(g)}l=new xt(f),h=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=a.fieldTransforms;return new pS(new Tt(c),l,h)}class Ma extends hu{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ma}}function _S(n,e,t,r){const s=n.Dc(1,e,t);du("Data must be an object, but it was:",s,r);const i=[],a=Tt.empty();Cr(r,(l,h)=>{const f=pu(e,l,t);h=tt(h);const p=s.gc(f);if(h instanceof Ma)i.push(f);else{const g=Ui(h,p);g!=null&&(i.push(f),a.set(f,g))}});const c=new xt(i);return new d_(a,c,s.fieldTransforms)}function yS(n,e,t,r,s,i){const a=n.Dc(1,e,t),c=[ll(e,r,t)],l=[s];if(i.length%2!=0)throw new J(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(ll(e,i[g])),l.push(i[g+1]);const h=[],f=Tt.empty();for(let g=c.length-1;g>=0;--g)if(!y_(h,c[g])){const _=c[g];let C=l[g];C=tt(C);const V=a.gc(_);if(C instanceof Ma)h.push(_);else{const L=Ui(C,V);L!=null&&(h.push(_),f.set(_,L))}}const p=new xt(h);return new d_(f,p,a.fieldTransforms)}function vS(n,e,t,r=!1){return Ui(t,n.Dc(r?4:3,e))}function Ui(n,e){if(__(n=tt(n)))return du("Unsupported field value:",e,n),m_(n,e);if(n instanceof hu)return function(r,s){if(!p_(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Ui(c,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:Xo(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xo(s.serializer,i)}}if(r instanceof on)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:Bm(s.serializer,r._byteString)};if(r instanceof ze){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Jl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof an)return function(a,c){return{mapValue:{fields:{[_m]:{stringValue:ym},[Go]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return Gl(c.serializer,h)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${wa(r)}`)}(n,e)}function m_(n,e){const t={};return hm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(n,(r,s)=>{const i=Ui(s,e.Vc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function __(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Oe||n instanceof on||n instanceof Rt||n instanceof ze||n instanceof hu||n instanceof an)}function du(n,e,t){if(!__(t)||!lm(t)){const r=wa(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function ll(n,e,t){if((e=tt(e))instanceof xa)return e._internalPath;if(typeof e=="string")return pu(n,e);throw na("Field path arguments must be of type string or ",n,!1,void 0,t)}const ES=new RegExp("[~\\*/\\[\\]]");function pu(n,e,t){if(e.search(ES)>=0)throw na(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new xa(...e.split("."))._internalPath}catch{throw na(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function na(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new J(D.INVALID_ARGUMENT,c+n+l)}function y_(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class TS extends ra{data(){return super.data()}}function gu(n,e){return typeof e=="string"?pu(n,e):e instanceof xa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new J(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mu{}class wS extends mu{}function AS(n,e,...t){let r=[];e instanceof mu&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof _u).length,c=i.filter(l=>l instanceof La).length;if(a>1||a>0&&c>0)throw new J(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class La extends wS{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new La(e,t,r)}_apply(e){const t=this._parse(e);return v_(e._query,t),new vs(e.firestore,e.converter,el(e._query,t))}_parse(e){const t=g_(e.firestore);return function(i,a,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Md(p,f);const C=[];for(const V of p)C.push(xd(l,i,V));g={arrayValue:{values:C}}}else g=xd(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Md(p,f),g=vS(c,a,p,f==="in"||f==="not-in");return Be.create(h,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function RS(n,e,t){const r=e,s=gu("where",n);return La._create(s,r,t)}class _u extends mu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new _u(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Gt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)v_(a,l),a=el(a,l)}(e._query,t),new vs(e.firestore,e.converter,el(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function xd(n,e,t){if(typeof(t=tt(t))=="string"){if(t==="")throw new J(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bm(e)&&t.indexOf("/")!==-1)throw new J(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(be.fromString(t));if(!ne.isDocumentKey(r))throw new J(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Qf(n,new ne(r))}if(t instanceof ze)return Qf(n,t._key);throw new J(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wa(t)}.`)}function Md(n,e){if(!Array.isArray(n)||n.length===0)throw new J(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function v_(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new J(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class E_{convertValue(e,t="none"){switch(sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw re(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Cr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Go].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Le(a.doubleValue));return new an(i)}convertGeoPoint(e){return new on(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ba(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(yi(e));default:return null}}convertTimestamp(e){const t=nr(e);return new Oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=be.fromString(e);Ce(Gm(r),9688,{name:e});const s=new vi(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(t)||Sn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class SS extends E_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,t)}}class $s{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tr extends ra{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(gu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Tr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Tr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Tr._jsonSchema={type:$e("string",Tr._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class bo extends Tr{data(e={}){return super.data(e)}}class ts{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new $s(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new bo(this._firestore,this._userDataWriter,r.key,r,new $s(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new $s(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new $s(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:PS(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ts._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$l.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function PS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:n})}}ts._jsonSchemaVersion="firestore/querySnapshot/1.0",ts._jsonSchema={type:$e("string",ts._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};class T_ extends E_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,t)}}function CS(n){n=Ho(n,vs);const e=Ho(n.firestore,uu),t=f_(e),r=new T_(e);return IS(n._query),cS(t,n._query).then(s=>new ts(e,r,n,s))}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS={maxAttempts:5};function qs(n,e){if((n=tt(n)).firestore!==e)throw new J(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=g_(e)}get(e){const t=qs(e,this._firestore),r=new SS(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return re(24041);const i=s[0];if(i.isFoundDocument())return new ra(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new ra(this._firestore,r,t._key,null,t.converter);throw re(18433,{doc:i})})}set(e,t,r){const s=qs(e,this._firestore),i=bS(s.converter,t,r),a=mS(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,a),this}update(e,t,r,...s){const i=qs(e,this._firestore);let a;return a=typeof(t=tt(t))=="string"||t instanceof xa?yS(this._dataReader,"Transaction.update",i._key,t,r,s):_S(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,a),this}delete(e){const t=qs(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS extends VS{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=qs(e,this._firestore),r=new T_(this._firestore);return super.get(e).then(s=>new Tr(this._firestore,r,t._key,s._document,new $s(!1,!1),t.converter))}}function OS(n,e,t){n=Ho(n,uu);const r=Object.assign(Object.assign({},kS),t);return function(i){if(i.maxAttempts<1)throw new J(D.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,a,c){const l=new Jn;return i.asyncQueue.enqueueAndForget(async()=>{const h=await oS(i);new rS(i.asyncQueue,h,c,a,l).zu()}),l.promise}(f_(n),s=>e(new DS(n,s)),r)}(function(e,t=!0){(function(s){ms=s})(ps),os(new wr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new uu(new R0(r.getProvider("auth-internal")),new P0(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vi(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Kn(xf,Mf,e),Kn(xf,Mf,"esm2017")})();const NS={apiKey:"AIzaSyD6dyeVwjB2goQeWx_CTKaI5z6E1z3TD4A",authDomain:"ministry-calendar-35967.firebaseapp.com",projectId:"ministry-calendar-35967",storageBucket:"ministry-calendar-35967.firebasestorage.app",messagingSenderId:"695049435349",appId:"1:695049435349:web:c24f15bd42d4c5ff79ca5c"},I_=gg(NS),ns=T0(I_),ho=hS(I_),xS={style:{color:"red"}},MS={__name:"LoginPage",setup(n){const e=Bt(""),t=Bt(""),r=Bt(""),s=Bt(!1),i=AT();function a(){s.value=!s.value,r.value=""}async function c(){try{await cA(ns,e.value,t.value),i.push("/home")}catch(h){r.value="Ошибка входа: "+h.message}}async function l(){try{const f=(await aA(ns,e.value,t.value)).user;i.push("/home")}catch(h){r.value="Ошибка регистрации: "+h.message}}return(h,f)=>(mn(),mr("div",null,[He("h2",null,jt(s.value?"Регистрация":"Вход"),1),Gs(He("input",{"onUpdate:modelValue":f[0]||(f[0]=p=>e.value=p),placeholder:"Email"},null,512),[[xo,e.value]]),Gs(He("input",{"onUpdate:modelValue":f[1]||(f[1]=p=>t.value=p),type:"password",placeholder:"Пароль"},null,512),[[xo,t.value]]),He("button",{onClick:f[2]||(f[2]=p=>s.value?l():c())},jt(s.value?"Зарегистрироваться":"Войти"),1),He("p",{onClick:a,style:{cursor:"pointer",color:"blue"}},jt(s.value?"Уже есть аккаунт? Войти":"Нет аккаунта? Зарегистрироваться"),1),He("p",xS,jt(r.value),1)]))}},LS={key:0},FS={key:1,style:{color:"green"}},US={key:2,style:{color:"red"}},jS={__name:"HomePage",setup(n){const e=Bt(""),t=Bt(0),r=Bt(!1),s=Bt(""),i=Bt(""),a=Bt([]);async function c(){const p=ns.currentUser;if(!p){a.value=[];return}const g=AS(uS(ho,"ministry"),RS("user_id","==",p.uid)),_=await CS(g);a.value=_.docs.map(C=>({id:C.id,...C.data()}))}yp(async()=>{c()});async function l(){const p=ns.currentUser;if(!p){i.value="Пользователь не авторизован";return}try{await h({comment:e.value,date:Oe.now(),is_credit:r.value,time_in_ministry:t.value,user_id:p.uid}),s.value="Запись добавлена!",e.value="",t.value=0,r.value=!1,i.value="",await c()}catch(g){i.value="Ошибка добавления: "+g.message}}async function h(p){const g=Vd(ho,"counters","ministryCounter");try{await OS(ho,async _=>{const C=await _.get(g);let V=1;C.exists()&&(V=C.data().count+1),_.set(g,{count:V});const L=Vd(ho,"ministry",String(V));_.set(L,p)}),console.log("Добавлена запись с числовым ID")}catch(_){console.error("Ошибка транзакции: ",_)}}async function f(){await signOut(ns),router.push("/")}return(p,g)=>(mn(),mr("div",null,[g[4]||(g[4]=He("h2",null,"Мои записи служения",-1)),He("ul",null,[(mn(!0),mr(Xt,null,tv(a.value,_=>(mn(),mr("li",{key:_.id},jt(_.date.toDate().toLocaleString())+" — "+jt(_.comment)+" — "+jt(_.time_in_ministry)+" мин — Кредит: "+jt(_.is_credit),1))),128))]),a.value.length===0?(mn(),mr("p",LS,"Записей нет")):ac("",!0),g[5]||(g[5]=He("h2",null,"Добавить запись служения",-1)),Gs(He("input",{"onUpdate:modelValue":g[0]||(g[0]=_=>e.value=_),placeholder:"Комментарий"},null,512),[[xo,e.value]]),Gs(He("input",{type:"number","onUpdate:modelValue":g[1]||(g[1]=_=>t.value=_),placeholder:"Время (в минутах)"},null,512),[[xo,t.value,void 0,{number:!0}]]),He("label",null,[Gs(He("input",{type:"checkbox","onUpdate:modelValue":g[2]||(g[2]=_=>r.value=_)},null,512),[[uE,r.value]]),g[3]||(g[3]=jp(" Это кредит? "))]),He("button",{onClick:l},"Добавить"),s.value?(mn(),mr("p",FS,jt(s.value),1)):ac("",!0),i.value?(mn(),mr("p",US,jt(i.value),1)):ac("",!0),g[6]||(g[6]=He("br",null,null,-1)),g[7]||(g[7]=He("br",null,null,-1)),He("button",{onClick:f},"Выйти")]))}},BS=[{path:"/",component:MS},{path:"/home",component:jS,meta:{requiresAuth:!0}}],w_=IT({history:YE("/ministry_calendar/"),routes:BS});w_.beforeEach((n,e,t)=>{const r=ns.currentUser;n.meta.requiresAuth&&!r?t("/"):t()});const A_=pE(EE);A_.use(w_);A_.mount("#app");
