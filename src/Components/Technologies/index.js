import Card from "../Card";
import "./index.css";

const cardsList = [
  {
    id: 1,
    title: "Data Scientist",
    description:
      "Data scientists gather and analyze large sets of structured and unstructured data",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/data-scientist-img.png",
    className: "card-1",
  },
  {
    id: 2,
    title: "IOT Developer",
    description:
      "IoT Developers are professionals who can develop, manage, and monitor IoT devices.",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/iot-developer-img.png",
    className: "card-2",
  },
  {
    id: 3,
    title: "VR Developer",
    description:
      "A VR developer creates completely new digital environments that people can see.",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/vr-developer-img.png",
    className: "card-3",
  },
  {
    id: 4,
    title: "ML Engineer",
    description:
      "Machine learning engineers feed data into models defined by data scientists.",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png",
    className: "card-4",
  },
];

const Technologies = () => {
  return (
    <div className="container">
      <div className="wholeContainer">
        <h1 className="mainHeading">Learn 4.O Technologies</h1>
        <p className="para">
          Get trained by alumni of IITs and top companies like Amazon,
          Microsoft, Intel, Nvidia, Qualcomm, etc. Learn directly from
          professionals involved in Product Development
        </p>
        <ul className="unOrderedList">
          {cardsList.map((card) => (
            <li key={card.id} className={card.className}>
              <Card
                title={card.title}
                description={card.description}
                imgUrl={card.imgUrl}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Technologies;
