import React, {Component} from 'react';
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component{
    id = 2
    state = {
        information: [
            {
                id: 0,
                name: '김민준',
                phone: '010-0000-0000'
            },
            {
                id: 1,
                name: '홍길동',
                phone: '010-0000-0001'
            }
        ]
    }
    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }
    handleCreate = (data) => {
        const {information} = this.state;
        this.setState({
            information: information.concat({id: this.id++, ...data})
        });
    }

    handleRemove = (id) => {
        const {information} = this.state;
        this.setState({
            information: information.filter(info => info.id !== id)
        });
    }

    handleUpdate = (id, data) => {
        const {information} = this.state;
        this.setState({
            information: information.map(
                info => id === info.id
                    ? {...info, ...data}
                    : info
            )
        });
    }

    render() {
        const {information, keyword} = this.state;
        const filteredList = information.filter(
            info => info.name.indexOf(keyword) !== -1
        );
        return (
            <div>
                <PhoneForm
                    onCreate = {this.handleCreate}
                />
                <p>
                    <input
                        placeholder="검색 할 이름을 입력하세요.."
                        onChange={this.handleChange}
                        value={keyword}
                    />
                </p>
                <hr />
                <PhoneInfoList
                    data={filteredList}
                    onRemove = {this.handleRemove}
                    onUpdate = {this.handleUpdate}
                />
            </div>
        );
    }
}
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

export default App;
