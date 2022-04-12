import { sign } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import bcrypt from "bcrypt";
import { IAuthBody } from "../../../types/IAuthBody";

const secret = process.env.SECRET!;

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.body as IAuthBody;

    await dbConnect();

    const user = await User.findOne({ username });

    if (!user) {
        return res.status(400).json({ result: "User is not found" });
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
        return res.status(401).json({ password: "Incorrect password" });
    }

    const token = sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
            username,
        },
        secret
    );

    const serialised = serialize("JWT", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
    });

    res.setHeader("Set-Cookie", serialised).json({ result: "Successful login" });
}
