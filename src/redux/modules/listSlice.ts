import {
	createAsyncThunk,
	createSelector,
	createSlice,
} from "@reduxjs/toolkit";

export interface IListItem {
	id: string;
	name: string;
	cat: string;
	price: number;
}

export interface IList {
	cat: string;
	all: IListItem[];
	filtered: IListItem[];
}

interface IListState {
	list: IList;
}

export const fetchAll = createAsyncThunk("product/all", async () => {
	const res = await fetch("/data/products.json");
	if (!res.ok) throw new Error("server error");
	return await res.json();
});

const initialState: IList = { cat: "", all: [], filtered: [] };

const listSlice = createSlice({
	name: "list",
	initialState,
	reducers: {
		filterOn(state, action) {
			if (action.payload === "all") {
				state.cat = "all";
				state.filtered = state.all;
				return;
			}
			state.cat = action.payload;
			state.filtered = state.all.filter((item) => item.cat === action.payload);
		},
		filterOff(state) {
			state.filtered = state.all;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAll.fulfilled, (state, { payload }) => {
			state.all = payload.products;
			state.filtered = payload.products.filter((item: IListItem) => {
				if (state.cat === "all") return true;
				return state.cat === item.cat;
			});
		});
	},
});

export const { filterOn, filterOff } = listSlice.actions;
export const listSelector = (state: IListState) => state.list;
export const selectList = createSelector(listSelector, (s) => s);
export default listSlice.reducer;
