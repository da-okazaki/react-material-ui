import { FC } from "react";
import {
  Card as CardComponent,
  CardContent,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    width: "100px"
  }
}));

interface Props {
  image: any;
}
const Card: FC<Props> = ({ image }: Props) => {
  const classes = useStyles();
  return (
    <>
      <CardComponent className={classes.cardStyle}>
        <CardContent>
          <img src={image} />
          <Typography variant="subtitle2">Card</Typography>
        </CardContent>
      </CardComponent>
    </>
  );
};
export default Card;

interface Props {
  image: any;
}
const CardMovie: FC<Props> = ({ image }: Props) => {
  const classes = useStyles();
  return (
    <>
      <CardComponent className={classes.cardStyle}>
        <CardContent>
          <img src={image} />
          <Typography variant="subtitle2">Card</Typography>
        </CardContent>
      </CardComponent>
    </>
  );
};
