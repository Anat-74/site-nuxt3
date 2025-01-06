<script lang="ts" setup>
const localePath = useLocalePath()

const { isAccount, isContacts } = inject('visible')


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
      @mouseenter="isContacts = true"
      @mouseleave="isContacts = false"
      >
            <NuxtLink 
            class="nav__link" 
            :to="localePath('/contacts')"
            ><Icon name="et:phone" />
               {{ $t('nav.contacts') }}
            </NuxtLink>
            <div
            v-if="isContacts"
            class="nav__contacts contacts">
            <span 
            class="contacts__phone"
            href="#">
            <Icon name="mdi:telephone-outline" 
            />+37529 343-33-33
         </span>
            <span 
            class="contacts__phone"
            href="#">
            <Icon name="mdi:telephone-outline"
             />+37529 343-33-33
      </span>
         </div>
      </li>

      <li 
      :class="['nav__item', {nav__item_account: isAccount}]"
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
         column-gap: toRem(38);
         // padding-block: toRem(22);
         @include adaptiveValue("font-size", 18, 16);
      }

      &__item {
         display: flex;
         align-items: center;
         column-gap: toRem(4);

         .iconify--et {
            font-size: toRem(21);
         }

         .iconify--oui {
            margin-inline-start: toRem(9);
            font-size: toRem(18);
         }

         &_account {
            position: relative;
            border-radius: toRem(6) toRem(6) 0 0;
            background-color: var(--bg-secondary);

            svg {
            color: var(--active-color);
            transition: color var(--transition-duration);
         }
      }

      &_contacts {
         position: relative;
         border-radius: toRem(6) toRem(6) 0 0;
         background-color: var(--bg-secondary);

         .iconify--et {
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
            right: toRem(-20);
            width: toRem(2);
            height: 100%;
            background-color: var(--slate-gray);
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
      width: toRem(245);
      height: toRem(102);
      top: toRem(57);
      left: toRem(-124);
      padding: toRem(12);
      border-radius: 0 0 toRem(6) toRem(6);
      background-color: var(--bg-secondary);

   //    @media (max-width:$tablet){
   //    display: none;
   // }

      svg {
         font-size: toRem(19);
      }

   &__phone {
      display: flex;
      align-items: center;
      column-gap: toRem(8);
      padding-inline: toRem(6);
      padding-block: toRem(4);
      border: 1px solid var(--border-color);
      border-radius: toRem(4);
      font-size: toRem(19);
      font-weight: 500;

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
      top: toRem(57);
      left: toRem(-81);
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: toRem(9);
      padding-block: toRem(4);
      border-radius: 0 0 toRem(6) toRem(6);
      background-color: var(--bg-secondary);
      @include adaptiveValue("font-size", 16, 14);

      &__title {
         font-weight: 500;
      }

      &__link {
         padding-block: toRem(2);
         border: 2px solid var(--border-color);
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