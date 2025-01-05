<script setup lang="ts">

const isAccount = ref(false)

provide('account', isAccount)
</script>

<template>
<header class="header">
<div class="header__container">
<Icon 
class="header__logo"
name="fluent-mdl2:s-v-n-logo"
/>
<BaseNavigation class="header__navigation hidden-tablet" />
<LangSwitcher class="header__langs hidden-tablet" />
<div class="header__bg">
<BaseSearch :class="['header__search', {header__search_hidden: isAccount}]" />
</div>
<CartShopping class="header__cart" />
</div>
</header>

   <main class="main">
      <div class="main__container">
      <slot />
   </div>
   </main>

   <footer class="footer">
      <div class="footer__container">
      <ClientOnly >
         <ColorMode class="footer__color-mode"/>
      </ClientOnly>
   </div>
   </footer>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/base' as *;

.header {
   background-color:grey;
   &__container {
   display: grid;
   grid-template: auto minmax(toRem(47), toRem(75))
    / minmax(toRem(44), toRem(48)) auto minmax(toRem(44), toRem(48));
   grid-auto-rows: auto;
   align-items: center;
   justify-items: center;
   column-gap: toRem(12);
   padding-block-start: toRem(22);
   }


   &__logo {
      justify-self: start;
   }

&__navigation {
   padding-inline: toRem(20);
}

&__cart {
      grid-row: 2/3;
      grid-column: 3/4;
      justify-self: end;
   }

&__langs {
   align-self: start;
}

&__bg {
   grid-row: 2/3;
   grid-column: 2/3;
   width: 100%;
   background-color: var(--light-color);
   height: 100%;
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
}


.footer {
   &__container {
      display: grid;
   }
   &__color-mode {
      justify-self: end;
   }
}
</style>
