import type { GetStaticProps, InferGetStaticPropsType } from "next";

import axios from "axios";
import { Goals } from "../types";

export default function Home({
  goals,
}: {
  goals: Goals[];
}): InferGetStaticPropsType<typeof getStaticProps> {
	console.log(goals)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h1>Test</h1>
    </main>
  );
}

export const getStaticProps = (async () => {
  const { data } = await axios.get<Goals[]>(
    `https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false`,
  );

  console.log(data)
  return {
    props: { goals: data },
  };
}) satisfies GetStaticProps<{
  goals: Goals[];
}>;
