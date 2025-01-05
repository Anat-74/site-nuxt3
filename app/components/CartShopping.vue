<script setup>

</script>

<template>
<div>
<NuxtLink
class="cart-link"
   to="/shoppingCart"
   >
   <span class="cart-link__price">0</span>
   <Icon
   name="ph:shopping-cart-thin"
   />
</NuxtLink>
</div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/base' as *;

   .cart-link {
      position: relative;

      &__price {
         position: absolute;
         display: flex;
         justify-content: center;
         align-items: center;
         top: toRem(-10);
         right: toRem(-7);
         width: toRem(18);
         height: toRem(19);
         font-weight: 500;
         border-radius: 50%;
         color: var(--light-color);
         background-color: var(--danger-color);
      }

      svg {
         font-size: toRem(30);
      }
   }

</style>