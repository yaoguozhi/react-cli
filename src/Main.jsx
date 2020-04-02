/**
 * @description 项目入口文件
 */
import React from 'react';
import ErrorBoundary from 'components/ErrorBoundary';
import { Provider } from 'mobx-react';
import { ConfigProvider } from 'antd';

import store from './store';
import Routes from './router';
/**
 * 渲染程序
 */
export default () => (
    <ErrorBoundary>
        <Provider {...store}>
            <ConfigProvider locale={require('antd/lib/locale-provider/zh_CN').default}>
                <Routes />
            </ConfigProvider>
        </Provider>
    </ErrorBoundary>
);




