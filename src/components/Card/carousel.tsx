import { FC, useState, useEffect } from "react";
import { Card, CardContent, makeStyles, createStyles } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import list from "../../const/YoutubeList";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "48px",
      width: "100vw",
      height: "auto",
      minHeight: "100%",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column"
      },
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row"
      }
    },
    layoutStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "90vw",
      height: "70vh",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column"
      },
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row"
      }
    },
    sliderStyle: {
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        margin: "10px"
        //height: "vh"
      },
      [theme.breakpoints.up("sm")]: {
        //width: "24vw",
        //height: "100%",
        width: "30%"
        //minHeight: "100%"
        //minHeight: "36vw"
      }
    },
    pinnedCardStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      backgroundColor: "red",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: "64vh",
        marginBottom: "5px"
      },
      [theme.breakpoints.up("sm")]: {
        width: "64vw",
        height: "100%",
        marginRight: "5px"
      }
    },
    remoteCardStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "20vh",
      width: "9vh",
      color: "white",
      backgroundColor: "blue"
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      fontSize: "10px"
    }
  })
);

const settingsHorizon = {
  dots: true,
  arrows: true,
  vertical: false,
  infinite: false,
  centerPadding: "60px",
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipeToSlide: true,
  focusOnSelect: true,
  verticalSwiping: false
};

const settingsVertical = {
  dots: true,
  arrows: true,
  vertical: true,
  infinite: false,
  centerPadding: "200px",
  slidesToShow: 3,
  slidesToScroll: 3,
  swipeToSlide: true,
  focusOnSelect: true,
  verticalSwiping: true
};

const Carousel: FC = () => {
  const classes = useStyles();
  const [isPortrait, setIsPortrait] = useState(false);

  function setResult() {
    const width = window.parent.screen.width;
    const height = window.parent.screen.height;
    return width > height ? false : true;
  }

  window.onload = () => {
    console.log("onload");
    setIsPortrait(setResult());
  };

  window.addEventListener("orientationchange", () => {
    console.log("orientationchange");
    setIsPortrait(setResult());
  });

  const settings = isPortrait
    ? { ...settingsHorizon }
    : { ...settingsVertical };

  const listItems = list.map((lists) => (
    <Card className={classes.remoteCardStyle}>
      <CardContent className={classes.content}>
        <b>RemoteStream</b>
      </CardContent>
    </Card>
  ));
  return (
    <div className={classes.root}>
      <div className={classes.layoutStyle}>
        <Card className={classes.pinnedCardStyle}>
          <CardContent className={classes.content}>
            <b>PinnedStream</b>
          </CardContent>
        </Card>
        <Slider {...settings} className={classes.sliderStyle}>
          {listItems}
        </Slider>
      </div>
    </div>
  );
};
export default Carousel;
