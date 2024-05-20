# SDSN Techinical Test

[![Cypress](https://github.com/f-mantovani/felipe-mantovani-sdsn/actions/workflows/cypress.yml/badge.svg)](https://github.com/f-mantovani/felipe-mantovani-sdsn/actions/workflows/cypress.yml)

## How to run

### Using pnpm

#### Option 1

You already have it installed:

1. Run the script for build and start

```shell
pnpm build && pnpm start
```

or

1. Run the script to check the development evironment

```shell
pnpm dev
```

2. Access the [http://localhost:3000](localhost)

#### Option 2

You don't have pnpm installed, but want to check it out:

1. Execute the command to let node install pnpm, other methods of [installation](https://pnpm.io/installation)

```shell
corepack enable pnpm
```

2. Run the script for build and start

```shell
pnpm build && pnpm start
```

or

2. Run the script to check the development evironment

```shell
pnpm dev
```

3. Access the [http://localhost:3000](localhost)

### Using other package manager

1. Possible the best would be to delete the lock file and install the dependencies with your prefered method

```shell
 rm pnpm-lock.yaml

 npm install
 # or
 yarn install
```

2. Run the script for build and start

```shell
npm run build && npm start
# or
yarn build && yarn start
```

or

2. Run the script to check the development evironment

```shell
npm run dev
# or
yarn dev
```

3. Access the [http://localhost:3000](localhost)

### Challenges

#### Problems

1. The majority of my NextJs base was with the App Router
2. Using JQuery inside of Cypress
3. Understanding how the data came from the API
4. Creating a legend for the colors and arrows

#### Solutions

1. Reading the documentation and trial and error
2. A quickly search on Google solved the problem in that case followed with some trial and error to get the css property followed by another research
3. The data was a matter of analysis how the data came back and experiment a little bit
4. The colors and arrows I needed to look upon the Development report and after I found also a ranking website that I could discover each one of the specific meanings
