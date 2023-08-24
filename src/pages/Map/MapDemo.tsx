import AMapLoader from '@amap/amap-jsapi-loader';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import { useEffect, useState } from 'react';
import echarts from 'echarts';

export default function MapDemo() {
  const [map, setMap] = useState<any>();
  const [polyEditor, setPolyEditor] = useState<any>();
  const [AMap, setAMap] = useState<any>();
  useEffect(() => {
    let win: any = window;
    // win._AMapSecurityConfig = {
    //   securityJsCode: '8947f3d42d3715f9dd014247f63ab165',
    // };
    // 初始化高德地图
    AMapLoader.load({
      key: 'f215f24406e8c4bcc40160150bb97c04', // 替换成你的高德API Key
      version: '2.0', // 高德API版本号
      plugins: ['AMap.Driving', 'AMap.PolygonEditor'], // 如果需要使用地图的插件，可以在这里添加插件的名称，例如 ['AMap.Geocoder']
    }).then((AMap) => {
      const map = new AMap.Map('map-container', {
        center: [116.475311, 39.999749],
        zoom: 16.8,
        resizeEnable: true,
        showIndoorMap: true, //显示地图自带的室内地图图层
      });
      // B0FFFLIIZJ
      let polyEditor = new AMap.PolygonEditor(map);
      polyEditor.on('end', ({ target }) => {
        console.log(
          'polyEditor',
          target,
          target.getPath(),
          target.getPath().map((v) => [v.lng, v.lat]),
        );
        target.on('dblclick', () => {
          polyEditor.setTarget(target);
          polyEditor.open();
        });
      });
      map.on('click', (e) => {
        console.log('click', e);
      });
      map.on('indoor_create', function () {
        map.indoorMap.showIndoorMap('B000A835R8', 1); // 显示指定 POI 室内信息
      });
      setPolyEditor(polyEditor);
      setMap(map);
      setAMap(AMap);
    });
  }, []);
  const clear = () => {
    console.log('map', map);
    polyEditor.close();
    map.clearMap();
  };
  const create = () => {
    polyEditor.close();
    polyEditor.setTarget();
    polyEditor.open();
  };
  const line = () => {
    // console.log('getPolygon', polyEditor.getTarget());
    // polyEditor.getTarget()
    var marker,
      lineArr = [
        [116.478935, 39.997761],
        [116.478939, 39.997825],
        [116.478912, 39.998549],
        [116.478912, 39.998549],
        [116.478998, 39.998555],
        [116.478998, 39.998555],
        [116.479282, 39.99856],
        [116.479658, 39.998528],
        [116.480151, 39.998453],
        [116.480784, 39.998302],
        [116.480784, 39.998302],
        [116.481149, 39.998184],
        [116.481573, 39.997997],
        [116.481863, 39.997846],
        [116.482072, 39.997718],
        [116.482362, 39.997718],
        [116.483633, 39.998935],
        [116.48367, 39.998968],
        [116.484648, 39.999861],
      ];
    let polyline = new AMap.Polyline({
      map: map,
      path: lineArr,
      showDir: true,
      strokeColor: '#28F', //线颜色
      // strokeOpacity: 1,     //线透明度
      strokeWeight: 6, //线宽
      // strokeStyle: "solid"  //线样式
    });
  };
  const openIndoor = () => {
    map.on('indoor_create', function () {
      map.indoorMap.showIndoorMap('B0FFFLIIZJ', 1); // 显示指定 POI 室内信息
    });
  };
  return (
    <PageContainer>
      <div id="myChart" style={{ width: '100%', height: '400px' }}></div>
      <Space>
        <Button onClick={clear}>清除所有覆盖物</Button>
        <Button onClick={create}>新建多边形</Button>
        <Button
          onClick={() => {
            let path = [
              [116.47565, 40.000618],
              [116.474245, 39.998852],
              [116.478928, 39.999239],
            ];
            let polygon = new AMap.Polygon({ path });
            polyEditor.addAdsorbPolygons(polygon);
            polyEditor.setTarget(polygon);
            polyEditor.open();
            map.add([polygon]);
          }}
        >
          开始编辑
        </Button>

        <Button onClick={() => polyEditor.close()}>结束编辑</Button>

        <Button onClick={line}>轨迹</Button>
        <Button onClick={openIndoor}>室内地图</Button>
      </Space>
      <div id="map-container" style={{ width: '100%', height: '400px', marginTop: 10 }}></div>
    </PageContainer>
  );
}
