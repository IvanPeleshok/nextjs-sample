import { GetServerSideProps } from "next";

export default ({ time }: { time: string }) => <div>{time}</div>;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            time: new Date().getSeconds(),
        },
    };
};
