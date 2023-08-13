export async function fetchDataAll(text){
  const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${text}&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc`;
	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'API-KEY',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result;
}
catch (err) {
	alert('Error', err)
}
}
