import { Arrow } from "../Arrow";

const RATINGS: { color: string; description: string }[] = [
  {
    color: "green",
    description: "Goal achieved",
  },
  {
    color: "yellow",
    description: "Challenges remain",
  },
  {
    color: "orange",
    description: "Significant challenges remain",
  },
  {
    color: "red",
    description: "Major challenges remain",
  },
];

const TRENDS: { symbol: string; description: string }[] = [
  {
    symbol: "↑",
    description: "On track or maintaining Goal achievement",
  },
  {
    symbol: "➚",
    description: "Score moderately improving, insufficient to attain goal",
  },
  {
    symbol: "→",
    description:
      "Score stagnating or increasing at less than 50% of required rate",
  },
  {
    symbol: "↓",
    description: "Score decreasing",
  },
];

export const Legend = () => {
  return (
    <section className="grid grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        {RATINGS.map((rating) => (
          <div key={rating.color} className="flex gap-3">
            <div
              className="h-6 w-6 rounded-full"
              style={{ backgroundColor: rating.color }}
            ></div>
            <p>({rating.color})</p>
            <p>{rating.description}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="flex flex-col gap-4">
          {TRENDS.map((trend) => {
            return (
              <div key={trend.symbol} className="flex gap-3">
                <Arrow symbol={trend.symbol} />
                <p> {trend.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
