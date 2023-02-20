import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface ITheme {
	isIdentified: boolean;
	isDark: boolean;
}

export interface IThemeState {
	theme: ITheme;
}

// const darkDefault = () => {
// 	const theme = document.documentElement.getAttribute("theme");
// 	return theme === "dark" ? true : false;
// };

const initialState: ITheme = {
	isIdentified: false,
	isDark: false,
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme(state, action) {
			state.isIdentified = true;
			state.isDark = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(HYDRATE, (state, action: any) => {
			state = action.payload.theme;
		});
	},
});

export const { toggleTheme } = themeSlice.actions;
export const themeSelector = (state: IThemeState) => state.theme;
export const selectTheme = createSelector(themeSelector, (s) => {
	return { ...s };
});
export default themeSlice.reducer;
