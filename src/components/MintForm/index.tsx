import { useState, useRef, ChangeEvent, FC } from "react";
import { ConnectKitButton } from "connectkit";
import MintButton from "../MintButton";
import { mint } from "../../utils/contract";
import { useAccount } from "wagmi";
import "./index.scss";

interface Props {
	closeModal: () => void;
}

const MintForm: FC<Props> = ({ closeModal }) => {
  const { address } = useAccount();
	const baseValueEl = useRef<HTMLDivElement>(null);
	const whitelistValueEl = useRef<HTMLDivElement>(null);
	const customValueEl = useRef<HTMLDivElement>(null);
	const mintOptions = [baseValueEl, whitelistValueEl, customValueEl];

	const [selectedOption, setSelectedOption] = useState(baseValueEl);
	const [customPrice, setCustomPrice] = useState(0);

	const handleMintOptionChange = (e: any) => {
		// Get wrapper element
		let selectedOption = e.target;
		while (!selectedOption.classList.contains("mint-option")) {
			selectedOption = e.target.parentNode;
		}
		// Show border for selected option
		mintOptions.forEach(option => {
			if (option.current === selectedOption) {
				option.current?.classList.add("mint-option--selected");
				// Set state for selected option
				setSelectedOption(option);
			} else {
				option.current?.classList.remove("mint-option--selected");
			}
		});
	};

	const handleCustomPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
		// Check if input is empty
		if (e.target.value.length === 0) {
			setCustomPrice(0);
		} else {
			setCustomPrice(e.target.valueAsNumber);
		}
	};

	const handleMintRequest = () => {
		// Check if custom pricing option is selected and if the price is more
		// than the minimum for custom pricing
		if (selectedOption === customValueEl && !validateCustomPrice()) {
			return;
		}

		const price = getMintPrice();
    if (address) {
			mint(address, price);
			closeModal();
		}
	};

	const getMintPrice = (): number => {
		if (selectedOption === baseValueEl) {
			return 0;
		} else if (selectedOption === whitelistValueEl) {
			return 0.02;
		} else {
			return customPrice;
		}
	};

	const validateCustomPrice = (): boolean => {
		return customPrice >= 0.001;
	};

	return (
		<form className="mint-form">
			<div className="mint-form-row">
				<div
						className="mint-option mint-option--selected"
						ref={whitelistValueEl}
						onClick={handleMintOptionChange}
				>
					<p className="mint-value">0.02 ETH</p>
				</div>
				<div
					className="mint-option"
					ref={baseValueEl}
					onClick={handleMintOptionChange}
				>
					<p className="mint-value">0.00 ETH</p>
				</div>
			</div>
			<div className="mint-form-row">
				<div
					className="mint-option"
					ref={customValueEl}
					onClick={handleMintOptionChange}
				>
					<input
						type="number"
						name="custom-mint-value"
						id="custom-mint-value"
						className="mint-input"
						value={customPrice}
						step={0.01}
						onChange={handleCustomPriceChange}
					/>
					<span className="mint-input-eth">ETH</span>
				</div>
			</div>
			<div className="mint-form-row">
				<ConnectKitButton.Custom>
					{({ isConnected, show }) => (
						<MintButton
							isModal={true}
							disabled={false}
							onClick={isConnected ? handleMintRequest : show}
						/>
					)}
				</ConnectKitButton.Custom>
			</div>
		</form>
	);
};

export default MintForm;