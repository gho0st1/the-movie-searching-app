export default function MovieCard ({ movie: { title, vote_average, poster_path, release_date, original_language } }) {
	const posterUrl = poster_path 
		? `https://image.tmdb.org/t/p/w500/${poster_path}`
		: '../../Public/No-Poster.png';

	const releaseYear = release_date 
		? release_date.split('-')[0].toString() 
		: 'N/A';

	return (
		<div className="movie-card">
			<img src={ posterUrl } alt={ title } />
			<div className="mt-4 text-white">{ title }</div>

			<div className="content">
				<div className="rating">
					<img src="../../Public/Star.svg" alt="Rating" />
					<p>{ vote_average ? vote_average.toFixed(1) : 'N/A' }</p>

					<span className="font-extrabold">&nbsp; · &nbsp;</span>
					<p className="lang">{ original_language }</p>

					<span className="font-extrabold">&nbsp; · &nbsp;</span>
					<p className="year">{ releaseYear }</p>
				</div>
			</div>
		</div>
	);
}
