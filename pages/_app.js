import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig>
        <GlobalStyle value={{ fetcher }} />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
