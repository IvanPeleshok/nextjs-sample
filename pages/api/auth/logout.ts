import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { cookies } = req;
    
    const jwt = cookies.JWT;

    if (jwt) {        
        const serialised = serialize("JWT", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: -1,
            path: "/",
        });

        res.setHeader("Set-Cookie", serialised);
    }

    res.status(200).json({ result: "Success logged out" });
}
