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
      <li class="color-mode__item"
      v-for="theme of ['system', 'light', 'dark', 'sepia']"
      :key="theme"
      >
         <button
         :class="['color-mode__btn', {
            preferred: !colorMode.unknown && theme === colorMode.preference,
            selected: !colorMode.unknown && theme === colorMode.value,
        }]"
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
   <UButton
   icon="i-ph-coffee"
   />
 </template>
 
 <style lang="scss" scoped>
 .color-mode {
   &__item {
      border: 2px solid grey;
      border-radius: toRem(6);
      margin-block-end: toRem(2);
   }
   &__btn {
      display: flex;
      padding: toRem(2);
         @media (any-hover: hover) {
         &:hover {
            transform: scale(1.2) rotate(-16deg);
         }
      }
      &.preferred {
         .iconify  {
            color: green;
         }
      }
      &.selected {
         .iconify  {
         color: orange;
         }
      }
   }
 }

 .iconify {
   color: yellowgreen;
}
 </style>