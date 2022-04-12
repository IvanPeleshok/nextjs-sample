import { verify } from "jsonwebtoken";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const secret = process.env.SECRET!;
const baseUrl = process.env.BASE_URL!;

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    // const { cookies } = req;
    // const jwt = cookies.JWT;
    // const url = req.url;

    // if (url.includes("/login") || url.includes("/registration")) {
    //     return NextResponse.next();
    // }

    // if (!jwt) {
    //     return NextResponse.redirect(baseUrl + "/login");
    // }

    // try {
    //     verify(jwt, secret);

    //     NextResponse.next();
    // } catch (e) {
    //     NextResponse.redirect(baseUrl + "/login");
    // }
}
