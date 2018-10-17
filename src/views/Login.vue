<template>
    <div class="login">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">
                    浩天在线后台管理系统
                    <el-form :model="loginUser"  :rules="rules" ref="loginForm" label-width="100px" class="login_form">
                        <el-form-item label="邮箱" prop="email">
                            <el-input v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="loginUser.password" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" class="submit_btn" @click="submitForm('loginForm')">登录</el-button>
                        </el-form-item>
                       <div class="tiparea">
                           <p>还没有帐号？现在<router-link to='/register'>注册</router-link></p>
                       </div>
                    </el-form>
                </span>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    name: 'login',
    components: {},
    data() {
        return {
            loginUser: {
                email: "",
                password: ""
            },
            rules: {
                email: [
                    {
                        type:"email",required:true,message:"邮箱格式不正确",trigger:"blur"
                    },
                ],
                password: [
                    {
                        required:true,message:"密码不能为空",trigger:"blur"
                    },
                    {
                        min:6,max:30,message:"长度要在6到30个字符之间",trigger:"blur"
                    }
                ]
            }
        }
    },
    methods:{
        submitForm(formName){
          this.$refs[formName].validate((valid) => {
          if (valid) {
            // this.$axios.post('/api/users/login',this.loginUser).then(res => {
                //获取token
                //const { tokejwtn } = res.data;
                //保存到ls
                //localStorage.setItem('eleToken',token);
                //解析token
                //const decode = jwt_decode(token);
                
            // }).catch((err) => {
                
            // });
            this.$router.push('/index');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        }
    },
    computed:{
        password() {
            return this.loginUser.password;
        }
    },
    watch: {
        password: function(newValue,oldValue){
            this.loginUser.password2 = "";
        }
    }
};
</script>
html
<style scoped>
.login {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(../assets/bg.jpeg) no-repeat center center;
    background-size: 100% 100%;
    overflow: hidden;
}
.form_container{
    width: 370px;
    height: 210px;
    position: absolute;
    top: 10%;
    left: 50%;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    transform: translateX(-50%);
}
.form_container .manage_tip .title{
    font-family: 'Miscrosoft YaHei';
    font-weight: bold;
    font-size: 26px;
    color: #fff;
}
.login_form {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px 50px 20px 0px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px #cccc;
}
.submit_btn{
    width: 100%;
}
.tiparea{
    position: relative;
    left: 100px;
    color: #000;
    font-size: 8px;
}

</style>

