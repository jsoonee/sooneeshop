import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface IBagItem {
	id: string;
	size?: string;
	qty: number;
}

export interface IBag {
	bag: IBagItem[];
}

const initialState: IBag[] = [];

const bagSlice = createSlice({
	name: "bag",
	initialState,
	reducers: {
		add(state, action) {
			// const existed = state.find(
			// 	(item) => JSON.stringify(item) === JSON.stringify(action.payload)
			// );
			// if (existed) existed.qty++;
			// else state.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(HYDRATE, (state, action: any) => {
			state = action.payload.bag;
		});
	},
});

export const { add } = bagSlice.actions;
export default bagSlice.reducer;
