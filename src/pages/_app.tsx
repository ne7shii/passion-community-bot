import { type AppType } from "next/app";
import { Mitr } from '@next/font/google';
import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const mitr = Mitr({ weight:'400'});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={mitr.className}>
      <Component {...pageProps} />
    </main>
  )
};

export default trpc.withTRPC(MyApp);
