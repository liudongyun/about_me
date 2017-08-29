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
      nav_list_cont:[
        {
          'name':'印象',
          'icon':'fa-heart-o',
          'to':'index'
        },
        {
          'name':'练习',
          'icon':'fa-pencil-square-o',
          'to':'baseinfo'
        },
        {
          'name':'经历',
          'icon':'fa-paw',
          'to':'load'
        },
        {
          'name':'爱好',
          'icon':'fa-meh-o',
          'to':'interesting'
        }
      ]
    }
  },
  methods:{
    nav_select:function(index){
      $('.navlist li,.navlist li a').css('color','#fff');
      $('.navlist li').eq(index).css('color','pink');
      $('.navlist li').eq(index).find('a').css('color','pink');
      var thisHash=window.location.href.split('/')[window.location.href.split('/').length-1];
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
    z-index:8;
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
