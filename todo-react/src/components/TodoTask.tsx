/** @format */

import { type FC } from "react";
import type IArray from "./Interface";
interface Props {
	todoArray: IArray[];
	deleteTask: (id: string) => void;
}
export const TodoTask: FC<Props> = ({ todoArray, deleteTask }) => {
	return (
		<section className="max-w-150 w-full m-1">
			{todoArray.map((item) => {
				return (
					<div className="p-2 flex justify-center" key={item.id}>
						<div className="flex-col w-full sm:flex-row flex gap-2 p-1">
							<div className="w-full bg-white rounded flex-1 px-4 py-2 border-white border">
								{item.task}
							</div>
							<div className="rounded bg-white px-4 py-2 border-white border">
								{item.deadline}
							</div>
							<button
								onClick={() => {
									deleteTask(item.id);
								}}
								className="cursor-pointer rounded flex-none p-2 hover:ring-1 ring-red-800 bg-red-600 text-white"
							>
								DELETE
							</button>
						</div>
					</div>
				);
			})}
		</section>
	);
};
