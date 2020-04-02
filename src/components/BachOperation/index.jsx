import { PureComponent } from 'react';
import { Dropdown, Menu, Button } from 'antd';
import propTypes from 'prop-types';
import { EnumOperationType } from 'constants/EnumCommon';
export default class BachOperation extends PureComponent {
    static propTypes = {
        typeList: propTypes.array.isRequired,
        operationClick: propTypes.func.isRequired,
    };
    static defaultProps = {
        typeList: [],
        operationClick: () => {}
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    getMenu = () => {
        const { typeList, operationClick } = this.props;
        return (
            <Menu onClick={operationClick}>
                {
                    typeList.map((item, index) => {
                        return (
                            <Menu.Item key={EnumOperationType[item].value}>
                                <div style={{ textAlign: 'center' }}>{EnumOperationType[item].label}</div>
                            </Menu.Item>
                        );
                    })
                }
            </Menu>
        );
    };

    render() {
        return (
            <Dropdown
                overlay={this.getMenu()}
            >
                <Button icon={'down'}>批量操作</Button>
            </Dropdown>
        );
    }
}