<script setup lang="ts">

const isAccount = ref(false)
const isContacts = ref(false)

provide('visible', {
   isAccount,
   isContacts
})
</script>

<template>
<header class="header">
<div class="header__container">
<Icon 
class="header__logo"
name="fluent-mdl2:s-v-n-logo"
/>
<BaseNavigation class="header__navigation hidden-tablet" />
<LangSwitcher class="header__lang hidden-tablet" />
<BaseSearch :class="['header__search', {header__search_hidden: isAccount || isContacts}]" />
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
   margin-block-start: toRem(22);
   padding-block-end: toRem(22);
   background-color:var(--bg-secondary);

   &__container {
   display: grid;
   grid-template: auto
    / minmax(toRem(46), toRem(56)) 1fr minmax(toRem(46), toRem(56));
   grid-auto-rows: auto;
   align-items: center;
   justify-items: center;
   column-gap: toRem(12);
   }


   &__logo {
      width: toRem(42);
      height: toRem(42);
      background-color: var(--bg);
      border-radius: 50%;

      @media (max-width:$tablet){
         grid-row: 2/3;
      }
   }

&__navigation {
   padding-inline: toRem(20);
   padding-block: toRem(22);
}

&__cart {
   grid-row: 2/3;
   grid-column: 3/4;
   align-self: end;
}

&__lang {
   align-self: start;
   justify-self: center;
}

   &__search {
   grid-row: 2/3;
   grid-column: 2/3;
   justify-self: end;
   width: 50%;
   transition: visibility 0s, opacity .4s;

   @media (max-width:$tablet){
      width: 100%;
   }

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
