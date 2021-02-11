import React, { Component } from 'react'
import Head from 'next/head'
import { readFile } from 'fs'
import { promisify } from 'util' // 将异步函数 变成返回promise的函数
import { join } from 'path'
import style from './style.module.css'
const read = promisify(readFile)
export class List extends Component {
  render() {
    return (
      <>
      <Head>
        <title>list page</title>
      </Head>
      <div>
        <div className={style['wrap']}>
          {this.props.data}
        </div>
      </div>
      </>
    )
  }
}

export default List
// 静态生成的 页面，需要提前获取的数据在getStaticProps方法里
export async function getStaticProps() {
  let data = await read(join(process.cwd(), 'pages', '_app.js'), 'utf-8')
  return {
    props: {
      data
    }
  }
}
