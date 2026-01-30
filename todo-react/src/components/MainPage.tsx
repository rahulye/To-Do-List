/** @format */

import { type ChangeEvent, type FC } from "react";
interface Props {
	task: string;
	date: string;
	error: boolean;
	handleEvent: (event: ChangeEvent<HTMLInputElement>) => void;
	clearAll: () => void;
	addtask: () => void;
}
export const MainPage: FC<Props> = ({
	task,
	handleEvent,
	date,
	addtask,
	error,
	clearAll,
}) => {
	return (
		<main className="m-5">
			<section
				className={`rounded flex-col hover:scale-101 bg-white sm:flex-row flex gap-2 p-1 ${error ? "animate-shake ring-2 ring-red-500" : ""}`}
			>
				<input
					className={`outline-none hover:ring  ring-gray-500 cursor-text bg-gray-200 grow px-3 rounded py-1 `}
					placeholder="Write your task.."
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
				<button
					className="cursor-pointer flex-none px-3 py-1 hover:ring-1 ring-blue-800 rounded bg-gray-600 text-white"
					onClick={() => {
						clearAll();
					}}
				>
					CLEAR ALL
				</button>
			</section>
		</main>
	);
};
