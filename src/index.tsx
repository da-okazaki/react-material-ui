import { render } from "react-dom";
import App from "./App";
import Theme from "components/Theme";
const rootElement = document.getElementById("root");
render(
  <Theme>
    <App />
  </Theme>,
  rootElement
);
