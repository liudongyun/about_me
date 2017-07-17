<template>
  <div class="navlist">
    <ul>
      <li>content-1</li>
      <li>content-2</li>
      <li>content-3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navlist',
  data () {
    return {
      msg: '列表导航'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navlist{
    background-color:#353333;
    position:fixed;
    bottom:0;
    width:100%;
    color:#fff;
    ul{
      display:flex;
      justify-content:space-around;
      li{
        border:1px solid orange;
        padding:0.5rem 1rem;
      }
    }
  }
</style>
