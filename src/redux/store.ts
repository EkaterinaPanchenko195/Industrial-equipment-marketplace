import { configureStore } from "@reduxjs/toolkit";
import defaultLoginReducer from "./slice/login";
import NewProductReducer from "./slice/addNewProduct";
import CategorieLaserReducer from "./slice/getCategorieLaser";

const rootReducer = {
  defaultLogin: defaultLoginReducer,
  NewProduct: NewProductReducer,
  CategorieLaser: CategorieLaserReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
