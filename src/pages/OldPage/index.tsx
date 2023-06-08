import { history } from '@umijs/max';
import { useLocation, useParams } from 'react-router-dom';
import './index.less';
import { getIframeUrl } from '@/util';
import { useEffect } from 'react';
export default function OldPage() {
  const { location } = history;
  console.log('oldPage', location, history);
  const prarms = useParams();
  console.log('params', prarms);

  const { search, pathname } = window.location;
  console.log('search', search);
  const location1 = useLocation();
  console.log('location1', location1);
  // useEffect(() => {
  //   const iframe = document.getElementById('myIframe');
    
  //   iframe.onload = function() {
  //     // var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  //     // console.log('iframe', iframeDocument)
  //     // var header = iframeDocument.getElementById('header');
  //     // if (header) {
  //     //   header.style.display = 'none';
  //     // }
  //   };
  // }, [])
  return (
    <div className="oldPage">
      {location.pathname} {search}
      <div >test: {getIframeUrl()}</div>
      <img style={{width: 100, height: 100}} src="https://img2.baidu.com/it/u=567357414,4240886412&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="" />
      {/* <iframe
        // scrolling="no"
        frameBorder="0"
        id='myIframe'
        src={getIframeUrl()}
        style={{ width: '100%', height: '100%' }}
      /> */}
    </div>
  );
}
