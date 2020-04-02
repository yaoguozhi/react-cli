import { processAPI } from 'constants/EnumAPI';
import { request } from 'utils/T/index';

const { get, postJSON, upload } = request;

/**
 * 获取组件分组
 * @param params
 * @constructor
 */
export const GetComponentGroup = (params) => get(processAPI('/ETL/rest/library/pageList'), params);

/**
 * 获取组件列表
 * @param params
 * @returns {*}
 * @constructor
 */
export const GetComponentList = (params) => get(processAPI('/ETL/rest/plugin/pageList'), params);


/**
 * 启用停用组件
 * @param params
 * @returns {*}
 * @constructor
 */
export const EnableAndDisable = (params, options) => postJSON('/ETL/rest/plugin/updateStatus', params, options);

/**
 * 上传组件
 * @param params
 * @param onUploadProgress
 * @param options
 * @constructor
 */
export const UploadComponent = (params, onUploadProgress = (progressEvent) => {
}, options) => upload('/ETL/rest/library/upload', params, onUploadProgress, options);

/**
 * 删除组
 * @param params
 * @returns {*}
 * @constructor
 */
export const DeleteGroup = (params) => get('/ETL/rest/library/delete', params);

/**
 * 重命名组
 * @param params
 * @param options
 * @returns {*}
 * @constructor
 */
export const RenameGroup = (params, options) => postJSON('/ETL/rest/library/rename', params, options);

/**
 * 下载组件
 * @param ids
 * @param fileName
 */
export const DownloadETLComponent = (ids, fileName) => {
    window.open(`${window.ENV.apiDomain}/ETL/rest/library/download?ids=${ids}&fileName=${fileName}.zip`);
};
