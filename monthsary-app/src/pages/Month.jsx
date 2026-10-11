import { Link, Navigate, useParams } from "react-router-dom";
import { months } from "../data/months";
import MonthLayout from "../components/MonthLayout";

export default function Month() {
  const { id } = useParams();
  const month = months.find((m) => m.id === Number(id));
  if (!month) return <Navigate to="/" replace />;

  return (
    <MonthLayout month={month}>
      <div className="container">
        <h1>{month.title}</h1>
        {month.subtitle && <p>{month.subtitle}</p>}
        <div className="buttons">
          {month.sections.map((s) => (
            <Link key={s.slug} to={`/month/${month.id}/${s.slug}`} className="love-btn">
              {s.label}
            </Link>
          ))}
        </div>
        <Link to="/" className="back">Back to Home</Link>
      </div>
    </MonthLayout>
  );
}