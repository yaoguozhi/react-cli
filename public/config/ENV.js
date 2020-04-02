/**
 * Created by chencheng on 2017/6/10.
 */

window.ENV = (function () {
    let rootPath = '/';                                                 // 路由的根路径
    let publicPath = '/public';                                         // webpack.output.publicPath
    let apiDomain = 'http://10.0.3.56:9700';                            // 网关地址
    return {
        apiDomain: apiDomain,
        rootPath: rootPath,
        publicPath: publicPath,
        apiSuccessCode: [0, 'success', 200],                             // API接口响应成功的code
        logoPath: apiDomain + '/upload/logo/logo.png',
        login: {
            errorCode: 900,                                             // 未登录的error code
            isCheckLogin: false,                                        // web端是否验证登录
            cookieKey: '__login_user_info__',                           // 登录成功的cookie key, 用于验证当前页面是否登录
            defaultRedirectUrl: rootPath + 'home',                      // 登录成功默认重定向的url
            loginUrl: rootPath + 'login',                               // 登录页面url

            // 不需要验证是否登录的路由配置
            noCheckIsLoginRoutes: [
                rootPath + 'login',
            ]
        },
    };
})();
