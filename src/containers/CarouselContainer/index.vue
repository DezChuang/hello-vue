<script>
  // import { mapState } from 'vuex'
  import DezCarouselContent from '../../components/DezCarouselContent'
  import DezCarouselNextPrev from '../../components/DezCarouselNextPrev'
  import DezCarouselScrollItem from '../../components/DezCarouselScrollItem'
  const staticPath = `../../../static`
  export default {
    name: 'DezContainer',
    components: {
      DezCarouselContent,
      DezCarouselNextPrev,
      DezCarouselScrollItem
    },
    data () {
      return {
        contentList: [
          {
            normalBG: `${staticPath}/images/blizzard/p1_bg_1.jpg`,
            mobileBG: `${staticPath}/images/blizzard/p1_bg_2.jpg`,
            logo: `${staticPath}/images/blizzard/p1_logo.png`,
            title: '爆爆博士回來了！',
            bgColor: '#663366'
          },
          {
            normalBG: `${staticPath}/images/blizzard/p2_bg_1.jpg`,
            mobileBG: `${staticPath}/images/blizzard/p2_bg_2.jpg`,
            logo: `${staticPath}/images/blizzard/p2_logo.png`,
            title: '夏季運動會重返豔陽下！',
            bgColor: '#FFFFFF'
          },
          {
            normalBG: `${staticPath}/images/blizzard/p3_bg_1.jpg`,
            mobileBG: `${staticPath}/images/blizzard/p3_bg_2.jpg`,
            logo: `${staticPath}/images/blizzard/p3_logo.png`,
            title: '為了部落！',
            bgColor: '#000000'
          },
          {
            normalBG: `${staticPath}/images/blizzard/p4_bg_1.jpg`,
            mobileBG: `${staticPath}/images/blizzard/p4_bg_2.jpg`,
            logo: `${staticPath}/images/blizzard/p4_logo.png`,
            title: 'MY PRECIOUS',
            bgColor: '#071218'
          },
          {
            normalBG: `${staticPath}/images/blizzard/p5_bg_1.jpg`,
            mobileBG: `${staticPath}/images/blizzard/p5_bg_2.jpg`,
            logo: `${staticPath}/images/blizzard/p5_logo.png`,
            title: '媽我在這！',
            bgColor: '#FFFFFF'
          },
          {
            normalBG: `${staticPath}/images/blizzard/p6_bg_1.png`,
            mobileBG: `${staticPath}/images/blizzard/p6_bg_2.png`,
            logo: `${staticPath}/images/blizzard/p6_logo.png`,
            title: '取得 2 箱火爆鋼球戰利品',
            bgColor: '#ccced6'
          }
        ]
      }
    },
    computed: {
      total() {
        return this.contentList.length
      },
      // ...mapState({
      //   slideIndex: state => state.dezBanner.slideIndex,
      //   direction: state => state.dezBanner.direction,
      //   mouseEnter: state => state.dezBanner.mouseEnter
      // })
    },
    methods: {
      changeSlideIndex(index) {
        // this.$store.commit('dezBanner/UPDATE_DIRECTION', index > this.slideIndex ? 1 : -1)
        // this.$store.commit('dezBanner/UPDATE_SLIDE_INDEX', (index + this.total) % this.total)
      },
      mouseOver(enter) {
        // this.$store.commit('dezBanner/UPDATE_MOUSE_ENTER', enter)
      }/*,
      resizeHandler() {
        let w = window.innerWidth
        if (w < 768) {
          console.log('this is mobile')
        } else {
          console.log('this is normal')
        }
      } */
    }/* ,
    mounted() {
      window.addEventListener('resize', this.resizeHandler)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resizeHandler)
    } */

    // life cycle
    /* beforeCreate() {
      console.log('beforeCreate 被執行')
    },
    created() {
      console.log('created 被執行')
    },
    beforeMount() {
      console.log('beforeMount 被執行')
    },
    mounted() {
      console.log('mounted 被執行')
    },
    beforeUpdate() {
      console.log('beforeUpdate 被執行')
    },
    updated() {
      console.log('updated 被執行')
    },
    beforeDestroy() {
      console.log('beforeDestroy 被執行')
    },
    destroyed() {
      console.log('destroyed 被執行')
    }, */
  }
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>

