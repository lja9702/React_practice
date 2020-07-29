// 리덕스와 연동된 컨테이너 컴포넌트 작성

import React, {Component} from 'react';
import Counter from "../components/Counter";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as counterActions from 'store/modules/counter';

class CounterContainer extends Component{
    handleIncrement = () => {
        this.props.increment();
    }

    handleDecrement = () => {
        this.props.decrement();
    }
    render() {
        const {handleIncrement, handleDecrement} = this;
        const {number} = this.props;
        return (
            <Counter
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                number={number}
            />
        );
    }
}

// 방법 3
export default connect(
    (state) => ({
        number: state.counter.number
    }),
    (dispatch) => bindActionCreators(counterActions, dispatch)
)(CounterContainer);
// 방법 2
// export default connect(
//     (state) => ({
//         number: state.counter.number
//     }),
//     (dispatch) => ({
//         increment: () => dispatch(counterActions.increment()),
//         decrement: () => dispatch(counterActions.decrement())
//     })
// )(CounterContainer);

// 방법 1
// //props 값으로 넣어 줄 상태를 정의
// const mapStateToProps = (state) => ({
//     number: state.counter.number
// });
//
// //props 값으로 넣어 줄 액션 함수들 정의
// const mapDispatchToProps = (dispatch) => ({
//     increment: () => dispatch(counterActions.increment()),
//     decrement: () => dispatch(counterActions.decrement())
// })
//
// //export default CounterContainer;
// //컴포넌트를 리덕스와 연동할 때는 connect를 사용
// //connect()의 결과는, 컴포넌트에 props를 넣어주는 함수를 반환한다.
// //반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됨
// export default connect(mapStateToProps, mapDispatchToProps) (CounterContainer);
// //mapStateToProps: 스토어의 상태를 파라미터를 받아오는 함수로, 컴포넌트에 상태로 넣어줄 props반환
// //mapDispatchToProps: dispatch를 파라미터로 받아오는 함수로, 컴포넌트에 넣어줄 액션 함수들을 반환