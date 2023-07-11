import { FC } from "react";
import { getTimeUnits, formatTimer } from "../../utils/time";
import "./index.scss";

interface Props {
	timeLeft: number;
	isPortrait: boolean;
}

const Timer: FC<Props> = ({ timeLeft, isPortrait }) => {
	const { minutes, seconds } = getTimeUnits(timeLeft);

	return (
		<div className={`timer-container timer-container--${isPortrait ? "portrait" : "landscape"}`}>
			<p className={`countdown${minutes === 0 && seconds !== 0 ? " countdown--red" : ""}`}>
				{formatTimer(minutes, seconds)}
			</p>
			<p className="current-block">
				Current Block: {Math.ceil(timeLeft / 12)}
			</p>
		</div>
	);
};

export default Timer;