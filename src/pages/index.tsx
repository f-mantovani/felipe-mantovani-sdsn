import type { GetStaticProps, InferGetStaticPropsType } from "next";

import axios from "axios";
import { Goals } from "../types";
import Image from "next/image";

export default function Home({
  goals,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(goals);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h1>Test</h1>
      {goals.map((goal) => (
        <Image
          src={`/assets/sdg-goals/sdg${goal.code}-white.svg`}
		  className="bg-red-500"
          width={120}
          height={120}
          key={goal.code}
          alt={goal.title}
          title={goal.title}
        />
      ))}
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
