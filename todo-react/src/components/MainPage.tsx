/** @format */

import type { FC } from "react";

export const MainPage: FC = () => {
	return (
    <main className="px-4 py-6">
      <section className="flex flex-col gap-6 my-6 sm:flex-row">
        <input
          className="px-4 py-2 border rounded outline-none"
          placeholder="Tasks.."
        />

        <input
          type="date"
          className="px-3 py-2 border rounded outline-none"
        />

        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          ADD
        </button>
      </section>
    </main>
  );
};
