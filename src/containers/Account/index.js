import React, { Component } from 'react';
import { Alert } from 'antd';
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
//import piechart from './piechart';
function EntryTest() {
  return (
    <div>
      <div>
        <Col className="gutter-row" md={12}>
          <div className="gutter-box">
            <Card bordered={false}>
              <div className="pb-m">
                <h3>Financial Health Overlook</h3>
                <div className="site-statistic-demo-card">
                  <Row gutter={16}>
                    <Col span={12}>
                      <Card>
                        <Statistic
                          title="Active"
                          value={11.28}
                          precision={2}
                          valueStyle={{ color: '#3f8600' }}
                          prefix={<ArrowUpOutlined />}
                          suffix="%"
                        />
                      </Card>
                    </Col>
                    <Col span={12}>
                      <Card>
                        <Statistic
                          title="Idle"
                          value={9.3}
                          precision={2}
                          valueStyle={{ color: '#cf1322' }}
                          prefix={<ArrowDownOutlined />}
                          suffix="%"
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
                      <Col span={100}>
                        <Card>
                          <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                          />
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default EntryTest;
