/** @format */

import { type FC } from "react";
import type IArray from "./Interface";
interface Props {
	todoArray: IArray[];
	deleteTask: (id: string) => void;
}
export const TodoTask: FC<Props> = ({ todoArray, deleteTask }) => {
	return (
		<section className="w-full max-w-150 m-1">
			{todoArray.map((item) => {
				return (
					<div className="p-2" key={item.id}>
						<div className="w-full flex-col sm:flex-row flex gap-2 p-1">
							<div className="bg-white rounded flex flex-3 px-4 py-2 border-white border">
								{item.task}
								{}
							</div>
							<div className="flex rounded bg-white flex-none px-4 py-2 border-white border">
								{item.deadline}
							</div>
							<button
								onClick={() => {
									deleteTask(item.id);
								}}
								className="cursor-pointer rounded flex-none px-2 hover:ring-1 ring-red-800 bg-red-600 text-white"
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
