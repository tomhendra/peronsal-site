---
title: 'React & AWS Amplify with GraphQL'
subtitle: 'Use the AWS Amplify CLI to configure your React app with a GraphQL back.'
date: '2021-04-30'
updated: '2022-04-03'
coverImage: 'graph-data'
alt: 'Abstract graph data visualisation'
caption: 'Photo by Lucas DC'
tags:
  - 'AWS'
  - 'Auth'
description:
  'Get up and running quickly with Create React App and the Amplify CLI to create a
GraphQL powered full stack app, with authentication and authorization for
user-specific data.'
---

## Steps

1. React frontend via Create React App with TypeScript
2. Amplify GraphQL API backend via AppSync
3. Amazon Cognito User Pools for owner based authorization of access to data

The end result is an app that supports authentication by username and password,
where each user has their own data which is inaccessible to other users.

Please refer to the Amplify CLI installation instructions
[in the docs](https://docs.amplify.aws/cli/start/install)if you don't already
have the CLI tool installed. Also, in the interest of conciseness we will skip
over styling.

## Setup

### Create a new React App

Generate a new React app and change directory.

```shell
npx create-react-app amplify-demo --template typescript --use-npm
cd amplify-demo
```

### Setup Amplify

Start the Amplify initialization to setup the project and provision resources in
the cloud.

```shell
amplify init
```

We can accept the default suggestions.

```shell
? Enter a name for the project amplifydemo
The following configuration will be applied:

Project information
| Name: amplifydemo
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: npm run-script build
| Start Command: npm run-script start

? Initialize the project with the above configuration? (Y/n)
```

Select your AWS profile (as you don't have this setup, again, please refer to
the Amplify CLI installation instructions
[in the docs](https://docs.amplify.aws/cli/start/install))

```shell
? Select the authentication method you want to use: (Use arrow keys)
❯ AWS profile
  AWS access keys
```

## Configure API

We now need to add the GraphQL API for React to interface with.

```shell
amplify add api
```

Select GraphQL.

```shell
? Please select from one of the below mentioned services: (Use arrow keys)
❯ GraphQL
  REST
```

Enter a name for the API.

```shell
? Provide API name: amplifydemo
```

Choose Amazon Cognito User Pool for authorization. This is the setting that
allows users to access their through the API.

```shell
? Choose the default authorization type for the API
  API key
❯ Amazon Cognito User Pool
  IAM
  OpenID Connect
```

Choose the default authentication and security configuration & username.

```shell
 Do you want to use the default authentication and security configuration? (Use arrow keys)
❯ Default configuration

 How do you want users to be able to sign in? (Use arrow keys)
❯ Username
```

When asked if you wish to configure advanced settings select No, I am done.

```shell
? Do you want to configure advanced settings?
❯ No, I am done.
  Yes, I want to make some additional changes.

? Do you want to configure advanced settings for the GraphQL API
❯ No, I am done.
  Yes, I want to make some additional changes.
```

Choose `n` for an annotated GraphQL schema, choose the default schema template,
select `y` to edit the schema, and pick your code editor of choice to launch it
and edit the schema.

```shell
? Do you have an annotated GraphQL schema? (y/N) n
❯ Single object with fields (e.g., “Todo” with ID, name, description)
? Do you want to edit the schema now? (y/N) y
? Choose your default editor: (Use arrow keys)
❯ Visual Studio Code
```

Paste your schema into the `schema.graphql` file. The `@auth` directive is the
important part which allows a user to be the owner of their data, as opposed to
the default which is all data is accessible to any authenticated user. This is
the part I find most tutorials online do not mention.

```graphql
# example schema
type Task @model @auth(rules: [{allow: owner}]) {
  id: ID!
  title: String!
  description: String!
  createdAt: AWSDateTime
}
```

## Configure Amplify for React

Install `aws-amplify` from npm.

```bash
npm i aws-amplify
```

Add the following to `src/index.tsx` underneath the import statements to
configure Amplify for React.

```js
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);
```

## Generate GraphQL Schema, Types & Deploy the API

Run the command `amplify push` to build all your local backend resources and
provision it in the cloud.

```shell
amplify push
```

You will be promted to generate code which will create GraphQL queries,
mutations and subscriptions as well as TypeScript types to use for interacting
with the AWS Amplify API. Choose TypeScript as the language and define your
preference for where the output should be generated.

```shell
? Do you want to generate code for your newly created GraphQL API (y)
? Choose the code generation language target
  javascript
❯ typescript
  flow
? Enter the file name pattern of graphql queries, mutations and subscriptions (src/graphql/**/*.ts)
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptio
ns - (y)
? Enter maximum statement depth [increase from default if your schema is deeply nested] (2)
? Enter the file name for the generated code (src/API.ts)
```

Setup will take a few minutes.

## Troubleshooting

Add the following to `src/App.tsx` to log activity to the console.

```js
import Amplify from 'aws-amplify';
Amplify.Logger.LOG_LEVEL = 'DEBUG';
```

## Next Steps

In a subsequent post I will cover how to wire up the frontend with a custom
authentication flow, so as to use our own components rather than those provided
to us by the AWS team.
