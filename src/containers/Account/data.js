import React, { Component } from 'react';
import { Statistic, Card, Row, Col, Image } from 'antd';
class Data extends Component {

    render() {
        return (
            <div>
                <div>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">

                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>Performance details</h3>
                                    <div className="site-statistic-demo-card">
                                        <Row gutter={16}>
                                            <Col span={12}>
                                                <Card>
                                                    <Statistic
                                                        title="Net deposit (SGD)"
                                                        value={11098.28}
                                                        precision={2}
                                                    />
                                                </Card>
                                            </Col>
                                            <Col span={12}>
                                                <Card>
                                                    <Statistic
                                                        title="Total returns (SGD)"
                                                        value={93.3}
                                                        precision={2}
                                                    />
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Row gutter={10}>
                        <Col className="gutter-row" md={16}>
                            <div className="gutter-box">
                                <Card bordered={false}>
                                    <div className="pb-m">
                                        <h3>Current Assets Allocation</h3>
                                        <div className="site-statistic-demo-card">
                                            <Row gutter={16}>
                                                <Image width={310} src={require('../Advisory/advData/plan4.png')} />
                                            </Row>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Data;