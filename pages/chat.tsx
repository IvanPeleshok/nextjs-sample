import { Button, Icon, TextField } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import styles from "../styles/chat.module.css";
import { io } from "socket.io-client";
import axios from "axios";
import Send from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

interface IMsg {
    user: string;
    message: string;
}

export default function Chat() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [connected, setConnected] = useState<boolean>(false);
    const [chat, setChat] = useState<IMsg[]>([]);
    const [message, setMessage] = useState<string>("");
    useEffect((): any => {
        const socket = io(process.env.BASE_URL!, {
            path: "/api/chat/socketio",
        });

        socket.on("connect", () => {
            setConnected(true);
        });

        socket.on("message", (message: IMsg) => {
            chat.push(message);
            setChat([...chat]);
        });

        return () => socket?.disconnect();
    }, []);

    const sendMessage = async () => {
        localStorage?.getItem('username')
        if (message) {
            const msg: IMsg = {
                user: localStorage.getItem('username')!,
                message,
            };

            const response = await axios.post("/api/chat/send", msg);
            if (response.status === 201) {
                setMessage("");
            }
        }

        inputRef?.current?.focus();
    };

    return (
        <MainLayout>
            {chat.map((el) => (
                <div>
                    <span>{el.user === localStorage.getItem('usernmae') ? "Me" : el.user}: </span>
                    <span>{el.message}</span>
                </div>
            ))}

            <span className={styles.panel}>
                <TextField label={connected ? "message" : "Connected"} className={styles.input} value={message} onChange={(ev) => setMessage(ev.target.value)} />
                <IconButton onClick={sendMessage}>
                    <Send />
                </IconButton>
            </span>
        </MainLayout>
    );
}
