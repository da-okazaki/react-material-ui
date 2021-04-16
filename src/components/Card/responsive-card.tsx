import { FC } from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import { YoutubeCard } from "../index";
import Slider from "react-slick";

import YoutubeLists from "../../const/YoutubeList";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  },
  pinnedCardStyle: {
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "red",
    [theme.breakpoints.down("xs")]: {
      height: "60vh",
      width: "90%"
    },
    [theme.breakpoints.up("sm")]: {
      height: "75vh",
      width: "80%"
    }
  },
  remoteCardStyle: {
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "blue",
    [theme.breakpoints.down("xs")]: {
      height: "20vh",
      width: "90%"
    },
    [theme.breakpoints.up("sm")]: {
      height: "75vh",
      width: "20%"
    }
  },
  YoutubeCardStyle: {}
}));

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const ResponsiveCard: FC = () => {
  const classes = useStyles();

  const listItems = YoutubeLists.map((lists) => (
    <div>
      <YoutubeCard label={lists.label} videoId={lists.videoId} />
    </div>
  ));

  return (
    <div className={classes.root}>
      <Card className={classes.pinnedCardStyle}>
        <CardContent>Pinned</CardContent>
      </Card>
      <Card className={classes.remoteCardStyle}>
        <CardContent>Remote</CardContent>
      </Card>

      {/**
      <Slider {...settings}>{listItems}</Slider>
       */}
    </div>
  );
};
export default ResponsiveCard;
