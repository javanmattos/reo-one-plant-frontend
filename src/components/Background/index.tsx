import { FC } from "react";
import MobileBg from "../../assets/mobile-bg.png";
import TabletBg from "../../assets/tablet-bg.png";
import DesktopBg from "../../assets/desktop-bg.png";
import "./index.scss";

const Background: FC = () => {
  return (
    <div className="bg-container">
      <img src={MobileBg} alt="Background" className="bg bg--mobile" />
      <img src={TabletBg} alt="Background" className="bg bg--tablet" />
      <img src={DesktopBg} alt="Background" className="bg bg--desktop" />
    </div>
  );
};

export default Background;