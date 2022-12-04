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
        <link rel="icon" href="/favicon.ico" sizes="any"></link>
        <link rel="icon" href="/icon.svg" type="image/svg+xml"></link>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link rel="manifest" href="/manifest.webmanifest"></link>
      </Head>

      <Placeholder />
    </>
  );
}
