import { useEffect, useState } from 'react';
import CountryCards from '../../components/country-cards/CountryCards';
import Filters from '../../components/filters/Filters';
import { StyledGrid } from './home.styles';

const Home = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		getCountry(setCountries);
	}, []);
	return (
		<>
			<Filters countries={countries} />
			<StyledGrid>
				{countries.map(country => (
					<CountryCards key={country.name.common} country={country} />
				))}
			</StyledGrid>
		</>
	);
};

const getCountry = async setCountries => {
	try {
		const response = await fetch('https://restcountries.com/v3.1/all');
		const countries = await response.json();
		setCountries(countries);
	} catch (error) {
		console.log(error);
	}
};

export default Home;
