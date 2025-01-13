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
            class="contacts__viber-link contacts-link"
            href="#"
            >
            <Icon name="fontisto:viber" />
               viber
         </a>
            <a
            class="contacts__phone-link contacts-link"
            href="tel:+70001234567"
            >
            <Icon  name="icomoon-free:mobile" />
            +37529 343-33-33
         </a>
         <a
            class="contacts__phone-link contacts-link"
            href="tel:+70001234567"
            >
            <Icon  name="fa6-solid:mobile-screen-button" />
            +37529 343-33-33
         </a>
      <a 
      class="contacts__mail-link contacts-link"
      href="mailto:mail@gmail.by"
      >
      <Icon name="qlementine-icons:mail-16" />
      mail@gmail-blabla.by
   </a>
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
         column-gap: toRem(18);
      }

      &__item {
         display: flex;
         align-items: center;
         column-gap: toRem(4);
         padding-inline: toRem(16);
         font-weight: 500;
         color: var(--primary-color);

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

         svg {
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
            background-color: currentColor;
      }

      &::after {
         content: '';
         position: absolute;
         top: 100%;
         left: 50%;
         translate: -50%;
         width: 0;
         height: toRem(2);
         background-color: currentColor;
         transition: width var(--transition-duration);
      }
   }
}

   .contacts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: toRem(5);
      white-space: nowrap;
      position: absolute;
      width: toRem(312);
      height: toRem(152);
      top: toRem(56);
      right: 0;
      border-radius: toRem(4);
      background-color: var(--secondary-color);

      &__phone-link {
         svg {
            color: var(--deep-sky-blue);
         }
      .iconify--fa6-solid {
         width: toRem(18);
         color: var(--gold-color);
      }
   }

      &__viber-link {
         svg {
            color: var(--indigo-color);
         }
      }

   &__mail-link {
      svg {
         color: var(--danger-color);
      }
   }
}
.contacts-link {
   width: 90%;
   display: flex;
   align-items: center;
   justify-content: center;
   column-gap: toRem(6);
   padding-inline: toRem(12);
   padding-block: toRem(1);
   border: 2px solid currentColor;
   border-radius: toRem(4);
   font-size: toRem(18);
   font-weight: 500;
   color: currentColor;

      svg {
         font-size: toRem(18);
      }

      @include hover {
         color: var(--light-color);
         border-color:var(--gold-color);
         background-color: var(--danger-color);
         transition: background-color var(--transition-duration);
         svg {
            color: var(--light-color);
         }
      }
}

.profile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: toRem(9);
      text-align: center;
      position: absolute;
      width: toRem(240);
      height: toRem(152);
      top: toRem(56);
      left: 0;
      padding-block: toRem(4);
      border-radius: toRem(4);
      background-color: var(--secondary-color);
      @include adaptiveValue("font-size", 16, 14);

      &__title {
         font-weight: 500;
      }

      &__link {
         padding-block: toRem(2);
         border: 2px solid var(--danger-color);
         font-weight: 600;
         border-color: var(--danger-color);
         color: var(--danger-color);
         transition: background-color var(--transition-duration);

         @include hover {
            color: var(--light-color);
            background-color: var(--danger-color);
         }
      }

      &__item {
         padding-block: toRem(1);
         border: 2px dotted var(--primary-color);
         font-weight: 500;

         &:not(:last-child) {
            margin-block-end: toRem(4);
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
}
</style>