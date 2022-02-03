---
title: 'React Router Setup for Create React App'
description: 'How to configure React Router for Create React App.'
date: '2021-05-16'
categories:
  - 'react'
  - 'react-router'
---

1. Install dependencies.

```sh
npm i react-router react-router-dom
```

2. Wrap authenticated app in Router component which acts as a context provider.

```js
// App.tsx
...
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
...
    return user ? (
      <Router>
        <AuthenticatedApp {...authenticatedAppProps} />
      </Router>
    ) : (
      <UnauthenticatedApp {...unauthenticatedAppProps} />
    );
  }
}

export default App;
```

3. Create AppRoutes in the authenticated App.

```js
// AuthenticatedApp.tsx
function AppRoutes() {
  return (
    <Routes>
      <Route path="/projects" element={<ProjectsScreen />} />
      <Route path="/projects/:projectId" element={<ProjectScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

function AuthenticatedApp({ user, signOut }: Props) {
  return <AppRoutes />
  );
}
```

4. Create the NotFoundScreen component

```js
import {Link} from 'react-router-dom';

function NotFoundScreen() {
  return (
    <div
      css={{
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        Sorry... nothing here.
        <Link to="/projects">Go home</Link>
      </div>
    </div>
  );
}

export {NotFoundScreen};
```

5. Wrap a Link around the component that previews items fetched from the API.

```js
import {Project} from 'models';
import {Link} from 'react-router-dom';
import {theme} from 'theme';

function ProjectPreview({project}: {project: Project}) {
  const {id, title, description} = project;

  return (
    <Link to={`/projects/${id}`}>
      <p>title: {title}</p>
      <p>description: {description}</p>
    </Link>
  );
}

export {ProjectPreview};
```

6. Create the screen for the fetched item itself. Grab the project ID from the
   URL with useParams and query the API with it to fetch the project data.

```js
import * as React from 'react';
import {DataStore} from 'aws-amplify';
import {useParams} from 'react-router-dom';
import {useAsync} from 'hooks';
import {Project} from 'models';

const loadingProject = {
  title: 'loading...',
  description: 'loading...',
  startAt: 'loading...',
  endAt: 'loading...',
  createdAt: 'loading...',
};

function ProjectScreen() {
  const {projectId} = useParams();
  const {data, run} = useAsync();

  React.useEffect(() => {
    run(DataStore.query(Project, projectId));
  }, [run, projectId]);

  const {title, description, startAt, endAt, createdAt} =
    data ?? loadingProject;

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>start: {startAt}</p>
      <p>end: {endAt}</p>
      <p>created: {createdAt}</p>
    </>
  );
}

export {ProjectScreen};
```

7. NavLink with highlighting using the useMatch hook

```js
import {Link, useMatch} from 'react-router-dom';
import {theme} from 'theme';

function NavLink(props: any) {
  const match = useMatch(props.to);
  return (
    <Link
      css={[
        {
          borderLeft: `5px solid transparent`,
          display: 'block',
          padding: '8px',
          width: '100%',
          color: theme.colors.text,
          borderRadius: theme.radii.sm,
          textDecoration: 'none',
          ':hover': {
            color: theme.colors.primary,
          },
        },
        match
          ? {
              borderLeft: `5px solid ${theme.colors.primary}`,
              ':hover': {
                background: theme.colors.gray[5],
              },
            }
          : null,
      ]}
      {...props}
    />
  );
}

export {NavLink};
```
