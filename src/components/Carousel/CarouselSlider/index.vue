<script>
  export default {
    name: 'CarouselSlider',
    data () {
      return {
        slideIndex: 0,
        direction: 1, // 1: 下一張; -1: 前一張
        contentList: [
          {
            background: 'static/images/blizzard/p1_bg_1.jpg',
            logo: 'static/images/blizzard/p1_logo.png',
            title: '爆爆博士回來了！',
          },
          {
            background: 'static/images/blizzard/p2_bg_1.jpg',
            logo: 'static/images/blizzard/p2_logo.png',
            title: '夏季運動會重返豔陽下！',
          },
          {
            index: 2,
            background: 'static/images/blizzard/p3_bg_1.jpg',
            logo: 'static/images/blizzard/p3_logo.png',
            title: '為了部落！',
          },
          {
            index: 3,
            background: 'static/images/blizzard/p4_bg_1.jpg',
            logo: 'static/images/blizzard/p4_logo.png',
            title: 'MY PRECIOUS',
          },
          {
            background: 'static/images/blizzard/p5_bg_1.jpg',
            logo: 'static/images/blizzard/p5_logo.png',
            title: '媽我在這！',
          },
          {
            background: 'static/images/blizzard/p6_bg_1.png',
            logo: 'static/images/blizzard/p6_logo.png',
            title: '取得 2 箱火爆鋼球戰利品',
            loadingWidth: 0,
          }
        ]
      }
    },
    computed: {
      total() {
        return this.contentList.length
      }
    },
    methods: {
      changeSlideIndex(index){
        this.direction = index > this.slideIndex ? 1 : -1
        this.slideIndex = (index + this.total) % this.total
      },
    },
    //life cycle
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
