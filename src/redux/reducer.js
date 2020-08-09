import { DECREMENT, INCREMENT } from "./actionConstant";

const initialState = {
    count: 0
};
  
export const reducer = (state = initialState, action) => {
console.log('2. reducer - action: ', action);
switch(action.type){
    case DECREMENT:
        return {
            ...state,
            count: state.count - 1,
            textDisplay: action.payload.text
        };
    case INCREMENT:
        return {
            ...state,
            count: state.count + 1,
            textDisplay: action.payload.text
        };
    default: 
    return state;
}
}