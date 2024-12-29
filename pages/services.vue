<script lang="ts" setup>
useSeoMeta({
   title: 'Наши услуги',
   ogTitle: 'Наши услуги',
   description: 'Эта страница о наших услугах',
   ogDescription: 'Эта страница о наших услугах'
})

// definePageMeta({
//    layout: 'back-to-main'
//    })
</script>

<template>
      <section class="services">
         <h1 class="services__title"> services page</h1>
         <NuxtImg 
         class="services__image"
         src="/image/removebg-preview.png"
         alt="image"
         format="webp"
         width="266"
         loading="lazy"
         />
      </section>
</template>

<style lang="scss" scoped>
.services {
&__title {
}

&__image {
   @media (max-width:$tablet){
      width: toRem(122);
   }
}
}

</style>