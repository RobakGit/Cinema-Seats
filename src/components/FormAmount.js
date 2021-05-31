import React, { Component } from 'react';
import { Row, Form, Button, Checkbox, InputNumber } from 'antd';

export class FormAmount extends Component {

render() {
    return (

        <Row justify="center" align="middle" style={{height: "100%", textAlign: "center"}}>

            <Form 
                layout="horizontal"
                name="amount"
                initialValues={{ amount: 0, checkbox: false }} 
                onFinish={this.props.submitAmount}>

                <Form.Item label="Liczba miejsc:" name="amount">
                    <InputNumber min="0"></InputNumber>
                </Form.Item>

                <Form.Item name="checkbox" valuePropName="checked">
                    <Checkbox>Czy miejsca mają być obok siebie?</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit" block>Wybierz miejsca</Button>
                </Form.Item>
            </Form>

        </Row>

        );
  }

}

export default FormAmount;