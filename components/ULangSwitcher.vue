<script lang="ts" setup>
const { locales, locale, setLocale } = useI18n()

const language = computed({
   get: () => locale.value,
   set: (value) => {
      setLocale(value)
   }
})
</script>

<template>
   <div class="locale">
   <select 
   class="locale__select"
   v-model="language"
   >
      <option 
      class="locale__option"
      v-for="item in locales"
      :key="item"
      :value="item.code">
   {{ item.name }}
   </option>
   </select>
</div>
</template>

<style lang="scss" scoped>
.locale {
  position: relative;
  display: flex;
  justify-self: start;

&::before,
  &::after{
     content: '';
     pointer-events: none;
     position: absolute;
     top: toRem(11);
     width: toRem(6);
     height: toRem(2);
     background-color: var(--active-link);
  }
  &::before {
     right: toRem(9);
     transform: rotate(-125deg);
  }
  &::after {
     right: toRem(6);
     transform: rotate(125deg);
  }
  &__select {
     width: toRem(54);
     padding-inline: toRem(4);
     padding-block: toRem(3);
     border: 2px solid var(--active-link);
     border-radius: toEm(8, 18);
     outline: none;
     appearance: none;
     cursor: pointer;
     color: var(--active-link);
  }
  &__option {
   border-radius: toRem(8);
   font-size: toRem(14);
   // @media (any-hover: hover) {
   //    &:hover {
   //       background-color: var(--light-green);
   //    }
   // }

  }
}

</style>