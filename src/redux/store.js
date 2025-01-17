import { createStore } from "redux"; // Use named import
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;
