/**
 * Created by chencheng on 2017/6/17.
 */

import { request } from 'utils/T';
import { processAPI } from 'constants/EnumAPI';

const { get, post } = request;

/**
 * 登录后台
 * @param {Object} data
 * @returns {Promise}
 */
// export const doLoginAction = (data) => post(processAPI('/login'), data);
export const doLoginAction = (data) => post('http://ff.tianjishuju.com/web/rbac/user/login', data);

/**
 * 退出登录
 * @returns {*}
 */
export const doLogoutAction = () => get(processAPI('/logout'));
