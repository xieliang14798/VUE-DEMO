<template>
  <div class="tab_content">
    <ul>
      <li v-for="(item,index) in data.list"
          :key="index"
          class="parent_list">
        <ul>
          <h3>{{item.title}}</h3>
          <li v-for="(child,i) in item.childList"
              :key="i"
              class="child_list">
            <span class="fl">{{child.name}}</span>
            <span class="fr">{{child.value}}</span>
          </li>
        </ul>

      </li>
    </ul>
    <h3>备注</h3>
    <p class="otherInfo">{{data.otherInfo}}</p>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    computed:{
      ...mapGetters({
        data:'fundBasic'
      })
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/css/detailBasicInfo.less";
</style>
