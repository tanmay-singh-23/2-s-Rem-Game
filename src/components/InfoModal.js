import React from "react";
import classes from "./InfoModal.module.css";

function InfoModal(props) {
	return (
		<>
			<div className={classes.backdrop} onClick={props.handleModalview} />
			<div className={classes.modal}>
				<h3 className={classes.htp}>How To Play!</h3>
				<p className={classes.instruction}>
					You have to find two images which look exactly same by clicking on the
					card. If the images don't match it will revert back to its original
					state and if it is matched it will stay the same. You can restart the
					game by clicking on the New Game button. You also got the counter to
					count the number of moves you have taken.{" "}
				</p>
				<p className={classes.sharp}>Let's see how sharp is your mind!</p>
				<button className={classes.okay} onClick={props.handleModalview}>
					Okay
				</button>
			</div>
		</>
	);
}

export default InfoModal;
