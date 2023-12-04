import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html lang="en-GB">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tom Hendra</title>
        <meta
          name="description"
          content="Software developer building apps with React Native in Salamanca, Spain."
        />
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
