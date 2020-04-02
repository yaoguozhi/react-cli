const { assemble, pipe, depend } = require('webpack-pipe');

// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// 入口配置
const entry = (config) => depend.merge({
    entry: {
        app: ['./src'],
    }
}, config);

// 输出配置
const output = (config) => depend.merge({
    output: {
        publicPath: '/public/',
        path: depend.tool.resolveAppPath('public/build'),
    }
}, config);


const resolve = (config) => depend.merge({
    resolve: {
        'modules': [
            // "node_modules",
            'web_modules',
            'src'
        ]
    }
}, config);
/*
const otherWebpackPlugin = (config) => {
    return depend.merge({
        plugins: [
            new MonacoWebpackPlugin(),
            new CopyWebpackPlugin([
                {
                    from: 'web_modules/tj-model-editor/worker/worker-sense.js',
                    to: 'worker-sense.js',
                }
            ])
        ]
    }, config || {});
};
*/

const babelAntd = (config) => {
    config.module.rules.push({
        test: /\.less/,
        use: depend.formatStyleLoader({
            loader: 'less-loader',
            options: {
                sourceMap: process.env.NODE_ENV === 'production' ? false : true,
                // modifyVars: customAntdStyle
            }
        })
    });

    config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === 'babel-loader') {
            // `style: true` for less
            // babel-plugin-import
            rule.options.plugins.push(['import', { libraryName: 'antd', 'libraryDirectory': 'es' }]);

            return rule;
        }

        return rule;
    });

    return config;
};

/**
 * 组装webpack config
 * @return {*}
 */
module.exports = (pipeNodes = []) => {
    const config = assemble([
        ...pipeNodes,
        pipe.base,
        pipe.staticResource,
        pipe.css,
        pipe.scss,
        // pipe.babelAntd,
        babelAntd,
        pipe.babelReact,

        pipe.miniCssExtractPlugin,
        pipe.provideReactPlugin,
        pipe.webpackbarPlugin,

        // otherWebpackPlugin,

        resolve,
        output,
        entry,
    ]);

    return config;
};
