export default function Search ({ searchTerm, setSearchTerm }) {
	return (
		<>
			<div className="search">
				<div>
					<img src="../../Public/search.svg" alt="Search Logo" />

					<input
						type={ "text" }
						placeholder={ "Search Through Thousands of Items" }
						maxLength={ 200 }
						value={ searchTerm }
						onChange={ (e) => setSearchTerm(e.target.value) } />
				</div>
			</div>
		</>
	);
}
