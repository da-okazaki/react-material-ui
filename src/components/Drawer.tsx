import { FC, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
//import { history } from 'history';
import {
  Drawer as DrawerMenu,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { makeStyles, createStyles, useTheme } from "@material-ui/core";
import { IconClickable } from "components/Icon/Icon";

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
  return (
    <DrawerMenu variant="persistent" anchor="left" open={open}>
      <div className={classes.drawerHeader}>
        <IconClickable
          name={theme.direction === "ltr" ? "chevron_left" : "chevron_right"}
          iconColor="black"
          onClick={onClick}
        />
      </div>
      <Divider />
      <List>
        {DrawerList.map((items) => (
          <ListItem button key={items.label}>
            <Link to={items.route}>
              <ListItemText primary={items.label} />
            </Link>
          </ListItem>
        ))}
      </List>
    </DrawerMenu>
  );
};
export default Drawer;
