import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createHashHistory } from "history";
import { UserContextState, userContextReducer } from "./user";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

export interface AppState {
  userContext: UserContextState;
}
const persistConfig = {
  key: "primary",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["userContext", "props"],
};

const rootReducer = () => combineReducers({ userContext: userContextReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

// this is the only part that we need from connected-react-router library
const routerMiddleware = (history: any) => (store: any) => (next: any) => (
  action: any
) => {
  const CALL_HISTORY_METHOD = "@@router/CALL_HISTORY_METHOD";
  if (action.type !== CALL_HISTORY_METHOD) {
    return next(action);
  }

  const {
    payload: { method, args },
  } = action;
  history[method](...args);
};
// end block

function configureStore(history: any) {
  const middleWares = applyMiddleware(routerMiddleware(history));
  // const store = createStore(rootReducer, composeWithDevTools(middleWares));
  const store = createStore(persistedReducer, composeWithDevTools(middleWares));
  const persistor = persistStore(store);

  return { store, persistor };
  // return { store };
}

const { store, persistor } = configureStore(createHashHistory());

export { store, persistor };
