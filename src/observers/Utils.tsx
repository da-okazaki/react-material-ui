import { FC, useContext } from "react";
import { Observer } from "mobx-react";
import { StoreContext } from "../contexts";
import { UtilsLayout } from "../components/index";

const Utils: FC = () => {
  const store = useContext(StoreContext);
  const { ui } = store;
  return (
    <Observer>
      {() => {
        if (ui.isSettingsOpen) {
          return <></>;
        }
        return <UtilsLayout />;
      }}
    </Observer>
  );
};
export default Utils;
