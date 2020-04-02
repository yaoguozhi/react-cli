import transformRouter from './transformRouter';
import EnumRouter from 'constants/EnumRouter';
import EnumPermission from 'constants/EnumPermission';
/**
 * 定义路由
 * @type {*[]}
 * 说明:
 *  {
         uri: "/",                                          // 该字段必填
         component: import("./components/CodeEditor"),      // 该字段必填
         store: "mobx的状态对象",                            //  该字段可选
         props: "传入组件的props"                            //  该字段可选, 必须是对象
         isMainLayout: true,                               //  该字段可选, 是否开启MainLayout布局, 默认是true
         permissionMark:url页面权限标识                         //  可选 如果不传默认为拥有权限
     }
 */
const routes = [
    // 登录
    {
        uri: EnumRouter.login,
        component: import('./pages/common/components/Login'),
        isMainLayout: false
    },
    // 首页
    {
        uri: EnumRouter.home,
        // permissionMark:EnumMenuPermission.dataCollect,
        component: import('./pages/home/components/Home'),
    },
    // 示例
    {
        uri: EnumRouter.sample,
        // permissionMark:EnumMenuPermission.dataCollect_collector,
        component: import('./pages/home/components/Sample'),
    }
];

export default transformRouter(routes);


