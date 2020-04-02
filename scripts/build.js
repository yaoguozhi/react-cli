/**
 * 打包编译
 */
process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

const mkWebpackConfig = require('./mkWebpackConfig');
const { doBuild, pipe, depend } = require('webpack-pipe');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const buildPath = process.argv[2];

/**
 * 拷贝public下除index.html文件和文件夹
 * @param config
 * @returns {*}
 */
const copyPublicFile = (config) => {
    return depend.merge({
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: 'public',
                    to: buildPath,
                    ignore: ['index.html']
                }
            ])
        ]
    }, config || {});
};

doBuild(mkWebpackConfig([
    pipe.production,
    pipe.autoDllReactPlugin,
    copyPublicFile
]));

