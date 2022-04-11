import Link from "next/link";

export function Navbar() {
    return (
        <>
            <Link href="/">Main</Link>
            <Link href="/ssr">GetServerSideProps</Link>
            <Link href="/ssg">GetStaticProps</Link>
            <Link href="/ssg/1">GetStaticPaths</Link>
            <div className="navbar__splitter"/>
            <style jsx global>
                {`
                    a {
                        margin-right: 10px;
                    }

                    .navbar__splitter {
                        margin: 10px;
                    }
                `}
            </style>
        </>
    );
}
