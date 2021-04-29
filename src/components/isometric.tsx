import { FC } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ReactLottie from "react-lottie";
import * as animationData from "../assets/Lottie/30331-isometric.json";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    lottieStyle: {
      width: "100vw",
      height: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "3%",
      marginRight: "5%"
    }
  })
);

const Isometric: FC = () => {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.lottieStyle}>
        <ReactLottie options={defaultOptions} height="80%" width="100%" />
      </div>
    </div>
  );
};
export default Isometric;
