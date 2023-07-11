import { FC, MouseEventHandler } from "react";
import "./index.scss";

interface Props {
	modal: string;
	onClick: MouseEventHandler;
}

const CloseButton: FC<Props> = ({ modal, onClick }) => {
  return (
    <button
      className={`close-btn close-btn--${modal}`}
      aria-label="Close"
      onClick={onClick}
    >
      X
    </button>
  );
};

export default CloseButton;