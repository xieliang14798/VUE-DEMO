<template>
  <div class="tab_content clearfix">
    <ul>
      <li v-for="(item,index) in newsList"
          :key="index">
        <i class="fl"></i>
        <span class="fl">{{item.title}}</span>
        <span class="fr">{{item.data}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        newsList: [
          {title: '凡人修仙者', data: '2018-05-16'},
          {title: '遮天', data: '2018-03-11'},
          {title: '神墓', data: '2018-02-14'},
          {title: '斗罗大陆', data: '2018-02-16'},
          {title: '长生界', data: '2018-01-13'},
          {title: '烈火如歌', data: '2018-04-03'},
          {title: '星辰变', data: '2018-02-11'},
          {title: '三国演义', data: '2018-03-22'},
        ]
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/css/fundDetailNews.less";
</style>
