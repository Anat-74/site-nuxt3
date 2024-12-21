<script lang="ts" setup>

const iconName =  function (theme) {
  if (theme === 'system') return 'tv'
  if (theme === 'light') return 'sun'
  if (theme === 'dark') return 'moon'
  return 'mug-hot'
}

const iconN = [
   { name: 'system', label: 'tv' },
   { name: 'light', label: 'sun' },
   { name: 'dark', label: 'moon' },
   {name: 'sepia', label: 'mug-hot'}
]
const selectedIcon = ref('name')
const changeIcon = (them) => {
   selectedIcon.value = them
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
         type="button"
         >
         <font-awesome 
         :icon="iconName(theme)" />
         </button>
      </li>
   </ul>
 </template>
 
 <style lang="scss" scoped>
 .color-mode {
   li {
      button {
         &.active {
         color: red;
         background-color: green;
      }
      }
   }
 }
 </style>