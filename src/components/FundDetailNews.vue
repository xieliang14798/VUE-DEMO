<template>
  <div class="tab_content clearfix">
    <ul>
      <li v-for="(item,index) in data.list"
          :key="index">
        <i class="fl"></i>
        <span class="fl">{{item.title}}</span>
        <span class="fr">{{item.data}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    computed:{
      ...mapGetters({
        data:'fundNews'
      })
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/css/fundDetailNews.less";
</style>
