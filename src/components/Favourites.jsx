import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Favourites = () => {
  const favourites = useSelector((state) => state.artwork.favourites);
  console.log(favourites);
  return (
    <div>
      {favourites.map((item) => {
        return (
          <div key={item.id}>
            <ul>
              <li>{item.title}</li>
              <li>{item.date}</li>
              <li>{item.type}</li>

              <li>
                <img src={item.img} alt="pics" />
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Favourites;
