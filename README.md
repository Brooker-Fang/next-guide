### 创建页面
+ 页面需要放置在pages文件夹下，每个文件就是一个页面
+ 页面组件需要被默认导出
+ 页面组件中不需要引入React
+ 页面地址与文件地址是对应关系
### 页面跳转
+ 使用Link组件跳转
```js
import Link from 'next/link'
<Link href="/list">
  <a title="go list">go list</a>
</Link>
```
+ 如果浏览器中JavaScript被禁用，则使用链接调整
+ Link组件只能添加href属性，其他属性应该添加到a标签上
+ Link组件在生产环境会通过预取功能自动优化应用程序以获取最佳性能
### 静态资源
+ 静态资源放于public文件夹
+ 组件通过'/image/*.jpg'可以直接访问
### 修改页面元数据
+ 通过Head组件修改元数据
```js
import Head from 'next/head'
<>
  <Head>
    <title>List page</title>
  </Head>
</>
```
