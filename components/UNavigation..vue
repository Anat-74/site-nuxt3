<script lang="ts" setup>
// const links = [
//    {name: 'Главная', path: '/'},
//    {name: 'О нас', path: '/about'},
//    { name: 'Наши услуги', path: '/services' },
//    { name: 'Контакты', path: '/contacts' },
//    {name: 'Профиль', path: '/profile'}
// ]
const isAccount = ref(false)
</script>

<template>
   <nav class="nav">
      <ul class="nav__list">
         <li class="nav__item">
            <NuxtLink to="/">Главная</NuxtLink>
      </li>
      <li class="nav__item">
            <NuxtLink to="/about">О нас</NuxtLink>
      </li>
      <li class="nav__item">
            <NuxtLink to="/services">Наши услуги</NuxtLink>
      </li>
      <li class="nav__item">
            <NuxtLink to="/contacts"><FontAwesome icon="phone" /> Контакты</NuxtLink>
      </li>
      <li 
      :class="['nav__item', {nav__item_isopen: isAccount}]"
      @mouseenter="isAccount = true"
      @mouseleave="isAccount = false"
      >
      <NuxtLink to="/profile"><FontAwesome icon="user" /> Профиль</NuxtLink>
      <FontAwesome icon="chevron-down" />
      <div
      class="nav__account"
      v-if="isAccount"
      >
      Welcome to Magazine
   </div>
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

      &__item {
         position: relative;
         &_isopen {
            ::before {
            content: '';
            position: absolute;
            width: toRem(222);
            top: toRem(20);
            left: toRem(20);
            }
            background-color: var(--white-color);
         }
      }

   // &__account {
   //    position: absolute;
   //    width: toRem(222);
   //    height: toRem(122);
   //    top: toRem(20);
   //    left: toRem(20);
   //    background-color: var(--white-color);
   //    color: var(--main-color);
   // }
}
   .router-link-active {
      color: var(--active-link);
}
</style>