<script setup lang="ts">
interface Props{
   nameClass?: string
   disabled?: boolean
   icon?: string
   label?: string
   size?: string
   theme?: string
}
const { size = 'normal' } = defineProps<Props>()

const colorMode = useColorMode()

const emit = defineEmits(['click'])
const clickOnButton = () => {
   emit('click')
}
</script>

<template>
   <button 
      type="button"
      :disabled="disabled"
      @click="clickOnButton"
      :class="[
      'btn', `btn_${nameClass}`,
      { 'btn_icon': icon }, { 'btn_large': size === 'large' },
      { 'btn_preferred': !colorMode.unknown && theme === colorMode.preference,
        'btn_selected': !colorMode.unknown && theme === colorMode.value}
   ]"
      >
   <span v-if="icon">
      <Icon :name="icon"
      />
   </span>
   <span v-else>{{ label }}</span>
   </button>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/base' as *;
.btn {
   padding-inline: toRem(12);
   padding-block: toRem(8);
   border-radius: toRem(4);
   color: var(--light-color);
   background-color: transparent;
   border: none;

   &:disabled {
    opacity: .6;
    cursor: default;
  }
    span {
      display: flex;
    }

    &_icon {
      font-size: toRem(24);
      color: var(--light-color);
  }

   &_color-theme {
      padding: toRem(2);
      transition: transform var(--transition-duration);
      @include hover {
         transform: scale(1.4) rotate(-25deg);
      }
      svg {
         font-size: toRem(18);
         color: var(--forest-green);
      }
   }
   &_preferred {
         svg  {
            color: currentColor;
         }
      }
      &_selected {
         svg  {
         color: var(--active-color);
         }
      }

   &_search {
      height: 100%;
      border-radius: toRem(0) toRem(4) toRem(4) toRem(0);
      background-color: var(--danger-color);

      svg {
         font-size: toRem(20);
      }
   }

   &_hamburger {
   display: none;
   @media (max-width:$tablet){
      display: block;
      position: absolute;
      z-index: 100;
      right: toRem(15);
      width: toRem(26);
      height: toRem(18);
      @include adaptiveValue("top", 29, 18);

         span,
      &::before,
      &::after{
         content: '';
			right: 0;
			position: absolute;
			width: 100%;
			height: toRem(2);
			background-color: var(--border-color);
         transition: transform .4s .2s;
      }
      &::before {
			top: 0;
		}
		&::after {
			bottom: 0;
		}
		span {
         width: 70%;
			top: calc(50% - toRem(1));
		   }
      }
  }

  &_close {
   position: absolute;
    z-index: 10;
    top: toRem(15);
    right: toRem(12);
    padding-inline: toRem(14);
    padding-block: toRem(14);

       &::before,
      &::after{
         content: '';
         position: absolute;
			right: toRem(5);
			width: toRem(22);
			height: toRem(2);
         background-color: var(--secondary-color);
      }
      &::before {
         top: calc(50% - toRem(1));
         transform: rotate(-45deg);
		}
		&::after {
         bottom: calc(50% - toRem(1));
         transform: rotate(45deg);
		}

      @include hover {
         transform: scale(1.1);
      }
  }

  &_large {
  }
}
</style>