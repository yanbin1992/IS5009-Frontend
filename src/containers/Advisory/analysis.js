import React, { Component } from 'react';
import { Image, Button } from 'antd';
class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: '',
    };
  }
  changeText() {
    this.setState({ show: 1 });
    console.log(this.state.show);
  }
  render() {
    return (
      <div className="Analysis">
        <div style={{ marginTop: 32, marginLeft: 20, marginBottom: 16 }}>
          <h4>Income and Spending Analysis</h4>
          <img width={300} src={require('./advData/beforeSpend.png')} style={{ justifyContent: 'center' }} />
          <br />
          <br />
          <Button
            type="primary"
            style={{ display: 'flex', justifyContent: 'center' }}
            onClick={this.changeText.bind(this)}
          >
            Generate your report
          </Button>
        </div>
        {this.state.show == 1 ? (
          <div>
            <div style={{ marginTop: 32, marginLeft: 20, marginBottom: 16 }}>
              <h4>Spending Distribution</h4>
              <Image width={300} src={require('./advData/spending.jpg')} />
              <h4>User Comparison</h4>
              <Image width={300} src={require('./advData/spendhabits.png')} />
            </div>
            <div style={{ marginTop: 32, marginLeft: 20, marginBottom: 16 }}>
              <h4>Spending Trend</h4>
              <Image width={300} src={require('./advData/trend.png')} />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Analysis;
