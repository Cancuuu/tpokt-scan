import "../styles/globals.css";
import type { AppProps } from "next/app";
import MintedTxsProvider from "../context/mintedDataProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MintedTxsProvider>
      <Component {...pageProps} />
    </MintedTxsProvider>
  );
}

export default MyApp;
