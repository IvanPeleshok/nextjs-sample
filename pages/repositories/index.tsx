import { Grid } from "@material-ui/core";
import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { SimpleCard } from "../../components/SimpleCard";
import { MainLayout } from "../../layout/MainLayout";
import { ICard } from "../../types/ICard";

interface IHomeProps {
    cards: ICard[];
}

const Home: NextPage<IHomeProps> = ({ cards }) => {
    return (
        <MainLayout>
            <Grid container >
                {cards.map((card) => (
                    <span key={card.id}><SimpleCard {...card} /></span>
                ))}
            </Grid>
        </MainLayout>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const cards = await axios.get("https://api.github.com/users/IvanPeleshok/repos");
    return {
        props: {
            cards: cards.data,
        },
        revalidate: 30
    };
};

export default Home;
