// @ts-ignore
import { getColor } from '@sdgindex/data/sdgs';

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";


import { Goals } from "../types";

export default function Home({
  goals,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h1>HOME PAGE</h1>

      <div className="grid grid-cols-6 gap-8">
        {goals.map((goal) => (
          <Link key={goal.code} href={`/goal-details/${goal.code}`}>
			{placeIcon(goal)}
		  </Link>
        ))}
      </div>
    </main>
  );
}

export const getStaticProps = (async () => {
  const { data } = await axios.get<Goals[]>(
    `https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false`,
  );

  return {
    props: { goals: data },
  };
}) satisfies GetStaticProps<{
  goals: Goals[];
}>;

function placeIcon(goal: Goals) {
  const squareProportions = 120;
  const goalNumber = Number(goal.code)
  const color = getColor(goalNumber);
  return (
    <Image
      src={`/assets/sdg-goals/sdg${goal.code}-white.svg`}
	  style={{backgroundColor: color}}
      className="bg-red-500"
      width={squareProportions}
      height={squareProportions}
      alt={goal.title}
      title={goal.title}
      priority
    />
  );
}
