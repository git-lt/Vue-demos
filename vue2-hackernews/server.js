process.env.VUE_ENV = 'server'
const isProd = process.env.NODE_ENV === 'production'

const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const express = require('express')
const favicon = require('serve-favicon')
const serialize = require('serialize-javascript')
const port = process.env.PORT || 8083

//Vue的服务端渲染模块：将 Vue组件 在node端渲染成字符串
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

const app = express()

// 把style区域替换为空，将内容区域上面部分分隔为head,下面部分分隔为footer
const html = (()=>{
  const template = fs.readFileSync(resolve('./index.html'), 'utf-8')
  const i = template.indexOf('{{ APP }}')
  const style = isProd ? '<link rel="stylesheet" href="/dist/styles.css">' : ''

  return {
    head: template.slice(0, i).replace('{{ STYLE }}', style),
    tail: template.slice(i+'{{ APP }}'.length)
  }
})()

// 根据模板渲染
function createRenderer(bundle){
  return createBundleRenderer(bundle, {
    cache: require('lru-cache')({
      max: 1000,
      maxAge: 1000 * 60 * 15
    })
  })
}

let renderer
if(isProd){
  const bundlePath = resolve('./dist/server-bundle.js')
  renderer = createRenderer(fs.readFileSync(bundlePath, 'utf-8'))
}else{
  require('./build/setup-dev-server')(app, bundle=>{
    renderer = createRenderer(bundle)
  })
}

// 设置静态目录和网站logo
app.use('/dist', express.static(resolve('./dist')))
app.use(favicon(resolve('./src/assets/logo.png')))

app.get('*', (req, res) => {
  if (!renderer) {
    return res.end('waiting for compilation... refresh in a moment.')
  }

  var s = Date.now()
  const context = { url: req.url }
  // Render a Vue instance in streaming mode. Returns a Node.js readable stream.
  const renderStream = renderer.renderToStream(context)
  let firstChunk = true

  res.write(html.head)

  renderStream.on('data', chunk => {
    if(firstChunk){
      if(context.initialState){
        res.write(
          `<script>window.__INITIAL_STATE__=${
            serialize(context.initialState, { isJSON: true })
          }</script>`
        )
        firstChunk = false;
      }
    }
    res.write(chunk)
  })

  renderStream.on('end', ()=>{
    res.end(html.tail)
    console.log(`whole request: ${Date.now() - s}ms`)
  })

})


app.listen(port, ()=>{
  console.log(`server started at 127.0.0.1:${port}`)
})
