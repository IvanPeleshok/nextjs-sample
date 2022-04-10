import { GetStaticProps } from "next";

export default ({ time }: { time: string }) => <div>{time}</div>;

export const getStaticProps: GetStaticProps = async (conext) => {
    return {
        props: {
            time: new Date().getSeconds(),
        },
        revalidate: 60
    };
};
