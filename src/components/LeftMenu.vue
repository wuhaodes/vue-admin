<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu
            class="el-menu-vertical-demo"
            background-color="#324057"
            text-color="#fff"
            active-text-color="#409eff">
                <router-link to="/home">
                    <el-menu-item index="0">
                        <i class="fa fa-margin fa-server"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <template v-for="item in items">
                        <el-submenu v-if="item.children" :index="item.path" :key="item.path">
                            <template slot="title">
                                <i :class="'fa fa-margin'+item.icon"></i>
                                <span slot="title">{{item.name}}</span>
                            </template>
                            <route-link v-for="(citem,cindex) in item.children" :to="citem.path" :key="cindex">
                                <el-menu-item :index="citem.path">
                                    <span slot="title">{{citem.name}}</span>
                                </el-menu-item>
                            </route-link>
                        </el-submenu>
                    </template>
                </router-link>
            </el-menu>
        </el-col>
    </el-row>
</template>


<script>
export default {
    name: "leftmenu",
    data(){
        return {
            items: [
                {
                    icon: 'fa-money',
                    name: '资金管理',
                    path: 'fund',
                    children: [{path:"fundlist",name:"资金流水"}]
                },
                {
                    icon: 'fa-asterisk',
                    name: '信息管理',
                    path: 'info',
                    children: [{path:"infoshow",name:"个人信息"}]
                },
            ]
        }
    }
}
</script>

<style scoped>
.tac{
   margin-top: 60px;
   position: fixed;
   width: 250px;
}
.el-menu-vertical-demo{
    min-height: 595px;
}
.el-menu{
    border-right: 0px solid #324057;
}
</style>


