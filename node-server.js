// https://www.cnblogs.com/tuspring/p/14340457.html
/* 引入express框架 */
const exprss = require("express")

const app = exprss()
/* 引入cors */
const cors = require('cors')

app.use(cors())

/* 引入body-parser */
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//设置跨域请求
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})


app.get('/api', (req, res) => {
    res.send('<p style="color:red">服务已启动</p>')
})
app.get('/user', (req, res) => {
  res.send('<p style="color:red">服务已启动</p>')
})
/* 监听端口 */
app.listen(3000, () => {
    console.log('listen:3000')
})