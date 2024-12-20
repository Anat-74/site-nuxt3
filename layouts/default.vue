<script lang="ts" setup>
</script>

<template>
   <header>
<ULangSwitcher />
<UNavigation />
<UColorMode />
   </header>
   <main>
      <slot />
   </main>
   <footer></footer>
</template>

<style lang="scss" scoped>
header {
   display: flex;
   justify-content: center;
   align-items: center;
   column-gap: toRem(12);
   padding-block-start: toRem(22);
}
</style>
