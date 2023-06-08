import React, { Component } from "react";
import { Form, Input, Row, Col, Button, Upload, message, Modal, Icon, Select } from "antd";
import SelectArea from "./selectArea";
import { getBase64 } from "@/util";
import { getCompanyTypeList } from "@/services/api";


const { Option } = Select;
class BasicForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            //展示图片
            previewVisible: false,
            previewImage: null,
            companyList: null
        }
    }

    componentDidMount() {
        // 企业类型 getNodeCode
        this.getCompanyTypeListFun();
    }

    getCompanyTypeListFun() {
        getCompanyTypeList().then(({ data: res }) => {
            this.setState({ companyList: res });
        })
    }

    // 上传图片
    beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('只能上传 JPG/PNG 格式的文件!');
        }
        const isLt2M = file.size / 1024 / 1024 / 1024 / 1024 / 1024 < 2;
        return false;
    }
    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    render() {
        const {
            onOk,
            form,
        } = this.props;
        const { getFieldDecorator } = form;
        const { previewVisible, previewImage, companyList } = this.state;
        const formItemLayout = {
            labelCol: {
                sm: { span: 7 },
            },
            wrapperCol: {
                sm: { span: 15 },
            },
        };
        const formItemLayoutFile = {
            labelCol: {
                sm: { span: 7, offset: 2 },
            },
            wrapperCol: {
                sm: { span: 14 },
            },
        };
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">点击上传</div>
            </div>
        );
        return (
            <>
                <Form {...formItemLayout}>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col span={12}>
                            <Form.Item label={`企业名称`}>
                                {getFieldDecorator('companyName', {
                                    rules: [
                                        { required: true, message: '请输入企业名称!' },
                                    ],
                                    initialValue: undefined
                                })(<Input placeholder='请输入企业名称' allowClear />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col span={12}>
                            <Form.Item label={`统一社会信用代码`}>
                                {getFieldDecorator('creditCode', {
                                    rules: [
                                        { required: true, message: '请填写统一社会信用代码' },
                                    ],
                                    initialValue: undefined
                                })(<Input placeholder='统一社会信用代码' allowClear />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col span={12}>
                            <Form.Item label={`企业类型`}>
                                {getFieldDecorator('companyType', {
                                    rules: [
                                        { required: true, message: '请选择企业类型' },
                                    ],
                                    initialValue: undefined
                                })(<Select
                                    placeholder="请选择企业类型"
                                    onChange={this.companyTyeChange}
                                >
                                    {
                                        companyList?.map(item => (
                                            <Option key={item.id} value={item.id}>{item.name}</Option>
                                        ))
                                    }
                                </Select>)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col span={12}>
                            <Form.Item label={`所属地区`}>
                                {getFieldDecorator('areaId', {
                                    rules: [
                                        { required: true, message: '请选择地区!' },
                                    ],
                                    initialValue: undefined
                                })(<div>
                                    <SelectArea form={form} />
                                </div>)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col span={12}>
                            <Form.Item label={`详细地址`}>
                                {getFieldDecorator('addr', {
                                    rules: [
                                        { required: false, message: '请填写详细地址!' },
                                    ],
                                    initialValue: undefined
                                })(<Input placeholder='请填写详细地址' allowClear />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col span={12}>
                            <Form.Item label={`联系人`}>
                                {getFieldDecorator('lxr', {
                                    rules: [
                                        { required: true, message: '请输入联系人!' },
                                    ],
                                    initialValue: undefined
                                })(<Input placeholder='请输入联系人' allowClear />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col span={12}>
                            <Form.Item label={`联系电话`}>
                                {getFieldDecorator('lxrMobile', {
                                    rules: [
                                        { required: true, message: '请输入联系电话!' },
                                        { pattern: '^[1][3,4,5,6.7,8,9][0-9]{9}$', message: '手机号格式不正确!' },
                                    ],
                                    initialValue: undefined
                                })(<Input placeholder='手机号' allowClear />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col span={20}>
                            <Form.Item {...formItemLayoutFile} label={`营业执照`}>
                                {getFieldDecorator('yyzzurl', {
                                    rules: [
                                        { required: true, message: '请上传营业执照!' },
                                    ],
                                    initialValue: undefined
                                })(<Upload
                                    listType="picture-card"
                                    beforeUpload={this.beforeUpload}
                                    onPreview={this.handlePreview}
                                >
                                    {uploadButton}
                                </Upload>)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={24} align='middle'>
                        <Col>
                            <Form.Item>
                                <Button onClick={onOk} type="primary" htmlType="submit">
                                    下一步
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <Modal visible={previewVisible} footer={null} onCancel={() => this.setState({ previewVisible: false })}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </>
        );
    }
}

export default Form.create({ name: "basicForm" })(BasicForm);
