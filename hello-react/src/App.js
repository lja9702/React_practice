import React, {Component} from "react";
import Counter from "./Counter";
import MyName from "./MyName";

class App extends Component {
  render() {
    return (
        <Counter></Counter>
        // <MyName name="리액트"></MyName>
    );
  }
}

export default App;
// import React from 'react'; //React 불러오기
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App; //작성한 컴포넌트를 다른 곳에서 불러와서 사용할 수 있도록 내보내줌
