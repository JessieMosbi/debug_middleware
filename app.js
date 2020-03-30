const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const methodOverride = require('method-override')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(methodOverride('_method'))

const { debug1 } = require('./lib.js')

// Q1: 2019-5-17 18:51:12 | GET from /
app.use(debug1)

// 列出全部 Todo
app.get('/', (req, res) => {
  res.render('index')
  // res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.render('index')
  // res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.render('index')
  // res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.render('index')
  // res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.render('index')
  // res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
