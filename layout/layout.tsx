import { FC, PropsWithChildren } from "react";
import { Navbar } from "../components/Navbar";

export const Layout: FC<PropsWithChildren<{}>> = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}