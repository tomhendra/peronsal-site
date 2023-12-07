import { Head } from "$fresh/runtime.ts";
import { Container, Header, Link } from "../components/index.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <Container>
        <Header>404</Header>
        <p>
          The page you were looking for doesn't exist.{" "}
          <Link href="/">Go back home</Link>
        </p>
      </Container>
    </>
  );
}
