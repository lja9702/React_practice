import {createAction} from 'redux-actions';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, value => value); //다음 어떤 값으로 바뀌어야 하는지 알려주는 값
export const insert = createAction(INSERT, text => text);   //추가할 내용
export const toggle = createAction(TOGGLE, id => id);   //어떤 id 수정?
export const remove = createAction(REMOVE, id => id);   //어떤 id 수정?

let id = 0;
const initialState = Map({
    http://velopert.com/3533
    
})