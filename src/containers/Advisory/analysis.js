import React, { Component } from 'react';
import { Image } from 'antd';
class Analysis extends Component {

    render() {
        return (
            <div className="Analysis">
                <div style={{ marginTop: 32, marginLeft: 20, marginBottom: 16 }}>
                    <h4>Income and Spending Analysis</h4>
                    <Image
                        width={300}
                        src={require('./advData/spending.jpg')}
                    />
                    <Image
                        width={300}
                        src={require('./advData/spendhabits.png')}
                    />
                </div>
                <div style={{ marginTop: 32, marginLeft: 20, marginBottom: 16 }}>
                    <h4>Spending Trend</h4>
                    <Image
                        width={300}
                        src={require('./advData/trend.png')}
                    />
                </div>
            </div>
        )
    }
}

export default Analysis;