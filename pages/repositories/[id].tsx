import { MainLayout } from "../../layout/MainLayout";
import { SimpleCard } from "../../components/SimpleCard";
import { Grid } from "@material-ui/core";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import { ICard } from "../../types/ICard";

export default function Repositories(props: ICard) {
    return (
        <MainLayout>
            <Grid container justifyContent="center" alignItems="center">
                <SimpleCard {...props} />
            </Grid>
        </MainLayout>
    );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
    const cards = await axios.get<never, { data: ICard[] }>("https://api.github.com/users/IvanPeleshok/repos");
    return {
        paths: [...cards.data.map((card) => (card.watchers ? { params: { id: String(card.id) } } : null)).filter(Boolean)] as any,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const cards = await axios.get<never, { data: ICard[] }>("https://api.github.com/users/IvanPeleshok/repos");
    const card = cards.data.filter((card) => card.id == (context.params as any).id);
    return {
        props: {
            ...card[0],
        },
    };
};
