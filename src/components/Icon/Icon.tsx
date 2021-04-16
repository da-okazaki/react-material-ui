import * as React from "react";
import { FC, SyntheticEvent } from "react";
import {
  createStyles,
  makeStyles,
  Icon as IconComponent,
  Fab
} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    iconStyle: {
      fontSize: "16px"
    },
    iconClickableStyle: {
      backgroundColor: "transparent",
      border: "none",
      //color: "white",
      cursor: "pointer"
    },
    buttonStyle: {
      padding: "10px",
      appearance: "none",
      //color: "black",
      cursor: "pointer"
    },
    disabledStyle: {
      opacity: 0.6,
      cursor: "not-allowed"
    }
  })
);

interface Props {
  name: string;
  iconColor: string;
  showEdge?: boolean;
  outlined?: boolean;
}
export const Icon: FC<Props> = ({ name, iconColor, outlined }: Props) => {
  const classes = useStyles();
  return (
    <IconComponent
      style={{ color: iconColor }}
      className={
        outlined ? "material-icons material-icons-outlined " : "material-icons "
      }
    >
      {name}
    </IconComponent>
  );
};

interface IconClickableProps extends Props {
  onClick: (ev: SyntheticEvent<HTMLButtonElement>) => void;
}
export const IconClickable: FC<IconClickableProps> = ({
  name,
  iconColor,
  onClick
}: IconClickableProps) => {
  const classes = useStyles();
  return (
    <button onClick={onClick} className={classes.iconClickableStyle}>
      <Icon name={name} iconColor={iconColor} />
    </button>
  );
};

interface ButtonProps extends Props {
  color: string;
  title?: string;
  disabled?: boolean;
  onClick: (ev: SyntheticEvent<HTMLButtonElement>) => void;
}
export const IconButton: FC<ButtonProps> = ({
  color,
  iconColor,
  name,
  showEdge,
  title,
  disabled,
  outlined,
  onClick
}: ButtonProps) => {
  const classes = useStyles();
  return (
    <Fab
      size="medium"
      color={color === "default" ? "default" : "secondary"}
      disabled={disabled}
      onClick={onClick}
      title={title}
      className={
        disabled
          ? classes.buttonStyle + " " + classes.disabledStyle
          : classes.buttonStyle
      }
    >
      <Icon
        name={name}
        iconColor={iconColor}
        showEdge={showEdge}
        outlined={outlined}
      />
    </Fab>
  );
};
