import confetti from "canvas-confetti";
import { useState } from "react";

function spawnConfetti() {
	var duration = 3 * 1000;
	var animationEnd = Date.now() + duration;
	var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

	function randomInRange(min, max) {
		return Math.random() * (max - min) + min;
	}

	var interval = setInterval(function () {
		var timeLeft = animationEnd - Date.now();

		if (timeLeft <= 0) {
			return clearInterval(interval);
		}

		var particleCount = 50 * (timeLeft / duration);
		// since particles fall down, start a bit higher than random
		confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
		confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
		document.getElementsByTagName("canvas")[0].style.zIndex = 600;
	}, 250);
}

const ResultScreen = ({ closeResult, name }) => {
	const [open, setOpen] = useState(true);

	if (open) spawnConfetti();
	return (
		<div className={"modal " + (open ? "is-active" : "")}>
			<div className="modal-background"></div>
			<div className="modal-card congratulations">
				<section class="hero is-medium is-info">
					<div class="hero-body">
						<p class="title">CONGRATULATIONS!!!</p>
						<p class="subtitle">{name}</p>
					</div>
				</section>
			</div>
			<button class="delete is-large mt-5" onClick={closeResult}></button>
		</div>
	);
};

export default ResultScreen;
