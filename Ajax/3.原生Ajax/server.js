
const { request, response, json } = require('express');
const express = require('express');

//创建应用对象
const app = express();

// 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.all('/server', (request, response) => {
    // 设置响应
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('Hello');
});

///////
app.all('/json-server', (request, response) => {
    // 设置响应
    response.setHeader('Access-Control-Allow-Origin', '*');
    // response.send('Hello ajax json');
    // 响应一个数据
    const data = {
        name: 'atguigu'
    };
    let str = JSON.stringify(data);
    response.send(str);
});

//延时响应
app.all('/delay', (request, response) => {
    // 设置响应 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    setTimeout(() => {
        response.send('延时响应');
    }, 3000);
});
/////// Axios
app.all('/axios-server', (request, response) => {
    // 设置响应
    response.setHeader('Access-Control-Allow-Origin', '*');
    // response.send('Hello ajax json');
    // 响应一个数据
    const data = {
        name: 'atguigu'
    };
    let str = JSON.stringify(data);
    response.send(str);
});
////// fetch
app.all('/fetch-server', (request, response) => {
    // 设置响应
    response.setHeader('Access-Control-Allow-Origin', '*');
    // response.send('Hello ajax json');
    // 响应一个数据
    const data = {
        name: 'atguigu'
    };
    let str = JSON.stringify(data);
    response.send(str);
});
//////
// 监听端口启动服务
app.listen(8000, () => {
    console.log('服务已启动，8000端口监听中');
});


