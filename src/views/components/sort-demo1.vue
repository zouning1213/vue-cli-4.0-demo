<template>
  <div class="home">  
        <p>插槽1啊</p>
        <slot name="title"></slot>
            <div v-for="(item,index) in tableData" :key="index">
                    <slot name="content" :row="item"></slot>
            </div>
        <slot></slot>
  </div>
</template>

<script>  
export default {
  name: "home", 
  data(){
      return{
          tableData:[
              {
                  id:1,
                  name:'长'
              },
              {
                  id:2,
                  name:'王'
              },
              {
                  id:3,
                  name:'李'
              }
          ]
      }
  }
};
</script>

<style lang="sass">

</style>
