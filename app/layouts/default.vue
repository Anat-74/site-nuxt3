<script setup lang="ts">
const { isAccount, isContacts } = useVisibilityProvider()
</script>

<template>
<header class="header">
   <div class="header__container-top">
<ClientOnly >
   <ColorMode class="header__color-mode"/>
</ClientOnly>
<BaseNavigation class="header__navigation hidden-tablet" />
<LangSwitcher class="header__lang hidden-tablet" />
<ShowModalHamburger class="header__dialog-header" />
</div>
<div :class="['header__bg', {header__bg_hidden: isAccount || isContacts}]">
   <div class="header__container-bottom">
   <NuxtLink to="/">
      <NuxtImg 
   class="header__logo"
   src="/image/logo.png"
   alt="logo"
   format="webp"
   loading="lazy"
   widht="70"
   height="70"
   />
</NuxtLink>
<BaseSearch class="header__search" />
<CartShopping class="header__cart" />
</div>
</div>
</header>

   <main class="main">
      <div class="main__container">
      <slot />
   </div>
   </main>

   <footer class="footer">
      <div class="footer__container">
         footer
   </div>
   </footer>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/base' as *;
.header {
   &__container-top {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      @include adaptiveValue("padding-block", 25, 16);

      @media (min-width:$tablet){
         @include adaptiveValue("column-gap", 32, 0, 0, $containerWidth, 1023.98);
      }
   }

&__navigation {
   justify-self: end;
}

&__lang {
   translate: 0 toRem(-14);
}

&__bg {
   background-color: var(--secondary-color);
   transition: visibility 0s, opacity .7s;

   &_hidden {
      visibility: hidden;
      opacity: 0;
   }
}

&__container-bottom {
   display: grid;
   grid-template-columns: auto 1fr auto;
   align-items: center;
   column-gap: toRem(44);
}

&__logo {
   }

   &__search {
      justify-self: end;
      width: 55%;

   @media (max-width:$tablet){
      width: 100%;
   }
   }

   &__cart {
      translate: 0 toRem(5);
      margin-inline-end: toRem(9);
   }
}


.footer {
   &__container {
      display: grid;
   }
   &__show-modal {
      justify-self: end;
   }
}
</style>
