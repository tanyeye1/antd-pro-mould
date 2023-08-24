import fengmap from 'fengmap/build/fengmap.map.min'; //核心包
import 'fengmap/build/fengmap.analyser.min'; //分析器包
import 'fengmap/build/fengmap.effect.min'; //特效包
import 'fengmap/build/fengmap.plugin.debug.min'; //性能监控包
import 'fengmap/build/fengmap.plugin.draw.min'; //绘图包
import 'fengmap/build/fengmap.plugin.export.min'; //打印/出图包
import 'fengmap/build/fengmap.plugin.layers.min'; //附加图层包
import 'fengmap/build/fengmap.plugin.location.min'; //位置服务相关功能包
import 'fengmap/build/fengmap.plugin.markers.min'; //特殊标注包
import 'fengmap/build/fengmap.plugin.navi.min'; //导航包
import 'fengmap/build/fengmap.plugin.ui.min'; //UI控件包

import FengMapDemo from '@/components/FengMapDemo';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import { useEffect, useState } from 'react';
export default function Fengmap() {
  const [mapdraw, setMapdraw] = useState<any>();
  const [map, setMap] = useState<any>();
  const [mapID, setMapID] = useState('');
  let activeBtn;
  let drawType = [
    fengmap.FMType.POLYGON_MARKER,
    fengmap.FMType.IMAGE_MARKER,
    fengmap.FMType.LINE_MARKER,
  ];
  useEffect(() => {
    let map;

    let options = {
      appName: '蜂鸟研发SDK_2_0',
      key: '57c7f309aca507497d028a9c00207cf8',
      mapID: '1514920297309614082',
      // themeID: '1580453922356207618',
      level: 5,
      mapZoom: 19,
      container: document.getElementById('map'),
      viewMode: fengmap.FMViewMode.MODE_2D,
      //如有精模文件可自定义配置精模数据资源路径
    };
    if (document.getElementById('map')) {
      map = new fengmap.FMMap(options);
      setMap(map);
      map.on('loaded', () => {
        console.log('楼层等级', map.getLevel());
        
        let polygonOption = {
          // x: 12619625,
          // y: 2621871,
          // height: 1,
          points: [
            {
              x: 11791490.2713,
              y: 3418835.8876,
            },
            {
              x: 11791525.4884,
              y: 3418846.0349,
            },
            {
              x: 11791515.63955,
              y: 3418806.93795,
            },
          ],
        };

        let level = map.getLevel();
        let floor = map.getFloor(level);
        let polygon = new fengmap.FMPolygonMarker(polygonOption);
        console.log('getBound', polygon);
        polygon.addTo(floor);
        let mapdraw = new fengmap.FMMapEditor(map);
        // 绘制多边形样式
        mapdraw.PolygonStyle = {
          color: '#00F5FF',
          borderWidth: 5,
          borderColor: '#CD0000',
          opacity: 0.5,
          height: 1,
        };
        mapdraw.DrawTool = 'edit';
        mapdraw.edit(polygon);
        mapdraw.on('editend', function (e) {
          console.log('编辑完成事件', e);
        });
        mapdraw.on('drawend', function (e) {
          console.log('绘制完成事件', e);
          e.object.deleteMarker();
        });
        // 绘制中事件监听
        setMapdraw(mapdraw);
        map.on('click', (e) => {
          console.log('e', e.targets);
          polygon.remove()
        });
      });
    }
  }, []);
  const drawOpetion = (type) => {
    // 设置类型
    mapdraw.DrawTool = type;
    // 更改btn选中
    // if (activeBtn) {
    //     let activeDom = document.getElementById(activeBtn);
    //     activeDom.classList.remove('layui-btn-primary');
    // }
    // let dom = document.getElementById(type);
    // dom.classList.add('layui-btn-primary');
    // activeBtn = type;
  };
  function getMarker(targets) {
    var result = null;
    if (targets.length > 0) {
      result = targets.find(function (item) {
        return drawType.indexOf(item.type) !== -1;
      });
    }
    return result;
  }
  return (
    <PageContainer>
      <Space>
        <Button onClick={() => drawOpetion('polygon')}>编辑</Button>
        <Button
          onClick={() => {
            drawOpetion('del');
          }}
        >
          删除
        </Button>

        <Button
          onClick={() => {
            console.log('???', map);
            // setMapID('1514920297309614082');
            map.dispose()
          }}
        >
          点击
        </Button>
      </Space>
      <div id="map" style={{ height: 400, width: 500, position: 'relative' }}></div>
      {/* <MapDemo key='57c7f309aca507497d028a9c00207cf8' mapID='1321274646113083394' /> */}
      <FengMapDemo mapKey="57c7f309aca507497d028a9c00207cf8" mapID={mapID} />
    </PageContainer>
  );
}

// const MapDemo = (props?) => {
//   const [map, setMap] = useState<any>()
//   useEffect(() => {
//     let map;
//     let options = {
//       appName: '蜂鸟研发SDK_2_0',
//       key: props.key,
//       mapID: props.mapID,
//       // themeID: '1580453922356207618',
//       level: 5,
//       mapZoom: 19,
//       container: document.getElementById('fengmap'),
//       viewMode: fengmap.FMViewMode.MODE_2D,
//       //如有精模文件可自定义配置精模数据资源路径
//     };
//     map = new fengmap.FMMap(options);
//     setMap(map)
//   }, [])
//   return (
//     <div id="fengmap" style={{ height: 400, width: 500, position: 'relative' }}></div>
//   )
// }
