import { FC, useEffect, useState } from "react";
import { formatLifespan } from "../../utils/time";
import "./index.scss";

interface Props {
	timeLeft: number;
	lifespan: number;
	treasureFound: number;
	isPortrait: boolean;
}

const Stats: FC<Props> = ({
	timeLeft,
	lifespan,
	treasureFound,
	isPortrait
}) => {
	const [localLifespan, setLocalLifespan] = useState<number>(lifespan);
	useEffect(() => {
		const interval = setInterval(() => {
			if (timeLeft > 0) {
				setLocalLifespan(prev => prev + 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [lifespan, timeLeft, localLifespan]);

	useEffect(() => {
		setLocalLifespan(lifespan);
	}, [lifespan]);

	return (
		<div className={`stats stats--${isPortrait ? "portrait" : "landscape"}`}>
			<p className="stat">
				Plant Lifespan:&nbsp;
				<span className="stat--value">{formatLifespan(localLifespan)}</span>
			</p>
			<p className="stat">
				Treasure Found:&nbsp;
				<span className="stat--value">{treasureFound.toLocaleString()}</span>
			</p>
		</div>
	);
};

export default Stats;