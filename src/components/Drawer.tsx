/* React */
import React, { FC, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
/* Material UI */
import {
  Drawer as DrawerMenu,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  useTheme,
  Typography
} from "@material-ui/core";
/* Components */
import { IconClickable } from "components/Icon/Icon";
import { ThemeCard } from "components";
/* Constants */
import DrawerList from "const/DrawerList";

const useStyles = makeStyles((theme) =>
  createStyles({
    drawerHeader: {
      width: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar
    },
    categoryStyle: {
      fontSize: "18px",
      color: "#5f6368",
      letterSpacing: ".1rem",
      marginLeft: theme.spacing(1.5)
    },
    themeCardStyle: {
      display: "flex"
    },
    spacingStyle: {
      margin: theme.spacing(2)
    }
  })
);

interface Props {
  open: boolean;
  onClick: (ev: SyntheticEvent<HTMLButtonElement>) => void;
}
const Drawer: FC<Props> = ({ open, onClick }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("darkMode") === "on" ? true : false
  );

  const onClickThemeChange = () => {
    console.log("darkMode", darkMode);
    if (darkMode) {
      localStorage.setItem("darkMode", "off");
      setDarkMode(false);
    } else {
      localStorage.setItem("darkMode", "on");
      setDarkMode(true);
    }
  };
  return (
    <DrawerMenu variant="persistent" anchor="left" open={open}>
      <div className={classes.drawerHeader}>
        <IconClickable
          name={theme.direction === "ltr" ? "chevron_left" : "chevron_right"}
          iconColor="black"
          onClick={onClick}
        />
      </div>
      <List>
        {/********** Theme **********/}
        <Typography variant="h2" className={classes.categoryStyle}>
          Theme
        </Typography>
        <div className={classes.spacingStyle}></div>
        <div className={classes.themeCardStyle}>
          <ThemeCard
            backgroundColor="#FFFFFF"
            onClickThemeChange={onClickThemeChange}
          />
          <ThemeCard
            backgroundColor="#424242"
            onClickThemeChange={onClickThemeChange}
          />
        </div>
        <div className={classes.spacingStyle}></div>
        <Divider />

        {DrawerList.map((List: any) => {
          const listdata = List.list_data;
          return (
            <>
              <div className={classes.spacingStyle}></div>
              <Typography variant="h2" className={classes.categoryStyle}>
                {List.category}
              </Typography>
              {listdata.map((items: any) => {
                return (
                  <ListItem button key={items.label}>
                    <Link to={items.route}>
                      <ListItemText primary={items.label} />
                    </Link>
                  </ListItem>
                );
              })}
              <div className={classes.spacingStyle}></div>
              <Divider />
            </>
          );
        })}
      </List>
    </DrawerMenu>
  );
};
export default Drawer;
