import { Link } from "react-router-dom";
import "./styles/cards.css";

const Card = (props) => {
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
    </div>
  );
};

export default Card;
