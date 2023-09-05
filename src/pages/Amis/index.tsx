import { render as renderAmis } from 'amis';
import { Editor } from 'amis-editor';

import 'amis/lib/themes/default.css';
// import 'amis/lib/helper.css'
// import 'amis/sdk/iconfont.css'
import 'amis-editor-core/lib/style.css';
import { useState } from 'react';
import './DisabledEditorPlugin'; // 用于隐藏一些不需要的Editor预置组件

// import 'amis-ui/lib/themes/cxd.css'
export default function index() {
  const [mobile, setMobile] = useState(false);
  const [preview, setPreview] = useState(false);
  const defaultSchema: any = {
    type: 'page',
    body: '',
    regions: ['body'],
    asideResizor: false,
  };
  const [schema, setSchema] = useState(defaultSchema);
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {renderAmis({
        type: 'form',
        mode: 'inline',
        title: '',
        className: 'p-t p-l p-r',
        wrapWithPanel: false,
        body: [
          {
            type: 'tpl',
            tpl: '表单设计器',
          },
          {
            type: 'switch',
            option: '预览',
            name: 'preview',
            className: 'm-l',
            onChange: function (v: any) {
              setPreview(v);
            },
          },
          {
            type: 'switch',
            option: '移动端',
            name: 'mobile',
            onChange: function (v: any) {
              setMobile(v);
            },
          },
          {
            type: 'button',
            label: '保存',
            level: 'primary',
            onClick: function () {
              // onSave()
            },
          },
          {
            type: 'button',
            label: '重置',
            level: 'primary',
            onClick: function () {
              // clearJSON()
              setSchema(defaultSchema);
            },
          },
          {
            type: 'button',
            label: '获取',
            level: 'primary',
            onClick: function () {
              // getEfDetail()
              // onGetJson()
            },
          },
        ],
      })}
      <Editor
        value={schema}
        theme={'cxd'}
        // onSave={() => {
        //   console.log('onSave')
        // }}
        preview={preview}
        isMobile={mobile}
        onChange={(value) => {
          setSchema(value);
        }}
      />
    </div>
  );
}
