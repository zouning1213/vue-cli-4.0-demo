<template>
  <div class="home">   
    <input type="text" name="" id="">
    <input v-focus type="text" name="" id="">
    <input v-focus type="text" name="" id="">
    <input type="text" name="" id="">

<!-- 自定义属性v-img -->
    <div v-for="(item,index) in imageList" :key="index">
        <img src="@/assets/logo.png" alt="" v-img="item.url">
    </div>

    <div class="box" v-pin='top'></div>
    <br>
    <!-- sync的用法:父子组件双向绑定 -->
    <van-button type="default" @click="change">parent按钮</van-button>
    <div>parent:{{xmm}}</div>
    <childSync :xmm.sync="xmm" :fafa="fafa" @fatherConsole="fatherConsole"></childSync>
    <!--  -->
  </div>
</template>

<script> 
// @ is an alias to /src 
import childSync from './components/child-sync'
export default {
  name: "home",
  components:{
    childSync
  },
  data(){
    return{ 
      imageList: [
          {
              url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-p10-plus.jpg"
          },
          {
              url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-watch2-pro-banner.jpg"
          },
          {
              url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/homepage/section4/home-s4-matebook-x.jpg"
          }
      ],
      top:100,
      xmm:"zs1",
      fafa:'isfafa'
    }
  },
  created(){
    this.$GET("/userInfo").then((res)=>{
      console.log(res)
    })
  },
  methods:{
    clickme(){
      console.log("clickddd")
    },
    change(){
      this.xmm = 'parentChange'
    },
    fatherConsole(){
      console.log("fatherCOnsole")
    }

  }
};
</script>
<style scoped>
  img{
    width: 40px;
    height: 40px;
  }
  .box{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #eee;
  }
</style>
