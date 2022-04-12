import { FC } from "react";
import syles from '../styles/error.module.css';

interface IErrorProps {
    touched: boolean | undefined;
    error: string | undefined;
}

export const Error: FC<IErrorProps> = ({touched, error}) => {
    if (!touched && !error) {
        return <></>
    }

    return <span className={syles.error}>{error}</span>
}