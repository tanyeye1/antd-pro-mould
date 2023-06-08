import { history, useRouteData } from '@umijs/max';
import routes from '../../config/routes';

export const getIframeUrl = () => {
  const { location } = history;
  const data =  useRouteData()
  console.log('getIframeUrl', location, routes);
  let url = '';
  const iframeBaseUrl = 'https://www.zjaqsc.com'
  // switch (location.pathname) {
  //   //首页
  //   case '/home':
  //     url = '/dashboard.do';
  //     break;
  //   // 组织架构
  //   case '/organizationalStructure/department':
  //     url = '/company/dept/list.do';
  //     break;
  //   case '/organizationalStructure/branch':
  //     url = '/company/low_list.do?childType=FZ';
  //     break;
  //   case '/organizationalStructure/constructionUnit':
  //     url = '/company/low_list.do?childType=SG';
  //     break;
  //   case '/organizationalStructure/residentUnit':
  //     url = '/company/low_list.do?childType=ZC';
  //     break;
  //   case '/organizationalStructure/postManage':
  //     url = '/company/position/list.do';
  //     break;
  //   case '/organizationalStructure/personManage':
  //     url = '/company/employee_list.do';
  //     break;
  //   //上岗证管理
  //   //上岗证管理/证书管理
  //   case '/workCertManage/certManage/workLicense':
  //     url = '/cert/sgz/list.do';
  //     break;
  //   case '/workCertManage/certManage/thirdEducationCard':
  //     url = '/company/employee/sjjy_card_list.do';
  //     break;
  //   case '/workCertManage/certManage/trainingCertificate':
  //     url = '/cert/px/list.do';
  //     break;
  //   case '/workCertManage/certManage/certPreview':
  //     url = '/company/employee/cert_tips_list.do';
  //     break;
  //   //安全培训
  //   //安全培训/上岗证培训
  //   case '/safeTraining/workCertTraining/mainHead':
  //     url = '/cert/train/fzr_list.do';
  //     break;
  //   case '/safeTraining/workCertTraining/safeManagePerson':
  //     url = '/cert/train/list.do?code=AGY';
  //     break;
  //   case '/safeTraining/workCertTraining/specialWorkPerson':
  //     url = '/cert/train/list.do?code=TZZY';
  //     break;
  //   case '/safeTraining/workCertTraining/specialDeviceWork':
  //     url = '/cert/train/list.do?code=TZSB';
  //     break;
  //   //安全培训/三级教育
  //   case '/safeTraining/thirdEducation/newEmployeeTraining':
  //     url = '/company/employee/xyg_list.do';
  //     break;
  //   case '/safeTraining/thirdEducation/toPostTraining':
  //     url = '/company/employee/zg_list.do';
  //     break;
  //   case '/safeTraining/thirdEducation/resumptionTraining':
  //     url = '/company/employee/fg_list.do';
  //     break;
  //   //安全培训/专题教育
  //   case '/safeTraining/specialEducation/specialManage':
  //     url = '/topic/list.do';
  //     break;
  //   case '/safeTraining/specialEducation/specialStudy':
  //     url = '/topic/clazz/list.do';
  //     break;
  //   case '/safeTraining/specialEducation/studySituation':
  //     url = '/topic/student/list.do';
  //     break;
  //   //安全培训/网校管理
  //   case '/safeTraining/onlineSchoolManage/educationalResourceManage':
  //     url = '/teacher/list.do';
  //     break;
  //   case '/safeTraining/onlineSchoolManage/teachPlan':
  //     url = '/class/list.do';
  //     break;
  //   case '/safeTraining/onlineSchoolManage/offlineCourse':
  //     url = '/lesson/list.do';
  //     break;
  //   case '/safeTraining/onlineSchoolManage/coursewareManagement':
  //     url = '/chapter/list.do';
  //     break;
  //   case '/safeTraining/onlineSchoolManage/trainingProgram':
  //     url = '/courseplan/workshop.do';
  //     break;
  //   case '/safeTraining/onlineSchoolManage/classroomManage':
  //     url = '/lesson/room/list.do';
  //     break;
  //   case '/safeTraining/onlineSchoolManage/accountManage':
  //     url = '/category/list.do';
  //     break;
  //   //安全培训/考试管理
  //   case '/safeTraining/examManage/examArrange':
  //     url = '/exam/list.do';
  //     break;
  //   case '/safeTraining/examManage/testQuestionEdit':
  //     url = '/zujuan/question/list.do';
  //     break;
  //   case '/safeTraining/examManage/paperFormatStrategy':
  //     url = '/zujuan/policy_list.do';
  //     break;
  //   case '/safeTraining/examManage/examView':
  //     url = '/kaoshi/list.do';
  //     break;
  //   case '/safeTraining/examManage/questionBankManage':
  //     url = '/zujuan/kp_list.do';
  //     break;
  //   //安全培训/档案管理
  //   case '/safeTraining/archiveManage/archiveQuery':
  //     url = '/archive/list.do';
  //     break;
  //   case '/safeTraining/archiveManage/studentArchive':
  //     url = '/archive/stu_list.do';
  //     break;
  //   case '/safeTraining/archiveManage/classArchive':
  //     url = '/archive/class_list.do';
  //     break;
  //   //安全培训/企业台账
  //   case '/safeTraining/enterpriseLedger/baseInformation':
  //     url = '/company/basic.do';
  //     break;
  //   case '/safeTraining/enterpriseLedger/mainHead':
  //     url = '/company/employee/cert_list.do?code=ZYFZR';
  //     break;
  //   case '/safeTraining/enterpriseLedger/safeManagePerson':
  //     url = '/company/employee/cert_list.do?code=AGY';
  //     break;
  //   case '/safeTraining/enterpriseLedger/specialWorkPerson':
  //     url = '/company/employee/cert_list.do?code=TZZY';
  //     break;
  //   case '/safeTraining/enterpriseLedger/specialDeviceWorkPerson':
  //     url = '/company/employee/cert_list.do?code=TZSB';
  //     break;
  //   case '/safeTraining/enterpriseLedger/newEmployeeTraining':
  //     url = '/company/employee/xyg_report.do';
  //     break;
  //   case '/safeTraining/enterpriseLedger/toResumptionTraining':
  //     url = '/company/employee/zgfg_report.do';
  //     break;
  //   case '/safeTraining/enterpriseLedger/staffTraining':
  //     url = '/student/list.do';
  //     break;
  //   //安全培训/统计报表
  //   case '/safeTraining/statisticalReport/departmentTrainingStatistic':
  //     url = '/report/dept_train_report.do';
  //     break;
  //   case '/safeTraining/statisticalReport/workCertTraining':
  //     url = '/report/org_train_report.do';
  //     break;
  //   case '/safeTraining/statisticalReport/subjectTrainingSituation':
  //     url = '/report/category_report.do';
  //     break;
  //   // 特殊作业
  //   //特殊作业/作业管理
  //   case '/specialWork/workManage/workGroupManage':
  //     url = '/tszy/group_list.do';
  //     break;
  //   case '/specialWork/workManage/workManage':
  //     url = '/tszy/list.do';
  //     break;
  //   case '/specialWork/workManage/processManage':
  //     url = '/tszy/flow/template_list.do';
  //     break;
  //   case '/specialWork/workManage/workCalendar':
  //     url = '/tszy/day/list.do';
  //     break;
  //   case '/specialWork/workManage/cameraManage':
  //     url = '/tszy/pub_camera.do';
  //     break;
  //   // 双防双控
  //   //双防双控/记分管理
  //   case '/preventControl/scoreManage/enterpriseScore':
  //     url = '/score/business/company/list.do';
  //     break;
  //   case '/preventControl/scoreManage/enterpriseRectification':
  //     url = '/score/business/company/rectify_list.do';
  //     break;
  //   case '/preventControl/scoreManage/departmentScore':
  //     url = '/score/business/dept/list.do';
  //     break;
  //   //双防双控/企业预警
  //   case '/preventControl/enterpriseExam/inspectionRecord':
  //     url = '/fcbk/exam/list.do';
  //     break;
  //   case '/preventControl/enterpriseExam/workStatistic':
  //     url = '/fcbk/orguserstatistics/list.do';
  //     break;
  //   case '/preventControl/enterpriseExam/enterpriseStatistic':
  //     url = '/fcbk/companystatistics/list.do';
  //     break;
  //   case '/preventControl/enterpriseExam/enterpriseWarning':
  //     url = '/fcbk/companycensus/list.do';
  //     break;
  //   //双防双控/安全责任书
  //   case '/preventControl/safeResponsibility/templateManage':
  //     url = '/duty/template/list.do';
  //     break;
  //   case '/preventControl/safeResponsibility/responsibilityManage':
  //     url = '/duty/contract/list.do';
  //     break;
  //   case '/preventControl/safeResponsibility/mySigning':
  //     url = '/duty/my_template/list.do';
  //     break;
  //   // 系统管理
  //   //系统管理/系统配置
  //   case '/systemManage/systemConfig/baseInformation':
  //     url = '/company/my_company.do';
  //     break;
  //   case '/systemManage/systemConfig/licenseManage':
  //     url = '/company/cert_list.do';
  //     break;
  //   case '/systemManage/systemConfig/trainingHosting':
  //     url = '/company/managed_or_not.do';
  //     break;
  //   //系统管理/档案设置
  //   case '/systemManage/archiveSet/archiveConfig':
  //     url = '/org/to_edit.do';
  //     break;
  //   case '/systemManage/archiveSet/cloudCertApply':
  //     url = '/digital/center/list.do';
  //     break;
  //   //系统管理/记分管理
  //   case '/systemManage/scoreManage/scoreRole':
  //     url = '/score/role/list.do';
  //     break;
  //   case '/systemManage/scoreManage/departmentScoreRule':
  //     url = '/score/rule/group_list.do?objectType=BM';
  //     break;
  //   case '/systemManage/scoreManage/personScoreRule':
  //     url = '/score/rule/group_list.do?objectType=GR';
  //     break;
  //   default:
  //     break;
  // }
  console.log('digui', findObjectInTree(routes, node => node.path === location.pathname))
  // findObjectByPath(routes, location.pathname)
  return iframeBaseUrl + url;
};

function findObjectInTree(tree, condition) {
  if (!tree || !Array.isArray(tree)) {
    return null;
  }
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (condition(node)) {
      return node;
    }
    if (node.routes && node.routes.length > 0) {
      const result = findObjectInTree(node.routes, condition);
      if (result) {
        return result;
      }
    }
  }
  return null;
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export function getAreaIdList(areaId) {
  var array = new Array();
  if (areaId == null || areaId == '')
    return array;
  var areaId1 = areaId.substring(0, 2) + "0000";
  var areaId2 = areaId.substring(0, 4) + "00";
  var areaId3 = areaId.substring(0, 6);
  array.push(areaId1);
  if (areaId2 == areaId1)
    return array;

  array.push(areaId2);
  if (areaId3 == areaId2)
    return array;

  array.push(areaId3);
  if (areaId.length > 6)
    array.push(areaId);

  return array;
}


