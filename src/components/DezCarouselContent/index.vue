<script>
  export default {
    name: 'DezCarouselContent',
    props: {
      contentList: {
        type: Array,
        default: []
      },
      slideIndex: {
        type: Number,
        default: 0
      },
      direction: {
        type: Number,
        default: 0
      }
    }/* ,
    data() {
      return {
        isMobile: false
      }
    },
    methods: {
      resizeHandler() {
        let w = window.innerWidth
        if (w < 760) {
          this.isMobile = true
          console.log('this is mobile')
        } else {
          this.isMobile = false
          console.log('this is normal')
        }
      }
    },
    mounted() {
      window.addEventListener('resize', this.resizeHandler)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resizeHandler)
    } */
  }
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>