<script>
  export default {
    name: 'DezCarouselNextPrev',
    props: {
      total: {
        type: Number,
        default: 0
      },
      slideIndex: {
        type: Number,
        default: 0
      }
    },
    methods: {
      changeSlideIndex(index) {
        this.$store.commit('dezBanner/UPDATE_DIRECTION', index > this.slideIndex ? 1 : -1)
        this.$store.commit('dezBanner/UPDATE_SLIDE_INDEX', (index + this.total) % this.total)
      }
    }
  }
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>