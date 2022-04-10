import Link from "next/link";

export function Navbar() {
    return (
        <>
            <Link href="/">Main</Link>
            <Link href="/ssr">GetServerSideProps</Link>
            <Link href="/ssg">GetStaticProps</Link>
            <Link href="/ssg/1">GetStaticPaths</Link>
            <style jsx global>
                {`
                    a {
                        margin: 10px;
                    }
                `}
            </style>
        </>
    );
}
