import { Table } from 'antd';
import React, { Component } from 'react';
import BreadcrumbCustom from '../components/BreadcrumbCustom';

const columns = [
    {
        title: '昵称',
        dataIndex: 'name',
        render: (text: React.ReactNode) => <a>{text}</a>,
    },
    {
        title:'手机号',
        dataIndex:'tel',
    },
    {
        title: '性别',
        className: 'column-money',
        dataIndex: 'sex',
    },
    {
        title: '地址',
        dataIndex: 'address',
    },
    {
        title: '最后一次上线时间',
        dataIndex: 'lastLoginTime',
        render: (text: any)=>{
            return new Date(text).toJSON();
        }
    },
];

const data = [
    {
        key: '1',
        name: 'mrys',
        tel:'15766766763',
        sex:'1',
        address: '浙江杭州',
        lastLoginTime: Date.parse(new Date().toString()),
    },
    {
        key: '1',
        name: 'mrys',
        tel:'15766766763',
        sex:'1',
        address: '浙江杭州',
        lastLoginTime: Date.parse(new Date().toString()),
    },
    {
        key: '1',
        name: 'mrys',
        tel:'15766766763',
        sex:'1',
        address: '浙江杭州',
        lastLoginTime: Date.parse(new Date().toString()),
    },
    {
        key: '1',
        name: 'mrys',
        tel:'15766766763',
        sex:'1',
        address: '浙江杭州',
        lastLoginTime: Date.parse(new Date().toString()),
    },
    {
        key: '1',
        name: 'mrys',
        tel:'15766766763',
        sex:'1',
        address: '浙江杭州',
        lastLoginTime: Date.parse(new Date().toString()),
    },
    {
        key: '1',
        name: 'mrys',
        tel:'15766766763',
        sex:'1',
        address: '浙江杭州',
        lastLoginTime: Date.parse(new Date().toString()),
    },{
        key: '1',
        name: 'mrys',
        tel:'15766766763',
        sex:'1',
        address: '浙江杭州',
        lastLoginTime: Date.parse(new Date().toString()),
    },{
        key: '1',
        name: 'mrys',
        tel:'15766766763',
        sex:'1',
        address: '浙江杭州',
        lastLoginTime: Date.parse(new Date().toString()),
    },{
        key: '1',
        name: 'mrys',
        tel:'15766766763',
        sex:'1',
        address: '浙江杭州',
        lastLoginTime: Date.parse(new Date().toString()),
    },{
        key: '1',
        name: 'mrys',
        tel:'15766766763',
        sex:'1',
        address: '浙江杭州',
        lastLoginTime: Date.parse(new Date().toString()),
    },{
        key: '1',
        name: 'mrys',
        tel:'15766766763',
        sex:'1',
        address: '浙江杭州',
        lastLoginTime: Date.parse(new Date().toString()),
    },{
        key: '1',
        name: 'mrys',
        tel:'15766766763',
        sex:'1',
        address: '浙江杭州',
        lastLoginTime: Date.parse(new Date().toString()),
    },{
        key: '1',
        name: 'mrys',
        tel:'15766766763',
        sex:'1',
        address: '浙江杭州',
        lastLoginTime: Date.parse(new Date().toString()),
    },
    
];

export default class UserList extends Component<any>{
    render() {
        return (
            <div>
                <BreadcrumbCustom first="用户管理" second="用户列表" />
                <Table
                columns={columns}
                dataSource={data}
                size='small'
                bordered
                title={() => '用户列表'}
                // footer={() => 'Footer'}
            />
            </div>
        )
    }
}

