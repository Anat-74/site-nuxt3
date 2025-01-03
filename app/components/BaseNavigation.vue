<script lang="ts" setup>
const localePath = useLocalePath()

 const isAccount = inject('account')
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
         {{ $t('nav.profile') }}
      <Icon name="oui:arrow-down" />
      <div
      v-if="isAccount"
      class="nav__profile profile">
      <h3 class="profile__title">{{ $t('nav.profile_title') }}</h3>
         <NuxtLink
         class="profile__link"
         :to="localePath('/auth')"
         >{{ $t('nav.profile_login') }}
      </NuxtLink>
         <ul class="profile__list">
            <li 
            @click="navigateTo('/orders')"
            class="profile__item">{{ $t('nav.profile_orders') }}
         </li>
            <li class="profile__item">{{ $t('nav.profile_exit') }}
            </li>
            </ul>
         </div>
       </li>
      </ul>
   </nav>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/base' as *;
   .nav {
      &__list {
         display: flex;
         align-items: center;
         @include adaptiveValue("column-gap", 48, 16, 0, $containerWidth, 991.98);
         @include adaptiveValue("font-size", 20, 16);
      }

      &__item {
         display: flex;
         align-items: center;
         column-gap: toRem(4);
         padding-block: toRem(7);

         &_isopen {
            position: relative;
            border-radius: toRem(6) toRem(6) 0 0;
            background-color: var(--bg-secondary);
      }
   }
}

.profile {
      text-align: center;
      position: absolute;
      width: toRem(242);
      height: toRem(138);
      top: toRem(38);
      left: toRem(-99);
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: toRem(9);
      padding-block: toRem(4);
      border-radius: toRem(6) 0 toRem(6) toRem(6);
      background-color: var(--bg-secondary);
      @include adaptiveValue("font-size", 16, 14);

      @include hover {
         .iconify--oui {
            transform: rotate(45deg);
         }
      }

      &__title {
         font-weight: 500;
      }

      &__link {
         padding-block: toRem(2);
         border: 2px solid var(--border-color);
         font-weight: 600;
         color: var(--white-color);
         background-color: var(--danger-color);
         transition: background-color var(--transition-duration);

         @include hover {
            border-color: var(--danger-color);
            color: var(--danger-color);
            background-color: transparent;
         }
      }

      &__list {
         text-align: left;
      }

      &__item {
         padding-block: toRem(2);
         padding-inline-start: toRem(5);
         font-weight: 500;
         &:not(:last-child) {
            margin-block-end: toRem(2);
         }
      @include hover {
         color: var(--white-color);
         background-color: var(--border-color);
      }
   }
}

.iconify--et {
   color: var(--primary-color);
}
.iconify--mdi {
   color: var(--primary-color);
}
.iconify--oui {
   font-size: toRem(18);
}
</style>