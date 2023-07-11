import { outLogin } from '@/services/ant-design-pro/api';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { history, useModel } from '@umijs/max';
import { Form, Input, Modal, Spin } from 'antd';

import { stringify } from 'querystring';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback, useState } from 'react';
import HeaderDropdown from '../HeaderDropdown';
import './index.less';
export type GlobalHeaderRightProps = {
  menu?: boolean;
  children?: React.ReactNode;
};

export const AvatarName = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  return <span className="anticon">{currentUser?.name}</span>;
};

export const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu, children }) => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  /**
   * 退出登录，并且将当前的 url 保存
   */
  const loginOut = async () => {
    await outLogin();
    const { search, pathname } = window.location;
    const urlParams = new URL(window.location.href).searchParams;
    /** 此方法会跳转到 redirect 参数所在的位置 */
    const redirect = urlParams.get('redirect');
    // Note: There may be security issues, please note
    if (window.location.pathname !== '/user/login' && !redirect) {
      history.replace({
        pathname: '/user/login',
        search: stringify({
          redirect: pathname + search,
        }),
      });
    }
  };
  const actionClassName = useEmotionCss(({ token }) => {
    return {
      display: 'flex',
      height: '48px',
      marginLeft: 'auto',
      overflow: 'hidden',
      alignItems: 'center',
      padding: '0 8px',
      cursor: 'pointer',
      borderRadius: token.borderRadius,
      '&:hover': {
        backgroundColor: token.colorBgTextHover,
      },
    };
  });
  const { initialState, setInitialState } = useModel('@@initialState');

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      if (key === 'logout') {
        // flushSync(() => {
        //   setInitialState((s) => ({ ...s, currentUser: undefined }));
        // });
        // loginOut();
        // return;
        history.push('/login');
      }
      if (key === 'changePassword') {
        setOpen(true);
      }
      // history.push(`/account/${key}`);
    },
    [setInitialState],
  );

  const loading = (
    <span className={actionClassName}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  // if (!currentUser || !currentUser.name) {
  //   return loading;
  // }

  const menuItems = [
    {
      key: 'changePassword',
      label: '修改密码',
    },
    {
      key: 'logout',
      // icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ];
  const content = (
    <div className="supportContent">
      <div>
        <div>充值</div>
        <div>订单</div>
        <div>发票</div>
        <div>费用账单</div>
        <div>续费管理</div>
      </div>
      <div style={{ margin: '0 5px' }}>
        <div>人员权限管理</div>
      </div>
      <div>
        <div>一对一专家服务</div>
        <div>提交工单</div>
        <div>我的工单</div>
      </div>
    </div>
  );
  const items = [
    {
      label: '费用',
      key: 'fee',
      children: [
        {
          label: 'Option 3',
          key: 'setting:3',
        },
        {
          label: 'Option 4',
          key: 'setting:4',
        },
      ],
    },
    {
      label: '人员',
      key: 'person',
      children: [
        {
          type: 'group',
          label: 'Item 1',
        },
        {
          type: 'group',
          label: 'Item 2',
        },
      ],
    },
    {
      label: '支持',
      key: 'support',
      children: [
        {
          type: 'group',
          label: 'Item 1',
        },
        {
          type: 'group',
          label: 'Item 2',
        },
      ],
    },
  ];
  const feeMenu = [
    {
      label: '充值',
      key: 'cz',
    },
    {
      label: '订单',
      key: 'dd',
    },
    {
      label: '发票',
      key: 'fp',
    },
    {
      label: '费用账单',
      key: 'fyzd',
    },
    {
      label: '续费管理',
      key: 'xfgl',
    },
  ];
  const personMenu = [
    {
      label: '人员权限管理',
      key: 'ryqxgl',
    },
  ];
  const supportMenu = [
    {
      label: '一对一专家服务',
      key: 'ydyzmfw',
    },
    {
      label: '提交工单',
      key: 'tjgd',
    },
    {
      label: '我的工单',
      key: 'wdgd',
    },
  ];

  return (
    <>
      {/* <Popover content={content} placement="bottomLeft" arrow={false}>
        <div className="support">
          <div className="fee">费用</div>
          <div className="person">人员</div>
          <div>支持</div>
        </div>
      </Popover> */}
      {/* <Space className='server mr-5' size='middle'>
        <Dropdown menu={{ items: feeMenu }} placement="bottom">
          <div>费用</div>
        </Dropdown>
        <Dropdown menu={{ items: personMenu }} placement="bottom">
          <div>人员</div>
        </Dropdown>
        <Dropdown menu={{ items: supportMenu }} placement="bottom">
          <div>支持</div>
        </Dropdown>
      </Space> */}

      {/* <Menu mode="horizontal" items={items} /> */}
      <HeaderDropdown
        menu={{
          selectedKeys: [],
          onClick: onMenuClick,
          items: menuItems,
        }}
        placement="bottom"
      >
        {children}
      </HeaderDropdown>
      <Modal
        centered={true}
        destroyOnClose={true}
        open={open}
        title="修改密码"
        onOk={() => {
          form.validateFields().then((values: any) => {
            console.log('values', values);
            // updateUserPass({
            //   ...values,
            //   userId: localStorage.getItem('userId'),
            // }).then((res: any) => {
            //   if (res?.code === '0000') {
            //     setOpen(false);
            //   }
            // });
          });
        }}
        onCancel={() => {
          setOpen(false);
        }}
        afterClose={() => {
          form.resetFields();
        }}
      >
        <Form
          form={form}
          // name='id'
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            name="oldUserPass"
            label="原始密码"
            rules={[
              {
                // pattern: /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,16}$|admin/,
                required: true,
                message: '请输正确的密码或格式!',
              },
            ]}
          >
            <Input placeholder="8-16位字母(含大小写)及数字符号组合" />
          </Form.Item>
          <Form.Item
            name="newUserPass"
            label="新密码"
            rules={[
              {
                // pattern: /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,16}$|admin/,
                required: true,
                message: '请输正确的密码或格式!',
              },
            ]}
          >
            <Input.Password placeholder="8-16位字母(含大小写)及数字符号组合" />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="再次填写新密码"
            dependencies={['newUserPass']}
            rules={[
              {
                // pattern: /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,16}$|admin/,
                required: true,
                // message: '请输正确的密码或格式!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newUserPass') === value) {
                    console.log('value', value);
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('您输入的两个密码不匹配!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="8-16位字母(含大小写)及数字符号组合" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
