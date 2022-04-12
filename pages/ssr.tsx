import { GetServerSideProps } from "next";
import { MainLayout } from "../layout/MainLayout";

export default function Component({time}: {time: string}) { return <MainLayout title="Server side rendering">{time}</MainLayout> }

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            time: new Date().getSeconds(),
        },
    };
};
