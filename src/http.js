import axios from 'axios'
import { Loading } from 'element-ui'
import { Message } from 'element-ui'
import router from './router'

let loading;
function startLoading(){
    loading = Loading.service({
        lock: true,
        text: "拼命加载中......",
        background: 'rgba(0,0,0,0.7)'
    });
}
function endLoading(){
    loading = Loading.close();
}

//请求拦截
axios.interceptors.request.use(config =>{
    //开始加载动画调用
    startLoading();
    if(localStorage.eleToken){
        //设置统一的请求头
        config.headers.Authorization = localStorage.eleToken;
    }
    return config;
}, error => {
    return Promise.reject(error);
})
//响应拦截
axios.interceptors.response.use(response => {
    //结束加载动画调用
    endLoading();
    return response;
}, error => {
    //结束加载动画调用
    endLoading();
    Message.error(error.response.data);
    // const { status } = error.response;
    // if(status == 401){//token过期处理
    //     Message.error('token失效，请重新登录');
    //     localStorage.removeItem('eleToken');
    //     router.push('/login');
    // }
    return Promise.reject(error);
})

export default axios