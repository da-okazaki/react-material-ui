import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  createStyles
} from "@material-ui/core/styles";
import * as colors from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import { IconClickable } from "./Icon/Icon";

const useStyles = makeStyles((theme) =>
  createStyles({
    buttonStyle: {
      top: theme.spacing(1),
      right: theme.spacing(1),
      position: "absolute",
      zIndex: 50
    }
  })
);

const Theme: React.FC = ({ children }) => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("darkMode") === "on" ? true : false // データ読み込み
  );

  const onClickDarkModeChange = () => {
    if (darkMode) {
      localStorage.setItem("darkMode", "off"); // データ追加
      setDarkMode(false);
    } else {
      localStorage.setItem("darkMode", "on"); // データ追加
      setDarkMode(true);
    }
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.blue[800]
      },
      type: darkMode ? "dark" : "light"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.buttonStyle}>
        <IconClickable
          iconColor={darkMode ? "black" : "white"}
          name={darkMode ? "brightness_2" : "brightness_7"}
          onClick={onClickDarkModeChange}
        />
      </div>
      {children}
    </ThemeProvider>
  );
};
export default Theme;
