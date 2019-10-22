import React, { Component } from 'react';
import { Form, Input, Button,Icon } from 'antd';
import './LoginPage.css';
import BeanUtil from '../common/BeanUtil';
export class loginDto{
    username?:string;
    password?:string;
}
export default class LoginPage extends Component<any,loginDto> {
    constructor(props?: any){
        super(props)
        this.loginClick=this.loginClick.bind(this) 
        this.updateUsername=this.updateUsername.bind(this) 
        this.state = new loginDto()
    }
    render() {
        return (
            <div className="loginPage">
                <Form>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            onChange={this.updateUsername}
                            placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item>
                    <Button onClick={this.loginClick} type="primary" htmlType="submit" className="login-form-button">登录</Button>
                    </Form.Item>
                </Form>
            </div >
        )
    }

    loginClick(e:any){
        console.log(this.state)
    }

    updateUsername(e:any){
        const username=e.target.value;
        this.setState(dto=>{
             let a=new loginDto()
             BeanUtil.copy(dto,a)
             a.username=username
             return a
        })
    }

}
