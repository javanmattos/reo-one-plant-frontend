import { FC } from "react";
import "./index.scss";

interface Props {
	isPortrait: boolean;
}

const Hint: FC<Props> = ({ isPortrait }) => {
	return (
		<p className={`hint-text hint-text--${isPortrait ? "portrait" : "landscape"}`}>
			<span className="hint-text--icon">?</span>
			The&nbsp;
			<span className="hint-text--highlighted">Plant is renewed</span>&nbsp;
			with each mint. The lower the timer, the&nbsp;
			<span className="hint-text--highlighted">rarer the NFT</span>.&nbsp;
			When the Plant&nbsp;
			<span className="hint-text--highlighted">dies</span>, so does the game.
		</p>
	);
};

export default Hint;