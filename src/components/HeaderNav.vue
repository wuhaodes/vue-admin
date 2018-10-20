<template>
   <header class="header-nav">
       <el-row>
           <el-col :span="6" class="logo-container">
               <img src="../assets/logo.png" alt="" class="logo"/>
               <span class="title">浩天在线后台管理系统</span>
           </el-col>
           <el-col :span="6" class="user">
               <div class="userinfo">
                   <img src="../assets/logo.png" class="avatar" alt="">
                   <div class="welcome">
                       <p class="name comename">欢迎</p>
                        <p class="name avatarname">{{user.name}}</p>
                   </div>
                    <el-dropdown trigger="click" @command="setDialogInfo">
                        <span class="el-dropdown-link">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="info">个人信息</el-dropdown-item>
                            <el-dropdown-item command="logout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
               </div>
           </el-col>
       </el-row>
   </header>
</template>


<script>
export default {
    name: 'header-nav',
    computed:{
        user(){
            return this.$store.getters.user;
        }
    },
    methods:{
        setDialogInfo(cmdItem){
            switch(cmdItem){
                case "info":
                    this.showInfoList();
                    break;
                case "logout":
                    this.logout();
                    break;
            }
        },
        showInfoList(){
            console.log("个人信息");
            this.$router.push('/infoshow');
        },
        logout(){
            console.log("退出");
            this.$router.push('/login');
        }
    }
};
</script>

<style scoped>
*{
    padding: 0px;
    margin: 0px;
}
.header-nav{
    width: 100%;
    height: 60px;
    min-width: 600px;
    padding: 5px;
    background: #324057;
    color: #fff;
    position: fixed;
}
.logo-container{
    display: flex;
    align-items: center;
    width: 230px;
}
.logo{
    height: 50px;
    margin-right: 5px;
}
.user{
    float: right;
    height: 60px;
    width: 150px;
}
.userinfo{
    display: flex;
    align-items: center;
    height: 60px;
}
.welcome{
    margin-left: 5px;
}
.comename{
    font-size: 12px;
}
.avatar{
    width: 40px;
    height: 40px;
}
.avatarname{
    color: #409eff;
    font-weight: bolder;
}
.el-dropdown{
    color: #fff;
}
.el-dropdown-link{
    cursor: pointer;
    margin-right: 5px;
}
</style>
