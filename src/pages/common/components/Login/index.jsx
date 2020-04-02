import styles from './index.scss';
import { PureComponent } from 'react';
import { Button } from 'antd';

import { auth, prompt} from 'utils/T/index';
import { doLoginAction } from '../../api';
import {withRouter} from 'react-router-dom';
const loginBack = require('./img/loginBack.png');
const loginBox = require('./img/loginBox2.png');
const userImg = require('./img/username.png');
const passImg = require('./img/password.png');
@withRouter
export default class Login extends PureComponent {
    constructor() {
        super();
        this.state = {
            user_email: '',
            user_password: '',
            loading: false
        };
    }

    onEnterDown = (e) => (e.keyCode === 13 ? this.onSubmit() : null);

    onSubmit = () => {
        const { user_email, user_password } = this.state;

        this.setState({ loading: true }, () => {
            doLoginAction({ user_email, user_password }).then((resp) => {
                this.setState({ loading: false }, () => {
                    auth.loginSuccessRedirect(this.props.history);
                });
                auth.setLoginInfo(resp.data);
            }, (resp) => {
                this.setState({ loading: false });
                prompt.error(resp.msg);
            });
        });
    };


    render() {
        return (
            <div className={styles.login}>
                <img src={loginBack} className={styles['img-top']} alt="login-back" />
                <div className={styles['login_box']}>
                    <div className={styles['login_box_left']}>
                        <img className={styles['loginBoxImg']} src={loginBox} alt="loginBox" />
                        <img className={styles['userImg']} src={userImg} alt="userImg" />
                        <img className={styles['passImg']} src={passImg} alt="passImg" />
                        <input
                            type="text"
                            value={this.state.user_email}
                            className={styles['login_email']}
                            onChange={(e) => this.setState({ user_email: e.target.value.trim() })}
                            placeholder="邮箱"
                            onKeyDown={this.onEnterDown}
                        />

                        <input
                            type="password"
                            value={this.state.user_password}
                            className={styles['login_password']}
                            onChange={(e) => this.setState({ user_password: e.target.value.trim() })}
                            placeholder="密码"
                            onKeyDown={this.onEnterDown}
                        />

                        <Button
                            className={styles['btn_login']} loading={this.state.loading ? { delay: 300 } : false}
                            onClick={this.onSubmit}
                        >
                            登&nbsp;&nbsp;录
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
