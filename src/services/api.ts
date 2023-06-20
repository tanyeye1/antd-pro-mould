import { request } from "@umijs/max";
import qs from "qs";

const test = '/test'

export  const login = async (params) => {
  return request('/api/v1/session/login_by_pwd.do', {
    method: 'POST',
    params,
    // data: params
  })
}
// 企业注册
export  async function companyRegister(data) {
  return request(`${test}/company/register.do`, {
    data: data,
    method: 'POST'
  })
}
// 上传图片
export async function upLoadImg(data) {
  return request(`${test}/cms/uploadImage.do`, {
    data: data,
    method: 'POST',
  })
}
// 企业类型
export async function getCompanyTypeList(data) {
  return request(`${test}/company/company_type_list.do`, {
    data: qs.stringify(data),
    method: 'POST'
  })
}
// 地区列表
export async function  getAreaList(data) {
  return request(`${test}/area/children.do`, {
    data: qs.stringify(data),
    method: 'POST',
  })
}
// 短信验证码
export async function getNodeCode(data) {
  return request(`${test}/send_code.do` ,{
    data: qs.stringify(data),
    method: 'post'
  })
}