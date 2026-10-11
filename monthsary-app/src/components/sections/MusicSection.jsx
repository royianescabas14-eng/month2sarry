import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function MusicSection({ section, backTo }) {
  const { title, topImage, song, paragraphs } = section.content;
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const rewind = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.max(0, audio.currentTime - 10);
  };

  const forward = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10);
  };

  return (
    <div className="container">
      {topImage && <img src={topImage} alt="Memory" className="top-image" />}
      <h1>{title}</h1>

      <audio ref={audioRef} src={song} onEnded={() => setPlaying(false)} />

      <div className="music-controls">
        <button onClick={rewind}>⏪</button>
        <button onClick={toggle}>{playing ? "⏸" : "▶️"}</button>
        <button onClick={forward}>⏩</button>
      </div>

      <div className="letter">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <Link to={backTo} className="back">Back</Link>
    </div>
  );
}