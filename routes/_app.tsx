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
          content="Builder of React Native apps in Salamanca, Spain."
        />
        <link rel="stylesheet" href="./styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
