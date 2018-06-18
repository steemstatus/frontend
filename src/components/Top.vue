<template>

<div class="" >

  <div class="navbar2">
    <router-link id="m1" to="/" v-bind:class="{ 'text-primary-mutable': $store.state.topMenu == 'steemstatus' }">STEEM STATUS</router-link>
    <router-link id="m2" to="/accounts" style="margin-left: 20px;margin-right: -5px" v-bind:class="{ 'text-primary-mutable': $store.state.topMenu == 'accounts' }">Accounts</router-link>
    <router-link id="m3" to="/witness" v-bind:class="{ 'text-primary-mutable': $store.state.topMenu == 'witness' }">Witness</router-link>

    <hr id="h1" style="margin-top:50px;margin-bottom:1px;width: 100%"/>
  </div>

<div style="margin-bottom:70px"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      prePositionState:'up'
    }
  },
  computed: {    
  },

  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top {
}

</style>
