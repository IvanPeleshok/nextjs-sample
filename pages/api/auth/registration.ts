import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import { IAuthBody } from "../../../types/IAuthBody";
import bcrypt from "bcrypt";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
        await dbConnect();

        const { username, password } = req.body as IAuthBody;
        const condidate = await User.findOne({ username });

        if (condidate) {
            return res.status(400).json({ result: "Username with the same name already exists" });
        }

        const hashPassword = bcrypt.hashSync(password, 7);
        const user = new User({ username, password: hashPassword });
        await user.save();

        return res.json({ result: "Success" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ result: "Failure" });
    }
}
