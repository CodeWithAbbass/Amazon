import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: ["Item1", "Item2", "Item3"],
};
const noteSlice = createSlice({
  name: "Notes",
  initialState,
  reducers: {
    addNote(state, action) {
      console.log("Before", state.items);
      state.items.push("Item4");
      // const newItems = state.items.filter((item, index) => item != "Item3");
      // state.items = newItems;
      console.log("After", state.items);
    },
    updateNote(state = initialState, action) {},
    deleteNote(state = initialState, action) {},
  },
});

export const { addNote, updateNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
