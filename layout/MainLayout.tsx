import { Container, Grid } from "@material-ui/core";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../components/Navbar";
import { resources } from "../utils/resources";

interface IMainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
}

export const MainLayout: FC<PropsWithChildren<IMainLayoutProps>> = ({ title, description, keywords, children }) => {
    return (
        <>
            <Head>
                <title>{title ?? resources.title}</title>
                <meta name="description" content={description ?? resources.description} />
                <meta name="keywords" content={keywords ?? resources.keywords} />
            </Head>
            <Container maxWidth={false}>
                <Grid container alignContent="center" direction="column" justifyContent="center">
                    <Navbar />
                    <span style={{marginLeft: 240}}>{children}</span>
                </Grid>
            </Container>
        </>
    );
};
