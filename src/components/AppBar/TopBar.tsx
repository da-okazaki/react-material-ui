import { FC, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  createStyles
} from "@material-ui/core";

import Drawer from "components/Drawer";
import { IconClickable } from "components/Icon/Icon";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "48px",
      display: "flex",
      justifyContent: "center"
    },
    title: {
      flexGrow: 1,
      display: "flex",
      textAlign: "left",
      marginLeft: theme.spacing(2)
    }
  })
);

const TopBar: FC = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const onClickDrawerOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar variant="dense">
        <IconClickable
          name="menu"
          iconColor="white"
          onClick={onClickDrawerOpen}
        />
        <Drawer open={open} onClick={onClickDrawerOpen} />
        <Typography variant="subtitle1" className={classes.title}>
          Material UI
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
