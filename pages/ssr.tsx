import { GetServerSideProps } from "next";

export default function Component({time}: {time: string}) { return <div>{time}</div> }

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            time: new Date().getSeconds(),
        },
    };
};
