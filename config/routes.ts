// import { routes } from "../src/app";
// console.log('routes', routes)
export default [
  { name: '首页', path: '/home', component: './Home' },
  {
    path: '/login',
    layout: false,
    name: '登录',
    component: './Login',
  },
  {
    path: '/admin',
    name: '测试页',
    // access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },

      {
        path: '/admin/sub-page',
        name: '二级测试页',
        // component: './Admin',
        routes: [
          { path: '/admin/sub-page', redirect: '/admin/sub-page/test' },
          { name: '可视化页面', path: '/admin/sub-page/echarts', component: './EChartsDemo' },
          { name: '三级测试页', path: '/admin/sub-page/test', component: './Table' },
          { name: '蜂鸟地图', path: '/admin/sub-page/fengmap', component: './Fengmap' },
          { name: '地图', path: '/admin/sub-page/map', component: './Map' },
          { name: '地图2', path: '/admin/sub-page/map2', component: './Map/MapDemo' },
          { name: '低代码', path: '/admin/sub-page/amis', component: './Amis' },
        ],
      },
    ],
  },
  // {
  //   name: '组织架构',
  //   path: '/organizationalStructure',
  //   routes: [
  //     { path: '/organizationalStructure', redirect: '/organizationalStructure/department' },
  //     {
  //       name: '部门管理',
  //       path: '/organizationalStructure/department',
  //       iframeUrl: '/company/dept/list.do',
  //       component: './OldPage',
  //       icon: 'https://img2.baidu.com/it/u=567357414,4240886412&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
  //     },
  //   ],
  // },

  { path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    // path 支持为一个 url，必须要以 http 开头
    path: 'https://tanyeye1.github.io/',
    target: '_blank', // 点击新窗口打开
    name: '博客',
  },
  // {
  //   path: '/admin',
  //   name: '管理页',
  //   // access: 'canAdmin',
  //   routes: [
  //     { path: '/admin', redirect: '/admin/sub-page' },

  //     {
  //       path: '/admin/sub-page',
  //       name: '二级管理页',
  //       // component: './Admin',
  //       routes: [
  //         { path: '/admin/sub-page', redirect: '/admin/sub-page/test' },
  //         { name: '三级管理页', path: '/admin/sub-page/test', component: './Admin' },
  //       ],
  //     },
  //   ],
  // },
  { path: '/', redirect: '/login' },
  { path: '*', layout: false, component: './404' },
];
