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
         <Icon name="et:phone" />
            <NuxtLink :to="localePath('/contacts')">
               {{ $t('nav.contacts') }}</NuxtLink>
      </li>
      <li 
      :class="['nav__item', {nav__item_isopen: isAccount}]"
      @mouseenter="isAccount = true"
      @mouseleave="isAccount = false"
      >
      <Icon name="mdi:account-tie-outline" />
         {{ $t('nav.account') }}

      <div
      v-if="isAccount"
      class="nav__account account">
      <h3 class="account__title">Welcome to Magazine</h3>
         <NuxtLink
         class="account__link"
         to="/auth"
         >Login / Register</NuxtLink>
         <ul class="account__list">
            <li 
            @click="navigateTo('/orders')"
            class="account__item">My Orders
         </li>
            <li class="account__item">Sign out
            </li>
         </ul>
   </div>

      </li>
      </ul>
   </nav>
</template>

<style lang="scss" scoped>
   .nav {
      &__list {
         @include adaptiveValue("font-size", 20, 16);
         display: flex;
         column-gap: toRem(12);
         align-items: center;
      }

      &__item {
         display: flex;
         align-items: center;
         column-gap: toRem(4);

         &_isopen {
            position: relative;
            background-color: var(--bg-secondary);
      }
   }
}

.account {
      @include adaptiveValue("font-size", 16, 14);
      text-align: center;
      position: absolute;
      width: toRem(222);
      height: toRem(138);
      top: toRem(25);
      left: toRem(-99);
      padding-block: toRem(4);
      border-radius: toRem(8);
      background-color: var(--bg-secondary);

      &__title {
         margin-block-end: toRem(7);
         font-weight: 400;
      }

      &__link {
         display: inline-block;
         padding-block: toRem(2);
         padding-inline: toRem(16);
         margin-block-end: toRem(7);
         border: 2px solid var(--border-color);
         font-weight: 600;
         color: var(--white-color);
         background-color: var(--danger-color);
      }

      &__list {
         text-align: left;
         padding-inline-start: toRem(6);
      }

      &__item {
         padding-block: toRem(4);
         font-weight: 500;
         &:not(:last-child) {
            margin-block-end: toRem(2);
         }
      @include hover {
         background-color: var(--border-color);
      }
   }
}



.iconify {
   font-size: toRem(25);
}

.iconify--et {
      color: var(--primary-color);
}
.iconify--mdi {
   color: var(--primary-color);
}


.router-link-active {
    color: var(--active-link);
}
</style>