import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import MovieCard from "./components/MovieCard.jsx";
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";
import { getTrendingMovies, updateSearchCount } from "./services/appwriteService.js";
import { fetchMovies } from "./services/movieService.js";

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

	useDebounce(() => setDebouncedSearchTerm(searchTerm), 1500, [searchTerm]);

	const [movieList, setMovieList] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const [trendingList, setTrendingList] = useState([]);

	useEffect(() => {
		setIsLoading(true);

		fetchMovies(debouncedSearchTerm)
			.then((data) => {
				setMovieList(data.results || []);

				if(data.results.length > 0) {
					updateSearchCount(debouncedSearchTerm, data.results[0]);
				}
			})
			.catch((error) => {
				setErrorMessage(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [debouncedSearchTerm]);

	useEffect(() => {
		try {
			getTrendingMovies().then((movies) => {
				setTrendingList(movies);
			});
		} catch (error) {
			console.log("Error fetching trending list", error);
		}
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

				{ trendingList.length > 0 && (
					<section className="trending">
						<h2>Trending Movies</h2>

						<ul>
							{ trendingList.map((movie, index) => (
								<li key={ movie.$id }>
									<p>{ index + 1 }</p>
									<img src={ movie.poster_url } alt={ movie.title } />
								</li>
							)) }
						</ul>
					</section>
				) }

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
