import React, { Component } from "react";
import { Form, Input, Button, Icon, Checkbox } from "antd";
import "./LoginPage.css";
import BeanUtil from "../common/BeanUtil";
import { RouteComponentProps } from "react-router";
import { FormProps } from "antd/lib/form";
import * as api from "../axios/api";
import * as apiPath from "../axios/apiPath";
import {withRouter } from 'react-router';
const FormItem = Form.Item;

type LoginProps = {
  setAlitaState: (param: any) => void;
  auth: any;
} & RouteComponentProps &
  FormProps;
export default Form.create()(withRouter(
  class LoginPage extends Component<LoginProps> {
    //   constructor(props?: p) {
    //     super(props);
    //     this.loginClick = this.loginClick.bind(this);
    //     this.updateUsername = this.updateUsername.bind(this);
    //     let lo = new loginDto();
    //     lo.username = "12312";
    //     this.state = lo;
    //   }

    // componentDidMount() {
    //     console.log(this.props)
    //   const { setAlitaState } = this.props;
    //   setAlitaState({ stateName: "auth", data: null });
    // }
    // componentDidUpdate(prevProps: any & FormProps & RouteComponentProps) {
    //   // React 16.3+弃用componentWillReceiveProps
    //   const { auth: nextAuth = {}, history } = this.props;
    //   // const { history } = this.props;
    //   if (nextAuth.data && nextAuth.data.uid) {
    //     // 判断是否登陆
    //     localStorage.setItem("user", JSON.stringify(nextAuth.data));
    //     history.push("/");
    //   }
    // }
    handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(this.props);
      this.props.form!.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          const { setAlitaState } = this.props;
          if (values.username === "admin" && values.password === "admin")
            setAlitaState({ funcName: "admin", stateName: "auth" });
          if (values.username === "guest" && values.password === "guest")
            setAlitaState({ funcName: "guest", stateName: "auth" });
          api.login( values, this.props.history.push(apiPath.homePage));
        }
      });
    };
    render() {
      const { getFieldDecorator } = this.props.form!;
      return (
        <div className="login">
          <div className="login-form">
            <div className="login-logo">
              <span>mrys admin</span>
            </div>
            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator("username", {
                  rules: [{ required: true, message: "请输入用户名!" }]
                })(
                  <Input
                    prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                    placeholder="请输入账号"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator("password", {
                  rules: [{ required: true, message: "请输入密码!" }]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                    type="password"
                    placeholder="请输入密码"
                  />
                )}
              </FormItem>
              <FormItem>
                <Checkbox>记住我</Checkbox>
                <span className="login-form-forgot" style={{ float: "right" }}>
                  忘记密码
                </span>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ width: "100%" }}
                >
                  登录
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      );
    }

    loginClick(e: any) {
      console.log(this.state);
    }

    updateUsername(e: any) {
      const username = e.target.value;
      this.setState(dto => {
        let a = new loginDto();
        BeanUtil.copy(dto, a);
        a.username = username;
        return a;
      });
    }
  })
);
export class loginDto {
  username?: string;
  password?: string;
}
