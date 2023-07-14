import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import {
	doc,
	getDoc,
	setDoc,
	updateDoc,
	increment,
	collection,
} from "firebase/firestore";
import '../styles/global.css'
export const Like = ({ postUrl }) => {
	console.log(postUrl)
	const postId = btoa(postUrl);
	const [likes, setLikes] = useState(0);
	const [userHasLiked, setUserHasLiked] = useState(false);

	useEffect(() => {
		const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
		setUserHasLiked(likedPosts.includes(postId));

		const docRef = doc(collection(db, "likes"), postId);
		getDoc(docRef).then((docSnapshot) => {
			if (docSnapshot.exists()) {
				setLikes(docSnapshot.data().count);
			}
		});
	}, [postId]);

	const handleLike = async () => {
		if (userHasLiked) {
			return;
		}

		const docRef = doc(collection(db, "likes"), postId);
		getDoc(docRef).then((docSnapshot) => {
			if (docSnapshot.exists()) {
				updateDoc(docRef, { count: increment(1) });
			} else {
				setDoc(docRef, { count: 1 });
			}
		});

		setLikes((prevLikes) => prevLikes + 1);
		setUserHasLiked(true);

		const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
		likedPosts.push(postId);
		localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
	};

	return (
		<div className="flex items-center gap-2">
			{/* <button onClick={handleLike} disabled={userHasLiked}>
        {userHasLiked ? "Ya diste like a este post" : "Dale like a este post"}
      </button> */}
			<button
				onClick={handleLike}
				disabled={userHasLiked}
				className={`focus:outline-none ${
					userHasLiked ? "text-red-500" : "text-gray-500"
				} transition-colors`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className={`h-6 w-6 ${userHasLiked && "animate-pulse"}`}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
			</button>
			<p>{likes}</p>
		</div>
	);
};
