<script setup lang="ts">
import type { InjectionKey } from 'vue'
const key = Symbol() as InjectionKey<Boolean | Function>

const isAccount = ref(false)
const isContacts = ref(false)

const visibleIsAccount = () => isAccount.value = true
const visibleIsContact = () =>  isContacts.value = true

provide('visible', {
   isAccount,
   isContacts,
   visibleIsAccount,
   visibleIsContact
})
</script>

<template>
<header class="header">
   <div class="header__container-top">
<ClientOnly >
   <ColorMode class="header__color-mode hidden-tablet"/>
</ClientOnly>
<BaseNavigation class="header__navigation hidden-tablet" />
<LangSwitcher class="header__lang hidden-tablet" />
</div>
<div class="header__bg">
   <div class="header__container-bottom">
   <NuxtLink to="/">
   <Icon 
   class="header__logo"
   name="fluent-mdl2:s-v-n-logo"
   />
</NuxtLink>
<BaseSearch :class="['header__search', {header__search_hidden: isAccount || isContacts}]" />
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

      @media (min-width:$tablet){
         padding-block: toRem(22);
         @include adaptiveValue("column-gap", 32, 0, 0, $containerWidth, 1023.98);
      }
   }

   &__color-mode {
   }

&__navigation {
   justify-self: end;
}

&__lang {
   translate: 0 toRem(-14);
}

&__bg {
   padding-block: toRem(24);
   background-color: var(--bg-secondary);
}

&__container-bottom {
   display: grid;
   grid-template-columns: auto 1fr auto;
   align-items: center;
   column-gap: toRem(44);
}

&__logo {
      font-size: toRem(50);
      border-radius: 50%;
   }

   &__search {
   transition: visibility 0s, opacity .6s;

   @media (max-width:$tablet){
      width: 100%;
   }

      &_hidden {
         visibility: hidden;
         opacity: 0;
      }
   }

   &__cart {
      align-self: end;
      margin-inline-end: toRem(9);
   }
}


.footer {
}
</style>
