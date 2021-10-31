import React, { Component } from 'react';
import { Form, Input, Button, Image } from 'antd';
class Plan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: '',
      currentAge: 0,
      expectAge: 0,
      income: 0,
    };
  }
  changeText() {
    this.setState({ ...this.state, show: 1 });
    console.log(this.state.show);
  }
  onCurrentAgeChange(e) {
    this.setState({ ...this.state, currentAge: e.target.value });
  }
  onExpectAgeChange(e) {
    this.setState({ ...this.state, expectAge: e.target.value });
  }
  onIncomeChange(e) {
    this.setState({ ...this.state, income: e.target.value });
  }

  render() {
    return (
      <div className="Plan">
        <div style={{ marginTop: 32, marginLeft: 20, marginBottom: 16 }}>
          <h4>Financial Planning Calculator</h4>
          <Form.Item label="What's your retire age?" name="layout">
            <Input style={{ marginLeft: 10, width: '6rem' }} onChange={this.onCurrentAgeChange.bind(this)} />
          </Form.Item>
          <Form.Item label="What's your retired income level?" name="layout">
            <Input style={{ width: '15rem' }} />
          </Form.Item>
          <Form.Item label="What's your current monthly income?" name="layout">
            <Input style={{ width: '15rem' }} onChange={this.onIncomeChange.bind(this)} />
          </Form.Item>
          <Form.Item label="Education fund for children:" name="layout">
            <Input style={{ width: '15rem' }} />
          </Form.Item>
          <Form.Item label="In year:       " name="layout">
            <Input style={{ marginLeft: 10, width: '6rem' }} onChange={this.onExpectAgeChange.bind(this)} />
          </Form.Item>
          <Button type="primary" style={{ marginBottom: 10 }} onClick={this.changeText.bind(this)}>
            Submit
          </Button>
          <br />
          {this.state.show == 1 ? (
            <div>
              <h3>Your Goal</h3>
              <p>{`By age ${this.state.currentAge}, I want a monthly income of $ ${this.state.income} SGD`} </p>
              <p>{`in today's value from my asset for up to ${this.state.expectAge} years`} </p>

              <Image width={300} src={require('./advData/plangoal.png')} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Plan;
