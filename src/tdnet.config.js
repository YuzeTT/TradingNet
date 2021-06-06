export default {
  navigationList: [
    {
      id: 0,
      name: 'Home',
      icon: 'mdi-home',
      text: '主页',
      route: '/'
    },
    {
      id: 1,
      name: 'CreateImages',
      icon: 'mdi-image-plus ',
      text: '图片生成',
      route: '/createimages'
    },
    {
      id: 99,
      name: 'About',
      icon: 'mdi-information',
      text: '关于',
      route: '/about'
    }
  ],
  homeCard: [
    {
      leftIcon: 'mdi-console-line',
      leftIconColor: 'green lighten-1',
      rightIcon: false,
      rightIconColor: false,
      text: '?ms',
      describe: '编译耗时',
      jump: false,
    },
    {
      leftIcon: 'mdi-database-alert',
      leftIconColor: 'red',
      rightIcon: false,
      rightIconColor: false,
      text: '0%',
      describe: '数据库错误率',
      jump: false,
    },
    {
      leftIcon: 'mdi-update',
      leftIconColor: 'blue lighten-1',
      rightIcon: false,
      rightIconColor: false,
      text: 'v.0.1.0',
      describe: '软件版本',
      jump: false,
    }
  ],
}