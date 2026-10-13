import { Link } from "react-router-dom";

export default function WordsSection({ section, backTo }) {
  const { title, image, subtitle, paragraphs, salutation, closing, author } = section.content;

  return (
    <div className="container words-container">
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}

      {image && (
        <div className="image-container bottom">
          <img
            src={image}
            alt={title}
            className="letter-img"
            onError={(e) => {
              // Gracefully hide broken image element if file is not provided
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      )}

      {paragraphs && paragraphs.length > 0 && (
        <div className="letter-card-text">
          {salutation && <p className="letter-salutation"><strong>{salutation}</strong></p>}
          {paragraphs.map((p, idx) => (
            <p key={idx} className="letter-body-p">{p}</p>
          ))}
          {closing && <p className="letter-closing">{closing}</p>}
          {author && <p className="letter-author"><strong>{author}</strong></p>}
        </div>
      )}

      <Link to={backTo} className="back">Back</Link>
    </div>
  );
}