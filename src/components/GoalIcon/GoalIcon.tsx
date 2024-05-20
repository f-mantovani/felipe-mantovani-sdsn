// @ts-ignore
import { getColor } from "@sdgindex/data/sdgs";
import Image from "next/image";
import { Goals } from "../../types";

// Abstraction for placing the goal icons
export const GoalIcon = ({
  goal,
  home = false,
}: {
  goal: Goals;
  home?: boolean;
}) => {
  const squareProportions = 120;
  const goalNumber = Number(goal.code);

  // function to get the correct color for the goals
  const color = getColor(goalNumber);

  return (
    <Image
      src={`/assets/sdg-goals/sdg${goal.code}-white.svg`}
      style={{ backgroundColor: color }}
      className={
        home
          ? "hover:scale-125 hover:shadow-md hover:shadow-black hover:dark:shadow-white"
          : undefined
      }
      width={squareProportions}
      height={squareProportions}
      alt={goal.title}
      title={goal.title}
      data-cy-goal-img={goal.code}
      priority
    />
  );
};
