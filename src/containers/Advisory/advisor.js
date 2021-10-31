import React, { Component } from 'react';
import { InputNumber, Button, Radio, Image } from 'antd';
class Advisor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            InputValue: "",
            radio: "",
            plan: "0"
        };

    }
    handleGetInputValue = (event) => {
        this.setState({
            InputValue: event.target.value,
        })
    };
    handleGetRadio = (event) => {
        this.setState({
            radio: event.target.value,
        })
    };
    changeText() {
        const { radio } = this.state;
        const { InputValue } = this.state;
        if (InputValue <= 1000) {
            this.setState({ plan: 1 });
        } else if (InputValue > 1000 && InputValue <= 5000 && (radio == 2 || radio == 1)) {
            this.setState({ plan: 2 });
        } else if (InputValue > 5000 && (radio == 2 || radio == 1)) {
            this.setState({ plan: 3 });
        } else if (InputValue > 1000 && InputValue <= 5000 && (radio == 3)) {
            this.setState({ plan: 4 });
        } else {
            this.setState({ plan: 5 });
        }
        console.log(this.state.plan);

    }
    render() {
        return (
            <div className="Advisor">
                <div style={{ marginTop: 32, marginLeft: 20, marginBottom: 16 }}>
                    <h4>Please input your monthly investment amount(SGD):</h4>
                    <div>
                        <input
                            value={this.state.InputValue}
                            onChange={this.handleGetInputValue}
                        />&nbsp;&nbsp;&nbsp;
                    </div>
                </div>

                <div style={{ marginTop: 32, marginLeft: 20, marginBottom: 16 }}>
                    <h4>Please choose your risk preference level:</h4>
                    <Radio.Group>
                        <Radio value={1} onChange={this.handleGetRadio}>low</Radio>
                        <Radio value={2} onChange={this.handleGetRadio}>medium</Radio>
                        <Radio value={3} onChange={this.handleGetRadio}>high</Radio>
                    </Radio.Group>

                </div>
                <div style={{ marginTop: 32, marginLeft: 20, marginBottom: 16 }}>
                    <Button type="primary" onClick={this.changeText.bind(this)}>
                        Submit and generate your report
                    </Button>
                    <br />
                    {this.state.plan == 1 ? <div><h4>Monthly invest allocation</h4>
                        <Image width={300} src={require('./advData/plan1.png')} /></div> :
                        this.state.plan == 2 ? <div><h4>Monthly invest allocation</h4>
                            <Image width={300} src={require('./advData/plan2.png')} /></div> :
                            this.state.plan == 3 ? <div><h4>Monthly invest allocation</h4>
                                <Image width={300} src={require('./advData/plan3.png')} /></div> :
                                this.state.plan == 4 ? <div><h4>Monthly invest allocation</h4>
                                    <Image width={300} src={require('./advData/plan4.png')} /></div> :
                                    this.state.plan == 5 ? <div><h4>Monthly invest allocation</h4>
                                        <Image width={300} src={require('./advData/plan5.png')} /></div> : null}
                    <br />
                    {this.state.plan != 0 ? <div>
                        <h4>Recommended Products</h4>
                        <>Banking Saving Account Products</>
                        <Image width={310} src={require('./advData/pro1.png')} />
                        <br />
                        <>Banking Time Deposit Products</>
                        <Image width={310} src={require('./advData/pro2.png')} />
                        <br />
                        <>Fund Products</>
                        <Image width={310} src={require('./advData/pro3.png')} />
                        <br />
                        <>Insurance Products</>
                        <Image width={310} src={require('./advData/pro4.png')} />
                    </div> :
                        null}

                </div>
                <div>
                </div>
            </div>
        )
    }
}
export default Advisor;
