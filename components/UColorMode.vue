<script lang="ts" setup>
function iconName(theme) {
  if (theme === 'system') return 'tv'
  if (theme === 'light') return 'sun'
  if (theme === 'dark') return 'moon'
  return 'mug-hot'
}
</script>

<template>
   <ul class="color-mode">
      <li
      v-for="theme of ['system', 'light', 'dark', 'sepia']"
      :key="theme"
      >
         <button 
         @click="$colorMode.preference = theme"
         class="color-mode__btn-tv"
         type="button"
         >
         <font-awesome :icon="iconName(theme)" />
         </button>
      </li>
   </ul>
 </template>
 
 <style lang="scss">
 body {
   background-color: #fff;
   color: rgba(0,0,0,0.8);
 }
 .dark-mode body {
   background-color: #091a28;
   color: #ebf4f1;
 }
 .sepia-mode body {
   background-color: #f1e7d0;
   color: #433422;
 }
 </style>