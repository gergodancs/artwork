import { configureStore } from "@reduxjs/toolkit";
import artworkSlice from "./artworks-slice";

const store = configureStore({
  reducer: { artwork: artworkSlice.reducer },
});

export default store;
