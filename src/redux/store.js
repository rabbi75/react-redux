import { createStore } from "redux"; // Use named import
import counterReducer from "./counter/counterReducer";

const store = createStore(counterReducer);

export default store;
