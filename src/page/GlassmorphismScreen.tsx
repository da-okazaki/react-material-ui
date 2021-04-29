import React from "react";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import { Glassmorphism } from "../components/index";
import { headerHeight } from "../utils/style";
const background = require("../assets/image/glassmorphism_image.jpg");

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: `calc(100vh - ${headerHeight}px)`,
      minWidth: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${background})`
    },
    containerStyle: {
      width: "90vw",
      maxWidth: "400px"
    },
    gridStyle: {
      padding: `8px 0px`
    }
  })
);

const GlassmorphismScreen: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.containerStyle}>
        <Grid xs={6} className={classes.gridStyle}>
          <Glassmorphism color="rgba(255, 255, 255, 0.40)" />
        </Grid>
        <Grid xs={6} className={classes.gridStyle}>
          <Glassmorphism color="rgba( 230, 68, 92, 0.30 )" />
        </Grid>
        <Grid xs={6} className={classes.gridStyle}>
          <Glassmorphism color="rgba(90, 150, 0, 0.40)" />
        </Grid>
        <Grid xs={6} className={classes.gridStyle}>
          <Glassmorphism color="rgba( 42, 91, 235, 0.40)" />
        </Grid>
      </Grid>
    </div>
  );
};
export default GlassmorphismScreen;
