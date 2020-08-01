// 引入axios
 import axios from 'axios';
//  配置公共的url
axios.defaults.baseURL=process.env.VUE_APP_URL;
// 配置一个请求拦截器
axios.interceptors.request.use(function(config){
    return  config;
},function(error){
    return Promise.reject(error);
});

//配置相应的拦截器
axios.interceptors.response.use(function(response){
    return response;
},function(error){
    return Promise.reject(error);
});

// 导出自定义的axios
export default axios;