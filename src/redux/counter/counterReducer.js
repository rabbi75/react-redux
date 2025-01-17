import { DECREMENT, INCREMENT } from "./actionType";

const intialState = {
    value: 20,
};

const counterReducer = (state = intialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                value: state.value + 1,
            };

        case DECREMENT:
            return{
                ...state,
                value: state.value - 1,
            };
            
        default:
            return state;
    }
};

export default counterReducer;