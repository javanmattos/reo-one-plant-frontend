import { FC } from "react";
import PlantDead from "../../assets/plant-dead.png";
import PlantInterval3 from "../../assets/plant-3min.gif";
import PlantInterval6 from "../../assets/plant-6min.gif";
import PlantInterval9 from "../../assets/plant-9min.gif";
import PlantInterval12 from "../../assets/plant-12min.gif";
import PlantInterval15 from "../../assets/plant-15min.gif";
import "./index.scss";

interface Props {
	timeLeft: number;
}

const Plant: FC<Props> = ({ timeLeft }) => {
	const getPlantImage = (): string => {
		if (timeLeft === 0) {
			return PlantDead;
		} else if (timeLeft < 180) {
			return PlantInterval3;
		} else if (timeLeft < 360) {
			return PlantInterval6;
		} else if (timeLeft < 540) {
			return PlantInterval9;
		} else if (timeLeft < 720) {
			return PlantInterval12;
		} else {
			return PlantInterval15;
		}
	};

	return (
		<div className="plant-container">
			<img src={getPlantImage()} alt="Plant" className="plant" />
		</div>
	);
};

export default Plant;