/** @format */

import { type FC } from "react";
import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";
import "./App.css";

const App: FC = () => {
	return (
		<div className="sm:container flex justify-center flex-col items-center min-h-screen bg-blue-100 py-20 box-border">
			<div className="flex flex-col items-center mx-6 bg-white rounded-lg">
				<Header />
				<MainPage />
			</div>
			<div className="max-w-screen-sm border my-2">
				<section className="gap-2 p-4">
					<div className="p-2 bg-red-300 sm:bg-red-500">task1</div>

					<div className="p-2 bg-red-400">task1</div>

					<button className="px-4 py-2 bg-red-500 text-white rounded whitespace-nowrap">
						DELETE
					</button>
				</section>
			</div>
		</div>
	);
};
export default App;
