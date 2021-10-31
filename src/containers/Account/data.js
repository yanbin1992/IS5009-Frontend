import React, { memo } from 'react';
import { Statistic, Card, Row, Col, Image } from 'antd';
import { makeSelectUser } from 'global.selectors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLevel } from '../EntryTest/test.selectors';
import { selectPostList } from '../Board/board.selectors';
import { getPostsAction } from '../Board/board.actions';
import { PayCircleOutlined, SketchOutlined } from '@ant-design/icons';
function Data(props) {
    return (
        <div>
            <div>
                <Col className="gutter-row" md={12}>
                    <div className="gutter-box">

                        <Card bordered={false}>
                            <div className="pb-m">
                                <h3>Account details</h3>
                                <div className="site-statistic-demo-card">
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Card>
                                                <Statistic
                                                    title="Total Return (SGD)"
                                                    value={props.user.accountData.base - props.user.accountData.balance}
                                                    precision={2}
                                                />
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card>
                                                <Statistic
                                                    title="Income Rate (SGD)"
                                                    value={props.user.accountData.balance / props.user.accountData.base * 100}
                                                    precision={2}
                                                    suffix="%"
                                                />
                                            </Card>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Card>
                                                <Statistic
                                                    title="Balance (SGD)"
                                                    value={props.user.accountData.balance}
                                                    precision={2}
                                                />
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card>
                                                <Statistic
                                                    title="Total Base (SGD)"
                                                    value={props.user.accountData.base}
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
                                    <h3>Current Assets Allocation(SGD)</h3>
                                    <div className="site-statistic-demo-card">
                                        <Row gutter={16}>
                                            <Image width={"90%"} src={require('../Advisory/advData/plan' + Math.floor(Math.random() * 5) + '.png')} />
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

Data.propTypes = {
    level: PropTypes.object,
    user: PropTypes.object,
    postList: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
    level: makeSelectLevel(),
    user: makeSelectUser(),
    postList: selectPostList,
});

const mapDispatchToProps = dispatch => ({ getPosts: () => dispatch(getPostsAction()) });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Data);