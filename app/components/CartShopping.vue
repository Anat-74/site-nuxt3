<script setup lang="ts">
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
   width="30"
   height="30"
   />
</NuxtLink>
</div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/base' as *;

   .cart-link {
      position: relative;

      svg {
         transition: color var(--transition-duration), transform var(--transition-duration);
         @include hover {
            transform: scale(1.2);
            color: var(--danger-color);
         }
      }

      &__price {
         position: absolute;
         display: flex;
         justify-content: center;
         align-items: center;
         top: toRem(-25);
         right: toRem(-7);
         width: toRem(18);
         height: toRem(19);
         font-weight: 500;
         border-radius: 50%;
         color: var(--bg-secondary);
         background-color: var(--danger-color);
      }
   }

</style>