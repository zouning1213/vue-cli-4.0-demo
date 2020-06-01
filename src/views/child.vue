<template>
  <div class="about">
    <h1>This is child page</h1>
    <function-button >click<function-button>
         
  </div>
</template>

<script> 
import  functionButton  from "./functionbutton";
export default {
  data(){
    return{

    }
  },
  components:{
      functionButton
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
