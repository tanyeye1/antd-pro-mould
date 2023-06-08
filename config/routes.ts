export default [
  { name: '首页', path: '/home', component: './Home' },

  // {
  //   path: '/user',
  //   layout: false,
  //   routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  // },
  // { path: '/company', redirect: '/company/dept/list.do' },
  {
    path: '/login',
    layout: false,
    name: '登录',
    component: './Login',
  },
  {
    path: '/register',
    layout: false,
    name: '注册',
    component: './Register',
  },
  // {
  //   path: '/branch',
  //   name: '列表详情',
  //   component: './OldPage',
  //   parentKeys: ['/organizationalStructure'],
  // },
  {
    name: '组织架构',
    path: '/organizationalStructure',
    // id: '3',
    // parentId: 'ant-design-pro-layout',
    routes: [
      { path: '/organizationalStructure', redirect: '/organizationalStructure/department' },
      {
        // redirect: '/company/dept/list.do',
        name: '部门管理',
        path: '/organizationalStructure/department',
        iframeUrl: '/company/dept/list.do',
        // parentId: '3',
        // id: '4',
        component: './OldPage',
        icon: 'https://img2.baidu.com/it/u=567357414,4240886412&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
      },
      // { name: '分支机构', path: '/organizationalStructure/branch', component: './OldPage', state: '1' },
      // {
      //   path: '/organizationalStructure/branch',
      //   name: '列表详情',
      //   component: './OldPage',
      //   // parentKeys: ['/organizationalStructure'],
      // },
      // {
      //   name: '施工单位',
      //   path: '/organizationalStructure/constructionUnit',
      //   component: './OldPage',
      // },
      // { name: '驻场单位', path: '/organizationalStructure/residentUnit', component: './OldPage' },
      // { name: '岗位管理', path: '/organizationalStructure/postManage', component: './OldPage' },
      // { name: '人员管理', path: '/organizationalStructure/personManage', component: './OldPage' },
      // {
      //   name: '上岗证',
      //   path: '/organizationalStructure/certManage/workLicense',
      //   component: './OldPage',
      // },
    ],
  },
  {
    name: '上岗证管理',
    path: '/workCertManage',
    routes: [
      { path: '/workCertManage', redirect: '/workCertManage/certManage' },

      {
        name: '证书管理',
        path: '/workCertManage/certManage',
        // component: './OldPage',
        routes: [
          {
            path: '/workCertManage/certManage',
            redirect: '/workCertManage/certManage/workLicense',
          },
          {
            name: '上岗证',
            path: '/workCertManage/certManage/workLicense',
            component: './OldPage',
          },
          {
            name: '三级教育卡',
            path: '/workCertManage/certManage/thirdEducationCard',
            component: './OldPage',
          },
          {
            name: '培训合格证明',
            path: '/workCertManage/certManage/trainingCertificate',
            component: './OldPage',
          },
          {
            name: '证书到期一览',
            path: '/workCertManage/certManage/certPreview',
            component: './OldPage',
          },
        ],
      },
    ],
  },
  {
    name: '安全培训',
    path: '/safeTraining',
    routes: [
      { path: '/safeTraining', redirect: '/safeTraining/workCertTraining' },
      {
        name: '上岗证培训',
        path: '/safeTraining/workCertTraining',
        routes: [
          {
            path: '/safeTraining/workCertTraining',
            redirect: '/safeTraining/workCertTraining/mainHead',
          },

          {
            name: '主要负责人',
            path: '/safeTraining/workCertTraining/mainHead',
            component: './OldPage',
          },
          {
            name: '安全管理人员',
            path: '/safeTraining/workCertTraining/safeManagePerson',
            component: './OldPage',
          },
          {
            name: '特种作业人员',
            path: '/safeTraining/workCertTraining/specialWorkPerson',
            component: './OldPage',
          },
          {
            name: '特殊设备作业',
            path: '/safeTraining/workCertTraining/specialDeviceWork',
            component: './OldPage',
          },
        ],
      },
      {
        name: '三级教育',
        path: '/safeTraining/thirdEducation',
        routes: [
          {
            name: '新员工培训',
            path: '/safeTraining/thirdEducation/newEmployeeTraining',
            component: './OldPage',
          },
          {
            name: '转岗培训',
            path: '/safeTraining/thirdEducation/toPostTraining',
            component: './OldPage',
          },
          {
            name: '复工培训',
            path: '/safeTraining/thirdEducation/resumptionTraining',
            component: './OldPage',
          },
        ],
      },
      {
        name: '专题教育',
        path: '/safeTraining/specialEducation',
        routes: [
          {
            name: '专题管理',
            path: '/safeTraining/specialEducation/specialManage',
            component: './OldPage',
          },
          {
            name: '专题学习',
            path: '/safeTraining/specialEducation/specialStudy',
            component: './OldPage',
          },
          {
            name: '学习情况',
            path: '/safeTraining/specialEducation/studySituation',
            component: './OldPage',
          },
        ],
      },
      {
        name: '网校管理',
        path: '/safeTraining/onlineSchoolManage',
        routes: [
          {
            name: '教资管理',
            path: '/safeTraining/onlineSchoolManage/educationalResourceManage',
            component: './OldPage',
          },
          {
            name: '教学计划',
            path: '/safeTraining/onlineSchoolManage/teachPlan',
            component: './OldPage',
          },
          {
            name: '线下课程',
            path: '/safeTraining/onlineSchoolManage/offlineCourse',
            component: './OldPage',
          },
          {
            name: '课件管理',
            path: '/safeTraining/onlineSchoolManage/coursewareManagement',
            component: './OldPage',
          },
          {
            name: '培训大纲',
            path: '/safeTraining/onlineSchoolManage/trainingProgram',
            component: './OldPage',
          },
          {
            name: '教室管理',
            path: '/safeTraining/onlineSchoolManage/classroomManage',
            component: './OldPage',
          },
          {
            name: '科目管理',
            path: '/safeTraining/onlineSchoolManage/accountManage',
            component: './OldPage',
          },
        ],
      },
      {
        name: '考试管理',
        path: '/safeTraining/examManage',
        routes: [
          {
            name: '考试安排',
            path: '/safeTraining/examManage/examArrange',
            component: './OldPage',
          },
          {
            name: '试题编辑',
            path: '/safeTraining/examManage/testQuestionEdit',
            component: './OldPage',
          },
          {
            name: '组卷策略',
            path: '/safeTraining/examManage/paperFormatStrategy',
            component: './OldPage',
          },
          { name: '考卷查看', path: '/safeTraining/examManage/examView', component: './OldPage' },
          {
            name: '题库管理',
            path: '/safeTraining/examManage/questionBankManage',
            component: './OldPage',
          },
        ],
      },
      {
        name: '档案管理',
        path: '/safeTraining/archiveManage',
        routes: [
          {
            name: '档案查询',
            path: '/safeTraining/archiveManage/archiveQuery',
            component: './OldPage',
          },
          {
            name: '学员档案',
            path: '/safeTraining/archiveManage/studentArchive',
            component: './OldPage',
          },
          {
            name: '班级档案',
            path: '/safeTraining/archiveManage/classArchive',
            component: './OldPage',
          },
        ],
      },
      {
        name: '企业台账',
        path: '/safeTraining/enterpriseLedger',
        routes: [
          {
            name: '基本情况',
            path: '/safeTraining/enterpriseLedger/baseInformation',
            component: './OldPage',
          },
          {
            name: '主要负责人',
            path: '/safeTraining/enterpriseLedger/mainHead',
            component: './OldPage',
          },
          {
            name: '安全管理人员',
            path: '/safeTraining/enterpriseLedger/safeManagePerson',
            component: './OldPage',
          },
          {
            name: '特种作业人员',
            path: '/safeTraining/enterpriseLedger/specialWorkPerson',
            component: './OldPage',
          },
          {
            name: '特种设备作业人员',
            path: '/safeTraining/enterpriseLedger/specialDeviceWorkPerson',
            component: './OldPage',
          },
          {
            name: '新员工培训',
            path: '/safeTraining/enterpriseLedger/newEmployeeTraining',
            component: './OldPage',
          },
          {
            name: '转岗复工培训',
            path: '/safeTraining/enterpriseLedger/toResumptionTraining',
            component: './OldPage',
          },
          {
            name: '全员培训',
            path: '/safeTraining/enterpriseLedger/staffTraining',
            component: './OldPage',
          },
        ],
      },
      {
        name: '统计报表',
        path: '/safeTraining/statisticalReport',
        routes: [
          {
            name: '部门培训统计',
            path: '/safeTraining/statisticalReport/departmentTrainingStatistic',
            component: './OldPage',
          },
          {
            name: '上岗证培训',
            path: '/safeTraining/statisticalReport/workCertTraining',
            component: './OldPage',
          },
          {
            name: '科目培训情况',
            path: '/safeTraining/statisticalReport/subjectTrainingSituation',
            component: './OldPage',
          },
        ],
      },
    ],
  },
  {
    name: '特殊作业',
    path: '/specialWork',
    routes: [
      {
        name: '作业管理',
        path: '/specialWork/workManage',
        // component: './OldPage',
        routes: [
          // { path: '/', redirect: '/cert/sgz/list.do' },
          {
            name: '作业组管理',
            path: '/specialWork/workManage/workGroupManage',
            component: './OldPage',
          },
          {
            name: '作业管理',
            path: '/specialWork/workManage/workManage',
            component: './OldPage',
          },
          {
            name: '流程管理',
            path: '/specialWork/workManage/processManage',
            component: './OldPage',
          },
          {
            name: '工作日历',
            path: '/specialWork/workManage/workCalendar',
            component: './OldPage',
          },
          {
            name: '摄像头管理',
            path: '/specialWork/workManage/cameraManage',
            component: './OldPage',
          },
        ],
      },
    ],
  },
  {
    name: '双防双控',
    path: '/preventControl',
    routes: [
      {
        name: '记分管理',
        path: '/preventControl/scoreManage',
        // component: './OldPage',
        routes: [
          // { path: '/', redirect: '/cert/sgz/list.do' },
          {
            name: '企业记分',
            path: '/preventControl/scoreManage/enterpriseScore',
            component: './OldPage',
          },
          {
            name: '企业整改',
            path: '/preventControl/scoreManage/enterpriseRectification',
            component: './OldPage',
          },
          {
            name: '部门记分',
            path: '/preventControl/scoreManage/departmentScore',
            component: './OldPage',
          },
        ],
      },
      {
        name: '逢企必考',
        path: '/preventControl/enterpriseExam',
        // component: './OldPage',
        routes: [
          // { path: '/', redirect: '/cert/sgz/list.do' },
          {
            name: '巡查记录',
            path: '/preventControl/enterpriseExam/inspectionRecord',
            component: './OldPage',
          },
          {
            name: '工作统计',
            path: '/preventControl/enterpriseExam/workStatistic',
            component: './OldPage',
          },
          {
            name: '企业统计',
            path: '/preventControl/enterpriseExam/enterpriseStatistic',
            component: './OldPage',
          },
          {
            name: '企业预警',
            path: '/preventControl/enterpriseExam/enterpriseWarning',
            component: './OldPage',
          },
        ],
      },
      {
        name: '安全责任书',
        path: '/preventControl/safeResponsibility',
        // component: './OldPage',
        routes: [
          // { path: '/', redirect: '/cert/sgz/list.do' },
          {
            name: '模板管理',
            path: '/preventControl/safeResponsibility/templateManage',
            component: './OldPage',
          },
          {
            name: '责任书管理',
            path: '/preventControl/safeResponsibility/responsibilityManage',
            component: './OldPage',
          },
          {
            name: '我发起的签约',
            path: '/preventControl/safeResponsibility/mySigning',
            component: './OldPage',
          },
        ],
      },
    ],
  },
  {
    name: '系统管理',
    path: '/systemManage',
    routes: [
      {
        name: '系统配置',
        path: '/systemManage/systemConfig',
        // component: './OldPage',
        routes: [
          // { path: '/', redirect: '/cert/sgz/list.do' },
          {
            name: '基本资料',
            path: '/systemManage/systemConfig/baseInformation',
            component: './OldPage',
          },
          {
            name: '证照管理',
            path: '/systemManage/systemConfig/licenseManage',
            component: './OldPage',
          },
          {
            name: '培训托管',
            path: '/systemManage/systemConfig/trainingHosting',
            component: './OldPage',
          },
        ],
      },
      {
        name: '档案设置',
        path: '/systemManage/archiveSet',
        // component: './OldPage',
        routes: [
          // { path: '/', redirect: '/cert/sgz/list.do' },
          {
            name: '档案配置',
            path: '/systemManage/archiveSet/archiveConfig',
            component: './OldPage',
          },
          {
            name: '云证书申领',
            path: '/systemManage/archiveSet/cloudCertApply',
            component: './OldPage',
          },
        ],
      },
      {
        name: '记分管理',
        path: '/systemManage/scoreManage',
        // component: './OldPage',
        routes: [
          // { path: '/', redirect: '/cert/sgz/list.do' },
          {
            name: '记分角色',
            path: '/systemManage/scoreManage/scoreRole',
            component: './OldPage',
          },
          {
            name: '部门记分规则',
            path: '/systemManage/scoreManage/departmentScoreRule',
            component: './OldPage',
          },
          {
            name: '个人记分规则',
            path: '/systemManage/scoreManage/personScoreRule',
            component: './OldPage',
          },
        ],
      },
    ],
  },

  { path: '/welcome', icon: 'smile', component: './Welcome' },
  // {
  //   path: '/admin',
  //   name: '管理页',
  //   // access: 'canAdmin',
  //   routes: [
  //     { path: '/admin', redirect: '/admin/sub-page' },

  //     {
  //       path: '/admin/sub-page',
  //       name: '二级管理页',
  //       // component: './Admin',
  //       routes: [
  //         { path: '/admin/sub-page', redirect: '/admin/sub-page/test' },
  //         { name: '三级管理页', path: '/admin/sub-page/test', component: './Admin' },
  //       ],
  //     },
  //   ],
  // },
  // { name: '查询表格', path: '/list', component: './TableList' },
  { path: '/', redirect: '/login' },
  { path: '*', layout: false, component: './404' },
];
