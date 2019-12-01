import { Component } from "react";
import { Card, Icon, Avatar, Row, Col, Statistic } from "antd";
import React from "react";
import Meta from "antd/lib/card/Meta";
import BreadcrumbCustom from "../components/BreadcrumbCustom";
import {connectAlita} from "redux-alita";
const data = [
    {},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},
]
class GoodsList extends Component<any>{
    render() {
        return (
            <div >
                <BreadcrumbCustom first="商品管理" second="商品列表" />
                <Row gutter={[8, 16]} type="flex" justify="start" align="middle">
                    {data.map(e => {
                        return (
                            <Col>
                                <Card
                                    style={{ width: 200 }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="http://p0.ifengimg.com/pmop/2017/1214/756F54079DFC35207C23E6FE1AA1BC2CA1018BB6_size70_w600_h450.jpeg"
                                        />
                                    }
                                    actions={[
                                        <Icon type="setting" key="setting" />,
                                        <Icon type="edit" key="edit" />,
                                        <Icon type="ellipsis" key="ellipsis" />,
                                    ]}
                                    hoverable={true}
                                // loading={true}
                                >
                                    <Row gutter={8}>
                                        <Col span={12}>
                                            <Statistic title="价格" value={111} prefix='' />
                                        </Col>
                                        <Col span={12}>
                                            <Statistic title="数量" value={93} suffix="/ 100" />
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>)
                    })}
                </Row>
            </div>
        )
    }
}
export default connectAlita(['auth', 'responsive'])(GoodsList);