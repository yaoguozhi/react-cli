
import styles from './index.scss';

import classNames from 'classnames';
import PropType from 'prop-types';
import React from 'react';
const EnumColorType = {
    'error': '#FF3B31', // 失败
    'success': '#4BD863', // 成功
    'doing': '#0079FE', // 进行中
    'warning': '#FE9400', // 警告
    'none': '#BFBFBF', // 未开始
    'disable': '#FF6633', // 停用
    'enable': '#00ff99', // 启用
};

/**
 * 状态小圆点警示图表
 * @param type
 * @param radius
 * @param color
 * @param className
 * @param style
 * @returns {*}
 * @constructor
 */

const DotDom = ({ color = '', type = 'doing', radius = 8, className = '', style = {}}) => {
    style = Object.assign({
        backgroundColor: color || EnumColorType[type],
        width: radius,
        height: radius,
    }, style);
    return (
        <div
            style={{ ...style }}
            className={classNames(styles.dotDom, className)}
        />
    );
};

DotDom.propTypes = {
    color: PropType.string,
    radius: PropType.number,
    type: PropType.string,
    className: PropType.string,
    style: PropType.object,
};
export default DotDom;
