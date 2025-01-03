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
<BaseNavigation class="header__navigation" />
<LangSwitcher class="header__langs" />
<ClientOnly >
<ColorMode class="header__color-mode"/>
</ClientOnly>
<Search :class="['header__search', {header__search_hidden: isAccount}]" />
   </header>

   <main class="main">
      <slot />
   </main>

   <footer></footer>
</template>

<style lang="scss" scoped>
// @use '../assets/scss/styles.scss' as *;
@use '../assets/scss/base/mixins' as *;
.header {
   display: grid;
   grid-template: auto / minmax(toRem(52), toRem(92)) 1fr repeat(2,auto);
   grid-auto-rows: auto;
   align-items: center;
   justify-items: center;
   column-gap: toRem(12);
   padding-block-start: toRem(22);

   &__logo {
   }

&__navigation {
   padding-inline: toRem(20);
   // @media (max-width:$tablet){
   // display: none;
   // }
}

&__langs {
   align-self: start;
   // @media (max-width:$tablet){
   //    display: none;
   // }
}

&__color-mode {
   grid-row: 2 span;
   // @media (max-width:$tablet){
   //    display: none;
   // }
   }

   &__search {
   grid-column: 2/3;
   width: 50%;
   transition: visibility 0s, opacity .4s;
   &_hidden {
      visibility: hidden;
      opacity: 0;
   }
   }
}

</style>
