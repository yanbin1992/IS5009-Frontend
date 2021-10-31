import React, { Component } from 'react';
import { Form, Input, Button, Image } from 'antd';
class Plan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: "",
        };
    }
    changeText() {
        this.setState({ show: 1 });
        console.log(this.state.show);
    }
    render() {
        return (
            <div className="Plan">
                <div style={{ marginTop: 32, marginLeft: 20, marginBottom: 16 }}>
                    <h4>Financial Planning Calculator</h4>
                    <Form.Item label="What's your retire age?" name="layout">
                        <Input style={{ marginLeft: 10, width: '6rem' }} />
                    </Form.Item>
                    <Form.Item label="What's your retired income level?" name="layout">
                        <Input style={{ width: '15rem' }} />
                    </Form.Item>
                    <Form.Item label="What's your current monthly income?" name="layout">
                        <Input style={{ width: '15rem' }} />
                    </Form.Item>
                    <Form.Item label="Education fund for children:" name="layout">
                        <Input style={{ width: '15rem' }} />
                    </Form.Item>
                    <Form.Item label="In year:       " name="layout">
                        <Input style={{ marginLeft: 10, width: '6rem' }} />
                    </Form.Item>
                    <Button type="primary" style={{ marginBottom: 10 }} onClick={this.changeText.bind(this)}>Submit</Button>
                    <br />
                    {this.state.show == 1 ?
                        <div><Image
                            width={300}
                            src={require('./advData/plangoal.png')}
                        />
                        </div>
                        : null}
                </div>
            </div>
        )
    }
}

export default Plan;