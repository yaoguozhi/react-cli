/**
 * Created by chencheng on 2017/6/16.
 */

export const processAPI = (api) => {

    return `${window.ENV.apiDomain.replace(/\/$/, '')}/${api.replace(/^\//, '')}`;
};

export const proxyAPI = (api) => {

    return `${window.ENV.apiDomain.replace(/\/$/, '')}/${api.replace(/^\//, '')}'/proxy/${api}'`;
};

/* 公用API */
const EnumAPI = {

};

export default EnumAPI;
