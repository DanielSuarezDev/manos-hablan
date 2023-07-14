const Conferences = () => {
	return (
		<article>
			<a href="https://bbn1.bbnradio.org/spanish/" target="_blank" className="relative top-0 block overflow-hidden rounded-2xl">
				<img
					alt="Emisora cristiana"
					src="https://cdn-profiles.tunein.com/s130346/images/logog.png?t=1"
					className="h-36 w-full object-cover"
				/>
				<div className="bg-gray-900 p-4">
					<p className="mb-1 text-sm text-gray-400">Emisora</p>
					<h5 className="text-sm text-white">Emisora totalmente cristiana</h5>
					<p className="mt-1 text-xs text-gray-400">
						Escucha o estudia en una emisora totalmente cristiana y de sana doctrina.
					</p>
				</div>
			</a>
		</article>
	);
};

export default Conferences;
