//@ts-ignore
import { getLabel } from "@sdgindex/data/sdgs";

import { GetStaticProps, InferGetStaticPropsType } from "next";

import {
  fetchCountryResults,
  goalRequest,
  goalsRequest,
} from "../../utils/requests";
import { CountryData, Goals } from "../../types";

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
      <section data-cy-countries>
        <h3>Countries score for - {goalTitle}</h3>
        <div className="grid grid-cols-3 gap-6">
          {countriesData.map((country) => {
            const score = {
              name: country.Name,
              rating: country[`Goal_${goal.code}_Rating`] as string,
              trend: country[`Goal_${goal.code}_Trend`] as string,
              score: (+country[`Goal_${goal.code}_Score`]).toFixed(2),
            };

            return (
              <div
                key={country.ID}
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
                    {score.trend}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
