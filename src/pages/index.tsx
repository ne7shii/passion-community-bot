import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { trpc } from "../utils/trpc";
import PlayerCount from "../components/PlayerCount";
import { useQuery } from "@tanstack/react-query";
import { fetchWhiteListCount } from "../utils/discord";
import PlayerCountv3 from "../components/PlayerCountv3";

type Props = {
  count: number
}
const Home: NextPage<Props> = (props) => {
  // const playerCount = useQuery(['player-count'], () => fetch('/api/whitelist').then(res => res.json()).then(res => res.count))
  return (
    <>
      <Head>
        <title>Passion Community</title>
        <meta name="description" content="พบกับประสบการณ์ใหม่ได้ที่ Passion Community ได้แล้ววันนี้ !" />
        <meta property="og:title" content="Passion Community" />
        <meta
          property="og:description"
          content="พบกับประสบการณ์ใหม่ได้ที่ Passion Community ได้แล้ววันนี้ !"
        />
        <meta
          property="og:image"
          content="https://passion-community.vercel.app/og.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" min-w-screen min-h-screen flex justify-center ">
        <PlayerCountv3 count={props.count} />
      </main>
    </>
  );
};

export default Home;


export async function getStaticProps() {
  const count = await fetchWhiteListCount();

  return {
    props: {
      count,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  };
}