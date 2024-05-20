import axios from "axios";
import {
  fetchCountryResults,
  goalRequest,
  goalsRequest,
} from "../../utils/requests";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { CountryData, Goals } from "../../types";

const GoalDetails = ({goal, countriesData}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <h1> Details {goal.code}</h1>;
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

  const countries = ["Brazil", "Finland", "France", "Russia", "China"].map(
    (country) => fetchCountryResults(country, id),
  );

  const promiseSolver = await Promise.allSettled(countries)

  const countriesData: CountryData[] = [];

  promiseSolver.forEach(promise => {
	if (promise.status === 'fulfilled') {
		countriesData.push(promise.value.data.features[0]?.attributes)
	}
  })

  return {
    props: {
      goal: data[0],
	  countriesData,
    },
  };
}) satisfies GetStaticProps<{
  goal: Goals;
  countriesData: CountryData[]
}>;
