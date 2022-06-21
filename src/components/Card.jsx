import { useDispatch } from "react-redux";

const Card = (props) => {
  //   const [details, setDetails] = useState([]);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img
        src={`https://www.artic.edu/iiif/2/${props.imgId}/full/843,/0/default.jpg`}
        alt=""
      />
      <h5>{props.title}</h5>
      <button onClick={() => props.getDetails(props.id)}>Show Details</button>
    </div>
  );
};

export default Card;
