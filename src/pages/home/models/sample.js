import { observable, action, runInAction, autorun } from 'mobx';
class SampleStore {
    @observable num = 0;


    @action
    addNum = (count = 1) => {
        this.num += count;
    };

    @action
    resetStore = () => {
        this.num = 0;
    }

}

export default new SampleStore();