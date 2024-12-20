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
      <section class="layout">
         <h1> services page
         </h1>
         <NuxtPicture 
         src="/image/removebg-preview.png"
         sizes="2xl:355px xl:324 md:299 sm:244 xs:202px"
         loading="lazy"
         />
      </section>
</template>

<style lang="scss" scoped>
section {
   .icon {
   color: var(--active-link);
}
}

</style>