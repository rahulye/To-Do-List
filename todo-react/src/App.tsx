/** @format */

import { type FC } from "react";
import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";
import "./App.css";

const App: FC = () => {
	return (
		<div className="flex flex-col justify-start items-center my-10 p-10 bg-blue-400">
			<div className="rounded w-full flex flex-col max-w-180 mt-5 bg-amber-500">
				<Header />
				<MainPage />
			</div>
			<section className="w-full max-w-150 m-1">
				<div className="p-2">
					<div className="w-full flex-col sm:flex-row flex gap-2 p-1">
						<div className="bg-white rounded flex flex-3 px-4 py-2 border-white border">
							Task1
						</div>
						<div className="flex rounded bg-white flex-none px-4 py-2 border-white border">
							7/11/2003
						</div>
						<button className="cursor-pointer rounded flex-none px-2 hover:ring-1 ring-red-800 bg-red-600 text-white">
							DELETE
						</button>
					</div>
				</div>
				<div className="p-2">
					<div className="w-full flex-col sm:flex-row flex gap-2 p-1">
						<div className="bg-white rounded flex flex-3 px-4 py-2 border-white border">
							Task1
						</div>
						<div className="flex rounded bg-white flex-none px-4 py-2 border-white border">
							7/11/2003
						</div>
						<button className="rounded flex-none px-2 hover:ring-1 ring-red-800 bg-red-600 text-white">
							DELETE
						</button>
					</div>
				</div>
				<div className="p-2">
					<div className="w-full flex-col sm:flex-row flex gap-2 p-1">
						<div className="bg-white rounded flex flex-3 px-4 py-2 border-white border">
							Task1
						</div>
						<div className="flex rounded bg-white flex-none px-4 py-2 border-white border">
							7/11/2003
						</div>
						<button className="rounded flex-none px-2 hover:ring-1 ring-red-800 bg-red-600 text-white">
							DELETE
						</button>
					</div>
				</div>
				<div className="p-2">
					<div className="w-full flex-col sm:flex-row flex gap-2 p-1">
						<div className="bg-white rounded flex flex-3 px-4 py-2 border-white border">
							Task1
						</div>
						<div className="flex rounded bg-white flex-none px-4 py-2 border-white border">
							7/11/2003
						</div>
						<button className="rounded flex-none px-2 hover:ring-1 ring-red-800 bg-red-600 text-white">
							DELETE
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};
export default App;
