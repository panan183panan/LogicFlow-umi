import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'LogicFlow-umi',
  },
  routes: [
    {
      path: '/',
      redirect: '/application',
    },
    {
      name: '应用',
      path: '/application',
      component: './Application',
    },
    {
      name: '架构地图',
      path: '/architecture',
      component: './Architecture',
    },
    {
      name: ' CRUD示例',
      path: '/table',
      component: './Table',
    },
    {
      name: ' proTable测试',
      path: '/protable',
      component: './ProTable',
    },
  ],
  npmClient: 'yarn',
});

