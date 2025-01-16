// Select dom element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

    // action creator
    const increment = (value) => {
        return {
            type: INCREMENET,
            payload: value, 
        }
    }
    const decrement = (value) => {
        return {
            type: DECREMENT,
            payload: value, 
        }
    }

    // action identifiers
    const INCREMENET = "increment";
    const DECREMENT = "decreent";

    const initialState = {
        value: 0
    };


    function counterReducer(state = initialState, action){
        if(action.type === INCREMENET){
            return {
                ...state,
                value: state.value + action.payload,
            }
        }else if(action.type === DECREMENT){
            return {
                ...state,
                value: state.value - action.payload,
            }
        }else{
            return state;
        }

    }

    // create store
    const store = Redux.createStore(counterReducer);

    const render = () => {
        const state = store.getState();
        counterEl.innerText = state.value.toString()
    }

    render()

    store.subscribe(render);

    // button click listeners
    incrementEl.addEventListener("click", () => {
        store.dispatch(increment(5));
    });
    decrementEl.addEventListener("click", () => {
        store.dispatch(decrement(2));
    });