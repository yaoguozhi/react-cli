/**
 * @description 项目入口文件
 */
import React from 'react';
import { render } from 'react-dom';
import './base.scss';
import './them.less';
import lazyScreen from 'utils/loadable/lazyScreen';
const Main = lazyScreen(import('./Main'));

/**
 * 渲染程序
 */
render(<Main />, document.querySelector('#wrapper'));



