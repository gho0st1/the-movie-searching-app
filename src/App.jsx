import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard.jsx";
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";
import { fetchMovies } from "./services/movieService.js";

function App() {
	const [searchTerm, setSearchTerm] = useState('');

	const [movieList, setMovieList] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetchMovies()
			.then((data) => {
				setMovieList(data.results || []);
			})
			.catch((error) => {
				setErrorMessage(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return (
		<main>
			<div className="pattern" />
			<div className="wrapper">
				<header>
					<img src="../Public/hero-img.png" alt="Hero Banner" />
					<h1>
						Find <span className="text-gradient">Movies</span> You&apos;ll Enjoy Without Any Hassle
					</h1>
				</header>

				<Search searchTerm={ searchTerm } setSearchTerm={ setSearchTerm } />

				<section className="all-movies">
					<h2>All Movies</h2>

					{ isLoading ? (
						<Spinner />
					) : errorMessage ? (
						<p className="text-red-500">{ errorMessage }</p>
					) : (
						<ul>
							{ movieList.map((movie) => (
								<MovieCard key={ movie.id } movie={ movie } />
							)) }
						</ul>
					) }
				</section>
			</div>
		</main>
	);
}

export default App;
