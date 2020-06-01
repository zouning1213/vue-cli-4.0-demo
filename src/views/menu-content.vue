<template>
    <div class="yd-mobile-menu">
        <div class="menu-header">
            <h3>选择菜单</h3>
            <!-- <span class="menu-close" @click="closeMenu">
                    <van-icon name="cross"/>
            </span> -->
        </div>
        <div class="menu-content">
            <div class="one-menu-left">
                <div class="user-avatar">
                    <!-- <template v-if="this.$store.state.userInfo.userType == 'E'">
                        <yd-author name="教务" width="50"></yd-author>
                    </template> -->
                    <!-- <template v-else>
                        <yd-author :name="this.$store.state.userInfo.xm" width="49"></yd-author>
                    </template> -->
                    <template>
                        <!-- <yd-author name="劳务" width="49"></yd-author> -->
                        名字
                    </template>
                    <h4>{{'暂无姓名'}}</h4>
                </div>
                <!--一级菜单-->
                <ul class="one-menu-ul">
                    <li v-for="(item,index) in menu" :key="index"
                        :class="{'active':oneActive == item.code}" @click="openNavChild(item.code,item.pidCode)">
                        <router-link class="yd-nav-bar" :to="{name : item.url == '#' ? '' : item.url}">
                            <i v-if="item.icon != '' && item.icon != '#'"
                               :class="['yd-icon','yd', item.icon]"></i>
                            {{item.name}}
                        </router-link>
                        <div v-if="item.children != '' || item.children.length > 0"
                             class="down-up">
                            <van-icon name="arrow"/>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="two-menu-right">
                <div v-for="(item,index) in menu" :key="index">
                    <!--二级菜单-->
                    <div class="two-menu-ul" v-for="(item2,index2) in item.children" :key="index2"
                         v-show="oneActive == item.code">
                        <router-link class="yd-two-bar" :to="{name:item2.url == '#' ? '' : item2.url}"
                                     @click.native="openTwoNavChild(item2.code ,item2.pidCode)">
                            <span class="round"></span>{{item2.name}}
                        </router-link>
                        <!--三级菜单-->
                        <ul class="clearfix">
                            <li v-for="(item3,index3) in item2.children" :key="index3"
                                @click=" threeActive = item3.code"
                                :class="{'item-list':true,'bg-skin' :threeActive == item3.code}">
                                <router-link :to="{name:item3.url}">
                                    {{item3.name}}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"menu-content",
        props:['menu'],
        data() {
            return {
                activeName:1,
                oneActive:'one1',
                twoActive:'',
                threeActive:null,
                currentName:'1_2',
                threeName:null
            }
        },
        methods:{
            openNavChild(code,pidCode) {
                // console.log('1')
                if (this.oneActive == code) {
                    this.oneActive = null
                } else {
                    this.oneActive = code
                }
                this.twoActive = null
                this.threeActive = null
                this.setMenuCode()
            },
            openTwoNavChild(code,pidCode) { //当当前有路由名称的时候 根据路由名称判断显示下级，如果地址是# 按照索引显示下级
                if (this.twoActive == code) {
                    this.twoActive = null
                } else {
                    this.twoActive = code
                }
                this.threeActive = null
                this.setMenuCode()
            },
            setMenuCode() {
                let menu = {
                    oneCode:this.oneActive,
                    twoCode:this.twoActive,
                    threeCode:this.threeActive
                }
                localStorage.setItem('currentMenu',JSON.stringify(menu))
            },
            closeMenu() {
                this.$store.commit('hidePopup')
            }
        }
    }
</script>

<style lang="less" scoped>

</style>