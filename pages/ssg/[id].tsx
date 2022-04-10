import { GetStaticPaths, GetStaticProps } from "next";

export default function Component({time}: {time: string}) { return <div>{time}</div> }

export const getStaticPaths: GetStaticPaths = async (context) => {
    return {
        paths: [
            {   params: {   id: "1" }   },
            {   params: {   id: "2" }   },
        ],
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (conext) => {
    return {
        props: {
            time: new Date().getSeconds(),
        },
    };
};
