<script lang="ts" setup>
const localePath = useLocalePath()
const { isAccount, isContacts, visibleIsAccount, visibleIsContacts } = useVisibilityConsumer()
</script>

<template>
   <nav class="nav">
      <ul class="nav__list">
         <li class="nav__item">
            <NuxtLink
            class="nav__link" 
            :to="localePath('/')">
               {{ $t('nav.home') }}</NuxtLink>
      </li>
      <li class="nav__item">
            <NuxtLink
            class="nav__link"  
            :to="localePath('/about')">
               {{ $t('nav.about_us') }}</NuxtLink>
      </li>
      <li class="nav__item">
            <NuxtLink 
            class="nav__link" 
            :to="localePath('/services')">
               {{ $t('nav.services') }}</NuxtLink>
      </li>
      <li class="nav__item">
            <NuxtLink 
            class="nav__link" 
            :to="localePath('/info')">
               {{ $t('nav.info') }}</NuxtLink>
      </li>

      <li :class="['nav__item', {nav__item_contacts: isContacts}]"
      @mouseenter="visibleIsContacts"
      @mouseleave="isContacts = false"
      >
            <NuxtLink 
            class="nav__link" 
            :to="localePath('/contacts')"
            ><Icon name="material-symbols:install-mobile-outline-rounded" />
               {{ $t('nav.contacts') }}
            </NuxtLink>
            <div
            v-if="isContacts"
            class="nav__contacts contacts">
            <a
            class="contacts__phone-link"
            href="#">
            <Icon  name="fa6-solid:mobile-screen-button" />
            +37529 343-33-33
         </a>
         <a
            class="contacts__phone-link"
            href="#">
            <Icon  name="fa6-solid:mobile-screen-button" />
            +37529 343-33-33
         </a>
      <a href="#">mail@gmail.by</a>
         </div>
      </li>

      <li 
      :class="['nav__item', {nav__item_account: isAccount}]"
      @mouseenter="visibleIsAccount"
      @mouseleave="isAccount = false"
      >
      <Icon name="mdi:account-tie-outline" />
         {{ $t('nav.profile') }}
      <Icon 
      name="oui:arrow-down" />
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
            <li
            v-if="true" 
            class="profile__item">{{ $t('nav.profile_exit') }}
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
         column-gap: toRem(18);
      }

      &__item {
         display: flex;
         align-items: center;
         column-gap: toRem(4);
         padding-inline: toRem(16);
         font-weight: 500;

         .iconify--material-symbols {
            font-size: toRem(20);
         }
         .iconify--mdi {
            margin-block: toRem(1);
            font-size: toRem(24);
         }
         .iconify--oui {
            margin-inline-start: toRem(9);
            font-size: toRem(18);
         }

         &_contacts {
         position: relative;
         padding-block-start: toRem(7);
         margin-block-start: toRem(-7);
         padding-block-end: toRem(24);
         margin-block-end: toRem(-24);
         border-radius: toRem(6) toRem(6) 0 0;
         background-color: var(--bg-secondary);

         .iconify--material-symbols {
            color: var(--active-color);
            transition: color var(--transition-duration);
         }
      }

         &_account {
            position: relative;
            padding-block-start: toRem(7);
            margin-block-start: toRem(-7);
            padding-block-end: toRem(24);
            margin-block-end: toRem(-24);
            border-radius: toRem(6) toRem(6) 0 0;
            background-color: var(--bg-secondary);

            svg {
            color: var(--active-color);
            transition: color var(--transition-duration);
         }
      }
   }

   &__link {
      position: relative;
      display: flex;
      align-items: center;
      column-gap: toRem(5);
      padding-block: toRem(3);

      &:not(.router-link-active) {
         @include hover {
         &::after {
            width: 100%;
         }
      }
   }
         &::before {
            content: '';
            position: absolute;
            top: 0;
            right: toRem(-28);
            width: toRem(4);
            height: 100%;
            border-radius: toRem(25);
            background-color: var( --slate-gray);
      }

      &::after {
         content: '';
         position: absolute;
         top: 100%;
         left: 50%;
         translate: -50%;
         width: 0;
         height: toRem(2);
         background-color: var(--danger-hover);
         transition: width var(--transition-duration);
      }
   }
}

   .contacts {
      display: grid;
      align-items: center;
      justify-items: center;
      text-align: center;
      position: absolute;
      width: toRem(230);
      height: toRem(102);
      top: toRem(56);
      left: toRem(-101);
      padding-block: toRem(9);
      border-radius: toRem(6) 0 toRem(6) toRem(6);
      background-color: var(--bg-secondary);

   &__phone-link {
      display: flex;
      align-items: center;
      column-gap: toRem(8);
      padding-inline: toRem(6);
      padding-block: toRem(4);
      border: 1px solid var(--border-color);
      border-radius: toRem(4);
      font-size: toRem(18);
      font-weight: 500;
      color: var(--color);

      svg {
         font-size: toRem(18);
      }

      @include hover {
         color: var(--light-color);
         background-color: var(--danger-color);
         transition: background-color var(--transition-duration);
      }
   }
}

.profile {
      text-align: center;
      position: absolute;
      width: toRem(242);
      height: toRem(138);
      top: toRem(56);
      left: toRem(-73);
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: toRem(9);
      padding-block: toRem(4);
      border-radius: toRem(6) 0 toRem(6) toRem(6);
      background-color: var(--bg-secondary);
      @include adaptiveValue("font-size", 16, 14);

      &__title {
         font-weight: 500;
      }

      &__link {
         padding-block: toRem(2);
         border: 2px solid var(--danger-color);
         font-weight: 600;
         color: var(--whitesmoke-color);
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
         color: var(--light-color);
         background-color: var(--border-color);
      }
   }
}

.router-link-active {
   color: var(--active-color) !important;
   pointer-events: none !important;

   @include hover {
   color: var(--active-color);
   }
}
</style>