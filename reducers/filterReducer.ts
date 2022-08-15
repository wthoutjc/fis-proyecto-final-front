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
    filters: ["autor", "creador"],
    dateFilter: false,
    ownDocsFilter: false,
    currentFilter: "autor",
  },
};

const filterSlice = createSlice({
  name: "[FILTER]",
  initialState,
  reducers: {
    enableFilter: (state: FilterState, action: FilterAction) => {
      state.filter = {
        ...state.filter,
        enabled: action.payload.enabled,
      };
    },
    setDateFilter: (state: FilterState, action: FilterAction) => {
      state.filter = {
        ...state.filter,
        dateFilter: action.payload.dateFilter,
      };
    },
    setOwnDocsFilter: (state: FilterState, action: FilterAction) => {
      state.filter = {
        ...state.filter,
        ownDocsFilter: action.payload.ownDocsFilter,
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
export const {
  enableFilter,
  setDateFilter,
  setOwnDocsFilter,
  setCurrentFilter,
} = filterSlice.actions;

// Selector to access to the store
export const selectFilter = (state: AppState) => state.filter;

export default filterSlice.reducer;
