import { Link } from "react-router-dom";
import { months } from "../data/months";

const TOTAL_MONTHS = 12;

export default function Home() {
  return (
    <div className="container">
      <h1>Relationship Journey</h1>
      <div className="month-grid">
        {Array.from({ length: TOTAL_MONTHS }, (_, i) => {
          const n = i + 1;
          const month = months.find((m) => m.id === n);
          return month ? (
            <Link key={n} to={`/month/${n}`} className="month-box active">
              Month {n}
            </Link>
          ) : (
            <div key={n} className="month-box">Month {n}</div>
          );
        })}
      </div>
    </div>
  );
}