<template>
    <div> 
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
</template>

<script>
export default {
  name:'nav-bar',
  data() {
    return {};
  },
  created() {
    // console.log('123')
  },
  methods: {
    onClickLeft() {
      this.$toast({
        message: "返回",
      })   
    },
    onClickRight() {
      // Toast('按钮'); 
      this.$store.commit('showPopup')
    }
  }
}
</script>

<style lang="sass">

</style>