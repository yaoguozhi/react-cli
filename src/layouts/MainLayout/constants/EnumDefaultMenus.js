/**
 * Created by chencheng on 17-9-14.
 */
import EnumRouter from 'constants/EnumRouter';

import EnumPermission from 'constants/EnumPermission';

/**
 * 枚举默认收起左侧菜单的URL
 * @type {[*]}
 */
export const EnumCollapsedLeftMenuUrls = [
    EnumRouter.sample
];

/**
 * icon 类型
 * @type {{antd: string, custom: string}}
 */
export const EnumIconTypes = {
    antd: 'antd',
    custom: 'custom'
};


/**
 * 菜单配置
 *
 * Usage:
 * 左侧菜单参数使用说明:
 * {
        label:"Apex应用",

        //antd中的icon type
        icon:"swap",

        // 连接弹出方式
        target: "",   // _blank, _self, _parent, _top

        //可以是字符串,也可以是数组,当作为数组时可以将数组内的所有url都让该栏目保持高亮
        url:"url1" || ["url1", "url2"],

        children:[]
    }
 * @type {[*]}
 */
export const EnumDefaultMenus = [
    {
        label: '首页',
        icon: {
            appType: EnumIconTypes.custom,
            iconType: 'zujian1'
        },
        // uniqueIdentity: EnumMenuPermission.dataCollect,
        url: EnumRouter.home,
        children: [
            {
                label: '首页',
                icon: {
                    appType: EnumIconTypes.antd,
                    iconType: 'pie-chart'
                },
                url: EnumRouter.home,
                // uniqueIdentity: EnumMenuPermission.dataCollect,
            },
            {
                label: '示例',
                icon: {
                    appType: EnumIconTypes.antd,
                    iconType: 'pie-chart'
                },
                url: EnumRouter.sample,
                // uniqueIdentity: EnumMenuPermission.dataCollect_collector,
            }
        ]
    },
    {}
];
