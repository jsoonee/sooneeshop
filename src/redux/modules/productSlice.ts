import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface IDetail {
	id: string;
	sizes: string | Array<string>;
	desc: string;
}

interface IState {
	data: IDetail[];
	detail: IDetail | undefined;
}

const initialState: IState = {
	data: [],
	detail: {
		id: "",
		sizes: "",
		desc: "",
	},
};

export const fetchDetail = createAsyncThunk("product/detail", async () => {
	const res = await fetch("/data/detail.json");
	console.log(res);
	if (!res.ok) throw new Error("server error");
	return await res.json();
});

const productSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		getDetail(state, action) {
			state.detail = state.data.find((v) => v.id === action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchDetail.fulfilled, (state, { payload }) => {
			state = payload.detail;
		});
	},
});

export const { getDetail } = productSlice.actions;
export default productSlice.reducer;
