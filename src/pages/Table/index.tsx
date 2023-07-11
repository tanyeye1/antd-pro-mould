import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer, ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Dropdown } from 'antd';
import { useRef } from 'react';

export default function Table() {
  const actionRef = useRef<any>();
  const columns: any = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '标题',
      dataIndex: 'title',
      copyable: true,
      ellipsis: true,
      tip: '标题过长会自动收缩',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
    },
    {
      disable: true,
      title: '状态',
      dataIndex: 'state',
      filters: true,
      onFilter: true,
      ellipsis: true,
      valueType: 'select',
      valueEnum: {
        all: { text: '超长'.repeat(2) },
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
          disabled: true,
        },
        processing: {
          text: '解决中',
          status: 'Processing',
        },
      },
    },
    // {
    //   disable: true,
    //   title: '标签',
    //   dataIndex: 'labels',
    //   search: false,
    //   renderFormItem: (_, { defaultRender }) => {
    //     return defaultRender(_);
    //   },
    //   render: (_, record) => (
    //     <Space>
    //       {record.labels.map(({ name, color }) => (
    //         <Tag color={color} key={name}>
    //           {name}
    //         </Tag>
    //       ))}
    //     </Space>
    //   ),
    // },
    {
      title: '创建时间',
      key: 'showTime',
      dataIndex: 'created_at',
      valueType: 'date',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      valueType: 'dateRange',
      hideInTable: true,
      search: {
        transform: (value) => {
          return {
            startTime: value[0],
            endTime: value[1],
          };
        },
        optionRender: () => [<div>???</div>],
      },
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            console.log('record', record);
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
          查看
        </a>,
        <TableDropdown
          key="actionGroup"
          onSelect={() => action?.reload()}
          menus={[
            { key: 'copy', name: '复制' },
            { key: 'delete', name: '删除' },
          ]}
        />,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable
        columns={columns}
        actionRef={actionRef}
        cardBordered
        // request={async (params = {}, sort, filter) => {
        //   console.log(sort, filter);
        //   // await waitTime(2000);
        //   return request<{
        //     data: any;
        //   }>('https://proapi.azurewebsites.net/github/issues', {
        //     params,
        //   });
        // }}
        request={async (params) => {
          console.log('params', params);
          return {
            data: [
              {
                id: 1,
                index: 0,
                title: '11213',
                state: 'open',
              },
            ],
            total: 11,
            success: true,
          };
        }}
        // dataSource={}
        editable={{
          type: 'multiple',
          onChange: (editableKeys, editableRows) => {
            console.log('onChange', editableKeys, editableRows);
          },
          actionRender: (row, config, defaultDom) => {
            console.log('row', row, config, defaultDom);
            return [defaultDom.save, defaultDom.cancel];
          },
          onSave: async (key, record, originRow, newLineConfig) => {
            console.log('save', key, record, originRow, newLineConfig);
          },
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
          onChange(value) {
            console.log('value: ', value);
          },
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
          optionRender: (searchConfig, formProps, dom) => {
            console.log('optionRender', searchConfig, formProps, dom);
            return [...dom];
          },
        }}
        options={{
          setting: {
            listsHeight: 400,
          },
        }}
        form={{
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              };
            }
            return values;
          },
        }}
        pagination={{
          pageSize: 10,
          onChange: (page) => console.log(page),
        }}
        onSubmit={(params) => {
          console.log('params', params);
        }}
        // columnEmptyText={true}
        dateFormatter="string"
        headerTitle="测试表格"
        toolBarRender={(action: any) => {
          console.log('action', action);
          return [
            <Button
              key="button"
              icon={<PlusOutlined />}
              onClick={() => {
                // actionRef.current?.reload();
                action.reload();
              }}
              type="primary"
            >
              新建
            </Button>,
            <Dropdown
              key="menu"
              menu={{
                items: [
                  {
                    label: '1st item',
                    key: '1',
                  },
                  {
                    label: '2nd item',
                    key: '2',
                  },
                  {
                    label: '3rd item',
                    key: '3',
                  },
                ],
              }}
            >
              <Button>
                <EllipsisOutlined />
              </Button>
            </Dropdown>,
          ];
        }}
      />
    </PageContainer>
  );
}
