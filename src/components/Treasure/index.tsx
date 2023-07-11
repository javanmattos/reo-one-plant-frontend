import { FC } from "react";
import BevelOverlay from "../../assets/bevel-overlay.png";
import "./index.scss";

interface Props {
	treasureNum: number;
	lockImgPath: string;
}

const Treasure: FC<Props> = ({ lockImgPath }) => {
	return (
		<div className="treasure">
			<img src={BevelOverlay} alt="Bevel" className="bevel-overlay" />
			<img src={lockImgPath} alt="Lock" className="lock-img" />
		</div>
	);
};

export default Treasure;