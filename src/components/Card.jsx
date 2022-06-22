import { Link } from "react-router-dom";
import "./styles/cards.css";
import { useSelector, useDispatch } from "react-redux";
import { artworkActions } from "../store/artworks-slice";
import { fetchDetails } from "../store/artworks-slice";

const Card = (props) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.artwork.details);
  const favs = useSelector((state) => state.artwork.favourites);

  const addFav = () => {
    dispatch(
      artworkActions.addFavourites({
        id: details.id,
        title: details.title,
        date: details.date_display,
        type: details.type,
        img: `https://www.artic.edu/iiif/2/${props.imgId}/full/843,/0/default.jpg`,
      })
    );
  };
  const onClickAddFav = () => {
    props.getDetails(props.id, props.imgId);
    addFav();
    console.log(favs);
  };
  return (
    <div className="card">
      <img
        src={`https://www.artic.edu/iiif/2/${props.imgId}/full/843,/0/default.jpg`}
        alt=""
      />
      <h5>{props.title}</h5>
      <button onClick={() => props.getDetails(props.id, props.imgId)}>
        <Link to="/details">Show Details</Link>
      </button>
      <button onClick={() => onClickAddFav()}>Add to Favourites</button>
    </div>
  );
};

export default Card;
