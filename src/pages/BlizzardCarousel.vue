<template>
  <div>
    <CarouselContainer></CarouselContainer>
    <!-- <CarouselBackground></CarouselBackground>
    <CarouselNext></CarouselNext>
    <CarouselPrev></CarouselPrev> -->
  </div>
</template>

<script>
  import CarouselContainer from '../components/Carousel/CarouselContainer'
  /* import CarouselBackground from '../components/Carousel/CarouselBackground.vue'
  import CarouselNext from '../components/Carousel/CarouselNext.vue'
  import CarouselPrev from '../components/Carousel/CarouselPrev.vue' */
  export default {
    // 2. 在 vue 宣告使用
    components: {
      CarouselContainer,
      /* CarouselBackground,
      CarouselNext,
      CarouselPrev, */
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
