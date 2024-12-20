<script lang="ts" setup>
const localePath = useLocalePath()

const isAccount = ref(false)
</script>

<template>
   <nav class="nav">
      <ul class="nav__list">
         <li class="nav__item">
            <NuxtLink :to="localePath('/')">
               {{ $t('nav.home') }}</NuxtLink>
      </li>
      <li class="nav__item">
            <NuxtLink :to="localePath('/about')">
               {{ $t('nav.about_us') }}</NuxtLink>
      </li>
      <li class="nav__item">
            <NuxtLink :to="localePath('/services')">
               {{ $t('nav.services') }}</NuxtLink>
      </li>
      <li class="nav__item">
            <NuxtLink :to="localePath('/info')">
               {{ $t('nav.info') }}</NuxtLink>
      </li>
      <li class="nav__item">
            <NuxtLink :to="localePath('/contacts')">
               <FontAwesome icon="phone" />
               {{ $t('nav.contacts') }}</NuxtLink>
      </li>
      <li 
      :class="['nav__item', {nav__item_isopen: isAccount}]"
      @mouseenter="isAccount = true"
      @mouseleave="isAccount = false"
      >
      <NuxtLink :to="localePath('/profile')">
         <FontAwesome icon="user" />
         {{ $t('nav.account') }}
         <FontAwesome icon="chevron-down" />
      </NuxtLink>
      <div
      v-if="isAccount"
      class="nav__account">
      Welcome to Magazine
   </div>
      </li>
      </ul>
   </nav>
</template>

<style lang="scss" scoped>
   .nav {
      // margin-block: toRem(44);
      &__list {
         display: flex;
         column-gap: toRem(12);
      }

      &__item {
         position: relative;
         &_isopen {
            background-color: var(--white-color);
         }
      }

   &__account {
      text-align: center;
      position: absolute;
      width: toRem(222);
      height: toRem(52);
      top: toRem(30);
      left: toRem(-99);
      background-color: var(--white-color);
      color: var(--main-color);
   }
}
   .router-link-active {
      color: var(--active-link);
}
</style>