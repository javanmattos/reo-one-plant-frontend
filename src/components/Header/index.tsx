import { FC, MouseEventHandler } from "react";
import ConnectWalletButton from "../ConnectWalletButton";
import OnePlantLogo from "../../assets/one-plant-logo.png";
import "./index.scss";

interface Props {
	displayNotepad: MouseEventHandler;
}

const Header: FC<Props> = ({ displayNotepad }) => {
	return (
		<header className='header'>
			<div className="header-row header-row--action-btns">
				<button className="more-info-btn" aria-label='More info' onClick={displayNotepad}>
					<span className="hidden">More info</span>
				</button>
				<ConnectWalletButton />
			</div>
			<div className="header-row header-row--logo">
				<a href="/" className="header-logo-link">
					<img src={OnePlantLogo} alt="One Plant" className="logo" />
				</a>
			</div>
		</header>
	);
};

export default Header;