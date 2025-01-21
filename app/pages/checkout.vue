<script setup lang="ts">
const userStore = useUserStore()
const route = useRoute()

let stripe = null
let elements = null
let card = null
let form = null
let clientSecret = null
let total = ref(0)
let currentAddress = ref(null)
let isProcessing = ref(false)

onMounted(() => {
   isProcessing.value = true
   userStore.checkout.forEach(item => {
      total.value += item.price
   })
})

watch(() => total.value, () => {
   if (total.value > 0) {
      stripeInit()
   }
})

const stripeInit = async () => {

}

const pay = async () => {

}

const createOrder = async (stripeId) => {

}

const showError = (errorMsgText) => {

}

const products = [
   { id: 1, title: "Title 1", description: "This is a description", url: "https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148725042.jpg?ga=GA1.1.239409238.1713800473&semt=ais_hybrid", price: 15899 },
   { id: 2, title: "Title 2", description: "This is a description", url: "https://img.freepik.com/free-photo/pancake-with-caviar-tea_1398-3625.jpg?ga=GA1.1.239409238.1713800473&semt=ais_hybrid", price: 8949 },
]
</script>

<template>
   <div>
 Checkout
   </div>
</template>

<style lang="scss" scoped>

</style>