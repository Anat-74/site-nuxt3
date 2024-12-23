<script lang="ts" setup>
</script>

<template>
<header class="header">
<Icon name="fluent-mdl2:s-v-n-logo" />
<UNavigation class="header__navigation" />
<LangSwitcher class="header__langs" />
<ClientOnly>
<ColorMode class="header__color-mode" />
</ClientOnly>
   </header>
   <main>
      <slot />
   </main>
   <footer></footer>
</template>

<style lang="scss" scoped>
.header {
   display: grid;
   grid-template-columns: auto 1fr repeat(2,auto);
   align-items: center;
   justify-items: center;
   column-gap: toRem(12);
   padding-block-start: toRem(22);
&__navigation {
}

&__langs {
   align-self: start;
}

&__color-mode {
   }
}


</style>
