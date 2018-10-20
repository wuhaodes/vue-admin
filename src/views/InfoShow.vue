<template>
    <div class="infoshow">
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="8">
                <div class="user">
                    <img src="../assets/logo.png" alt="" class="avatar"/>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="userinfo">
                    <div class="user-item">
                        <i class="iconfont icon-geren"></i>
                        <span>wuhaodes</span>
                    </div>
                    <div class="user-item">
                        <i class="iconfont icon-shezhi"></i>
                        <span>管理员</span>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
export default {
    name: 'infoshow'
};
</script>

<style scoped>
.infoshow{
    width: 100%;
    height: 100%;
    margin-top:10px;
    box-sizing: border-box;
}
.row-bg{
    height: 100%;
}
.userinfo{
    height: 100%;
    background-color: #eee;
}
.user{
    position: relative;
    left:50%;
    top:35%;
    transform: translateX(-50%);
}
img{
    width: 150px;
}
.user-item{
    position: relative;
    left: 30%;
    top: 30%;
    padding: 26px;
    font-size: 28px;
    color: #333;
    display: flex;
    align-items: center;
}
.user-item i{
    font-size: 50px;
}
</style>