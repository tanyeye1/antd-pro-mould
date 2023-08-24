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
import 'fengmap/build/fengmap.plugin.ui.min.js'; 
import 'fengmap/build/toolBarStyle.css'; 


import React, { useEffect, useState } from 'react'

export default function FengMapDemo(props?) {
  const [map, setMap] = useState<any>()
  const [mapdraw, setMapdraw] = useState<any>()
  // let scrollFloorControl
  const [scrollFloorControl, setScrollFloorControl] = useState<any>()
  useEffect(() => {
    let map;
    console.log('???', props)
    let options = {
      appName: '蜂鸟研发SDK_2_0',
      key: '57c7f309aca507497d028a9c00207cf8',
      mapID: props.mapID || '1321274646113083394',
      themeID: '1580453922356207618',
      level: 3,
      mapZoom: 19,
      container: document.getElementById('fengmap'),
      // viewMode: fengmap.FMViewMode.MODE_2D,
      //如有精模文件可自定义配置精模数据资源路径
    };
    map = new fengmap.FMMap(options);
    setMap(map)
    console.log('scrollFloorControl', scrollFloorControl)
    if(scrollFloorControl) {
      scrollFloorControl.remove()
    }
    map.on('loaded', () => {
      console.log('楼层等级', map.getLevel())
      let mapdraw = new fengmap.FMMapEditor(map);
        // 绘制多边形样式
        mapdraw.PolygonStyle = {
          color: '#00F5FF',
          borderWidth: 5,
          borderColor: '#CD0000',
          opacity: 0.5,
          height: 1,
        };
        mapdraw.on('editend', function (e) {
          console.log('编辑完成事件', e);
        });
        mapdraw.on('drawend', function (e) {
          console.log('绘制完成事件', e);
          e.object.deleteMarker()
        });
        var zoomBar = new fengmap.FMZoomBar({
            position: fengmap.FMControlPosition.LEFT_BOTTOM,
            offset: {
              x: 10,
              y: -20
            },
        });
       zoomBar.addTo(map);
       var scrollFloorCtlOpt = {
        position: fengmap.FMControlPosition.RIGHT_TOP,
        floorButtonCount: 3,
        offset: {
            x: -20,
            y: 80
        },
        viewModeControl: true,
        floorModeControl: true,
        needAllLayerBtn: true
      };
      let scrollFloorControl = new fengmap.FMToolbar(scrollFloorCtlOpt);
      setScrollFloorControl(scrollFloorControl)
      scrollFloorControl.addTo(map)
        // 绘制中事件监听
        setMapdraw(mapdraw)
    })
    // map.on('update', () => {
    //   console.log('update')
    // })
  }, [props.mapID])
  return (
    <>
      {/* <div className="toolBarDiv"></div> */}
      <div id="fengmap" style={{ height: 400, position: 'relative' }}></div>
    </>
    
  )
}
