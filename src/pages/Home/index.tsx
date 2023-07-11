import {
  CloudOutlined,
  CustomerServiceOutlined,
  HistoryOutlined,
  PlusCircleOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { Button, Card, Select, Space, Tabs } from 'antd';
import { createEffect, createSignal } from 'solid-js';
import './index.less';
export default function Home() {
  const [test, setTest] = createSignal(0);
  const handleChange = (value) => {
    console.log('value', value);
  };
  const onChange = (key) => {
    console.log('key', key);
  };
  const items = [
    {
      key: 'notice',
      label: `公告`,
      children: (
        <Space direction="vertical">
          <div>
            <div>【升级】2023年6月8日北京，上海， 青岛，西安部分智能接入网关接入点后...</div>
            <div className="time">
              <HistoryOutlined />
              &nbsp; 2023-06-05
            </div>
          </div>
          <div>
            <div>【升级】2023年6月8日北京，上海， 青岛，西安部分智能接入网关接入点后...</div>
            <div className="time">
              <HistoryOutlined />
              &nbsp; 2023-06-05
            </div>
          </div>
          <div className="more">查看更多</div>
        </Space>
      ),
    },
    {
      key: 'new',
      label: `新产品快报`,
      children: `Content of Tab Pane 2`,
    },
  ];
  createEffect(() => {
    console.log('test', test());
  });
  console.log('test', test());
  return (
    <div className=" home flex layout-content">
      {/* 首页左边 */}
      <div className="leftContent ">
        {/* 数据展示 */}
        <div className="dataShow flex flex-wrap justify-between  ">
          <Card className="shadow flex-1 hover:shadow-lg">
            <div className="text-lg font-bold mb-5">安全培训</div>
            <div className="flex">
              <div className="bg-pink-100 p-3">
                <div>
                  培训次数
                  <QuestionCircleOutlined className="ml-1" />
                </div>
                <div>
                  <span className="text-red-500 text-lg font-medium">69</span>
                  /100
                </div>
              </div>
              <div className="bg-yellow-100 mx-5 p-3 ">
                <div>特种作业</div>
                <div className="text-lg font-medium">8人</div>
              </div>
              <div className="bg-pink-300 p-3">
                <div>特种设备特种作业</div>
                <div className="text-red-500 text-lg font-medium">330人</div>
              </div>
            </div>
          </Card>
          <Card className="shadow flex-1 ml-1 hover:shadow-lg">
            <div className="text-lg font-bold mb-5">双防双控</div>
            <div className="flex">
              <div className="bg-pink-100 p-3">
                <div>
                  风险点
                  <QuestionCircleOutlined className="ml-1" />
                </div>
                <div className="text-red-500 text-lg font-medium">1</div>
              </div>
              <div className="bg-yellow-100 mx-5 p-2 ">
                <div className="flex justify-between items-center ">
                  <div>
                    隐患排查
                    <QuestionCircleOutlined className="ml-1" />
                  </div>
                  <div className="ml-10">
                    <Select
                      defaultValue="jack"
                      style={{ width: 120 }}
                      onChange={handleChange}
                      options={[
                        { value: 'jack', label: '近一天' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                      ]}
                    />
                  </div>
                </div>
                <div className="text-lg font-medium flex ">
                  <div>0 严重</div>
                  <div className="ml-10">26 警告</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        {/* 我的导航 */}
        <div className="myNav mt-10">
          <Card className="shadow hover:shadow-lg">
            <div className="text-lg font-bold mb-3 flex justify-between">
              <div>我的导航</div>
              <div>
                <Button type="primary">开通服务</Button>
              </div>
            </div>
            <div className="mb-3">
              <div className="mb-3">最近访问-云产品</div>
              <div>
                <Space wrap>
                  <div className="tag">控制台首页台首页...</div>
                  <div className="tag">控制台首页</div>
                  <div className="tag">控制台首页</div>
                  <div className="tag">控制台首页</div>
                  <div className="tag">控制台首页</div>
                  <div className="tag">控制台首页</div>
                  <div className="tag">控制台首页</div>
                  <div className="tag">控制台首页</div>
                  <div className="tag">控制台首页</div>
                </Space>
              </div>
            </div>
            <div>
              <div className="mb-3">自定义快捷入口</div>
              <div>
                <Space wrap>
                  <div className="tag">视频直播</div>

                  <div className="addTag">
                    <PlusCircleOutlined style={{ color: '#0359c1' }} />
                    &nbsp; 添加快捷入口
                  </div>
                </Space>
              </div>
            </div>
          </Card>
        </div>
        {/* 试用教程 */}
        <div className="trialTutorial mt-10 hover:shadow-lg ">
          <Card className="shadow ">
            <div className="text-lg font-bold mb-3 ">试用教程</div>
            <div className="mb-3 ">
              <Space wrap>
                <div className="flex box">
                  <div className="pic mr-2">
                    {/* <img src="https://img2.baidu.com/it/u=567357414,4240886412&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="" /> */}
                  </div>
                  <div>
                    <div className="font-medium">搭载云上博客</div>
                    <div className="description">云服务器ECS</div>
                  </div>
                </div>
                <div className="flex box">
                  <div className="pic mr-2">
                    {/* <img src="https://img2.baidu.com/it/u=567357414,4240886412&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="" /> */}
                  </div>
                  <div>
                    <div className="font-medium">搭载云上博客</div>
                    <div className="description">云服务器ECS</div>
                  </div>
                </div>
                <div className="flex box">
                  <div className="pic mr-2">
                    {/* <img src="https://img2.baidu.com/it/u=567357414,4240886412&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="" /> */}
                  </div>
                  <div>
                    <div className="font-medium">搭载云上博客</div>
                    <div className="description">云服务器ECS</div>
                  </div>
                </div>
                <div className="flex box">
                  <div className="pic mr-2">
                    {/* <img src="https://img2.baidu.com/it/u=567357414,4240886412&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="" /> */}
                  </div>
                  <div>
                    <div className="font-medium">搭载云上博客</div>
                    <div className="description">云服务器ECS</div>
                  </div>
                </div>
                <div className="flex box">
                  <div className="pic mr-2">
                    {/* <img src="https://img2.baidu.com/it/u=567357414,4240886412&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="" /> */}
                  </div>
                  <div>
                    <div className="font-medium">搭载云上博客</div>
                    <div className="description">云服务器ECS</div>
                  </div>
                </div>
                <div className="flex box">
                  <div className="pic mr-2">
                    {/* <img src="https://img2.baidu.com/it/u=567357414,4240886412&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="" /> */}
                  </div>
                  <div>
                    <div className="font-medium">搭载云上博客</div>
                    <div className="description">云服务器ECS</div>
                  </div>
                </div>
              </Space>
            </div>
          </Card>
        </div>
      </div>
      <div className="rightConent ">
        <Space direction="vertical" size="middle">
          {/* 手机图片 */}
          <div className="phone "></div>
          {/* 在线咨询 */}
          <div className="flex serve justify-around">
            <div className="flex">
              <div>
                <CustomerServiceOutlined />
              </div>
              <div className="ml-2">
                <div className="font-medium">售前在线咨询</div>
                <div className="font-normal">专属商务经理在线解答</div>
              </div>
            </div>
            <div className="flex">
              <div>
                <CloudOutlined />
              </div>
              <div className="ml-2">
                <div className="font-medium">售后在线服务</div>
                <div className="font-normal">在线实时沟通，快速解决您的问题</div>
              </div>
            </div>
          </div>
          {/* 二维码 */}
          <div className="qrcode flex">
            <div className="wx bg-white p-5 ">
              <div className="text-center text-lg font-medium">微信公众号</div>
              <div className="my-2.5">
                关注微信公众号，基于手机开展逢险必验、逢患必查、逢查必考、记分管理、组织安全培训。
              </div>
              <div className="code "></div>
            </div>
            <div className="app bg-white ml-1 p-5">
              <div className="text-center text-lg font-medium">特种作业APP</div>
              <div className="my-2.5">
                特种作业许可证全面线上化电子化闭环管理, 满足GB30871要求:
                作业过程全时移动监控覆盖，全时气体数据监测，切实有效管控过程风险因素。
              </div>
              <div className="code "></div>
              <div className="text-center">
                <Button className="mt-3">AndroId下载</Button>
              </div>
              <div className="tip">
                <div className="triangle">
                  <div className="triangleText">HOT</div>
                </div>
              </div>
            </div>
          </div>
          {/* 产品信息 */}
          <Card className="shadow hover:shadow-lg">
            <div className="text-lg font-bold">产品信息</div>
            <Tabs items={items} defaultActiveKey="notice" onChange={onChange} />
          </Card>
        </Space>
      </div>
    </div>
  );
}
