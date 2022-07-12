// store를 만드는 파일
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSageMiddleware from "redux-saga";
import reducer from "./modules/reducer";
import rootSaga from "./modules/rootSaga";

const create = () => {
  const sagaMiddleware = createSageMiddleware();

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default create;
