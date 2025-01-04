<script lang="ts" setup>
const searchItem = ref('')
const isSearching = ref(true)
</script>

<template>
<div
class="search"
id="MainHeader"
>
<search>
<form class="search__form">
<label 
class="visually-hidden"
for="my-search">Поиск товаров</label>
   <input 
   class="search__input"
   v-model="searchItem"
   placeholder="Kitchen accessories"
   type="search"
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
   aria-label="Поиск"
   />
</div>
</form>
</search>
   <div 
   v-if="true" 
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
   width="30"
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
@use '@/assets/scss/base/functions' as *;
//id: MainHeader div
.search {
   position: relative;

   &__form {

   }

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

   &__products {
   position: absolute;
   width: 100%;
   height: auto;
   border: toRem(4) solid var(--white-color);
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

.iconify--eos-icons {
}
</style>