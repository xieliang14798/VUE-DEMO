<template>
  <div id="app">
    <loading v-show="isShow"></loading>
    <router-view/>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    computed:{
      ...mapGetters({
        isShow:'isLoadingShow'
      })
    }
  }
</script>

<style>
</style>
