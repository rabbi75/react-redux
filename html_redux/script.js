// Select dom element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

    const initialState = {
        value: 0
    };


    function counterReducer(state = initialState, action){
        if(action.type === 'increment'){
            return {
                ...state,
                value: state.value + 1,
            }
        }else if(action.type === 'decrement'){
            return {
                ...state,
                value: state.value - 1,
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
        store.dispatch({
            type: "increment",
        })
    });
    decrementEl.addEventListener("click", () => {
        store.dispatch({
            type: "decrement",
        })
    });