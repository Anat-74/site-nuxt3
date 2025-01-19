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
   { id: 3, title: "Title 3", description: "This is a description", url: "https://img.freepik.com/free-photo/pancake-with-caviar-tea_1398-3625.jpg?ga=GA1.1.239409238.1713800473&semt=ais_hybrid", price: 19939 },
   { id: 4, title: "Title 4", description: "This is a description", url: "https://img.freepik.com/premium-photo/homemade-beef-stir-fry-with-vegetables-pots-wooden_392895-8836.jpg?ga=GA1.1.239409238.1713800473&semt=ais_hybrid", price: 44959 },
   { id: 5, title: "Title 5", description: "This is a description", url: "https://img.freepik.com/free-photo/pancake-with-red-caviar-tea_1398-4518.jpg?ga=GA1.1.239409238.1713800473&semt=ais_hybrid", price: 56999 },
   { id: 6, title: "Title 6", description: "This is a description", url: "https://img.freepik.com/premium-photo/homemade-beef-stir-fry-with-vegetables-pots-wooden_392895-8836.jpg?ga=GA1.1.239409238.1713800473&semt=ais_hybrid", price: 64999 },
   { id: 7, title: "Title 7", description: "This is a description", url: "https://img.freepik.com/free-photo/pancake-shrovetide_1398-5120.jpg?ga=GA1.1.239409238.1713800473&semt=ais_hybrid", price: 77999 },
   { id: 8, title: "Title 8", description: "This is a description", url: "https://img.freepik.com/free-photo/cottage-cheese-cookie-rolls-with-red-currants-ceramic-plate-with-vintage-ceramic-tea-coffee-set-tea-time-breakfast-summer-sweets_114579-1286.jpg?ga=GA1.1.239409238.1713800473&semt=ais_hybrid", price: 26299 },
   { id: 9, title: "Title 9", description: "This is a description", url: "https://img.freepik.com/premium-photo/autumn-soup-with-croutons-herbs-clay-pots_222185-1687.jpg?ga=GA1.1.239409238.1713800473&semt=ais_hybrid", price: 56599 },
   { id: 10, title: "Title 10", description: "This is a description", url: "https://img.freepik.com/free-photo/pancake-shrovetide_1398-5120.jpg?ga=GA1.1.239409238.1713800473&semt=ais_hybrid", price: 86699 },
]
</script>

<template>
   <section class="cart-page">
      <div 
      v-if="false"
      class="cart-page__body"
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
   class="cart-page__shopping"
   >Корзина (0)
</div>
<p class="cart-page__welcome-deal">
   Приветственная сделка только на 1 товар
</p>
   </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/base' as *;
.cart-page {
   padding-block: toRem(32);

   &__body {
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

   &__shopping {
      padding-inline: toRem(8);
      padding-block: toRem(16);
      margin-block-end: toRem(22);
      border-radius: toRem(6);
      font-weight: 600;
      font-size: toRem(20);
      background-color: var(--secondary-color);
   }

   &__welcome-deal {
      padding-inline: toRem(8);
      padding-block: toRem(16);
      border-radius: toRem(6);
      font-weight: 600;
      font-size: toRem(18);
      color: var(--danger-color);
      background-color: var(--warning-hover);
   }
}
</style>