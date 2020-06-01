<template>
    <div>
         <van-button type="default" @click="change">sunzi按钮</van-button>
         <div>grandson:{{$attrs.papa}}</div>
    </div>
</template>
<script>
export default {
    name: "grandson",
    data(){
        return{

        }
    },
    created(){
        console.log(this.$attrs)
        console.log(this.$listeners.fatherConsole)
    },
    methods:{
        change(){
            this.$emit('fatherConsole')
        }
    }
}
</script>