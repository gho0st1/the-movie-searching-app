// @ts-ignore

import { Client, Databases, ID, Query } from "appwrite";

// @ts-ignore
const PROJECT_KEY = import.meta.env.VITE_APPWRITE_PROJECT_KEY;
// @ts-ignore
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
// @ts-ignore
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_METRICS_COLLECTION_ID;

const client = new Client()
	.setEndpoint('https://cloud.appwrite.io/v1')
	.setProject(PROJECT_KEY);

const database = new Databases(client);

export async function updateSearchCount (searchTerm, movie) {
	try {
		const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
			Query.equal('searchTerm', searchTerm),
		]);

		if(result.documents.length > 0) {
			const doc = result.documents[0];

			database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
				searchCount: doc.searchCount + 1,
			});	
		} else {
			database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
				searchTerm,
				searchCount: 1,
				movie_id: movie.id,
				poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
			});
		}
	} catch (error) {
		console.error(error);
	}
}

export async function getTrendingMovies() {
	try {
		const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
			Query.limit(5),
			Query.orderDesc('searchCount'),
		]);

		return result.documents;
	} catch (error) {
		console.log(error);
	}
}