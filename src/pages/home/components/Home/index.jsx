import styles from './index.scss';
import BaseComponent from 'components/BaseComponent';
import { MainContent, MainHeader } from 'layouts/MainLayout';
import React from 'react';

export default class Home extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={styles['home-container']}>
                <MainHeader title={'首页'} />
                <MainContent>
                    首页
                </MainContent>
            </div>
        );
    }
}
