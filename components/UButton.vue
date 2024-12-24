<script setup lang="ts">
const colorMode = useColorMode()
const props = defineProps({
      theme: {
      type: String,
      required: true
      },
      label: {
         type: String,
         default: 'Button'
      },
      color: {
         type: String,
         default: 'primary'
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
      'btn', `btn_${color}`,
      { 'btn_rounded': rounded }, { 'btn_outlined': outlined },
      { 'btn_icon': icon }, { 'btn_large': size === 'large' },
      { 'btn_preferred': !colorMode.unknown && theme === colorMode.preference,
        'btn_selected': !colorMode.unknown && theme === colorMode.value,}
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
   cursor: pointer;
   padding-inline: toRem(12);
   // height: toRem(38);
   color: #000;
   border-radius: toRem(5);
   border: none;
   font-size: toRem(18);
   background-color: transparent;
   
   &:enabled:hover {
      // background-color: var(--danger-hover);
    }
    span {
      display: grid;
//       .iconify {
//    color: yellowgreen;
// }
    }
   &_preferred {
         .iconify  {
            color: green;
         }
      }
      &_selected {
         .iconify  {
         color: orange;
         }
      }

   &_primary {
      padding: toRem(2);
      color: greenyellow;
         @media (any-hover: hover) {
            &:hover {
            transform: scale(1.2) rotate(-16deg);
         }
            &:enabled:hover {
               color: greenyellow;
         }
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
    color: #000;
    &:hover {
      color: #fff;
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