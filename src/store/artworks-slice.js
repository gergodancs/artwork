import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  results: [],
  details: [],
  favourites: [],
  error: "",
  page: 1,
  numberOfArts: 25,
  imageUrl: "",
};

const artworkSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    addData(state, action) {
      state.results = action.payload.data;
    },
    addDetails(state, action) {
      state.details = action.payload.data;
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
    getImage(state, action) {
      state.imageUrl = action.payload;
    },
    addFavourites(state, action) {
      const newItem = action.payload;
      const existingItem = state.favourites.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.favourites.push({
          id: newItem.id,
          title: newItem.title,
          date: newItem.date_display,
          type: newItem.artwork_type_title,
          img: newItem.imgUrl,
        });
      } else {
        return alert("already in");
      }
    },
    replaceFavourite(state, action) {
      const id = action.payload;
      state.favourites = state.favourites.filter((item) => item.id !== id);
    },
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

export const fetchDetails = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/${id}`
      );
      if (!response.ok) {
        throw new Error(response.message);
      }
      const data = await response.json();
      console.log(data);
      return data;
    };
    try {
      const results = await fetchData();
      dispatch(artworkSlice.actions.addDetails(results));
    } catch (error) {
      console.log("nem jo");
    }
  };
};

export const artworkActions = artworkSlice.actions;
export default artworkSlice;
