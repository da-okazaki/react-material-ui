import { FC } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  createStyles
} from "@material-ui/core";
import YouTube from "react-youtube";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: 8,
      marginRight: 8
    },
    media: {
      width: "150px",
      height: "150px"
    },
    content: {
      height: 10,
      fontSize: "10px",
      textAlign: "center"
    }
  })
);

interface Props {
  label: string;
  videoId: string;
}
const YoutubeCard: FC<Props> = ({ label, videoId }) => {
  const classes = useStyles();
  const opts = {
    width: "150px",
    height: "150px",
    showRelatedVideos: true,
    playsInline: true
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <YouTube videoId={videoId} opts={opts} />
      </CardActionArea>
      <CardContent className={classes.content}>
        <b>{label}</b>
      </CardContent>
    </Card>
  );
};
export default YoutubeCard;
