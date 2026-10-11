import { Link } from "react-router-dom";

export default function WordsSection({ section, backTo }) {
  const { title, image } = section.content;
  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="image-container bottom">
        <img src={image} alt={title} className="letter-img" />
      </div>
      <Link to={backTo} className="back">Back</Link>
    </div>
  );
}