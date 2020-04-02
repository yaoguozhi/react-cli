/**
 * Created by chencheng on 16-11-17.
 */
process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';
const mkWebpackConfig = require('./mkWebpackConfig');
const { doDev, pipe } = require('webpack-pipe');

doDev({
	webpackConfig: mkWebpackConfig([pipe.development]),
    devServerConfig: {
	    // contentBase: paths.webContentPath


        // proxy: {
        //     '/proxy': {
        //         target: 'http://ultravioletserver.tianjishuju.com',
        //         pathRewrite: { '^/proxy': '' }, // 是否携带代理路径
        //         changeOrigin: true,             // 是否跨域
        //         secure: false,                  // https
        //     },
        // },
    },
	host: '0.0.0.0',
	port: 8180
});



