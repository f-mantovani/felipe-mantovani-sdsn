// @ts-ignore
import { getColor } from "@sdgindex/data/sdgs";
import Image from "next/image";

import { Goals } from "../../types";

// The home prop gives the hover effect on the icon
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
  const hoverStyles =
    "hover:scale-125 hover:shadow-md hover:shadow-black hover:dark:shadow-white";

  return (
    <Image
      src={`/assets/sdg-goals/sdg${goal.code}-white.svg`}
      style={{ backgroundColor: color }}
      className={home ? hoverStyles : ""}
      width={squareProportions}
      height={squareProportions}
      alt={goal.title}
      title={goal.title}
      data-cy-goal-img={goal.code}
      priority
    />
  );
};
