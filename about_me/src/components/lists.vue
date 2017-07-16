<template>
  <div class="lists">
    {{msg}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'lists',
  data () {
    return {
      msg: '列表导航'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
