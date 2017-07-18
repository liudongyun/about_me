<template>
  <div class="navlist">
    <ul>
      <li>
        <i class="fa fa-heart-o fa-4x"></i>
        <em>
          <router-link to="index">初步印象</router-link>
        </em>
      </li>
      <li>
        <i class="fa fa-pencil-square-o fa-4x"></i>
        <em>
          <router-link to="baseinfo">功力展示</router-link>
        </em>
      </li>
      <li>
        <i class="fa fa-paw fa-4x"></i>
        <em>
          <router-link to="load">心酸历程</router-link>
        </em>
      </li>
      <li>
        <i class="fa fa-meh-o fa-4x"></i>
        <em>
          <router-link to="interesting">兴趣爱好</router-link>
        </em>
      </li>
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
<style scoped lang="less">
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
        padding:1rem 1rem;
        font-size:0.3rem;
        display:flex;
        flex-direction:column;
        text-align:center;
        em{
          margin-top:0.2rem;
        }
        a{
          color:#fff;
          text-decoration:none;
        }
      }
    }
  }
</style>
