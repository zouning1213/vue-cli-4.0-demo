<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="box">111</div>

    <sortDemo>
      <template slot="title">
        <div>
            <p>父组件插槽东西</p>
        </div>
      </template>
      
      <div>分割线</div>
      
      <template v-slot:content="{row}">
        <div>
            <p>{{row.name}}父组件插槽东西---这是内容啊</p>
        </div>
      </template>
        
    </sortDemo>
  </div>
</template>

<script>
import sortDemo from "./components/sort-demo1"
export default {
  data(){
    return{

    }
  },
  components:{
    sortDemo
  }
}
</script>

<style lang="scss" scoped>
.box{
  width: 100px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
}
</style>
