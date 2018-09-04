<script>
  import TWEEN from 'tween.js'
  import CarouselScrollButton from '../../components_kit/DezComponentsKit/CarouselScrollButton'
  let tweenTarget = {
    width: 0
  }
  let tween = new TWEEN.Tween(tweenTarget)
  export default {
    name: 'DezCarouselScrollItem',
    components: {
      CarouselScrollButton
    },
    props: {
      total: {
        type: Number,
        default: 0
      },
      slideIndex: {
        type: Number,
        default: 0
      },
      mouseEnter: {
        type: Number,
        default: -1
      }
    },
    data() {
      return {
        interval: 6000,
        tweenObj: {
          width: 0
        }
      }
    },
    methods: {
      changeSlideIndex(index) {
        this.$store.commit('dezBanner/UPDATE_DIRECTION', index > this.slideIndex ? 1 : -1)
        this.$store.commit('dezBanner/UPDATE_SLIDE_INDEX', (index + this.total) % this.total)
      },
      animate() {
        TWEEN.update()
        requestAnimationFrame(this.animate)
      },
      start() {
        tween
          .to({ width: 100 }, this.interval)
          .start()
      },
      next() {
        tweenTarget.width = 0
        tween.update()
        this.$store.commit('dezBanner/UPDATE_SLIDE_INDEX', (this.slideIndex + 1 + this.total) % this.total)
        this.start()
      }
    },
    mounted() {
      tween.onUpdate(() => {
        this.tweenObj.width = tweenTarget.width
      }).onComplete(() => {
        this.next()
      })
      /* this.animate()
      this.start() */
    }/* ,
    updated() {
      if (this.mouseEnter > 0) {
        tween.stop()
        tween.update()
      }
    } */
  }
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>