<script setup lang="ts">
const dialogElement = useTemplateRef<HTMLDialogElement | null>('dialog-contacts')

onMounted(() => {
  if (dialogElement.value) {
    useCloseDialogElement(dialogElement.value)
  }
})
</script>

<template>
   <div>
   <UButton 
   onclick="window.dialogContacts.showModal()" 
   hamburger="hamburger"
   >
     <span></span>
     <span class="visually-hidden">Open navigation menu</span>
   </UButton>
   <dialog 
   class="dialog-contacts"
   ref="dialog-contacts"
   id="dialogContacts" 
   aria-label="Контакты" 
   >
     <div class="dialog-contacts__items">
       <form method="dialog">
         <UButton 
         nameClass="close"
         type="submit" 
          />
       </form>
     </div>
   </dialog>
</div>
 </template>

<style lang="scss" scoped>
@use '@/assets/scss/base' as *;
.dialog-contacts {
  @include adaptiveValue('width', 855, 290);
  display: block;
  min-height: 100dvh;
  position: fixed;
  inset: 0;
  margin-inline-end: 0;
  background-color: var(--border-color);
  transform: translateX(100%);
  transition: transform .2s linear;

  &[open] {
   transform: translateX(0);
    transition: transform .3s linear;
  }

  &::backdrop {
   opacity: .9;
   background-color: var(--dark-color);
  }

  &__items {
   min-height: 100dvh;
   padding-block: toEm(25, 16);
   @include adaptiveValue('padding-inline', 22, 12);
  }
}
</style>