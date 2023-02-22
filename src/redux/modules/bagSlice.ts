import { createSelector, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

interface IBagItem {
	id: string;
	name: string;
	cat: string;
	price: string;
	sizes: string[];
	size: string;
	qty: number;
}

const initialState: IBagItem[] = [];

const bagSlice = createSlice({
	name: "bag",
	initialState,
	reducers: {
		add(state, action) {
			const { id, size } = action.payload;
			const exist = state.find((item) => item.id === id && item.size === size);
			if (exist) {
				exist.qty++;
			} else {
				state.push({ ...action.payload, qty: 1 });
			}
		},
		edit(state, action) {
			const { idx, size, qty } = action.payload;
			if (size) {
				state[idx] = { ...state[idx], size: size };
			} else if (qty) {
				state[idx] = { ...state[idx], qty: qty };
			}
		},
		remove(state, action) {
			state.splice(action.payload, 1);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(HYDRATE, (state, action: any) => {
			state = action.payload.bag;
		});
	},
});

export const { add, edit, remove } = bagSlice.actions;
export const bagSelector = (state: AppState) => state.bag;
export const selectBag = createSelector(bagSelector, (s) => s);
export default bagSlice.reducer;
