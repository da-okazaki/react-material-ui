import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./styles.css";
import { TopBar } from "./components/index";
import {
  Home,
  ButtonScreen,
  GridScreen,
  GridSwiperScreen,
  CardScreen,
  CarouselScreen,
  ResponsiveCardScreen,
  TransitionFadeScreen,
  TransitionScaleScreen
} from "./page/index";

export default function App() {
  return (
    <Router>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
      />
      <div className="App">
        <TopBar />
        <div className="Layout">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/button" component={ButtonScreen} />
            <Route exact path="/grid" component={GridScreen} />
            <Route exact path="/grid_swiper" component={GridSwiperScreen} />
            <Route exact path="/card" component={CardScreen} />
            <Route exact path="/carousel" component={CarouselScreen} />
            <Route exact path="/responsive" component={ResponsiveCardScreen} />
            <Route exact path="/fade" component={TransitionFadeScreen} />
            <Route exact path="/scale" component={TransitionScaleScreen} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
