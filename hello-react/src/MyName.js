import React, {Component} from "react";

const MyName = ({name}) => {
    return (
        <div>
            안녕하세요 ! 제 이름은 {name} 입니다.
        </div>
    );
};

// class MyName extends Component {
//     // static defaultProps = {
//     //     name: '기본이름'
//     // }
//     render(){
//         return (
//             <div>
//                 안녕하세요. 제 이름은 <b>{this.props.name}</b> 입니다.
//             </div>
//         )
//     }
// }
//
// MyName.defaultProps = {
//     name: '기본이름'
// };

export default MyName;