import { Link, Navigate, useParams } from "react-router-dom";
import { months } from "../data/months";
import MonthLayout from "../components/MonthLayout";
import MusicSection from "../components/sections/MusicSection";
import GiftSection from "../components/sections/GiftSection";
import WordsSection from "../components/sections/WordsSection";
import TicketsSection from "../components/sections/TicketsSection";
import MysterySection from "../mystery/MysterySection";
import VendingSection from "../vending/VendingSection";
import ExamSection from "../exam/ExamSection";
import MuseumSection from "../museum/MuseumSection";

const renderers = {
  music: MusicSection,
  gift: GiftSection,
  words: WordsSection,
  tickets: TicketsSection,
  mystery: MysterySection,
  vending: VendingSection,
  exam: ExamSection,
  museum: MuseumSection,
};

export default function Section() {
  const { id, slug } = useParams();
  const month = months.find((m) => m.id === Number(id));
  const section = month?.sections.find((s) => s.slug === slug);
  if (!section) return <Navigate to="/" replace />;

  const Renderer = renderers[section.type];
  const backTo = `/month/${month.id}`;

  // Museum takes full control of its own layout (background, nav, etc.)
  if (section.type === "museum") {
    return <MuseumSection backTo={backTo} />;
  }

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