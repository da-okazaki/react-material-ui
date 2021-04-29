/* React */
import { FC, useState, useEffect } from "react";
/* Material UI */
import {
  makeStyles,
  createStyles,
  Grid,
  Paper,
  Fab,
  Collapse
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
/* Create Components */
import { Icon, IconClickable } from "../Icon/Icon";
/* Import Swiper React components */
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
/* Import Swiper styles */
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

/* Material UI Styles */
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      height: "90vh",
      width: "100vw",
      position: "relative",
      zIndex: 0
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh",
      width: "100%",
      position: "relative",
      zIndex: 0
    },
    wrapperStyle: {
      height: "30%",
      width: "100%",
      position: "relative",
      zIndex: 0
    },
    paper: {
      margin: "10px",
      height: "90%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: theme.palette.text.primary,
      backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
      position: "relative",
      zIndex: 0
    },
    floatingButtonArea: {
      bottom: "0px",
      position: "absolute",
      zIndex: 100
    },
    buttonStyle: {
      margin: "0px 30px"
    },
    alertArea: {
      width: "300px",
      position: "absolute",
      zIndex: 100
    }
  })
);

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const GridSwiper: FC = () => {
  const classes = useStyles();
  const GRID_SWIPER_DISPLAY_NUMBER = 6;
  const [isGridLayout, setIsGridLayout]: any = useState(4);
  const [cardList, setCardList] = useState([0, 0, 0, 0]);
  let swiperSlides: any = [[]];
  const [open, setOpen] = useState(false);

  let dimensionalElement = 0;
  let twoDimensionalElement = 0;
  for (const idx in cardList) {
    if (dimensionalElement >= GRID_SWIPER_DISPLAY_NUMBER) {
      dimensionalElement = 0;
      twoDimensionalElement += 1;
      swiperSlides.push([[]]);
    }
    swiperSlides[twoDimensionalElement][dimensionalElement] = cardList[idx];
    dimensionalElement += 1;
  }

  useEffect(() => {
    if (cardList.length > GRID_SWIPER_DISPLAY_NUMBER) {
      setIsGridLayout(4);
    } else {
      setIsGridLayout(6);
    }
  }, [cardList]);

  const onClickGridAddCount = () => {
    setOpen(false);
    setCardList([...cardList, 0]);
  };
  const onClickGridRemoveCount = () => {
    if (cardList.length === 0) {
      setOpen(true);
    } else {
      setCardList(cardList.slice(1));
    }
  };

  return (
    <div className={classes.root}>
      {/* GridView */}
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        observer={true}
        className={classes.root}
      >
        {swiperSlides.map((cards: number[]) => (
          <SwiperSlide className={classes.root}>
            <Grid container className={classes.container}>
              {cards.map(() => (
                <Grid
                  item
                  xs={6}
                  sm={isGridLayout}
                  className={classes.wrapperStyle}
                >
                  <Paper className={classes.paper}></Paper>
                </Grid>
              ))}
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* FloatingButton */}
      <div className={classes.floatingButtonArea}>
        <Fab
          color="primary"
          className={classes.buttonStyle}
          onClick={() => onClickGridAddCount()}
        >
          <Icon name="add" iconColor="white" />
        </Fab>
        <Fab
          color="secondary"
          className={classes.buttonStyle}
          onClick={() => onClickGridRemoveCount()}
        >
          <Icon name="remove" iconColor="white" />
        </Fab>
      </div>

      {/* Alert */}
      <div className={classes.alertArea}>
        <Collapse in={open}>
          <Alert
            severity="error"
            action={
              <IconClickable
                iconColor="black"
                onClick={() => setOpen(false)}
                name="close"
              />
            }
          >
            I can't reduce it any more!
          </Alert>
        </Collapse>
      </div>
    </div>
  );
};
export default GridSwiper;
