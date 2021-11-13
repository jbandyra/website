import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "@styles/global.scss";
import "@styles/toggle.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
