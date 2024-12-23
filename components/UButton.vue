<script setup>
   const props = defineProps({
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
      :disabled="disabled"
      @click="clickOnButton"
      :class="[
      'btn', `btn_${color}`,
      { 'btn_rounded': rounded }, { 'btn_outlined': outlined },
      { 'btn_icon': icon }, { 'btn_large': size === 'large' }
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
   height: toRem(38);
   color: #000;
   border-radius: toRem(5);
   border: none;
   font-size: toRem(18);

  &_primary {
    background: var(--primary);
    border: 1px solid var(--primary);
    &:enabled:hover {
      background: var(--primary-hover);
    }
  }
  &_second {
    background: var(--second);
    border: 1px solid var(--second);
    &:enabled:hover {
      background: var(--second-hover);
    }
  }
  &_success {
    background: var(--success);
    border: 1px solid var(--success);
    &:enabled:hover {
      background: var(--success-hover);
    }
  }
  &_info {
    background: var(--info);
    border: 1px solid var(--info);
    &:enabled:hover {
      background: var(--info-hover);
    }
  }
  &_warning {
    background: var(--warning);
    border: 1px solid var(--warning);
    &:enabled:hover {
      background: var(--warning-hover);
    }
  }
  &_danger {
    background: var(--danger);
    border: 1px solid var(--danger-hover);
    &:enabled:hover {
      background: var(--danger-hover);
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
    padding: 0;
    width: toRem(40);
    height: toRem(40);
    border-radius: 50%;
  }
  &_large {
    height: toRem(48);
    padding: 0 toRem(30);
  }
}
</style>