// import FlowEditorUiStore from 'pages/taskManagement/components/Detail/models/FlowEditorUiStore';
import { configure } from 'mobx';

/**
 * mobx的配置
 */
configure({
    enforceActions: 'observed',     // 强制使用action
});

export default {
    // flowEditorUiStore: new FlowEditorUiStore(),
};

