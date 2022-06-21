import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  results: [],
  error: "",
};

const artworkSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    addData(state, action) {
      state.results = action.payload.data;
    },
  },
});

export const fetchArtworks = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=cats&page=1&limit=10&fields=id,title,image_id,thumbnail`
      );
      if (!response.ok) {
        console.log("not ok");
      }
      const data = await response.json();
      return data;
    };
    try {
      const results = await fetchData();
      dispatch(artworkSlice.actions.addData(results));
    } catch (error) {
      console.log("cath error");
    }
  };
};

export const artworkActions = artworkSlice.actions;
export default artworkSlice;
