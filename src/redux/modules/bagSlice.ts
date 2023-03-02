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

const initialState: { code: string; bag: IBagItem[] } = { code: "", bag: [] };

const bagSlice = createSlice({
	name: "bag",
	initialState,
	reducers: {
		add(state, action) {
			const { id, size } = action.payload;
			const exist = state.bag.find(
				(item) => item.id === id && item.size === size
			);
			if (exist) {
				// if (exist.qty >= 10) {
				// 	state.code = "MAXIMUM_QTY";
				// } else {
				// 	exist.qty++;
				// }
				exist.qty++;
			} else {
				state.bag.push({ ...action.payload, qty: 1 });
			}
		},
		edit(state, action) {
			const { bag } = state;
			const { idx, id, size, qty } = action.payload;
			if (size) {
				const existIndex = bag.findIndex(
					(item, index) => idx !== index && item.id === id && item.size === size
				);
				if (existIndex >= 0) {
					const nums = [idx, existIndex];
					const upper = Math.min(...nums),
						lower = Math.max(...nums);
					let sum = bag[upper].qty + bag[lower].qty;
					if (sum > 10) sum = 10;
					bag[upper] = {
						...bag[upper],
						size: size,
						qty: sum,
					};
					bag.splice(lower, 1);
				} else {
					bag[idx] = { ...bag[idx], size: size };
				}
			} else if (qty) {
				bag[idx] = { ...bag[idx], qty: qty };
			}
		},
		remove(state, action) {
			state.bag.splice(action.payload, 1);
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
