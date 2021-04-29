import { FC } from "react";
import { makeStyles, createStyles } from "@material-ui/core";

import background from "../assets/image/3d_elements_mobile.jpg";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: `calc(100vh - 48px)`,
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${background})`
    }
  })
);

const ElementsUIScreen: FC = () => {
  const classes = useStyles();
  return <div className={classes.root} />;
};
export default ElementsUIScreen;
