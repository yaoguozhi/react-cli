import { helper, queryString } from 'utils/T';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import BoxContent from './BoxContent';
import BoxSpin from './BoxSpin';

import { Component, Fragment } from 'react';

export default class BaseComponent extends Component {
    static contextTypes = {
        router: PropTypes.object,
    };

    static Fragment = Fragment;
    static BoxContent = BoxContent;
    static BoxSpin = BoxSpin;

    /**
     * 创建setState防抖函数
     * @type {Function}
     */
    delaySetState = helper.debounce(this.setState, 100, this);

    /**
     * 获取URL中的参数 需在子类中使用withRouter装饰器
     * @returns {*}
     */
    getUrlParams = () => { return queryString.parse(this.props.location.search) };

    /**
     * 更新状态
     * @param {Object} keyToValue {"key1.key2....": value}
     * @param {Function} callback 回调方法
     * @param {String} updateType 更新类型
     * @returns {*}
     */
    updateState = (keyToValue, callback = () => {}, updateType = '$set') => this.setState((preState) => {
        let updateObj = {};
        for (let [key, value] of Object.entries(keyToValue)) {
            Object.assign(updateObj, helper.getImmutabilityHelperContent(key, value, updateType));
        }

        return update(preState, updateObj);
    }, () => callback());
}
