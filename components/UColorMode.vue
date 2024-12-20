<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
   <div class="color-mode select-wrapper">
     <select 
     class="color-mode__select select"
     v-model="$colorMode.preference"
     >
       <option class="option" value="system">System</option>
       <option class="option" value="light">Light</option>
       <option class="option" value="dark">Dark</option>
       <option class="option" value="sepia">Sepia</option>
     </select>
   </div>
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

 .color-mode {
  &__select {
     width: toRem(88);
  }
}
 </style>