<script lang="ts" setup>
useSeoMeta({
   title: 'Наши услуги',
   ogTitle: 'Наши услуги',
   description: 'Страница о наших услугах',
   ogDescription: 'Страница о наших услугах'
})

// definePageMeta({
//    layout: 'back-to-main'
//    })
</script>

<style lang="scss" scoped>

</style>
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
   // @media (max-width:$tablet){
   //    width: toRem(122);
   // }
}
}

</style>