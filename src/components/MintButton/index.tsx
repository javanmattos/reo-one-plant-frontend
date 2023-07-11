import { FC, MouseEventHandler, useRef } from "react";
import "./index.scss";

interface Props {
	isModal: boolean;
	disabled: boolean;
	onClick?: MouseEventHandler;
}

const MintButton: FC<Props> = ({ isModal, disabled, onClick }) => {
	const mintBtn = useRef<HTMLButtonElement>(null);

	return (
		<div className="mint-btn-container">
			<button
					className={`mint-btn${isModal ? " mint-btn--modal" : ""}`}
					aria-label="Mint"
					type="button"
					onClick={onClick}
					disabled={disabled}
					ref={mintBtn}
			>
				<span className="hidden">Mint</span>
			</button>
		</div>
	);
};

export default MintButton;