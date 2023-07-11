import { ConnectKitButton } from "connectkit";
import { FC } from "react";
import ConnectWalletIcon from "../../assets/connect-wallet-icon.png";
import "./index.scss";

const ConnectWalletButton: FC = () => {
	return (
		<ConnectKitButton.Custom>
			{({ isConnected, show, truncatedAddress, ensName }) => (
				<button className="connect-wallet-btn" onClick={show}>
					{isConnected ? ensName ?? truncatedAddress : "CONNECT WALLET"}
					<img
						src={ConnectWalletIcon}
						alt="Connect Wallet"
						className="connect-wallet-btn-icon"
					/>
				</button>
			)}
		</ConnectKitButton.Custom>
	);
};

export default ConnectWalletButton;