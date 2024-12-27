<script setup lang="ts">
const colorMode = useColorMode()
defineProps({
      theme: {
      type: String,
      required: false
      },
      label: {
         type: String,
         required: false
      },
      name: {
         type: String,
         required: false
      },
      rounded: {
         type: Boolean,
         required: false
      },
      disabled: {
         type: Boolean,
         required: false
      },
      outlined: {
         type: Boolean,
         required: false
      },
      icon: {
         type: String,
         required: false
      },
      size: {
         type: String,
         default: 'normal'
      }
   })

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
      'btn', `btn_${name}`,
      { 'btn_rounded': rounded }, { 'btn_outlined': outlined },
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
.btn {
   // height: toRem(38);
   // padding-inline: toRem(12);
   border-radius: toRem(4);
   color: var(--primary-color);
   background-color: transparent;
   border: none;

    span {
      display: grid;
    }

   &_preferred {
         .iconify  {
            color: var(--primary-color);
         }
      }
      &_selected {
         .iconify  {
         color: var(--warning-color);
         }
      }

   &_color-theme {
      height: auto;
      padding: toRem(2);
      color: var(--secondary-color);

      @include hover {
         transform: scale(1.2) rotate(-16deg);
      }
      transition: transform var(--transition-duration);
   }

   &_search {
      height: 100%;
      padding-inline: toRem(16);
      background-color: var(--danger-color);

   .iconify--ph {
      color: var(--white-color);
}
   }

  &:disabled {
    opacity: .6;
    cursor: default;
  }
  &_rounded {
    border-radius: toRem(15);
  }
  &_outlined {
    background: transparent;
    color: var(--primary-color);
    &:hover {
      color: var(--primary-hover);
    }
  }
  &_icon {
   //  padding: 0;
   //  width: toRem(40);
   //  height: toRem(40);
   //  border-radius: 50%;
  }
  &_large {
    height: toRem(48);
    padding: 0 toRem(30);
  }
}
</style>