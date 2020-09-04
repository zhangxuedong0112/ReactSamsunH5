export default [
  {
    path: '/',
    // component: '../layouts/index',/* 无底部 菜单 */
    component: '../layouts/index_dibu',/* 底部 菜单 */
    // Routes: ['src/pages/Authorized'],
    // authority: ['user', 'admin'],
    routes: [
      { path: '/', component: './home', title: '首页' },
      { path: '/demo1', component: './demo1', title: 'demo1' },
      { path: '/demo2', component: './demo2', title: 'demo2' },
      { path: '/formDemo', component: './formDemo', title: 'formDemo' },
      // { path: '/me', component: './me', title: '个人中心' },
      { path: '/404', component: '404' },
    ],
  },
];
