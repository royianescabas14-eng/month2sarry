import { Link, Navigate, useParams } from "react-router-dom";
import { months } from "../data/months";
import MonthLayout from "../components/MonthLayout";
import MusicSection from "../components/sections/MusicSection";
import GiftSection from "../components/sections/GiftSection";
import WordsSection from "../components/sections/WordsSection";
import TicketsSection from "../components/sections/TicketsSection";
import QualityTimeSection from "../components/sections/QualityTimeSection";

const renderers = {
  music: MusicSection,
  gift: GiftSection,
  words: WordsSection,
  tickets: TicketsSection,
  quality: QualityTimeSection,
};

export default function Section() {
  const { id, slug } = useParams();
  const month = months.find((m) => m.id === Number(id));
  const section = month?.sections.find((s) => s.slug === slug);
  if (!section) return <Navigate to="/" replace />;

  const Renderer = renderers[section.type];
  const backTo = `/month/${month.id}`;

  return (
    <MonthLayout month={month} overlay={section.overlay}>
      {Renderer && section.content ? (
        <Renderer section={section} backTo={backTo} />
      ) : (
        <div className="container">
          <h1>{section.label}</h1>
          <p>Coming soon...</p>
          <Link to={backTo} className="back">Back</Link>
        </div>
      )}
    </MonthLayout>
  );
}