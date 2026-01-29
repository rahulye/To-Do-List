/** @format */

import { useState, type FC, type ChangeEvent } from "react";

export const MainPage: FC = () => {
	const [task, setTask] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const [todoArray, setToDoArray] = useState([]); // it cant be just values like in array it has both task and date so we have to store it in the object
	const handleEvent = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.name === "task") {
			setTask(event.target.value);
		} else {
			setDate(event.target.value);
		}
	};
	const addtask = (): void => {
		console.log(task);
		console.log(date);
	};
	return (
		<main className="m-5">
			<section className="rounded flex-col hover:scale-101 bg-white sm:flex-row flex gap-2 p-1">
				<input
					className="outline-none hover:ring  ring-gray-500 cursor-text bg-gray-200 grow px-3 rounded py-1"
					placeholder="Tasks.."
					name="task"
					value={task}
					onChange={handleEvent}
				/>

				<input
					type="date"
					name="date"
					value={date}
					className="cursor-pointer outline-none hover:ring ring-gray-500 rounded flex-1 bg-gray-200 px-3 py-1"
					onChange={handleEvent}
				/>

				<button
					className="cursor-pointer flex-none px-3 py-1 hover:ring-1 ring-blue-800 rounded bg-blue-600 text-white"
					onClick={addtask}
				>
					ADD
				</button>
			</section>
		</main>
	);
};
