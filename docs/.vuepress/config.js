module.exports = {
  // 页面标题
  title: '阿航的个人博客',
  // 网页描述
  description: '所以我们不丧胆，外体虽然一天天毁坏，内心却一天新似一天。',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['meta', { name: 'theme-color', content: '#7cb0fa' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  themeConfig: {
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 所有页面自动生成侧边栏
    sidebar: {
      '/mine/':[
        {
          title: '简历',
          collapsable: false,
          children: [
            '',
            'work',
            'project',
            'school'
          ]
        }
      ],
      '/knowledge/':getKonwledge()
    },
    // 仓库地址
    repo: 'https://github.com/ZhengKehang/ZhengKehang.github.io.git',
    // 仓库链接label
    repoLabel: 'Github',
    // 编辑链接
    editLinks: true,
    // 编辑链接label
    editLinkText: '编辑此页',
    // 导航
    nav: [
      { text: '我的经历',link: '/mine/'},
      { text: '积累知识',link: '/knowledge/'},
      { text: '代码生活',link: '/mind/'},
    ]
  },
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@images':'../images'
      }
    }
  }
};
function getKonwledge() {
  return [
    {
      title: '积累知识',
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: '语言',
      collapsable: false,
      children: [
        'js/ES5知识梳理',
        'js/array',
        'js/class',
        'js/function',
        'js/node',
        'js/typescript',
        'css/BFC',
        'css/自适应布局解决方案',
        'css/重绘与回流'
      ]
    }
    ,
    {
      title: '基础',
      collapsable: false,
      children: [
        'layout/cordova',
        'base/浏览器相关知识梳理',
        'base/数据结构算法'
      ]
    }
    ,
    {
      title: '工具',
      collapsable: false,
      children: [
        'base/git',
        'base/nginx',
        'base/webpack'
      ]
    }
    ,
    {
      title: '框架',
      collapsable: false,
      children: [
        'layout/vue的生命周期',
        'layout/新建vue项目',
        'layout/vue-loader',
        'layout/小程序框架思考',
        'layout/cordova',
        'layout/flutter学习笔记'
      ]
    }
    ,
    {
      title: '项目经验',
      collapsable: false,
      children: [
        'project/从合并HSE页面浅谈模块化开发',
        'project/国际化文件生成'
      ]
    }
    ,
    {
      title: '面试题',
      collapsable: false,
      children: [
        'interview/算法面试题'
      ]
    }
  ]
}