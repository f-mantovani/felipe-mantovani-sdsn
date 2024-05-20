//@ts-ignore
import { getLabel } from "@sdgindex/data/sdgs";

import { GetStaticProps, InferGetStaticPropsType } from "next";

import {
  fetchCountryResults,
  goalRequest,
  goalsRequest,
} from "../../utils/requests";
import { CountryData, Goals } from "../../types";
import { SdgCard } from "../../components/SdgCard";
import { Legend } from "../../components/Legend";

const GoalDetails = ({
  goal,
  countriesData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const goalTitle = getLabel(+goal.code);
  return (
    <>
      {/* Top of the page with first info about the goal */}
      <header>
        <h1>
          SDG {goal.code} - {goalTitle}
        </h1>
        <h2> {goal.title} </h2>
        <p>{goal.description}</p>
      </header>

      {/* Countries Data */}
      <section>
        <h3>Countries score for - {goalTitle}</h3>
        <div className="grid grid-cols-3 gap-6">
          {countriesData.map((country) => {
            const score = {
              name: country.Name,
              rating: country[`Goal_${goal.code}_Rating`] as string,
              trend: country[`Goal_${goal.code}_Trend`] as string,
              score: (+country[`Goal_${goal.code}_Score`]).toFixed(2),
            };

            return <SdgCard score={score} key={country.ID} />;
          })}
        </div>
      </section>

      {/* Legend for the info */}
      <section>
        <h4>Legend</h4>
        <Legend />
      </section>
    </>
  );
};

export default GoalDetails;

export const getStaticPaths = async () => {
  const { data } = await goalsRequest();
  const paths = data.map((goal) => ({ params: { id: goal.code } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (async (context) => {
  const id = context.params?.id as string;

  const { data } = await goalRequest(id);

  const countries = ["Brazil", "Finland", "France", "India", "China"].map(
    (country) => fetchCountryResults(country, id),
  );

  const promiseSolver = await Promise.allSettled(countries);

  const countriesData: CountryData[] = [];

  promiseSolver.forEach((promise) => {
    if (promise.status === "fulfilled") {
      countriesData.push(promise.value.data.features[0]?.attributes);
    }
  });

  return {
    props: {
      goal: data[0],
      countriesData,
    },
  };
}) satisfies GetStaticProps<{
  goal: Goals;
  countriesData: CountryData[];
}>;
