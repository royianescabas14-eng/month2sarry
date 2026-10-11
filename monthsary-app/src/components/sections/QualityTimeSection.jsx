import { Link } from "react-router-dom";

export default function QualityTimeSection({ section, backTo }) {
  const { title, intro, photo, caption } = section.content;
  return (
    <div className="physical-container">
      <h1>{title}</h1>
      {intro && <p>{intro}</p>}
      <img src={photo} alt={title} className="event-photo" />
      <p className="caption">{caption}</p>
      <Link to={backTo} className="back">Back</Link>
    </div>
  );
}