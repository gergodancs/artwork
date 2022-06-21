import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  results: [],

  error: "",
  page: 1,
  numberOfArts: 25,
};

const artworkSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    addData(state, action) {
      state.results = action.payload.data;
    },
    incerementPage(state) {
      console.log("hello");
      state.page = state.page + 1;
    },
    decrementPage(state) {
      if (state.page === 1) {
        return;
      } else {
        state.page = state.page - 1;
      }
    },
    selectNumOfArts(state, action) {
      state.numberOfArts = action.payload;
    },
    addFavourites(state, action) {},
    replaceFavourite(state, action) {},
  },
});

export const fetchArtworks = (searchText, page, numofArts) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${searchText}&page=${page}&limit=${numofArts}&fields=id,title,image_id,thumbnail`
      );
      if (!response.ok) {
        throw new Error(response.message);
      }
      const data = await response.json();
      return data;
    };
    try {
      const results = await fetchData();
      dispatch(artworkSlice.actions.addData(results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const artworkActions = artworkSlice.actions;
export default artworkSlice;
