<!--
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-12 13:37:09
 * @LastEditTime: 2022-04-12 13:40:33
 * @LastEditors: PhilRandWu
-->
# SSR 基本API

## index.html (模板)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- 插值语法，vue-ssr -->
  <!-- 双括号语法会转义 -->
  <title>{{ title }}</title>
  <!-- 三括号语法不转义 -->
  {{{ meta }}}
</head>
<body>
  
  <!-- 页面模板的挂载点 -->
  <!--vue-ssr-outlet-->
</body>
</html>
```

## server.js
```js
/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-12 13:18:24
 * @LastEditTime: 2022-04-12 13:34:27
 * @LastEditors: PhilRandWu
 */
const express = require('express');
const Vue = require('vue');
const vueServerRender = require('vue-server-renderer');
const fs = require('fs');

const app = express();

const desc = {
    title: '这是一个ssr页面',
    meta: '<meta name="description" content="Vue.js 服务端渲染指南"></meta>'
}

app.get('*', async (req, res) => {
    try {
        const vue = new Vue({
            data() {
                return {
                    msg: '123',
                }
            },
            template: '<div><span>{{ msg }}</span><input v-mode="msg" /></div>'
        })

        // a. 创建一个渲染器, 支持页面模板
        const render = vueServerRender.createRenderer({
            template: fs.readFileSync('./index.html', 'utf-8')
        });

        // b. 调用renderToString(vue实例， 回调函数)
        // render.renderToString(app, (err, html) => {
        //   res.send(html);
        // });
        const html = await render.renderToString(vue, desc);
        res.send(html);
    } catch (error) {
        console.log(error);
    }
})


// hope 有一个方法，可以将vue实例转化为html字符串。
// vue-server-renderer



app.listen('5005', () => {
    console.log('服务器正在监听5005端口');
})

```


**1. 页面失活！**
**2. 开发，组件怎么写**
