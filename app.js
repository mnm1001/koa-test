const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：


app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
  // console.log(ctx.request); // 打印URL
  await next(); // 调用下一个middleware
  console.log(2222, 2222);
});

app.use(async (ctx, next) => {
  const start = new Date().getTime(); // 当前时间
  await next(); // 调用下一个middleware
  const ms = new Date().getTime() - start; // 耗费时间
  console.log(1111, `Time: ${ms}ms`); // 打印耗费时间
});

app.use(async (ctx, next) => {

  var res=ctx.response
  ctx.response.set('Access-Control-Allow-Origin', 'https://www.baidu.com')
  var send = function(row) {
      res.write("data: " + JSON.stringify(row) + "\n\n");
  };

  return


  await next();
  ctx.response.type = 'text/html';
  ctx.response.set('Access-Control-Allow-Origin', 'https://www.3baidu.com')
  ctx.cookies.set('username','lisa',{
    domain:'localhost',
    path:'',   //cookie写入的路径
    maxAge:0,
    // expires:new Date('2020-07-06'),
    httpOnly:false,
    overwrite:false
  })
  // ctx.res.writeHead(200, {'Set-Cookie': 'aaa=text/png'});
  ctx.response.body = '<h1>Hello, koa2!</h1>';
  console.log(new Date());
});

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');