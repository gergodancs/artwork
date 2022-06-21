import React from "react";

import ArtworkList from "./ArtworkList";
import SearchForm from "./SearchForm";

const Landing = () => {
  return (
    <>
      <SearchForm />
      <ArtworkList />
    </>
  );
};

export default Landing;
