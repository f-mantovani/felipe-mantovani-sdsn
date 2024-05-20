// @ts-ignore
import { getColor } from "@sdgindex/data/sdgs";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";

import { Goals } from "../types";
import { Footer } from "../components/Footer";
import { goalsRequest } from "../utils/requests";

export default function Home({
  goals,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
	<>
      <h1>Pathways to Progress</h1>

      <div className="grid grid-cols-6 gap-8">
        {goals.map((goal) => (
          <Link
            key={goal.code}
            href={`/goal-details/${goal.code}`}
            data-cy-goal
          >
            {placeIcon(goal)}
          </Link>
        ))}
      </div>

      <Footer />
	</>
  );
}

export const getStaticProps = (async () => {
  const { data } = await goalsRequest()

  return {
    props: { goals: data },
  };
}) satisfies GetStaticProps<{
  goals: Goals[];
}>;

// Abstraction for placing the goal icons
function placeIcon(goal: Goals) {
  const squareProportions = 120;
  const goalNumber = Number(goal.code);
  // function to get the correct color for the goals
  const color = getColor(goalNumber);

  return (
    <Image
      src={`/assets/sdg-goals/sdg${goal.code}-white.svg`}
      style={{ backgroundColor: color }}
      className="hover:scale-125 hover:shadow-md hover:shadow-black hover:dark:shadow-white"
      width={squareProportions}
      height={squareProportions}
      alt={goal.title}
      title={goal.title}
      data-cy-goal-img={goal.code}
      priority
    />
  );
}
