const EnumRouter = {

    rootRoute: '',		            // 根路由

    // register: 'register',		    // 注册
    login: 'login',		            // 登陆


    /*
     |-----------------------------------------------
     | 首页
     |-----------------------------------------------
     */
    home: 'home',
    sample: 'sample'


};


export default (() => {
    let routes = {};
    for (let [key, route] of Object.entries(EnumRouter)) {
        Object.defineProperty(routes, key, {
            get: () => {
                return window.ENV.rootPath.replace(/\/$/, '') + '/' + route;
            },
            configurable: false
        });
    }

    return routes;
})();
