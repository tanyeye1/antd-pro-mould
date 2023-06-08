import { Steps } from 'antd';
import React from 'react';

const { Step } = Steps;
class AddWorkSteps extends React.Component {
  render() {
    const { step } = this.props;
    return (
      <Steps current={step}>
        <Step title="基本信息" />
        <Step title="附加信息" />
        <Step title="完成" />
      </Steps>
    );
  }
}

export default AddWorkSteps;
