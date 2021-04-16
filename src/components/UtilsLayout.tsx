import { FC } from "react";

const UtilsLayout: FC = () => {
  const handleGridLayout = () => {
    console.log("handleGridLayout");
  };
  return <button onClick={() => handleGridLayout()}>Utils</button>;
};
export default UtilsLayout;
