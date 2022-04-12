import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import { ICard } from "../types/ICard";

const useStyles = makeStyles({
    root: {
        width: 250,
        margin: 10
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export function SimpleCard({language, html_url, name, description }: ICard) {
    const classes = useStyles();
    const router = useRouter();

    const more = (ev: React.MouseEvent) => {
        ev.stopPropagation();
        router.push(html_url);
    }

    const onClick = () => {

    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    { name }
                </Typography>
                <Typography variant="body2" component="p">
                   { description }
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    { language }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={more}>Learn More</Button>
            </CardActions>
        </Card>
    );
}
