// 카운터 관련 상태 로직
import {createAction, handleActions} from 'redux-actions';

//액션 타입을 정의해줌
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

//액션 생성 함수를 만드는데, 다른 파일에서 불러와서 써야되서 export붙여줌
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

//모듈 초기상태 정의
const initialState = {
    number: 0
};

//handleActions의 첫번째 파라미터는 액션을 처리하는 함수들로 이루어진 객체
//두번째 파라미터는 초기 상태
export default handleActions({
    [INCREMENT]: (state, action) => {
        return {number: state.number + 1};
    },
    [DECREMENT]: ({number}) => ({number: number - 1})
}, initialState);

// //  리듀서 함수, 액션의 타입에 따라 변화된 상태를 정의하여 반환
// export default function reducer(state = initialState, action){
//     switch (action.type) {
//         case INCREMENT:
//             return {number: state.number + 1};
//         case DECREMENT:
//             return {number: state.number - 1};
//         default:
//             return state;
//     }
// }