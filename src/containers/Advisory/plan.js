import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
class Plan extends Component {

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
                    <Button style={{ marginBottom: 10 }}>Add Items</Button>
                    <Button type="primary" style={{ marginLeft: 60, width: '6rem', marginBottom: 10 }}>Submit</Button>
                </div>
            </div>
        )
    }
}

export default Plan;