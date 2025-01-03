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
   <div class="locale select-wrapper">
      <label
      class="visually-hidden"
      for="my-language">Выбор языка</label>
   <select 
   class="locale__select select"
   v-model="language"
   id="my-language"
   >
      <option 
      class="locale__option option"
      v-for="item in locales"
      :key="item"
      :value="item.code">
   {{ item.name }}
   </option>
   </select>
</div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/base/functions' as *;
.locale {
  &__select {
     width: toRem(45);
  }
}

</style>