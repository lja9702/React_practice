import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';    //만든 컴포넌트를 불러옴
import * as serviceWorker from './serviceWorker';

ReactDOM.render(    //리액트 컴포넌트를 보여주기 위한 함수
    //첫번째 파라미터: 렌더링할 결과물, 두번째 파라미터: 컴포넌트를 어떤 DOM에 그릴지 정해줌
    //id가 root인 DOM을 찾아서 그림
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
