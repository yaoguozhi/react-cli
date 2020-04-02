# TJ-React-Template
天机数据前端模板工程

## 环境要求
- node 10+

## 运行
`npm run dev`

## 打包
`npm run build`

## 目录结构
```shell
├── public                                     // 构建相关  
│   ├── config                     
│   │   └── ENV.js                             // 生产及开发配置文件   
│   └── index.html                             // html模版 
├── src                                        // 源代码
│   ├── components                             // 全局公用组件
│   │   ├── BachOperation                      // 批量操作组件   
│   │   ├── BoxContent                         // 带loading的content组件
│   │   ├── BoxSpin                            // loading组件
│   │   ├── CustomIcon                         // iconFont组件              
│   │   ├── Dragger                            // 拖拽组件              
│   │   ├── ErrorBoundary                      // 错误页面组件              
│   │   ├── Exception                          // 异常页面组件           
│   │   ├── Hoc                                // 高阶组件
│   │   │   └── withModal.js                   // antd modal高阶组件   
│   │   ├── Prompt                             // 路由跳转提示组件           
│   │   ├── StatusDot                          // 圆点状态组件           
│   │   └── BaseComponent.jsx                  // 基础组件类 所有组件需继承该类
│   ├── constant                               // 枚举常量  
│   │   ├── app                                // 具体页面枚举常量 
│   │   ├── EnumAPI.js                         // 公共接口 
│   │   ├── EnumCommon.js                      // 公用枚举常量 
│   │   ├── EnumPermission.js                  // 权限标识 
│   │   └── EnumRouter.js                      // 路由表   
│   ├── layouts                                // 页面布局 
│   │   └── MainLayout                         // MainLayout组件 
│   │       ├── constans                  
│   │       │   └── EnumDefaultMenus.js        // 菜单枚举   
│   │       ├── MainContent                    // MainLayout下的Content组件   
│   │       ├── MainHeader                     // MainLayout下的Header组件 
│   │       ├── MenuHeader                     // 顶部菜单 
│   │       ├── MenuLeft                       // 左侧菜单 
│   │       ├── AppIcon.jsx                    // 菜单Icon组件 
│   │       ├── index.jsx                       
│   │       ├── index.scss
│   │       └── theme.scss                     // MainLayout公用样式 
│   ├── pages                                  // 页面
│   │   ....
│   │   └── home                               // 首页
│   │       ├── api                            // 该模块中使用的接口
│   │       ├── component                      // 页面组件   
│   │       └── models                         // mobx
│   ├── utils                                     
│   │   ├── loadable                           // 懒加载相关   
│   │   └── T                                  // 工具类  
│   │       ├── core                           // 工具类具体模块   
│   │       │   ├── auth.jsx                   // 用户类                         
│   │       │   ├── checkType.js               // 校验相关          
│   │       │   ├── decorator.js               // 装饰器          
│   │       │   ├── deepClone.js               // 深拷贝          
│   │       │   ├── helper.js                  // 帮助类       
│   │       │   ├── prompt.js                  // 消息提示类       
│   │       │   ├── request.js                 // 数据请求类        
│   │       │   ├── Socket.js                  // socket类      
│   │       │   └── storage.js                 // 本地存储相关        
│   │       └── index.jsx                      // 工具类对外暴露接口                     
│   ├── base.scss                              // 全局样式    
│   ├── index.jsx                              // 入口文件                
│   ├── Main.jsx                               // 入口组件    
│   ├── router.jsx                             // 路由绑定   
│   ├── store                                  // 通过上下文使用的mobx配置
│   ├── them.less                              // antd皮肤文件   
│   └── transformRouter.js                     // 组装路由
├── script                                     // 运行及打包脚本
│   ├── build.js                               // 打包脚本 
│   ├── dev.js                                 // 运行脚本 
│   └── mkWebpackConfig.js                     // webpack配置项
├── eslintrc.js                                // eslint 配置项
├── .gitignore                                 // git 忽略项
├── favicon.ico                                // favicon图标
└── package.json                               // package.json
```



