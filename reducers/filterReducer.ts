import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { IFilter } from "../interfaces";
import { AppState } from "../store";

interface FilterAction {
  payload: IFilter;
}

interface FilterState {
  filter: IFilter;
}

const initialState: FilterState = {
  filter: {
    enabled: false,
    filters: ["autor", "título", "editorial"],
    currentFilter: "título",
  },
};

const filterSlice = createSlice({
  name: "[FILTER]",
  initialState,
  reducers: {
    setFilter: (state: FilterState, action: FilterAction) => {
      state.filter = {
        ...state.filter,
        enabled: action.payload.enabled,
      };
    },
    setCurrentFilter: (state: FilterState, action: FilterAction) => {
      state.filter = {
        ...state.filter,
        currentFilter: action.payload.currentFilter,
      };
    },
  },
});

export { filterSlice };

// Actions
export const { setFilter, setCurrentFilter } = filterSlice.actions;

// Selector to access to the store
export const selectFilter = (state: AppState) => state.filter;

export default filterSlice.reducer;
