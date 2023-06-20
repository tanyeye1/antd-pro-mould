import { login } from '@/services/api';
import { InfoCircleOutlined, LeftOutlined, LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCaptcha, ProFormText } from '@ant-design/pro-components';
import { Button, message, Modal, Radio, Space, Tabs } from 'antd';
import React, { useState } from 'react';
import './index.less';
import { history } from '@umijs/max';
// import logo from '@/img/logo.png';

const Login: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const items = [
    {
      key: 'account',
      label: '账户密码登录',
    },
    {
      key: 'mobile',
      label: '手机号登录',
    },
  ];
  const handleSubmit = async (values: any) => {
    console.log('values', values);
    history.push('/home')
    // await login({
    //   account: values.userAccount,
    //   passwd: values.userPass,
    // }).then((res) => {
    //   console.log('res', res);
    // });
    try {
      
    } catch (error) {
      message.error('登录失败，请重试！');
    }
  };
  const handleOk = () => {};
  const handleCancel = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    console.log('e', e);
    setValue(e.target.value);
  };
  const clickBack = () => {
    console.log('back')
    setOpen(false);
  }
  document.title = '登录';
  return (
    <div className="login-container">
      <div className="content">
        <div className="title">
          <div className="title-h1">安培通企业版</div>
          <div className="title-h2">安全生产在线培训</div>
          <div className="title-h3">随时随地 想学就学</div>
        </div>
        <div className="login-content">
          <LoginForm
            // initialValues={{
            //   autoLogin: true,
            // }}
            // onFinish={handleSubmit}
            onFinish={async (values) => {
              await handleSubmit(values);
            }}
          >
            {/* <div className="tip">
              <h2>密码登录</h2>
            </div> */}
            <Tabs activeKey={type} items={items} onChange={setType}></Tabs>
            {type === 'account' && (
              <>
                <ProFormText
                  name="userAccount"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined />,
                  }}
                  placeholder={'请输入手机号'}
                  rules={[
                    {
                      required: true,
                      message: '请输入用户名',
                    },
                    {
                      // pattern: /(^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$)|admin/,
                      // message: '请输入正确的用户名或格式',
                    },
                  ]}
                />
                <ProFormText.Password
                  name="userPass"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined />,
                  }}
                  placeholder={'请输入密码'}
                  rules={[
                    {
                      required: true,
                      message: '请输入密码',
                    },
                    {
                      // pattern: /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,16}$|admin/,
                      // message: '请输正确的密码或格式',
                    },
                  ]}
                />
              </>
            )}
            {type === 'mobile' && (
              <>
                <ProFormText
                  fieldProps={{
                    size: 'large',
                    prefix: <MobileOutlined />,
                  }}
                  name="mobile"
                  placeholder={'请输入手机号！'}
                  rules={[
                    {
                      required: true,
                      message: '手机号是必填项！',
                    },
                    {
                      pattern: /^1\d{10}$/,
                      message: '不合法的手机号！',
                    },
                  ]}
                />
                <ProFormCaptcha
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined />,
                  }}
                  captchaProps={{
                    size: 'large',
                  }}
                  placeholder={'请输入验证码！'}
                  captchaTextRender={(timing, count) => {
                    if (timing) {
                      return `${count} ${'秒后重新获取'}`;
                    }
                    return '获取验证码';
                  }}
                  name="captcha"
                  rules={[
                    {
                      required: true,
                      message: '验证码是必填项！',
                    },
                  ]}
                  onGetCaptcha={async (phone) => {
                    console.log('onGetCaptcha', phone);
                    // const result = await getFakeCaptcha({
                    //   phone,
                    // });
                    // if (result === false) {
                    //   return;
                    // }
                    // message.success('获取验证码成功！验证码为：1234');
                  }}
                />
              </>
            )}
            <div>
              <a
                style={{
                  float: 'right',
                  marginBottom: 10,
                }}
              >
                点击注册
              </a>
            </div>
          </LoginForm>
          {/* 登录modal */}
          <Modal 
            open={open} 
            width={560} 
            onOk={handleOk} 
            onCancel={handleCancel}
            footer={<div className='modalFoot'>
              <Button  className='btn'>登录</Button>
            </div>}
            closable={false}
          >
            <div className="modalContent">
              <div className='modalBack' onClick={clickBack}><LeftOutlined /> &nbsp;返回</div>
              <div className="modalHead">
                <h2>选择账号登录</h2>
                <div className="headTip">匹配到多个账号，请在其中选择一个登录</div>
              </div>
              <div>
                <div className="titleHead">
                  <span>账号</span>
                  <span>UID</span>
                  <span>注册时间</span>
                  <span>上次登录时间</span>
                </div>
                <Radio.Group onChange={onChange} value={value}>
                  <Space direction="vertical">
                    <Radio value={1}>
                      <div className="modalInfo">
                        <div className="user">杭州城市</div>
                        <div className="uid">1111111111111</div>
                        <div className="time">2018.3.12</div>
                        <div>2023.08.11</div>
                        <div className="recentLogin">最近登录</div>
                      </div>
                    </Radio>
                  </Space>
                </Radio.Group>
                <div className="userTip">
                  <InfoCircleOutlined style={{ marginRight: 5 }} />
                  当前号码 212******90 以下账号未开通短信登录方式，请选择账号开通短信登录
                </div>
                <Radio.Group onChange={onChange} value={value}>
                  <Space direction="vertical">
                    <Radio value={2}>
                      <div className="modalInfo">
                        <div className="user">杭州城市</div>
                        <div className="uid">1111111111111</div>
                        <div className="time">2018.3.12</div>
                        <div>-</div>
                      </div>
                    </Radio>
                  </Space>
                </Radio.Group>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default Login;
