import Toastify from "toastify-js";
import { useState } from "react";
import "toastify-js/src/toastify.css";
import Divider from "./Divider.astro";

export function ShareButton({ post }: { post: any }) {
	const [showOptions, setShowOptions] = useState(false);

	const handleCopyLink = () => {
		navigator.clipboard.writeText(`https://impulsocristiano.info${post.url}`);
		setShowOptions(false);

		Toastify({
			text: "Enlace copiado",
			duration: 2000,
			close: true,
			gravity: "top", // `top` or `bottom`
			position: "right", // `left`, `center` or `right`
			backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
			stopOnFocus: true, // Prevents dismissing of toast on hover
		}).showToast();
	};

	const handleShareWhatsApp = () => {
		window.open(
			`https://wa.me/?text=https://impulsocristiano.info${encodeURIComponent(
				post.url
			)}`,
			"_blank"
		);
		setShowOptions(false);
		// Resto de tu código para mostrar una notificación
	};

	const toggleOptions = () => {
		setShowOptions(!showOptions);
	};

	return (
		<footer className="mobile:flex-row flex items-center justify-center gap-x-2">
			<button
				onClick={toggleOptions}
				className="relative p-2 text-xs text-black dark:text-white"
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z"
						fill="currentColor"
					></path>
				</svg>
				{showOptions && (
					<div className="absolute right-0 top-10 w-48 rounded-lg border border-gray-300 bg-white px-4 py-4">
						<button
							onClick={handleCopyLink}
							className="flex items-center w-full py-1 text-xs text-gray-700 hover:text-gray-900"
						>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.57 14.67c0-.57.13-1.11.38-1.6l.02-.02v-.02l.02-.02c0-.02 0-.02.02-.02.12-.26.3-.52.57-.8L7.78 9v-.02l.01-.02c.44-.41.91-.7 1.44-.85a4.87 4.87 0 0 0-1.19 2.36A5.04 5.04 0 0 0 8 11.6L6.04 13.6c-.19.19-.32.4-.38.65a2 2 0 0 0 0 .9c.08.2.2.4.38.57l1.29 1.31c.27.28.62.42 1.03.42.42 0 .78-.14 1.06-.42l1.23-1.25.79-.78 1.15-1.16c.08-.09.19-.22.28-.4.1-.2.15-.42.15-.67 0-.16-.02-.3-.06-.45l-.02-.02v-.02l-.07-.14s0-.03-.04-.06l-.06-.13-.02-.02c0-.02 0-.03-.02-.05a.6.6 0 0 0-.14-.16l-.48-.5c0-.04.02-.1.04-.15l.06-.12 1.17-1.14.09-.09.56.57c.02.04.08.1.16.18l.05.04.03.06.04.05.03.04.04.06.1.14.02.02c0 .02.01.03.03.04l.1.2v.02c.1.16.2.38.3.68a1 1 0 0 1 .04.25 3.2 3.2 0 0 1 .02 1.33 3.49 3.49 0 0 1-.95 1.87l-.66.67-.97.97-1.56 1.57a3.4 3.4 0 0 1-2.47 1.02c-.97 0-1.8-.34-2.49-1.03l-1.3-1.3a3.55 3.55 0 0 1-1-2.51v-.01h-.02v.02zm5.39-3.43c0-.19.02-.4.07-.63.13-.74.44-1.37.95-1.87l.66-.67.97-.98 1.56-1.56c.68-.69 1.5-1.03 2.47-1.03.97 0 1.8.34 2.48 1.02l1.3 1.32a3.48 3.48 0 0 1 1 2.48c0 .58-.11 1.11-.37 1.6l-.02.02v.02l-.02.04c-.14.27-.35.54-.6.8L16.23 15l-.01.02-.01.02c-.44.42-.92.7-1.43.83a4.55 4.55 0 0 0 1.23-3.52L18 10.38c.18-.21.3-.42.35-.65a2.03 2.03 0 0 0-.01-.9 1.96 1.96 0 0 0-.36-.58l-1.3-1.3a1.49 1.49 0 0 0-1.06-.42c-.42 0-.77.14-1.06.4l-1.2 1.27-.8.8-1.16 1.15c-.08.08-.18.21-.29.4a1.66 1.66 0 0 0-.08 1.12l.02.03v.02l.06.14s.01.03.05.06l.06.13.02.02.01.02.01.02c.05.08.1.13.14.16l.47.5c0 .04-.02.09-.04.15l-.06.12-1.15 1.15-.1.08-.56-.56a2.3 2.3 0 0 0-.18-.19c-.02-.01-.02-.03-.02-.04l-.02-.02a.37.37 0 0 1-.1-.12c-.03-.03-.05-.04-.05-.06l-.1-.15-.02-.02-.02-.04-.08-.17v-.02a5.1 5.1 0 0 1-.28-.69 1.03 1.03 0 0 1-.04-.26c-.06-.23-.1-.46-.1-.7v.01z"
									fill="#A8A8A8"
								></path>
							</svg>
							Copiar enlace
						</button>
						<hr className="my-2" />
						<a
							href={`https://wa.me/?text=https://impulsocristiano.info${encodeURIComponent(
								post.url
							)}`}
							target="_blank"
							rel="noopener noreferrer"
							className="block w-full py-1 text-xs text-gray-700 hover:text-gray-900"
						>
							Compartir en WhatsApp
						</a>
					</div>
				)}
			</button>
		</footer>
		// <footer className="mobile:flex-row flex items-center justify-center gap-x-2">
		// 	<button
		// 		onClick={handleCopyLink}
		// 		className="rounded-full bg-slate-800 p-2 text-xs text-white dark:bg-white dark:text-gray-900"
		// 	>
		// 		Copiar enlace
		// 	</button>
		// 	<a
		// 		href={`https://wa.me/?text=https://impulsocristiano.info${encodeURIComponent(
		// 			post.url
		// 		)}`}
		// 		target="_blank"
		// 		rel="noopener noreferrer"
		// 		className="rounded-full bg-green-200 p-2 text-green-800 text-xs"
		// 	>
		// 		Compartir en WhatsApp
		// 	</a>
		// </footer>
	);
}
