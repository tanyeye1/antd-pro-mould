import Footer from '@/components/Footer';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import './app.css';
import { AvatarDropdown } from './components/RightContent/AvatarDropdown';
import { errorConfig } from './requestErrorConfig';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  console.log('first');

  return {
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: any = ({ initialState, setInitialState }) => {
  return {
    menu: {
      params: {},
      request: (params: any, defaultMenuData: any) => {
        console.log('params', params, defaultMenuData);
        // return defaultMenuData
        return defaultMenuData;
      },
    },
    // actionsRender: () => [<SelectLang key="SelectLang" />],
    avatarProps: {
      // src: initialState?.currentUser?.avatar,
      title: '???',
      render: (_, avatarChildren) => {
        return (
          <AvatarDropdown>
            <img
              alt=""
              className="info-logo"
              src="https://www.zjaqsc.com/res/images/avatars/avatar4.png"
            />
          </AvatarDropdown>
        );
      },
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      const { search, pathname } = window.location;

      console.log('location', location, history);
    },
    onSelect: (e) => {
      console.log('e', e);
    },
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          <SettingDrawer
            disableUrlParams
            enableDarkTheme
            settings={initialState?.settings}
            onSettingChange={(settings) => {
              setInitialState((preInitialState) => ({
                ...preInitialState,
                settings,
              }));
            }}
          />
        </>
      );
    },
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  ...errorConfig,
  // URL:
};
