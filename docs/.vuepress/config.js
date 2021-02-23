module.exports = {
  base: '/blog/',
  title: '运维及前端知识整理',
  description: '文件上传组件 vue文件上传 多文件上传',
  port: 8888,
  themeConfig: {
    repo: 'blog',
    sidebar: [
      ['/docker/', 'Docker'],
      ['/shell/', 'Shell'],
      ['/jenkins/', 'Jenkins'],
      ['/macBook/', 'MacBook'],
      ['/Typescript/', 'Typescript'],
      // ['/example/', '示例'],
      // ['/getstart/', '起步'],
      // ['/api/', '属性'],
      // ['/function/', '方法']
    ],
  },
  plugins: ['autobar']
}