import { useState } from "react";
import { Link } from "react-router-dom";

export default function TicketsSection({ section, backTo }) {
  const { title, intro, images, caption } = section.content;
  const [selected, setSelected] = useState(null);

  return (
    <div className="physical-container">
      <h1>{title}</h1>
      <p>{intro}</p>

      <div className="ticket-gallery">
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="ticket-img"
            onClick={() => setSelected(img)}
          />
        ))}
      </div>

      <p className="ticket-caption">{caption}</p>
      <Link to={backTo} className="back">Back</Link>

      {selected && (
        <div className="popup" onClick={() => setSelected(null)}>
          <span className="close">&times;</span>
          <img
            src={selected.src}
            alt={selected.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}