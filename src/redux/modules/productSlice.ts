import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IDetail {
	id: string;
	sizes: Array<string>;
	desc: string;
}

export interface IProduct {
	data: IDetail[];
	detail: IDetail | undefined;
}

export const initialState: IProduct = {
	data: [],
	detail: {
		id: "",
		sizes: ["Free"],
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
			state.data = payload.detail;
		});
	},
});

export const { getDetail } = productSlice.actions;
export default productSlice.reducer;
