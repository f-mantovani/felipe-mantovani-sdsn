import { ScoreProps } from "../../types";
import { Arrow } from "../Arrow";

export const SdgCard = ({ score }: { score: ScoreProps }) => {
  return (
    <div
      data-cy-country-card
      className="grid grid-rows-2 rounded-lg border-2 border-solid border-black px-8 py-4 text-lg dark:border-white"
    >
      <div className="flex justify-between text-xl">
        <h3>{score.name}</h3>
        <p>Score: {score.score}</p>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <p>Score rating:</p>
          <div
            style={{ backgroundColor: score.rating }}
            className="h-6 w-6 rounded-full "
          ></div>
          <p>{score.rating}</p>
        </div>

        <div className="flex items-center gap-2">
          <p>Score trend:</p>
          <Arrow symbol={score.trend} />
        </div>
      </div>
    </div>
  );
};
