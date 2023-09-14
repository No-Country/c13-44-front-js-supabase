import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function Huespedes() {
	const [counter, setCounter] = useState<number[]>([0]);

	const handleCounterIncrement = (index: number) => {
		const updatedCounter = [...counter];
		updatedCounter[index] += 1;
		setCounter(updatedCounter);
	};

	const handleCounterDecrement = (index: number) => {
		if (counter[index] > 0) {
			const updatedCounter = [...counter];
			updatedCounter[index] -= 1;
			setCounter(updatedCounter);
		}
	};

	return (
		<div className="m-2 w-39">
			<span>Huespedes: </span>
			<Button
				className="pointer-events-auto cursor-pointer"
				onClick={(e) => {
					e.stopPropagation();
					handleCounterDecrement(0);
				}}
				style={{ margin: "0 4px" }}
			>
				-
			</Button>
			<span className="m-2">{counter[0]}</span>
			<Button
				className="pointer-events-auto cursor-pointer"
				onClick={(e) => {
					e.stopPropagation();
					handleCounterIncrement(0);
				}}
				style={{ margin: "0 4px" }}
			>
				+
			</Button>
		</div>
	);
}
