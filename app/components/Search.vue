<script lang="ts" setup>
const searchItem = ref('')
const isSearching = ref(false)
</script>

<template>
<div
class="search"
id="MainHeader"
>
<label 
class="visually-hidden"
for="my-search">Поиск товаров</label>
   <input 
   class="search__input"
   v-model="searchItem"
   placeholder="Kitchen accessories"
   type="text"
   id="my-search"
   >
   <div class="search__icons">
   <Icon
   v-if="isSearching"
   name="eos-icons:loading"
   />
   <UButton
   icon="ph:magnifying-glass"
   name="search"
   aria-label="magnifying glass"
   />
</div>
</div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/base/functions' as *;
.search {
   position: relative;

   &__input {
      width: 100%;
      height: toRem(40);
      padding-inline: toRem(16);
      border-radius: toRem(4);
      border: toRem(2) solid var(--danger-color);
   }

   &__icons {
   height: 100%;
   display: flex;
   align-items: center;
   column-gap: toRem(4);
   position: absolute;
   top: 50%;
   right: 0;
   transform: translateY(-50%)
   }
}


.iconify--eos-icons {
}

</style>