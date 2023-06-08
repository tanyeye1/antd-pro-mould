import { getAreaList } from '@/services/api';
import { getAreaIdList } from '@/util';
import { message, Row, Select } from 'antd';
import React from 'react';

const { Option } = Select;
class SelectArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultArea: undefined,
      provinceList: null,
      cityList: null,
      regionList: null,
      streetList: null,
      province: undefined,
      city: undefined,
      region: undefined,
      street: undefined,
    };
  }

  componentDidMount() {
    this.getArea().then((res) => {
      this.setState({ provinceList: res }, () => {
        if (this.props?.workDictInfo?.baseInfo) {
          const areaIdList = getAreaIdList(this.props?.workDictInfo?.baseInfo?.areaId);
          areaIdList.map((item, index) => {
            switch (index) {
              case 0:
                this.provinceChange(item);
                return;
              case 1:
                this.cityChange(item);
                return;
              case 2:
                this.regionChange(item);
                return;
              case 3:
                this.streetChange(item);
                return;
            }
          });
        }
      });
    });
  }

  getArea(id) {
    return new Promise((resolve, reject) => {
      getAreaList({ pid: id })
        .then((res) => {
          if (res.data.success) {
            if (res.data.data.length > 0) {
              resolve(res.data.data);
            }
          } else {
            reject('err');
            message.warn(res.msg);
          }
        })
        .catch((err) => {
          // message.warn(err);
          console.log(err.response);
        });
    });
  }

  // 选择省
  provinceChange = (value) => {
    this.setState({
      province: value,
      city: undefined,
      region: undefined,
      street: undefined,
      regionList: null,
      streetList: null,
    });
    this.props.form.setFieldsValue({ areaId: value });
    if (value) {
      this.getArea(value).then((res) => {
        if (res) {
          this.setState({ cityList: res });
        }
      });
    }
  };
  // 选择市
  cityChange = (value) => {
    this.setState({ city: value, region: undefined, street: undefined, streetList: null });
    this.props.form.setFieldsValue({ areaId: value });
    if (value) {
      this.getArea(value).then((res) => {
        if (res) {
          this.setState({ regionList: res });
        }
      });
    }
  };
  // 选择区
  regionChange = (value) => {
    this.setState({ region: value, street: undefined });
    this.props.form.setFieldsValue({ areaId: value });
    if (value) {
      this.getArea(value).then((res) => {
        if (res) {
          this.setState({ streetList: res });
        }
      });
    }
  };
  // 选择街道
  streetChange = (value) => {
    this.setState({ street: value });
    this.props.form.setFieldsValue({ areaId: value });
  };

  render() {
    const { provinceList, cityList, regionList, streetList, province, city, region, street } =
      this.state;
    return (
      <Row
        type="flex"
        justify="space-between"
        style={{ paddingLeft: '12px' }}
        gutter={24}
        align="middle"
      >
        <Select
          placeholder="请选择"
          value={province}
          style={{ width: 160, marginTop: '3px' }}
          onChange={this.provinceChange}
        >
          {provinceList &&
            provinceList?.map((item, index) => (
              <Option key={index} value={item.id}>
                {item?.areaName}
              </Option>
            ))}
        </Select>
        {cityList && (
          <Select
            placeholder="请选择"
            value={city}
            style={{ width: 160, marginTop: '3px' }}
            onChange={this.cityChange}
          >
            {cityList &&
              cityList?.map((item, index) => (
                <Option key={index} value={item.id}>
                  {item?.areaName}
                </Option>
              ))}
          </Select>
        )}
        {regionList && (
          <Select
            placeholder="请选择"
            value={region}
            style={{ width: 160, marginTop: '3px' }}
            onChange={this.regionChange}
          >
            {regionList &&
              regionList?.map((item, index) => (
                <Option key={index} value={item.id}>
                  {item?.areaName}
                </Option>
              ))}
          </Select>
        )}
        {streetList && (
          <Select
            placeholder="请选择"
            value={street}
            style={{ width: 160, marginTop: '3px' }}
            onChange={this.streetChange}
          >
            {streetList &&
              streetList?.map((item, index) => (
                <Option key={index} value={item.id}>
                  {item?.areaName}
                </Option>
              ))}
          </Select>
        )}
      </Row>
    );
  }
}

export default SelectArea;
