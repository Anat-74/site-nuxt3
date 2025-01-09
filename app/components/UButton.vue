<script setup lang="ts">
interface Props{
   theme?: string
   label?: string
   nameClass?: string
   disabled?: boolean
   icon?: string
   size?: string
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
   color: var(--primary-color);
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
      color: var(--bg-secondary);
  }

   &_color-theme {
      padding: toRem(2);
      transition: transform var(--transition-duration);
      @include hover {
         transform: scale(1.4) rotate(-25deg);
      }
      svg {
         font-size: toRem(18);
         color: var(--secondary-color);
      }
   }
   &_preferred {
         svg  {
            color: var(--primary-color);
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
   }

  &_large {
  }
}
</style>