import React from 'react';
import BaseComponent from 'components/BaseComponent';
import { Button, Alert } from 'antd';
import { helper, prompt } from 'utils/T';
import SampleModal from './SampleModal';
import withModal from 'components/Hoc/withModal';
import SampleStore from '../../models/sample';
import { observer } from 'mobx-react';
import styles from './index.scss';
import BachOperation from 'components/BachOperation';
import { EnumOperationType } from 'constants/EnumCommon';

const { Fragment } = BaseComponent;

// @observer
export default class Sample extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * 模态框
     */
    modalClick = () => {
        const Modal = withModal(SampleModal);
        helper.renderModal(<Modal
            modalProps={{
                okText: '增加',
                cancelText: '关闭',
            }}
        />);
    };

    /**
     * 确实提示框
     */
    confirmClick = () => {
        prompt.confirm(() => {
            SampleStore.resetStore();
            prompt.success('操作成功');
        }, {
            title: '清空store?',
        });
    };

    /**
     * 批量操作点击
     * @param item
     * @param key
     * @param keyPath
     * @param domEvent
     */
    operationClick = ({ item, key, keyPath, domEvent }) => {
        prompt.info(EnumOperationType[key].label);
    };

    render() {
        const { num } = SampleStore;
        return (
            <div className={styles['sample-container']}>
                <Alert message={num} showIcon />
                <div className={styles['button-box']}>
                    <Button type={'primary'} onClick={this.modalClick}>Modal</Button>
                    <Button type={'primary'} onClick={this.confirmClick}>Confirm</Button>
                </div>
                <BachOperation typeList={Object.keys(EnumOperationType)} operationClick={this.operationClick} />
                <FunctionalComponent data={{ a: 1 }} />
            </div>
        );
    }
}

const FunctionalComponent = observer(() => {
    const { num } = SampleStore;
    return (
        <div>num:{num}</div>
    );
});




