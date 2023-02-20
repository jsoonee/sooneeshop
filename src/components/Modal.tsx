import React from "react";
import ModalUI from "@mui/material/Modal";
import Box from "@mui/material/Box";

interface IModal {
	children: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

interface IRef {
	children: React.ReactNode;
}

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const Modal = ({ children, isOpen, onClose }: IModal) => {
	const Ref = React.forwardRef(
		(props: IRef, ref: React.ForwardedRef<HTMLDivElement>) => (
			<div ref={ref}>{props.children}</div>
		)
	);
	Ref.displayName = "Ref";
	return (
		<div>
			<ModalUI open={isOpen} onClose={onClose} disableScrollLock>
				<Box sx={style}>
					<Ref>{children}</Ref>
				</Box>
			</ModalUI>
		</div>
	);
};

export default Modal;
