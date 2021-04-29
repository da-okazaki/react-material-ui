import React from "react";
import { Card, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      height: 10,
      fontSize: "10px",
      textAlign: "center"
    },
    cardStyle: {
      margin: "0px auto",
      width: "8rem",
      height: "12rem",
      background: "rgba(255, 255, 255, 0.3)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      borderRadius: "10px",
      backdropFilter: "blur(2px)"
    }
  })
);

interface Props {
  color: string;
}
const Glassmorphism: React.FC<Props> = ({ color }: Props) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardStyle} style={{ background: color }}></Card>
  );
};
export default Glassmorphism;
