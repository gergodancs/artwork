import { Link } from "react-router-dom";
import "./styles/cards.css";
import { useSelector, useDispatch } from "react-redux";
import { artworkActions } from "../store/artworks-slice";

const Card = (props) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.artwork.details);

  const imgUrl = useSelector((state) => state.artwork.imageUrl);

  const addFav = () => {
    dispatch(
      artworkActions.addFavourites({
        id: details.id,
        title: details.title,
        date: details.date_display,
        type: details.artwork_type_title,
        img: imgUrl,
      })
    );
  };
  const onClickAddFav = (id, imgId) => {
    props.getDetails(id, imgId);
    if (details.title) return addFav(id, imgId);
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
      <button onClick={() => onClickAddFav(props.id, props.imgId)}>
        Add to Favourites
      </button>
    </div>
  );
};

export default Card;
