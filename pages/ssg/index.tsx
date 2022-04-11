import { GetStaticProps } from "next";

export default function Component({time}: {time: string}) { return <div>{time}</div> }

export const getStaticProps: GetStaticProps = async (conext) => {
    return {
        props: {
            time: new Date().getSeconds(),
        },
        revalidate: 10
    };
};
