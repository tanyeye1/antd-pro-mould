import React from "react";
import { Spin, Carousel, message, Result, Button } from "antd";
import BasicForm from "./basicForm";
import IndividuationForm from "./individuationForm";
import AddWorkStep from './steps'
import { isEmpty, unset } from 'lodash';

import './index.less'
import { companyRegister, upLoadImg } from "@/services/api";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 当前步数
            step: 0,
            // loading
            loading: false,
            // 存放第一步处理好的信息
            basicFormInfo: null,
        }
    }

    componentWillMount() {
        document.title = '企业注册';
        companyRegister
    }

    async handleBasic() {
        try {
            const formval = await this.basicFormRef.props.form.validateFields();
            // console.log(formval);
            let urlList = [];
            this.setState({ loading: true });
            formval.yyzzurl.fileList.forEach(ele => {
                const params = new FormData();
                params.append('file', ele.originFileObj);
                upLoadImg(params).then(res => {
                    urlList.push(res.data.location);
                    if (urlList.length === formval.yyzzurl.fileList.length) {
                        this.setState({ loading: false });
                        formval.yyzzurl = urlList.join(',');
                        this.setState({
                            basicFormInfo: {
                                ...formval
                            }
                        });
                        this.refs.carousel.next();
                    }
                }).catch(err => {
                    message.error(err);
                    this.setState({ loading: false });
                })
            })

        } catch (err) {
            console.log(err);
        }
    }

    async handleIndividuation() {
        try {
            const formval = await this.IndividuationFormRef.props.form.validateFields();
            // console.log(formval);
            unset(formval, 'confirm');
            const registerData = {
                ...formval,
                ...this.state.basicFormInfo
            };
            this.setState({ loading: true });
            const params = new FormData();
            Object.keys(registerData).forEach(item => {
                params.append(item, registerData[item]);
            })
            companyRegister(params).then(res => {
                // console.log(res);
                message.success('注册成功');
                this.refs.carousel.next();
            }).catch(err => {
                console.log(err);
                message.error(err);
            }).finally(() => {
                this.setState({ loading: false });
            })
        } catch (err) {
            console.log(err);
        }
    }

    afterChange(current) {
        this.setState({ step: current });
    }
    
    onPreStep() {
        this.refs.carousel.prev();
    }

    goLogin() {
        this.props.history.push(`${window.location.origin}/co/login.do`);
    }

    render() {
        const { step, loading } = this.state;
        return (
            <div className="app-container-register">
                <div className="wrap-left">
                    <div className="wrap-left-top">
                        <div className="top-title">企业注册</div>
                        <Spin tip="Loading..." spinning={loading}>
                            {
                                <div className="top-content">
                                    <div className="add-step">
                                        <AddWorkStep step={step} />
                                    </div>
                                    <Carousel afterChange={this.afterChange.bind(this)} ref='carousel' dots={false} effect="fade">
                                        <BasicForm
                                            wrappedComponentRef={form => this.basicFormRef = form}
                                            onOk={this.handleBasic.bind(this)}
                                        />
                                        <IndividuationForm
                                            wrappedComponentRef={form => this.IndividuationFormRef = form}
                                            onPre={this.onPreStep.bind(this)}
                                            onOk={this.handleIndividuation.bind(this)}
                                        />
                                        <Result
                                            status="success"
                                            title="注册成功，点击返回登录!"
                                            extra={[
                                                <Button key="finish" onClick={this.goLogin.bind(this)}>返回登录</Button>,
                                            ]}
                                        />
                                    </Carousel>
                                </div>
                            }
                        </Spin>
                    </div>
                </div>
            </div>
        )
    }
}



export default Register;
