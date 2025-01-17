import { DDECREMENT, DINCREMENT } from "./actionTpyes"

export const increment = (value) => {
    return{
        type: DINCREMENT,
        payload: value,
    };
};

export const decrement = (value) => {
    return{
        type: DDECREMENT,
        payload: value,
    };
};
