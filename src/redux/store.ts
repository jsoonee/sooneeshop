import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import themeReducer from "./modules/themeSlice";
import listReducer from "./modules/listSlice";
import productReducer from "./modules/productSlice";
import bagReducer from "./modules/bagSlice";

const makeStore = () =>
	configureStore({
		reducer: {
			theme: themeReducer,
			list: listReducer,
			product: productReducer,
			bag: bagReducer,
		},
	});

const wrapper = createWrapper(makeStore);

type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export default wrapper;
