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
   <select 
   class="locale__select select"
   v-model="language"
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
.locale {
  &__select {
     width: toRem(54);
  }
}

</style>