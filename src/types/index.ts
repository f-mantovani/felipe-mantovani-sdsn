export type Goals = {
  code: string;
  title: string;
  description: string;
  uri: string;
};

export type CountryData = {
	[key: string]: string | number;
	ID: string;
	Name: string;
	Region: string;
}

export type ScoreProps = {
	name: string;
	rating: string;
	trend: string;
	score: string;
  };
