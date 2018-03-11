<template>
  <div class="float_window">
    <div class="top clearfix">
      <div class="top_info_left">
        <span class="alarm_icon"></span>
        <h4 class="alarm_name">距离购买结束</h4>
      </div>
      <div class="top_info_right">
        <span class="level_icon"></span>
        <h4 class="min_money">{{data.min_first_balance}}</h4>
      </div>
    </div>
    <div class="middle clearfix">
      <div class="sk_time" id="sk_time">
        <span class="num">{{day | FormatTime}}</span>
        <span class="str">天</span>
        <span class="num">{{hour | FormatTime}}</span>
        <span class="str">时</span>
        <span class="num">{{minute | FormatTime}}</span>
        <span class="str">分</span>
        <span class="num">{{second | FormatTime}}</span>
        <span class="str">秒</span>
      </div>
      <span class="remain_balance">{{data.remaining_amount}}</span>
    </div>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    data() {
      return {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
      }
    },
    created() {
      this.countdown();
    },
    computed:{
      ...mapGetters({
        data:'fundFloat'
      })
    },
    methods: {
      countdown() {
        var time = 12 * 24 * 60 * 60;
        var timer;
        timer = setInterval(function () {
          time--;
          this.day = Math.floor(time / 86400);
          this.hour = Math.floor(time / 3600 % 24);
          this.minute = Math.floor(time / 60 % 60);
          this.second = Math.floor(time % 60);
          if (time <= 0) {
            clearInterval(timer);
          }
        }.bind(this), 1000);
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/css/fundDetailFloat.less";
</style>
