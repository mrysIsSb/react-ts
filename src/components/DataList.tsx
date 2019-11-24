import { Component } from "react";
import React from "react";
import Table from "antd/lib/table";
interface ListProp{
    columns?: any;
    data?:any;
    title: string;
}
export default class DataList extends Component<ListProp> {
    render() {
        return (
            <Table
            columns={this.props.columns}
            dataSource={this.props.data}
            size='small'
            bordered
            title={() => '用户列表'}
            // footer={() => 'Footer'}
        />
        )
    }
}