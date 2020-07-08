// import store from "./store";
// import { bugAdded, bugResolved } from "./actions";

// const unsuscribe = store.subscribe(() =>
//   console.log("Store changed!!", store.getState())
// );
// store.dispatch(bugAdded("Bug 1"));
// store.dispatch(bugResolved(1));

// store.dispatch();
// console.log(store.getState());

// import * as actions from "./store/bugs";
import * as actions from "./store/projects";
import configureStore from "./store/configureStore";

const store = configureStore();
const unsuscribe = store.subscribe(() => console.log("Store changed!!"));

store.dispatch(actions.projectAdded({ name: "Project 1" }));
// store.dispatch(actions.bugAdded({ description: "Bug 1" }));
// store.dispatch(actions.bugAdded({ description: "Bug 2" }));
// store.dispatch(actions.bugAdded({ description: "Bug 3" }));
// store.dispatch(actions.bugResolved({ id: 1 }));

console.log(store.getState());
