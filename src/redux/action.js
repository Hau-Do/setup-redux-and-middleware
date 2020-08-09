import { DECREMENT, INCREMENT } from "./actionConstant";

export const actionDecrement = (value) => {
    return {
        type: DECREMENT,
        payload: {
            text: value
        }
    };
}

export const actionIncrement = (value) => {
    return {
        type: INCREMENT,
        payload: {
            text: value
        }
    };
}