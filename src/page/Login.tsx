import React, {Component} from "react";
import {Form, Input, Button, Icon, Checkbox} from "antd";
import "./LoginPage.css";
import BeanUtil from "../common/BeanUtil";
import {RouteComponentProps} from "react-router";
import {FormProps} from "antd/lib/form";
import * as api from "../axios/api";
import * as apiPath from "../axios/apiPath";
import {withRouter} from 'react-router';
import {connectAlita} from "redux-alita";

const FormItem = Form.Item;

interface AlitaParam {
    funcName?: string;
    params?: any;
    stateName?: string;
    data?: any;
}

type LoginProps = {
    setAlitaState: (param: AlitaParam) => void;
    auth: any;
} & RouteComponentProps &
    FormProps;
export default connectAlita(['auth'])(Form.create()(withRouter(
    class LoginPage extends Component<LoginProps> {
        handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            this.props.form!.validateFields((err, values) => {
                if (!err) {
                    const {setAlitaState} = this.props;
                    // if (values.username === "admin" && values.password === "admin")
                    // setAlitaState({ funcName: "admin", stateName: "auth" });
                    // if (values.username === "guest" && values.password === "guest")
                    // setAlitaState({ funcName: "guest", stateName: "auth" });
                    setAlitaState({stateName: "auth", funcName: 'login',params:values});
                    this.props.history.push("/app");
                    // api.login( values, this.props.history.push("/app"));
                }
            });
        };

        render() {
            const {getFieldDecorator} = this.props.form!;
            return (
                <div className="login">
                    <div className="login-form">
                        <div className="login-logo">
                            <span>mrys admin</span>
                        </div>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator("username", {
                                    rules: [{required: true, message: "请输入用户名!"}]
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{fontSize: 13}}/>}
                                        placeholder="请输入账号"
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator("password", {
                                    rules: [{required: true, message: "请输入密码!"}]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{fontSize: 13}}/>}
                                        type="password"
                                        placeholder="请输入密码"
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                {/* <Checkbox>记住我</Checkbox> */}
                                <span className="login-form-forgot" style={{float: "right"}}>
                  忘记密码
                </span>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    style={{width: "100%"}}
                                >
                                    登录
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            );
        }
    })
));

export class loginDto {
    username?: string;
    password?: string;
}
