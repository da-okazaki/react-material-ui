import { FC } from "react";
import { Button as ButtonComponent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    width: "100px",
    margin: theme.spacing(1)
  }
}));

interface Props {
  label: string;
  color: string;
}
const Button: FC<Props> = ({ label, color }: Props) => {
  const classes = useStyles();
  return (
    <>
      <ButtonComponent
        variant="contained"
        color={color === "primary" ? "primary" : "secondary"}
        className={classes.buttonStyle}
      >
        {label}
      </ButtonComponent>
    </>
  );
};
export default Button;
