import React, { useState } from "react";

const SearchBar = ({ data }) => {
	const [search, setSearch] = useState("");

	const filteredData = data.filter((item) =>
		item.title.toLowerCase().includes(search.toLowerCase())
	);

	// Si el usuario no ha buscado nada, muestra solo el gif de bienvenida
	const dataToRender = search
		? filteredData
		: data.filter((item) => item.title === "Bienvenidos");

	return (
		<div>
			<input
				className="my-4 h-10 w-full rounded-lg border border-gray-300 bg-white px-5 pr-16 text-sm  dark:bg-gray-800 dark:text-white focus:outline-none focus:border-indigo-500"
				type="text"
				placeholder="Buscar..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			{dataToRender.map((item, index) => (
				<div key={index} className="my-4">
					<h2>{item.title}</h2>
					<img
						src={item.url}
						alt={item.title}
						className="rounded-xl shadow-lg w-full sm:w-2/3 sm:mx-auto"
					/>
					{/* <Like postUrl={postId} /> */}
				</div>
			))}
		</div>
	);
};

export default SearchBar;
