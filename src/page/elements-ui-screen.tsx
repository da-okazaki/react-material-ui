import { FC } from "react";
import { makeStyles, createStyles } from "@material-ui/core";

//const Image = require("../assets/image/ai_image.jpg");
const background = require("../assets/image/3d_elements.jpg");
const background_1920 = require("../assets/image/3d_elements_1920.jpg");
const background_mobile = require("../assets/image/3d_elements_mobile.jpg");

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: `calc(100vh - 48px)`,
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${background_mobile})`
    }
  })
);

const ElementsUIScreen: FC = () => {
  const classes = useStyles();
  return <div className={classes.root} />;
};
export default ElementsUIScreen;
