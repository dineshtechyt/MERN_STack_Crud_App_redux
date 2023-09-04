import { createSlice } from "@reduxjs/toolkit";

export const getEmployees = createSlice({
  name: "user",
  initialState: {
    employees: null,
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
  },
});
export const { setEmployees } = getEmployees.actions;
