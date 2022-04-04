---
title: 'React & AWS Amplify with DataStore'
subtitle: 'Use the AWS Amplify CLI to configure your React app with a Datastore backend for offline functionality.'
date: '2021-04-30'
updated: '2022-04-03'
coverImage: 'remote-cabin'
alt: 'person sitting in a remote area'
caption: 'Photo by Felix Mittermeier'
tags:
  - 'AWS'
  - 'Auth'
description:
  'Get up and running quickly with Create React App and the Amplify CLI to create a
full stack app powered by Amplify DataStore for easy offline functionality, plus
authentication and authorization for user-specific data.'
---

## Steps

1. React frontend via Create React App with TypeScript
2. Amplify backend configured to use DataStore
3. Amazon Cognito User Pools for owner based authorization of access to data

The end result is an app that supports authentication by username and password,
where each user has their own data which is inaccessible to others.

If you don't already have an AWS account or the Amplify CLI setup, please refer
to the Amplify CLI installation instructions
[in the docs](https://docs.amplify.aws/cli/start/install). Also, in the interest
of conciseness we will skip over styling and get straight to the point.

## Setup

Let's start with the bare bones setup.

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

## Configure API & DataStore

We now need to add the API for React to interface with.

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

When asked if you wish to configure advanced settings (for the authentication
and security configuration) select No.

```shell
 Do you want to configure advanced settings?
❯ No, I am done.
  Yes, I want to make some additional changes.
```

Next, when asked if you wish to configure advanced settings for the GraphQL API,
select Yes.

Choose No for `Configure additional auth types?`, but we do need to Enable
conflict detection in order to setup DataStore. The resolution strategy should
be set to `Auto Merge`.

```shell
? Do you want to configure advanced settings for the GraphQL API
  No, I am done.
❯ Yes, I want to make some additional changes.

? Configure additional auth types? No
? Enable conflict detection? (y/N) y
? Select the default resolution strategy (Use arrow keys)
❯ Auto Merge
```

Choose `n` for the annotated GraphQL schema, choose the default schema template,
select `y` to edit the schema, and pick your code editor of choice.

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

### Generate the API Schema

To generate the schema for React to interact with DataStore, run the following
command.

```shell
amplify codegen models
```

This will create a directory `src/models` in the react app, containing the
models required for calling the DataStore API functions, along with the
TypeScript definitions.

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

## Syncing Data to Cloud

It is recommended to develop without cloud synchronization enabled initially so
you can change the schema as your application takes shape without the impact of
having to update the provisioned backend.

Once you are satisfied with the schema, setup cloud synchronization with
`amplify push`.

```shell
amplify push
```

You will be prompted to generate GraphQL schema. Since we are using the
DataStore API this is not necessary.

```shell
Do you want to generate code for your newly created GraphQL API (Y/n) n
```

Setup will likely take a few minutes. Once finished, the data saved locally will
be synchronized to the cloud automatically.

## Troubleshooting

Add the following to `src/App.tsx` to log DataStore activity to the console.
This can be useful to check that the data is flowing correctly, and what data is
being transferred.

```js
import Amplify from 'aws-amplify';
Amplify.Logger.LOG_LEVEL = 'DEBUG';
```

## Next Steps

In a subsequent post I will cover how to wire up the frontend with a custom
authentication flow, so as to use our own components rather than those provided
to us by the AWS team.
