import "./index.css";

const card = (props) => {
  const { title, description, imgUrl } = props;
  return (
    <div className="cardContainer">
      <h1 className="cardHeading">{title}</h1>
      <p className="cardPara">{description}</p>
      <div className="imgContainer">
        <img src={imgUrl} alt={title} className="card-img " />
      </div>
    </div>
  );
};

export default card;
