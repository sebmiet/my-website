import { SiJavascript, SiReact } from "react-icons/si";
// import calculator from "../images/calculator.png";
// import todo from "../images/todo.png";
// import skybox from "../images/skybox.png";

const Card = ({ title, description, liveLink, gitHubLink, icon, image }) => {
  let tool = icon.toUpperCase();
  tool === "REACT" ? (tool = <SiReact />) : (tool = <SiJavascript />);
  return (
    <div className="card-container">
      <div className="title-container">
        <div>{title}</div>
        <div>{tool}</div>
      </div>

      <div className="img-container">
        <img src={"images/" + image + ".png"} alt={title} />
      </div>
      <div className="desc-container">{description}</div>
      <div className="btns-container">
        <button className="btn-livelink" onCLick={liveLink}>
          LIVE
        </button>
        <button className="btn-github" onCLick={gitHubLink}>
          GITHUB
        </button>
      </div>
    </div>
  );
};

export default Card;
