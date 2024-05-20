import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

import { Goals } from "../types";
import { Footer } from "../components/Footer";
import { goalsRequest } from "../utils/requests";
import { GoalIcon } from "../components/GoalIcon/GoalIcon";
import { PageTitle, Paragraph } from "../typography";

export default function Home({
  goals,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <header className="flex flex-col gap-8">
        <PageTitle className={"text-center"}>
          Pathways to Progress: Exploring the SDGs
        </PageTitle>
        <Paragraph className={"max-w-[77ch text-center]"}>
          Welcome to our landing page dedicated to the United Nations
          Sustainable Development Goals (SDGs). Here, you can explore the 17
          SDGs, each representing a critical aspect of global development. Click
          on the icons below to delve deeper into each goal and discover how
          five diverse countries (
          <b>Brazil, Finland, France, India, and China</b>) are contributing
          to these objectives. By examining their progress, we aim to foster
          greater awareness and understanding of the collective efforts needed
          to achieve a sustainable future for all.
        </Paragraph>
      </header>

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
  const { data } = await goalsRequest();

  return {
    props: { goals: data },
  };
}) satisfies GetStaticProps<{
  goals: Goals[];
}>;
