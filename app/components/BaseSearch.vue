<script lang="ts" setup>
const searchItem = ref('')
const isSearching = ref(true)
</script>

<template>
<div
class="search"
>
<form class="search__form" role="search">
<label 
class="visually-hidden"
for="my-search"
>Поиск товаров
</label>
   <input 
   class="search__input"
   v-model="searchItem"
   placeholder="Kitchen accessories"
   type="search"
   id="my-search"
   >
   <Icon
   v-if="isSearching"
   name="eos-icons:loading" />
   <UButton
   icon="ph:magnifying-glass"
   name-class="search"
   aria-label="Поиск"
   />
</form>
<div 
   v-if="false" 
   class="search__products"
   >
   <NuxtLink
   class="search__link"
   to="`/item/1`"
   >
   <NuxtImg 
   class="search__image"
   src="/image/removebg-preview.png"
   alt="image"
   format="webp"
   loading="lazy"
   />
   <span class="search__text">Testing</span>
   <span class="search__price">
      98.99 
      <small>б.р.</small>
   </span>
   </NuxtLink>
</div>
</div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/base' as *;
.search {
   position: relative;

   &__form {
      position: relative;
      height: toRem(36);
      display: flex;
      align-items: center;

      svg {
      position: absolute;
      right: toRem(55);
      font-size: toRem(25);
      color: var(--border-color);
      }
   }

   &__input {
      width: 100%;
      height: 100%;
      padding-inline: toRem(16);
      border-radius: toRem(4) toRem(0) toRem(0) toRem(4);
      border: toRem(2) solid var(--danger-color);
      border-right: none;
   }

   &__products {
   position: absolute;
   width: 100%;
   height: auto;
   border: toRem(4) solid var(--light-color);
   }

   &__link {
   display: flex;
   align-items: center;
   column-gap: toRem(2);
}

&__image {
}

&__text {
   flex: 1 1 auto;
}

&__price {
   }
}

</style>