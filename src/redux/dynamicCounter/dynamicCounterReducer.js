import { DDECREMENT, DINCREMENT } from "../dynamicCounter/actionTpyes";

const intialState = {
    value: 0,
};

const dynamicCounterReducer = (state = intialState, action) => {
    switch (action.type) {
        case DINCREMENT:
            return{
                ...state,
                value: state.value + action.payload,
            };

        case DDECREMENT:
            return{
                ...state,
                value: state.value - action.payload,
            };
            
        default:
            return state;
    }
};

export default dynamicCounterReducer;