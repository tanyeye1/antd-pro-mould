import React, { Component, useEffect, useState } from "react";
import { Form, Input, Row, Col, Button, message } from "antd";
import './index.less'
import { getNodeCode } from "@/services/api";

function Time(props) {

    const [second, setSecond] = useState(60);

    useEffect(() => {
        let clearTime = setTimeout(() => {
            let time = second;
            time = time - 1;
            if (time < 1) {
                props.onChange && props.onChange(true);
                return
            }
            setSecond(time);
        }, 1000);
        return () => clearTimeout(clearTime);

    }, [second]);

    return (
        <div> {second} </div>
    )
}

class IndividuationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            showTime: false,
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('pwd')) {
            callback('密码不一致!');
        } else {
            callback();
        }
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    // 获取验证码
    codeClick = () => {
        const { form } = this.props;
        if (form.getFieldValue('mobile') && !form.getFieldError('mobile')) {
            getNodeCode({ mobile: form.getFieldValue('mobile') }).then(({ data: res }) => {
                message.success(res.msg);
                this.setState({ showTime: true });
            }).catch(err => {
                message.error(err);
            })
        } else {
            message.error('请填写正确格式的手机号！');
        }
    }

    timeOver = (e) => {
        if (e) {
            this.setState({ showTime: false });
        }
    }

    render() {
        const {
            onPre,
            onOk,
            form,
        } = this.props;
        const { getFieldDecorator } = form;
        const { showTime } = this.state;
        const formItemLayout = {
            labelCol: {
                sm: { span: 7 },
            },
            wrapperCol: {
                sm: { span: 15 },
            },
        };
        return (
            <>
                <Form {...formItemLayout}>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col span={12}>
                            <Form.Item label={`管理员姓名`}>
                                {getFieldDecorator('userName', {
                                    rules: [
                                        { required: true, message: '请输入管理员姓名!' },
                                    ],
                                    initialValue: undefined
                                })(<Input placeholder='请输入管理员姓名' allowClear />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col span={12}>
                            <Form.Item label={`登录账号`}>
                                {getFieldDecorator('account', {
                                    rules: [
                                        { required: true, message: '请输入登录账号!' },
                                    ],
                                    initialValue: undefined
                                })(<Input placeholder='请输入登录账号' />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col span={12}>
                            <Form.Item label={`登录密码`} hasFeedback>
                                {getFieldDecorator('pwd', {
                                    rules: [
                                        { required: true, message: '请输入登录密码!' },
                                        { pattern: '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$', message: '密码长度应大于等于8位小于16位且包含英文和数字' },
                                        {
                                            validator: this.validateToNextPassword,
                                        },
                                    ],
                                    initialValue: undefined
                                })(<Input.Password placeholder='密码长度应大于等于8位且包含英文和数字' />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col span={12}>
                            <Form.Item label={`确认密码`} hasFeedback>
                                {getFieldDecorator('confirm', {
                                    rules: [
                                        { required: true, message: '请再次输入密码!' },
                                        {
                                            validator: this.compareToFirstPassword,
                                        },
                                    ],
                                    initialValue: undefined
                                })(<Input.Password placeholder='确认密码' onBlur={this.handleConfirmBlur} />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col span={12}>
                            <Form.Item label="手机号">
                                <Row gutter={24} >
                                    <Col span={16}>
                                        {getFieldDecorator('mobile', {
                                            rules: [
                                                { required: true, message: '请输入联系电话!' },
                                                { pattern: '^[1][3,4,5,6.7,8,9][0-9]{9}$', message: '手机号格式不正确!' },
                                            ],
                                            initialValue: undefined
                                        })(<Input placeholder='手机号' allowClear />)}
                                    </Col>
                                    <Col span={8} style={{ textAlign: "right" }}>
                                        <Button
                                            style={{ width: "80%" }}
                                            type={showTime ? '' : "primary"}
                                            onClick={() => this.codeClick()}
                                        >
                                            {
                                                showTime ?
                                                    <Time onChange={this.timeOver} /> :
                                                    '验证码'
                                            }
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col span={12}>
                            <Form.Item label={`验证码`}>
                                {getFieldDecorator('code', {
                                    rules: [
                                        { required: true, message: '请输入验证码!' },
                                    ],
                                    initialValue: undefined
                                })(<Input placeholder='验证码' allowClear />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col >
                            <Form.Item>
                                <Button onClick={onPre} type="primary">
                                    上一步
                                </Button>
                            </Form.Item>
                        </Col>
                        <Col >
                            <Form.Item>
                                <Button onClick={onOk} type="primary" htmlType="submit">
                                    注册
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </>
        );
    }
}

export default (IndividuationForm);
