import type { AppProps } from "next/app";
import { Layout } from "../layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
