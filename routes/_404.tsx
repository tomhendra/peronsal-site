import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div>
        <img
          src="/images/logo.svg"
          width="128"
          height="128"
          alt="Tom Hendra logo: cute robot"
        />
        <h1>404 - Page not found</h1>
        <p>
          The page you were looking for doesn't exist.
        </p>
        <a href="/">Go back home</a>
      </div>
    </>
  );
}
