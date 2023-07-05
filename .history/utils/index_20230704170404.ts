export async function fetchCars() {
	const headers = {
		'X-RapidAPI-Key': 'cf98a584bcmshc6d9c831137ca4cp183d12jsn56f9a0100961',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
	};

	const response = await fetch(
		'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
		{headers: headers}
	);

	const result = await response.json();
	return result;
}
