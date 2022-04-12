import { GetStaticPaths, GetStaticProps } from "next";
import { MainLayout } from "../../layout/MainLayout";

export default function Component({time}: {time: string}) { return <MainLayout>{time}</MainLayout> }

export const getStaticPaths: GetStaticPaths = async (context) => {
    return {
        paths: [
            {   params: {   id: "1" }   },
            {   params: {   id: "2" }   },
        ],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (conext) => {
    return {
        props: {
            time: new Date().getSeconds(),
        },
    };
};
