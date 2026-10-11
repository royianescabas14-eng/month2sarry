import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { months } from "../data/months";
import { audio, playTrack } from "../audio";

const HOME_TRACK = "/music/tiny.mp3";

function getTrack(pathname) {
  const match = pathname.match(/^\/month\/(\d+)(?:\/([^/]+))?/);
  if (!match) return HOME_TRACK;
  const month = months.find((m) => m.id === Number(match[1]));
  if (!month) return HOME_TRACK;
  const section = month.sections.find((s) => s.slug === match[2]);
  if (section && "music" in section) return section.music;
  return month.music;
}

export default function MusicPlayer() {
  const { pathname } = useLocation();
  const track = getTrack(pathname);
  const [enabled, setEnabled] = useState(false); // does the person want music on?
  const [playing, setPlaying] = useState(!audio.paused);

  // keep the icon in sync with the real audio state
  useEffect(() => {
    const sync = () => setPlaying(!audio.paused);
    audio.addEventListener("play", sync);
    audio.addEventListener("pause", sync);
    audio.addEventListener("ended", sync);
    return () => {
      audio.removeEventListener("play", sync);
      audio.removeEventListener("pause", sync);
      audio.removeEventListener("ended", sync);
    };
  }, []);

  // switch tracks when the page changes (only if music is on)
  useEffect(() => {
    if (enabled) playTrack(track);
  }, [track, enabled]);

  const toggle = () => {
    if (playing) {
      audio.pause();
      setEnabled(false);
    } else {
      setEnabled(true);
      playTrack(track); // called directly in the tap so browsers allow it
    }
  };

  return (
    <button
      className={`music-toggle${playing ? " playing" : ""}${!enabled && !playing ? " idle" : ""}`}
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
    >
      <span className="music-icon">{playing ? "🎵" : "🔇"}</span>
      {!playing && <span className="music-label">Tap for music</span>}
    </button>
  );
}