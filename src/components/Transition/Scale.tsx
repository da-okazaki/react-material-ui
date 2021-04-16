import { FC, useState } from "react";
import { makeStyles, createStyles, Zoom } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100vw",
      height: "100vh"
    },
    container: {
      width: "100px",
      height: "100px",
      backgroundColor: "blue",
      transition: "all 300ms ease-out"
    },
    containerScale: {
      width: "100px",
      height: "100px",
      backgroundColor: "blue",
      transform: "scale(2, 2)",
      transition: "all 300ms ease-out"
    }
  })
);

const Scale: FC = () => {
  const classes = useStyles();
  const [isScale, setIsScale] = useState(false);
  const onClickScale = () => {
    isScale ? setIsScale(false) : setIsScale(true);
  };
  return (
    <div className={classes.root}>
      <div
        className={isScale ? classes.containerScale : classes.container}
        onClick={() => {
          onClickScale();
        }}
      ></div>
    </div>
  );
};
export default Scale;
