import BaseComponent from 'components/BaseComponent';

const {Fragment} = BaseComponent;
import {observer} from 'mobx-react';
import SampleStore from '../../models/sample';

@observer
export default class SampleModal extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.modalControl.registerOk(this.okClick);

        // this.props.modalControl.registerCancel(this.cancelClick);
    }

    okClick = () => {
        const {hideSaving, close} = this.props.modalControl;
        SampleStore.addNum();
        hideSaving();

        // close();

    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(SampleStore);
    }

    render() {
        const {num} = SampleStore;
        return (
            <Fragment>num:{num}</Fragment>
        );
    }
}
