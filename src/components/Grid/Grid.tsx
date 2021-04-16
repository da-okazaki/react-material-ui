import { FC } from "react";
import { makeStyles, Grid as GridComponent, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    height: "90vh",
    width: "100vw"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

interface Props {}
const Grid: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridComponent container spacing={3}>
        <GridComponent item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </GridComponent>
        <GridComponent item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </GridComponent>
        <GridComponent item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </GridComponent>
        <GridComponent item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </GridComponent>
        <GridComponent item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </GridComponent>
        <GridComponent item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </GridComponent>
        <GridComponent item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </GridComponent>
      </GridComponent>
    </div>
  );
};
export default Grid;
