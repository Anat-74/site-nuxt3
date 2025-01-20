<script setup lang="ts">
useSeoMeta({
   title: 'Корзина',
   ogTitle: 'Корзина',
   description: 'Страница корзины сайта',
   ogDescription: 'Страница корзины сайта'
})

const products = [
   { id: 1, title: "Title 1", description: "This is a description", url: "https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148725042.jpg?ga=GA1.1.239409238.1713800473&semt=ais_hybrid", price: 15899 },
   { id: 2, title: "Title 2", description: "This is a description", url: "https://img.freepik.com/free-photo/pancake-with-caviar-tea_1398-3625.jpg?ga=GA1.1.239409238.1713800473&semt=ais_hybrid", price: 8949 },
]
</script>

<template>
   <section class="cart-page">
      <div 
      v-if="false"
      class="cart-page__no-product-items"
      >
         <NuxtImg
      class="cart-page__image" 
      src="image/cart-empty-img.png"
      alt="image"
      format="webp"
      width="444"
      />
      <span class="cart-page__text">Товаров пока нет(</span>

      <NuxtLink
      v-if="true"
      to="/auth"
      class="cart-page__link"
      >Войти
      </NuxtLink>
   </div>
   <div 
   v-else
   class="cart-page__cart-items">
   <span class="cart-page__basket">
      Корзина (0)
</span>
<p class="cart-page__descr">
   Приветственная сделка только на 1 товар
</p>
<div class="cart-page__cart-item-body">
   <CartItem
   v-for="product in products"
   :key="product.id"
   :id="product.id"
   :title="product.title"
   :description="product.description"
   :url="product.url"
   :price="product.price"
   :selectedArray="selectedArray"
   @selectedRadio-="selectedRadioFunc"
   />
</div>
</div>
   </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/base' as *;
.cart-page {
   padding-block: toRem(32);

   &__no-product-items {
      display: grid;
      justify-items: center;
      align-items: center;
      row-gap: toRem(4);
   }

   &__text {
      font-family: $font-family2;
      font-size: toRem(22);
      letter-spacing: 1.5;
      color: var(--danger-color);
      margin-block-end: toRem(22);
   }

   &__link {
      padding-inline: toRem(44);
      padding-block: toRem(8);
      border-radius: toRem(25);
      color: var(--light-color);
      font-weight: 500;
      background-color: var(--danger-color);
   }

   &__cart-items {
      width: 70%;
   }

   &__basket {
      display: block;
      padding-inline: toRem(8);
      padding-block: toRem(16);
      margin-block-end: toRem(22);
      border-radius: toRem(4);
      font-weight: 600;
      font-size: toRem(20);
      background-color: var(--secondary-color);
   }

   &__descr {
      padding-inline: toRem(8);
      padding-block: toRem(16);
      margin-block-end: toRem(22);
      border-radius: toRem(4);
      font-weight: 600;
      font-size: toRem(18);
      color: var(--danger-color);
      background-color: var(--warning-hover);
   }

   &__cart-item-body {
      padding-block: toRem(12);
      border-radius: toRem(4);
      background-color: var(--secondary-color);
   }
}
</style>