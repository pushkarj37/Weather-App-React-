export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geoApiCityOptions = {
	method: 'GET',
	headers: {
		
		'X-RapidAPI-Key': process.env.REACT_APP_CITY_API_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
export const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5';

export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;