import { BasePlugin, registerEditorPlugin } from 'amis-editor';
// import { RendererEventContext, SubRendererInfo, BasicSubRenderInfo, PluginInterface } from 'amis-editor';
import { BasicSubRenderInfo, RendererEventContext, SubRendererInfo } from 'amis-editor';
/**
 * 用于隐藏一些不需要的Editor组件
 * 备注: 如果不知道当前Editor中有哪些预置组件，可以在这里设置一个断点，console.log 看一下 renderers。
 */

// 需要在组件面板中隐藏的组件
const disabledRenderers = [
  'custom', // 自定义代码
  'column-toggler', //自定义显示列
  'wrapper', //"包裹"
  'plain', //"纯文本"
  'pagination', //"分页组件"
  'hbox',
  'breadcrumb', //"面包屑"
  'input-time-range', //"日期范围"
  'input-quarter-range', //"季度范围"
  'tree-select', //"树选择框"
  'static', //"静态展示框"
  'input-quarter', //"季度"
  'input-month-range', //"月份范围"
  'group', //"表单组"
  'formula', //"公式"
  'input-datetime-range', //"日期时间范围"
  'control', //"表单项容器"
  'input-array', //"数组输入框"
  'log', //"日志"
  'collapse', //"折叠器"
  'markdown',
  'code', //"代码高亮"
  'steps', //"步骤条"
  'status', //"状态显示"
  'progress', //"进度展示"
  'timeline', //"时间轴"
  'json', //"JSON展示"
  'images', //"图片集"
  'image', //"图片展示"
  'carousel', //"轮播图"
  'sparkline', //"走势图"
  'chart', //"图表"
  'table2', //"表格2"
  'cards', //"卡片列表"
  'card2',
  'card',
  'avatar', //"头像"
  'mapping', //"映射"
  'list', //"列表"
  'link', //"链接"
  'icon', //"图标"
  'qrcode', //"二维码"
  'iframe', //"iFrame"
  'property', //"属性表"
  'each', //"循环 Each"
  'tasks', //"异步任务"
  'video', //"视频"
  'audio', //"音频"
  'web-component', //
  'table-view', //"表格视图"
  'wizard', //"向导"
  'alert', //"提示"
  'tooltip-wrapper', //"文字提示"
  'anchor-nav', //"锚点导航"
  'nav', //"导航"
  'button-group', //"按钮组"
  'hidden', //"隐藏域"
  'input-sub-form', //"子表单项"
  'location-picker', //"地理位置选择".
  'uuid',
  'input-repeat', //"重复周期选择"
  'input-kv', //"KV 键值对"
  'search-box', //"搜索框"
  'editor', //"代码编辑器"
  'diff-editor', //"Diff编辑器"
  'input-rich-text', //"富文本编辑器"
  'matrix-checkboxes', //"矩阵开关"
  'input-table', //"表格编辑框"
  'input-group', //"输入组合"
  'combo', //"组合输入"
  'fieldset', //"字段集"
  'condition-builder', //"条件组件"
  'input-color', //"颜色框"
  'tabs-transfer', //"组合穿梭器"
  'transfer', //"穿梭器"
  'input-city', //"城市选择"
  'input-rating', //"评分"
  'input-range', //"滑块"
  'switch', //"开关"
  'picker', //"列表选取"
  'button-toolbar', //"按钮工具栏"
  'list-select', //"列表选择"
  'button-group-select', // "按钮点选"
  'input-tag', //"标签选择"
  'input-tree', //"树选择框"
  'input-excel', //"上传 Excel"
  'input-image', //"图片上传"
  'input-file', //"文件上传"
  'input-date-range', //"日期范围"
  'nested-select', //"级联选择器"
  'chained-select', //"链式下拉框"
  'service', //"服务 Service"
  'tabs', //"选项卡"
  'panel', //"面板"
  'form', // 表单
  'collapse-group', //"折叠面板"
  'flex', //"悬浮容器"
  'container', //"自由容器"
  'grid', //"分栏"
  'input-url', //"URL输入框"
  'input-password', //"密码框"
  'input-email',
  'crud', //"增删改查"
  'crud2', //"列表"
  'input-number', // 数字框
  'select', // 下拉框
  'dropdown-button', // 下拉按钮
  'date', // 日期
  'datetime', // 日期展示
  'time', // 时间展示
];

export class ManagerEditorPlugin extends BasePlugin {
  order = 9999;
  buildSubRenderers(
    context: RendererEventContext,
    renderers: Array<SubRendererInfo>,
  ): BasicSubRenderInfo | Array<BasicSubRenderInfo> | void {
    // 更新NPM自定义组件排序和分类
    for (let index = 0, size = renderers.length; index < size; index++) {
      // 判断是否需要隐藏 Editor预置组件
      const pluginRendererName = renderers[index].rendererName;
      if (pluginRendererName && disabledRenderers.indexOf(pluginRendererName) > -1) {
        renderers[index].disabledRendererPlugin = true; // 更新状态
      }
    }
  }
}

registerEditorPlugin(ManagerEditorPlugin);
