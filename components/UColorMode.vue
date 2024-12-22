<script setup>
const colorMode = useColorMode()

function iconName(theme) {
  if (theme === 'system') return 'i-ph-laptop'
  if (theme === 'light') return 'i-ph-sun'
  if (theme === 'dark') return 'i-ph-moon'
  return 'i-ph-coffee'
}

</script>

<template>
   <ul class="color-mode">
      <li
      v-for="theme of ['system', 'light', 'dark', 'sepia']"
      :key="theme"
      >
         <button
         :class="{
            preferred: !colorMode.unknown && theme === colorMode.preference,
            selected: !colorMode.unknown && theme === colorMode.value,
        }"
         @click="colorMode.preference = theme"
         type="button"
         >
         <Icon
          :name="iconName(theme)"
          @click="colorMode.preference = theme"
        />
         </button>
      </li>
   </ul>
 </template>
 
 <style lang="scss" scoped>
 .color-mode {
   li {
      button {
         &.preferred {
            background-color: green;
         }
         &.selected {
            color: red;
         }
      }
   }
 }
 </style>