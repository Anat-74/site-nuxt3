<script setup lang="ts">
useSeoMeta({
   title: 'Заказы',
   ogTitle: 'Заказы',
   description: 'Страница оформление заказов',
   ogDescription: 'Страница оформление заказов'
})

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
   <section class="checkout-page">
      <h2 class="checkout-page__title">Адрес доставки</h2>

      <div 
      v-if="true"
      class="checkout-page__address"
      >
   <NuxtLink
   to="/address"
   class="checkout-page__link-update-address"
   >
      <Icon name="mdi:plus" />
      Обновить адрес
   </NuxtLink>
   <h3 class="checkout-page__subtitle" >Контакты</h3>
   <ul class="checkout-page__list">
      <li>
         <span>Имя контактного лица:</span>
         <b>Test</b>
      </li>
      <li>
         <span>Адрес:</span>
         <b>Test</b>
      </li>
      <li>
         <span>Почтовый индекс:</span>
         <b>Test</b>
      </li>
   </ul>
   </div>

   <div 
   v-else
   class="checkout-page__new-address"
   >
   <NuxtLink
   to="/address"
   class="checkout-page__link-address"
   >
      <Icon name="mdi:plus" />
      Добавить новый адрес
   </NuxtLink>
   </div>

   <div class="checkout-page__item-body">
   <CheckoutItem 
   v-for="product in products"
   :key="product.id"
   :id="product.id"
   :title="product.title"
   :description="product.description"
   :url="product.url"
   :price="product.price"
   />
</div>
   </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/base' as *;
.checkout-page {
   padding-inline: toRem(16);
   padding-block: toRem(22);
   margin-block-start: toRem(16);
   border-radius: toRem(6);
   background-color: var(--secondary-color);

   &__title {
      margin-block-end: toRem(9);
   }

&__address {
}

&__link-update-address {
   display: inline-flex;
   align-items: center;
   column-gap: toRem(4);
   padding-block-end: toRem(7);
   border-bottom: 1px solid var(--border-color);
   font-weight: 600;
   color: var(--sky-blue-color);
}

&__subtitle {
   display: block;
   padding-block-start: toRem(7);
   text-decoration: underline;
}

&__list {
   display: flex;
   flex-direction: column;
   row-gap: toRem(2);
   padding-block-start: toRem(4);
   margin-block-end: toRem(7);

   li {
      display: flex;
      align-items: center;
      column-gap: toRem(2);
      font-weight: 500;
   }
}

&__new-address {
}

&__link-address {
}

&__item-body {

}
}

</style>