import React from "react";
import { makeStyles, createStyles, Card } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    cardStyle: {
      margin: "8px",
      width: "48px",
      height: "32px"
    }
  })
);

interface Props {
  backgroundColor: string;
  onClickThemeChange: () => void;
}
const ThemeCard: React.FC<Props> = ({
  backgroundColor,
  onClickThemeChange
}: Props) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.cardStyle}
      style={{ backgroundColor: backgroundColor }}
      onClick={onClickThemeChange}
    ></Card>
  );
};
export default ThemeCard;
