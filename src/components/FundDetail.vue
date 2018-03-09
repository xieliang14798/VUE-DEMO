<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="fund_detail">
        <div class="top_image">
          <img src="../assets/image/introduct_stock_right.png" class="top_icon">
          <van-row class="info_row">
            <van-col span="12" class="info_col">预期年化</van-col>
            <van-col span="12" class="info_col">产品期限</van-col>
          </van-row>
          <van-row class="number_row">
            <van-col span="12" class="number_col">5.2<i>%</i></van-col>
            <van-col span="12" class="number_col">4个月</van-col>
          </van-row>
          <float></float>
        </div>
        <div class="content">
          <van-tabs>
            <van-tab title="基本信息">
              <basic></basic>

            </van-tab>

            <van-tab title="最新公告">
              <div class="tab_content">
                <news></news>
              </div>

            </van-tab>
          </van-tabs>
          <div class="more_info">
            详细信息
          </div>
        </div>

      </div>
    </van-pull-refresh>
    <div class="footer">
      <button class="fl">拨打电话</button>
      <button class="fr">立即购买</button>
    </div>
  </div>
</template>

<script>
  import Float from './FundDetailFloat.vue'
  import Basic from './FundDetailBasicInfo.vue'
  import News from './FundDetailNews.vue'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        isLoading: false
      }
    },
    components: {
      Float,
      Basic,
      News
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      },
      fetchData() {
        var _this = this;
        this.$http.get('static/data/index.data').then(function (res) {
          console.log(res.data);
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/css/fundDetail.less";
</style>
<!--Vant修改tab样式，覆盖它的原有样式，不能放scoped里，否则不生效-->
<style>
  .van-tab--active {
    color: #39414A;
    font-weight: bold;
  }

  .van-tabs__nav-bar {
    background-color: #1995FB;
    height: 1px;
  }

  .van-tab:nth-of-type(2):after {
    content: '';
    width: 1px;
    height: 26px;
    background: #E7EBEF;
    position: absolute;
    top: 9px;
    right: 0;
  }

</style>
