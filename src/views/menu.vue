<template>
    <div>
        <van-popup 
            v-model="show" 
            position="right" 
            closeable   
            :style="{ height: '100%',width:'78%'}"> 
            <menu-content  :menu="menu"></menu-content>
        </van-popup>
    </div>
</template>

<script> 
import menuContent from './menu-content'
import './css/layout.scss'
export default {
  name:'ismenu',
  components:{
    menuContent
  },
  data() {
    return {  
      menu:null,
      ismotai:false, 
      activeKey: 0
    }
  }, 
  created(){ 
      // this.$POST("/menu.json").then((res)=>{
        // console.log(res)
      //   this.menu = res.data 
      // })
  },
  methods: {   
  },
  computed: {
    show: {
        get() {
          return this.$store.state.isShowMenu
        },
        set(v) { 
          // 使用vuex中的mutations中定义好的方法来改变 
          this.$store.commit('hidePopup')
        }
    }
  }
}
</script>

<style lang="sass">

</style>