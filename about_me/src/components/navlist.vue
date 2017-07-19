<template>
  <div class="navlist">
    <ul>
      <li v-for="(item,index) in nav_list_cont" v-on:click="nav_select(index)">
        <i class="fa fa-4x" :class="item.icon"></i>
        <em>
          <router-link :to="item.to">{{item.name}}</router-link>
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
      active:'',
      nav_list_cont:[
        {
          'name':'初步印象',
          'icon':'fa-heart-o',
          'to':'index'
        },
        {
          'name':'功力展示',
          'icon':'fa-pencil-square-o',
          'to':'baseinfo'
        },
        {
          'name':'心酸历程',
          'icon':'fa-paw',
          'to':'load'
        },
        {
          'name':'兴趣爱好',
          'icon':'fa-meh-o',
          'to':'interesting'
        }
      ]
    }
  },
  methods:{
    nav_select:function(index){
      console.log($('.navlist li').eq(index))
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
