<template>
    <div>
         <van-button type="default" @click="change">child按钮</van-button>
         <div>child:{{xmm}}</div>
         <grandson v-bind="$attrs" v-on="$listeners"></grandson>
    </div>
</template>
<script>
import grandson from './grandson'
export default {
    name: "child-sync",
    components:{
        grandson
    },
    props:['xmm'],
    data(){
        return{

        }
    },
    methods:{
        change(){
            this.$emit("update:xmm",'ChildChange')
            //不能直接更改props接收的数据,父组件更新会覆盖此值
            // this.xmm = '不绑定'
        }
    }
}
</script>