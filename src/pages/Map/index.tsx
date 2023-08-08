import AMapLoader from '@amap/amap-jsapi-loader';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import { useEffect, useState } from 'react';

export default function index() {
  const [AMap, setAMap] = useState<any>(false);
  const [map, setMap] = useState<any>();
  const [infoWindow, setInfoWindow] = useState<any>();
  useEffect(() => {
    let win: any = window;
    win._AMapSecurityConfig = {
      securityJsCode: '8947f3d42d3715f9dd014247f63ab165',
    };
    // 初始化高德地图
    AMapLoader.load({
      key: 'f215f24406e8c4bcc40160150bb97c04', // 替换成你的高德API Key
      version: '2.0', // 高德API版本号

      plugins: ['AMap.Driving', 'AMap.PolygonEditor'], // 如果需要使用地图的插件，可以在这里添加插件的名称，例如 ['AMap.Geocoder']
    }).then((AMap) => {
      // 在这里可以使用 AMap 对象进行地图相关的操作
      const map = new AMap.Map('map-container', {
        center: [116.475311, 39.999749],
        zoom: 16.8,
        resizeEnable: true,
      });
      console.log('AMap', AMap);
      setMap(map);
      setAMap(AMap);
      let toolbar;
      AMap.plugin('AMap.ToolBar', function () {
        // 异步加载插件
        toolbar = new AMap.ToolBar(); // 缩放工具条实例化
        map.addControl(toolbar);
      });
      const position = new AMap.LngLat(116.397428, 39.90923); // Marker经纬度
      const marker = new AMap.Marker({
        position: position,
        // content: '测试', // 将 html 传给 content
        offset: new AMap.Pixel(-13, -30), // 以 icon 的 [center bottom] 为原点
      });
      map.add(marker);
      const pathArr = [
        [
          [121.7789, 31.3102],
          [121.7279, 31.3548],
          [121.5723, 31.4361],
          [121.5093, 31.4898],
          [121.5624, 31.4864],
          [121.5856, 31.4547],
          [121.7694, 31.3907],
          [121.796, 31.3456],
          [121.7789, 31.3102],
        ],
      ];
      const polygon = new AMap.Polygon({
        path: pathArr,
        fillColor: '#ccebc5', // 多边形填充颜色
        strokeOpacity: 1, // 线条透明度
        fillOpacity: 0.5, //填充透明度
        strokeColor: '#2b8cbe', // 线条颜色
        strokeWeight: 1, //线条宽度
        strokeStyle: 'dashed', // 线样式
        strokeDasharray: [5, 5], //轮廓的虚线和间隙的样式
      });
      polygon.on('mouseover', () => {
        // 鼠标移入更改样式
        polygon.setOptions({
          fillOpacity: 0.7,
          fillColor: '#7bccc4',
        });
      });
      polygon.on('mouseout', () => {
        // 鼠标移出恢复样式
        polygon.setOptions({
          fillOpacity: 0.5,
          fillColor: '#ccebc5',
        });
      });
      map.add(polygon);
      const points = [
        { keyword: '北京市地震局（公交站）', city: '北京' },
        { keyword: '亦庄文化园（地铁站）', city: '北京' },
      ];
      const driving = new AMap.Driving({
        map: map,
        panel: 'panel',
      });
      const startLngLat = [116.379028, 39.865042];
      const endLngLat = [116.427281, 39.903719];
      // driving.search(startLngLat, endLngLat, function (status, result) {
      //   // 未出错时，result即是对应的路线规划方案
      //   console.log('driving', status, result);
      // });
      let infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
      setInfoWindow(infoWindow);
      map.on('click', function (ev) {
        console.log('click', ev);
        const { lnglat } = ev;
        let marker = new AMap.Marker({
          position: new AMap.LngLat(lnglat.lng, lnglat.lat), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          // content: `经度${lnglat.lng}纬度${lnglat.lng}`
        });
        (marker.content = `经度${lnglat.lng}纬度${lnglat.lng}`), map.add(marker);
        // marker.setMap(map);
        marker.on('click', markerClick);
      });
      function markerClick(e) {
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
      }
      let path2 = [
        [116.474595, 40.001321],
        [116.473526, 39.999865],
        [116.476284, 40.000917],
      ];
      let polygon2 = new AMap.Polygon({
        path: path2,
      });
      let polyEditor = new AMap.PolygonEditor(map);
      polygon2.on('dblclick', () => {
        console.log('dblclick');
        polyEditor.setTarget(polygon2);
        polyEditor.open();
      });
      polygon2.on('rightclick', () => {
        console.log('rightclick');
        polyEditor.close();
      });
      polyEditor.on('end', ({ target }) => {
        console.log('end', target, target.getPath());
      });
      // polyEditor.addAdsorbPolygons([polygon2]);
      map.add([polygon2]);
    });
  }, []);
  const onClick = () => {
    // let route;
    // //基本地图加载
    // //绘制初始路径
    // let path: any = [];
    // path.push([116.303843, 39.983412]);
    // path.push([116.321354, 39.896436]);
    // path.push([116.407012, 39.992093]);
    // map.plugin("AMap.DragRoute", function() {
    //   console.log('???')
    //     route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类
    //     route.search(); //查询导航路径并开启拖拽导航
    // });
    let driving = new AMap.Driving({
      map: map,
      // panel: 'panel',
    });
    // 根据起终点经纬度规划驾车导航路线
    driving.search(
      new AMap.LngLat(116.379028, 39.865042),
      new AMap.LngLat(116.427281, 39.903719),
      function (status, result) {
        console.log('?', status, result);
        // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
        if (status === 'complete') {
        } else {
        }
      },
    );
  };
  return (
    <PageContainer>
      <Space>
        <Button onClick={onClick}>点击</Button>
      </Space>
      <div id="map-container" style={{ width: '100%', height: '400px', marginTop: 10 }}></div>
      <div id="panel"></div>
    </PageContainer>
  );
}
