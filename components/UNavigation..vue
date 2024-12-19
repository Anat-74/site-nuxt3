<script lang="ts" setup>
const links = [
   {name: 'Главная', path: '/'},
   {name: 'О нас', path: '/about'},
   { name: 'Наши услуги', path: '/services' },
   { name: 'Контакты', path: '/contacts' },
   {name: 'Профиль', path: '/profile'}
]
</script>

<template>
   <nav class="nav">
      <ul class="nav__list">
         <li
         v-for="link in links"
         :key="link.name">
         <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
      </li>
      </ul>
   </nav>
</template>

<style lang="scss" scoped>
   .nav {
      &__list {
         display: flex;
         column-gap: toRem(12);
      }
   }
   .router-link-active {
      color: var(--light-coral);
}
</style>