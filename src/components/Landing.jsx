import React from "react";

import SearchForm from "./SearchForm";

const Landing = (props) => {
  return (
    <>
      <SearchForm />
      <main>{props.children}</main>
    </>
  );
};

export default Landing;
