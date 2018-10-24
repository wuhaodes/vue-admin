<template>
    <div class="register">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">
                    浩天在线后台管理系统
                    <el-form :model="registerUser"  :rules="rules" ref="registerForm" label-width="80px" class="register_form">
                        <el-form-item label="用户名" prop="name">
                            <el-input v-model="registerUser.name" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱" prop="email">
                            <el-input v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="registerUser.password" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="password2">
                            <el-input type="password" v-model="registerUser.password2" placeholder="请确认密码"></el-input>
                        </el-form-item>
                        <el-form-item label="选择身份">
                            <el-select v-model="registerUser.identity" placeholder="请选择身份" class="type_select">
                                <el-option label="管理员" value="manager"></el-option>
                                <el-option label="员工" value="employee"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" class="submit_btn" @click="submitForm('registerForm')">注册</el-button>
                        </el-form-item>
                    </el-form>
                </span>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    name: 'register',
    components: {},
    data() {
        var validatePass1 = (rule, value, callback) =>{
            if(!value.match(/^[A-Z]{1}[0-9a-zA-Z]*[^0-9a-zA-Z]+$/)){
                callback(new Error('首字母必须大写且必须以特殊字符结尾'));
            } else {
                callback();
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value !== this.registerUser.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            registerUser: {
                name: "",
                email: "",
                password: "",
                password2: "",
                identity: "employee",
                avatar: "../assets/logo.png"
            },
            rules: {
                name: [
                    {
                        required:true,message:"用户名不能为空",trigger:"blur"
                    },
                    {
                        min:2,max:30,message:"长度要在2到30个字符之间",trigger:"blur"
                    }
                
                ],
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
                    },
                    {
                        validator:validatePass1,trigger:"blur"
                    }
                ],
                password2: [
                    {
                        required:true,message:"确认密码不能为空",trigger:"blur"
                    },
                    {
                        min:6,max:30,message:"长度要在6到30个字符之间",trigger:"blur"
                    },
                    {
                        validator:validatePass2,trigger:"blur"
                    }
                ]
            }
        }
    },
    methods:{
        submitForm(formName){
          var baseUrl='https://www.easy-mock.com/mock/5bc7014ed85ce204b23a8f4d/vn/user/register';
          this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post(baseUrl,this.registerUser).then(res => {
                const { status } = res.data;
                if(status === "sucess"){
                    this.$message({
                        message: '注册成功!',
                        type:'success'
                    });
                    this.$router.push('/login');
                }
                else{
                  this.$message.error("注册失败"); 
                }
                
            });
            
          }
        });
        }
    },
    computed:{
        password() {
            return this.registerUser.password;
        }
    },
    watch: {
        password: function(newValue,oldValue){
            this.registerUser.password2 = "";
        }
    }
};
</script>
html
<style scoped>
.register {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(../assets/bg.jpeg) no-repeat center center;
    background-size: 100% 100%;
    background-color: red;
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
.register_form {
    margin-top: 20px;
    background-color: #fff;
    padding: 40px 40px 20px 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px #cccc;
}
.submit_btn{
    width: 100%;
}
.type_select{
    width: 230px;
}
</style>

