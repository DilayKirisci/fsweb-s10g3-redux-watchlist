import { useDispatch } from "react-redux";
import { removeFavorites } from "../actions";

export default function FavMovie({ movie }) {
	const dispatch = useDispatch();
	return (
		<div
			className="flex p-3 pl-4 bg-white mb-2 shadow items-center group"
			key={movie.id}
		>
			<div className="pr-4 flex-1">{movie.title}</div>
			<button
				onClick={() => dispatch(removeFavorites(movie))}
				className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
			>
				Çıkar
			</button>
		</div>
	);
}
