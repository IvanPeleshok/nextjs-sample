import { Grid } from "@material-ui/core";
import Link from "next/link";

export function Navbar() {
    return (
        <Grid container alignContent="center" justifyContent="space-between">
            <Link href="/">Main</Link>
            <Link href="/ssr">GetServerSideProps</Link>
            <Link href="/ssg">GetStaticProps</Link>
            <Link href="/ssg/1">GetStaticPaths</Link>
            <div className="navbar__splitter"/>
            <style jsx global>
                {`
                    a {
                        font-size: 1.2rem;
                        margin-right: 10px;
                        text-decoration: none;
                        color: white;
                        border: 1px solid white;
                        padding: 5px;
                        border-radius: 10px;
                        opacity: 0.6;
                        transition: all 0.3s;
                    }

                    a:hover {
                        opacity: 1;
                        transform: scale(0.9);
                    }

                    .navbar__splitter {
                        margin: 10px 0;
                        border-bottom: 2px solid white;
                        height: 1px;
                        width: 100%;
                    }
                `}
            </style>
        </Grid>
    );
}
