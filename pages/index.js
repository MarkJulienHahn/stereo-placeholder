import Head from "next/head";
import Placeholder from "../components/Placeholder";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stereo Typefaces®</title>
        <meta
          name="description"
          content="Stereo Typefaces® is an independent type lable, based in Berlin."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Placeholder />
    </>
  );
}
