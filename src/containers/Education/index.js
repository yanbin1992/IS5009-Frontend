import React from 'react';
import './Classroom.scss';
import { Row, Col, Statistic } from 'antd';
import { getHeight } from "Helper/LayoutHelper"
class Education extends React.Component {
  constructor(prpos) {
    super(prpos)
    this.state = {
      gu: [
        {
          id: 1,
          titles: 'Stock investment basis',
          title: 'Transaction rules, how to trade and how to charge',
          img: require('./tz.jpg'),
        },
        {
          id: 2,
          titles: 'Basic knowledge of investment',
          title: 'How to see the right time to start the stock',
          img: require('./tz2.jpg'),
        },
        {
          id: 3,
          titles: 'How to save accounts',
          title: 'learn how to save',
          img: require('./savings-accounts.jpg'),
        }
      ],
      piao: [
        {
          id: 1,
          titles: 'Investment methods',
          title: 'Investment rules, how to invest, how to throw',
          img: require('./investment.webp'),
        },
        {
          id: 2,
          titles: 'Distinguish good and bad',
          title: 'How to seize the stock at the right time',
          img: require('./Investment2.jpeg'),
        }, {
          id: 3,
          titles: 'How to investment well',
          title: 'Methods of investment',
          img: require('./Investments.jpg'),
        }, {
          id: 4,
          titles: 'ETF',
          title: 'Something about ETF',
          img: require('./ETF.png'),
        }


      ],
      jiao: [
        {
          id: 1,
          titles: 'Risk Management',
          title: 'Risk Management',
          img: require('./Risk Management.jpg'),
        },
        {
          id: 2,
          titles: 'Advanced Risk Management',
          title: 'More Risk Management',
          img: require('./Advanced Risk Manaagement.jpg'),
        }
      ],
      page: 1,
    }
  }
  render() {
    return (
      <div className="cl" style={{ margin: "-16px", maxHeight: getHeight() - 60 - 45 - 50, overflowY: "scroll" }}>
        <br />
        <Row gutter={16}>
          <br />
          <Col span={12} style={{ textAlign: 'center' }}>
            <Statistic title="Certificate" value={50} />
          </Col>
          <Col span={12} style={{ textAlign: 'center' }}>
            <Statistic title="Rewards" value={0} />
          </Col>
        </Row>
        <br />
        <div className="noob">
          <div style={{ marginTop: "16px", marginLeft: "10px" }}><h3>Basic: level 1</h3></div>
          {
            this.state.gu.map(item => {
              return (
                <div className="door" key={item.id}>
                  <p><img src={item.img} alt="投资" /></p>
                  <p style={{ background: 'white', margin: '0 1rem', lineHeight: '1.2rem' }}>
                    <em style={{ fontSize: '16px', color: 'black' }}>{item.titles}</em><br />
                    <span style={{ fontSize: '12px' }}>{item.title}</span><br />
                  </p>
                </div>
              )
            })
          }
        </div>
        <div className="noob">
          <div style={{ marginTop: "16px", marginLeft: "10px" }}><h3>Intermediate: level 2</h3></div>
          {
            this.state.piao.map(item => {
              return (
                <div className="door" key={item.id}>
                  <p><img src={item.img} alt="投资" /></p>
                  <p style={{ background: 'white', margin: '0 1rem', lineHeight: '1.2rem' }}>
                    <em style={{ fontSize: '16px', color: 'black' }}>{item.titles}</em><br />
                    <span style={{ fontSize: '12px' }}>{item.title}</span><br />
                  </p>
                </div>
              )
            })
          }
        </div>
        <div className="noob">
          <div style={{ marginTop: "16px", marginLeft: "10px" }}><h3>Advanced: level 3</h3></div>
          {
            this.state.jiao.map(item => {
              return (
                <div className="door" key={item.id}>
                  <p><img src={item.img} alt="投资" /></p>
                  <p style={{ background: 'white', margin: '0 1rem', lineHeight: '1.2rem' }}>
                    <em style={{ fontSize: '16px', color: 'black' }}>{item.titles}</em><br />
                    <span style={{ fontSize: '12px' }}>{item.title}</span><br />
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Education;