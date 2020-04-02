import React from 'react';
import { Prompt } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { prompt } from 'utils/T';
/**
 * 自定义prompt组件
 * 使用方法  放进组件任何地方就行（必须在Router里）
 * 生命周期  componentWillUnmount 组件即将销毁时触发
 * 缺点     会导致包容该组件的父组件的props更新（未找到原因）
 */
export default class PromptModal extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
        options: PropTypes.object,  // Modal组件属性和方法
        when: PropTypes.bool,       // 是否判断
        delay: PropTypes.number,    // 延迟时间
    };
    static defaultProps = {
        when: true,
        options: {
            title: '尚未保存',
            content: '确定跳转吗？'
        },
        delay: 50
    };
    constructor(props) {
        super(props);
        this.state = {
            when: !!props.when
        };
    }

    componentDidMount() {
        Modal.destroyAll();
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.when !== this.props.when) {
            this.setState({ when: nextProps.when });
        }
    }

    render() {
        return (<div>
            {
                this.state.when && <Prompt
                    message={(location) => {
                        prompt.confirm(() => {
                            this.setState({ when: false }, () => {
                                setTimeout(() => this.context.router.history.push(location), this.props.delay);
                            });
                        }, this.props.options);
                        return false;
                    }}
                    when={this.state.when}
                />
            }
        </div>);
    }
}
