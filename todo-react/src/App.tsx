/** @format */

import { useState, useEffect, type FC, type ChangeEvent } from "react";
import type IArray from "./components/Interface";
import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";
import { TodoTask } from "./components/TodoTask";
import "./App.css";
import { v4 as uuid } from "uuid";

const App: FC = () => {
	const [task, setTask] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const [todoArray, setToDoArray] = useState<IArray[]>(() => {
		const storedTodos = localStorage.getItem("todos");
		return storedTodos ? JSON.parse(storedTodos) : [];
	}); // it cant be just values like in array it has both task and date so we have to store it in the object
	const [error, setError] = useState<boolean>(false);
	useEffect(() => {}, []);
	const handleEvent = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.name === "task") {
			setTask(event.target.value);
		} else {
			setDate(event.target.value);
		}
	};
	//add new task
	const addtask = (): void => {
		if (!task.trim() || !date) {
			setError(true);
			setTimeout(() => {
				setError(false);
				setTask("");
				setDate("");
			}, 500);
			return;
		}
		const newArray: IArray = {
			id: uuid(),
			task,
			deadline: date,
		};
		setToDoArray([...todoArray, newArray]);
		setTask("");
		setDate("");
	};
	//delete task

	// const deleteTask = (id:string): void => {
	// 	setToDoArray( todoArray.filter( (item) => {
	// 		return (
	// 			item.id !== id
	// 		)
	// 	}) )
	// };
	const deleteTask = (id: string): void => {
		setToDoArray((prev) => prev.filter((item) => item.id !== id));
	};
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todoArray));
	}, [todoArray]);

	//clear all task
	const clearAll = (): void => {
		setToDoArray([]);
	};
	return (
		<div className="flex flex-col justify-start items-center my-10 p-10 bg-blue-400">
			<div className="rounded w-full flex flex-col max-w-180 mt-5 bg-amber-500">
				<Header />
				<MainPage
					date={date}
					handleEvent={handleEvent}
					error={error}
					addtask={addtask}
					task={task}
					clearAll={clearAll}
				/>
			</div>
			<TodoTask todoArray={todoArray} deleteTask={deleteTask} />
		</div>
	);
};

export default App;
