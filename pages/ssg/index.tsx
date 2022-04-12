import { GetStaticProps } from "next";
import { MainLayout } from "../../layout/MainLayout";


export default function Component({time}: {time: string}) { return <MainLayout>{time}</MainLayout> }

export const getStaticProps: GetStaticProps = async (conext) => {
    return {
        props: {
            time: new Date().getSeconds(),
        },
        revalidate: 10
    };
};
