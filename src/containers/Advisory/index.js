import React from 'react';
import { Alert } from 'antd';
import { Button, Card, Row, Col, Popover } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { bankproductdata } from "../../Helper/DataHelper"
import { insuranceproductdata } from "../../Helper/DataHelper"
import { fundproductdata } from "../../Helper/DataHelper"
import { Timeproductdata } from "../../Helper/DataHelper"


function EntryTest() {
  return (<div>
    <div>
      <Col className="gutter-row" md={12}>
        <div className="gutter-box">
          <Card bordered={false}>
            <div className="pb-m">
              <h3>Recommended Products</h3>
              <div className="site-statistic-demo-card">
                <div className="cl">
                  <div className="noob">
                    <>Banking Saving Account Products</>
                    {
                      bankproductdata.map(item => {
                        return (
                          <div className="door">
                            <p style={{ background: 'white', width: '6rem', height: '3.6rem' }}><img src={item.pic} alt="details" /></p>
                            <p style={{ background: 'white', margin: '0 1rem', lineHeight: '1.0rem' }}>
                              <em style={{ fontSize: '13px', color: 'black' }}>{item.name}</em><br />
                              <span style={{ fontSize: '10px', color: 'gray' }}>base interest rate</span><br />
                              <span style={{ fontSize: '10px', color: 'red' }}>{item.baserate}</span><br />
                            </p>

                            <p style={{ background: 'white', width: '6rem', height: '4rem' }}><Button type="link">More</Button></p>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="noob">
                    <>Banking Time Deposit Products</>
                    {
                      Timeproductdata.map(item => {
                        return (
                          <div className="door">
                            <p style={{ background: 'white', width: '6rem', height: '3.6rem' }}><img src={item.pic} alt="details" /></p>
                            <p style={{ background: 'white', margin: '0 1rem', lineHeight: '1.0rem' }}>
                              <em style={{ fontSize: '13px', color: 'black' }}>{item.name}</em><br />
                              <span style={{ fontSize: '10px', color: 'gray' }}>Min.deposit</span><br />
                              <span style={{ fontSize: '10px', color: 'red' }}>{item.mindeposit}</span><br />
                            </p>
                            <p style={{ background: 'white', width: '6rem', height: '4rem' }}><Button type="link">More</Button></p>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="noob">
                    <>Fund Products</>
                    {
                      fundproductdata.map(item => {
                        return (
                          <div className="door">
                            <p style={{ background: 'white', width: '6rem', height: '3.6rem' }}><img src={item.pic} alt="details" /></p>
                            <p style={{ background: 'white', margin: '0 1rem', lineHeight: '1.0rem' }}>
                              <em style={{ fontSize: '13px', color: 'black' }}>{item.name}</em><br />
                              <span style={{ fontSize: '10px', color: 'gray' }}>Min.deposit</span><br />
                              <span style={{ fontSize: '10px', color: 'red' }}>{item.mindeposit}</span><br />
                            </p>
                            <p style={{ background: 'white', width: '6rem', height: '4rem' }}><Button type="link">More</Button></p>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="noob">
                    <>Insurance Products</>
                    {
                      insuranceproductdata.map(item => {
                        return (
                          <div className="door">
                            <p style={{ background: 'white', width: '6rem', height: '3.6rem' }}><img src={item.pic} alt="details" /></p>
                            <p style={{ background: 'white', margin: '0 1rem', lineHeight: '1.0rem' }}>
                              <em style={{ fontSize: '13px', color: 'black' }}>{item.name}</em><br />
                              <span style={{ fontSize: '10px', color: 'gray' }}>Min.deposit</span><br />
                              <span style={{ fontSize: '10px', color: 'red' }}>{item.mindeposit}</span><br />
                            </p>
                            <p style={{ background: 'white', width: '6rem', height: '4rem' }}><Button type="link">More</Button></p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Col>
    </div>
  </div>);
}

export default EntryTest;
