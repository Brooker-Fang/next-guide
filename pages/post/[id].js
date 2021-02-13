export default function Post({data}) {
  return <div>
    <span>{data.id}</span>
    <span>{data.title}</span>
  </div>
}
// 返回用户可以访问到的所有的路由参数
export async function getStaticPaths () {
  return {
    // 返回固定格式的路由参数
    paths: [{params: {id: '1'}}, {params: {id: '2'}}],
    // 当用户访问的路由参数没有在当前函数中返回时，是否显示404页面
    fallback: false
  }
}
// 返回路由参数所对应的具体的数据
export async function getStaticProps ({params}) {
  const id = params.id
  let data;
  switch(id) {
    case 1: 
      data = {id: 1, title: 'post1'}
      break
    case 2: 
      data = {id: 21, title: 'post21'}
      break
    default: 
      data = {}
  }
  return {
    props: {
      data
    }
  }
}