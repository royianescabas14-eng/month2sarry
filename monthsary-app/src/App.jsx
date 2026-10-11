import { Routes, Route } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";
import Home from "./pages/Home";
import Month from "./pages/Month";
import Section from "./pages/Section";

export default function App() {
  return (
    <>
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month/:id" element={<Month />} />
        <Route path="/month/:id/:slug" element={<Section />} />
      </Routes>
    </>
  );
}