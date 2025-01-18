import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
   const persist = ref(true)
   const isMenuOverlay = ref(false)
   const isLoading = ref(false)
   const checkout = ref([])

   return {
      persist,
      isMenuOverlay,
      isLoading,
      checkout
   }
})