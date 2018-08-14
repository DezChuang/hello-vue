<template>
  <div class="baseContainer">
    <!--
      router-link 就像 <a href="/BlizzardCarousel">BlizzardCarousel</a>
      :to 裡面是物件形式，描述要轉跳的目的與需要帶的參數
      目的：考可以用 path 或 name
      在 index.js router 我們是這樣設定的：
      {
        path: '/BlizzardCarousel',
        name: 'BlizzardCarousel',
        component: BlizzardCarousel
      },
    -->
    <header>
      <nav>
        <router-link class="headerLink" :to="{path: '/'}">Home</router-link>
        <router-link class="headerLink" :to="{path: '/BlizzardCarousel'}">BlizzardCarousel</router-link>
      </nav>
    </header>

    <!-- 轉跳後所載入的 component 最後會顯示在此 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: Arial,Helvetica,"Segoe UI Symbol","Segoe MDL2 Assets","微軟正黑","Microsoft JhengHei","Tei TC",sans-serif;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    box-sizing: border-box;
    background-color: #002650;
    color: #fff;
    margin: 0;
    padding: 0;
    max-width: 100%;
    overflow-x: hidden;
    font-weight: 400;
    line-height: 1.7;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  div {
    box-sizing: border-box;
    display: block;
  }
  header {
    width: 100%;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .headerLink {
    color: rgba(255, 255, 255, 0.7);
  }
</style>
