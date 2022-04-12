import React from "react";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import Home from "@material-ui/icons/Home";
import AccountBalanceTwoTone from "@material-ui/icons/AccountBalanceTwoTone";
import Lock from "@material-ui/icons/Lock";
import LockOpen from "@material-ui/icons/LockOpen";
import HowToReg from "@material-ui/icons/HowToReg";
import axios from "axios";

export interface IRoute {
    title: string;
    route?: string;
    action?: (callback?: Function) => Promise<void>;
    Icon: OverridableComponent<SvgIconTypeMap>;
}

interface IRoutes {
    readonly [key: string]: IRoute;
}

export const routes = {
    home: {
        title: "Home",
        route: "/",
        Icon: Home,
    },
    login: {
        title: "Login",
        route: "/login",
        Icon: LockOpen,
    },
    registration: {
        title: "Registration",
        route: "/registration",
        Icon: HowToReg,
    },
    logout: {
        title: "Logout",
        action: async (callback: Function) => {
            await axios.get("/api/auth/logout");
            callback && callback('/');
        },
        Icon: Lock,
    },
    repositories: {
        title: "Repositories",
        route: "/repositories",
        Icon: AccountBalanceTwoTone,
    },
    ssg: {
        title: "SSG",
        route: "/ssg",
        Icon: AccountBalanceTwoTone,
    }
} as IRoutes;

export const routerKeys = Object.keys(routes);
