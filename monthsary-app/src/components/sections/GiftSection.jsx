import { Link } from "react-router-dom";

export default function GiftSection({ section, backTo }) {
  const { title, image, description } = section.content;
  return (
    <div className="gift-container">
      <h1>{title}</h1>
      <img src={image} alt="Gift" className="gift-img" />
      <p className="gift-description">{description}</p>
      <Link to={backTo} className="back">Back</Link>
    </div>
  );
}