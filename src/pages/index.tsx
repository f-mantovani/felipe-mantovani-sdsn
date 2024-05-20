import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

import { Goals } from "../types";
import { Footer } from "../components/Footer";
import { goalsRequest } from "../utils/requests";
import { GoalIcon } from "../components/GoalIcon/GoalIcon";

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
            <GoalIcon goal={goal} home />
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



