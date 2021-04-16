import { FC, useState } from "react";
import { makeStyles, createStyles, Slide } from "@material-ui/core";

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
    buttonArea: {
      position: "relative",
      zIndex: 10,
      width: "100px",
      height: "100px",
      backgroundColor: "red"
    },
    buttonArea2: {
      position: "relative",
      zIndex: 10,
      width: "100px",
      height: "100px",
      backgroundColor: "blue"
    },
    title: {
      flexGrow: 1,
      display: "flex",
      textAlign: "left",
      marginLeft: theme.spacing(2)
    }
  })
);

interface Props {}
const Fade: FC<Props> = () => {
  const classes = useStyles();
  const [isSlide, setIsSlide] = useState(true);

  const onClickHandle = () => {
    isSlide ? setIsSlide(false) : setIsSlide(true);
  };
  return (
    <div className={classes.root}>
      <Slide direction="down" in={isSlide} timeout={300}>
        <div
          className={classes.buttonArea2}
          onClick={() => onClickHandle()}
        ></div>
      </Slide>
      <div>
        <button onClick={() => onClickHandle()}>Fade</button>
      </div>
      <Slide direction="up" in={isSlide} timeout={300}>
        <div
          className={classes.buttonArea}
          onClick={() => onClickHandle()}
        ></div>
      </Slide>
    </div>
  );
};
export default Fade;
