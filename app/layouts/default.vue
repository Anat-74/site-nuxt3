<script setup lang="ts">

const isAccount = ref(false)

provide('account', isAccount)
</script>

<template>
<header class="header">
<Icon 
class="header__logo"
name="fluent-mdl2:s-v-n-logo"
/>
<BaseNavigation class="header__navigation hidden-tablet" />
<LangSwitcher class="header__langs hidden-tablet" />
<ClientOnly >
<ColorMode class="header__color-mode hidden-tablet"/>
</ClientOnly>
<BaseSearch :class="['header__search', {header__search_hidden: isAccount}]" />
<CartShopping class="header__cart" />
</header>

   <main class="main">
      <slot />
   </main>

   <footer></footer>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/base' as *;
.header {
   display: grid;
   grid-template: auto / minmax(toRem(52), toRem(92)) 1fr repeat(4,auto);
   grid-auto-rows: auto;
   align-items: center;
   justify-items: center;
   column-gap: toRem(12);
   padding-block-start: toRem(22);

   &__logo {
   }

&__navigation {
   padding-inline: toRem(20);
}

&__langs {
   align-self: start;
}

&__color-mode {
   grid-row: 2 span;
   }

   &__search {
   // grid-row: 2/3;
   // grid-column: 2/3;
   width: 50%;
   transition: visibility 0s, opacity .4s;
   &_hidden {
      visibility: hidden;
      opacity: 0;
   }
   }

   &__cart {
      // grid-row: 2/3;
      // grid-column: 2/3;
      justify-self: end;
   }
}

</style>
