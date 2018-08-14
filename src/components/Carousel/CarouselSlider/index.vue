<script>
  export default {
    name: 'CarouselSlider',
    data () {
      return {
        slideIndex: 0,
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
            background: 'static/images/blizzard/p3_bg_1.jpg',
            logo: 'static/images/blizzard/p3_logo.png',
            title: '魔獸世界齁勝',
          },
          {
            background: 'static/images/blizzard/p4_bg_1.jpg',
            logo: 'static/images/blizzard/p4_logo.png',
            title: '第 14 賽季開跑',
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
          }
        ]
      }
    },
    methods: {
      clickNext: function (event) {
        this.slideIndex = (this.slideIndex + 1) % this.contentList.length
        console.log(this.slideIndex)
      },
      clickPrev: function (event) {
        this.slideIndex = (this.slideIndex + this.contentList.length - 1) % this.contentList.length
        console.log(this.slideIndex)
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
