import { PageContainer } from '@ant-design/pro-components';
import * as echarts from 'echarts';
// import { useEffect, useRef } from 'react';

import { Button } from 'antd';
import type FlvJs from 'flv.js';
import flvPlayer from 'flv.js';
import { useEffect, useRef, useState, type FC, type VideoHTMLAttributes } from 'react';
const { createPlayer, isSupported } = flvPlayer;
interface IFlvPlayerProps extends VideoHTMLAttributes<HTMLVideoElement> {
  type?: FlvJs.MediaDataSource['type'];
  url: FlvJs.MediaDataSource['url'];
  mediaDataSource?: Omit<FlvJs.MediaDataSource, 'type' | 'url'>;
  config?: FlvJs.Config;
}
const FlvPlayer: FC<IFlvPlayerProps> = ({
  type = 'flv',
  url,
  mediaDataSource,
  config = {
    // enableWorker: true,
    // enableStashBuffer: false,
    // stashInitialSize: 128,
  },
  ...restProps
}) => {
  const videoElementRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (isSupported() && videoElementRef.current && url) {
      const player = createPlayer({ type, url, ...mediaDataSource }, config);
      player.attachMediaElement(videoElementRef.current);
      player.load();
      player.play();
    }
  }, [config, mediaDataSource, type, url]);
  console.log('url1', url);
  return <video {...restProps} ref={videoElementRef} muted={true}></video>;
};
export default function index() {
  const chartRef = useRef(null);
  const chartRef1 = useRef(null);
  const [url, setUrl] = useState('');

  useEffect(() => {
    console.log('echarts', echarts);

    const myChart = echarts.init(chartRef.current);
    setUrl(
      'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv',
    );
    const option = {
      title: {
        // text: 'World Population'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: 'category',
        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
      },
      series: [
        {
          name: '2011',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230],
        },
      ],
    };

    // 使用配置绘制图表
    myChart.setOption(option);
    const myChart1 = echarts.init(chartRef1.current);

    const option1 = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '2015', '2016', '2017'],
          ['Matcha Latte', 43.3, 85.8, 93.7],
          ['Milk Tea', 83.1, 73.4, 55.1],
          ['Cheese Cocoa', 86.4, 65.2, 82.5],
          ['Walnut Brownie', 72.4, 53.9, 39.1],
        ],
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
    };
    myChart1.setOption(option1);
  }, []);
  const config = {
    sourceUrl: 'rtmp://123.157.66.34:1935/live/23063:0:0:0:0:1:SUB:TCP:1', // 替换为实际的视频 URL
    width: '100%',
    height: '500px',
  };
  const options = {
    source: 'https://media.aionroad.cn:8010/video/024702621667-1',
    autoplay: true,
    width: '100%',
    height: '100%',
    isLive: true,
    rePlay: true,
    playsinline: true,
    preload: true,
    controlBarVisibility: 'hover',
    useH5Prism: true,
    useFlashPrism: false,
    playauth: '',
    disableSeek: false,
    defaultDefinition: 'HD',
    x5_orientation: 2,
    x5_video_position: 'top',
    x5_type: 'h5',
    x5_fullscreen: false,
    rtmpBufferTime: 0,
    showBuffer: 0,
  };

  return (
    <PageContainer>
      <Button
        onClick={() => {
          setUrl(
            'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv',
          );
        }}
      >
        播放
      </Button>
      {<FlvPlayer url={url} />}
      {/* <Aliplayer config={options}/> */}
      <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
      <div ref={chartRef1} style={{ width: '100%', height: '400px' }}></div>
    </PageContainer>
  );
}
