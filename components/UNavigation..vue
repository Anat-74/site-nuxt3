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
      <NuxtLink :to="localePath('/profile')">
         {{ $t('nav.account') }}
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
      &__list {
         display: flex;
         column-gap: toRem(12);
         align-items: center;
      }

      &__item {
         position: relative;
         display: flex;
         align-items: center;
         column-gap: toRem(4);
         &_isopen {
            background-color: var(--bg);
         }
      }

   &__account {
      text-align: center;
      position: absolute;
      width: toRem(222);
      height: toRem(52);
      top: toRem(30);
      left: toRem(-99);
      background-color: var(--bg);
      color: var(--main-color);
   }
}

.iconify {
   font-size: toRem(25);
}

.iconify--et {
      color: orange;
}
.iconify--mdi {
      color: red;
}


.router-link-active {
    color: var(--active-link);
}
</style>