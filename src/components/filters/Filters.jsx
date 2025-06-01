import { useState } from 'react';
import {
	StyledFiltersContainer,
	StyledSearchbar,
	StyledSelect
} from './filters.styles';

const Filters = ({ countries }) => {
	const [search, setSearch] = useState('');
	const filter = getCountriesBySearch(search);
	return (
		<>
			<StyledFiltersContainer>
				<StyledSearchbar
					onChange={event => setSearch(event.target.value)}
					type='text'
					placeholder='Search for a country…'
				/>
				<StyledSelect>
					<option value='default'>Filter by Region</option>
					<option value='africa'>Africa</option>
					<option value='america'>America</option>
					<option value='asia'>Asia</option>
					<option value='europe'>Europe</option>
					<option value='oceania'>Oceania</option>
				</StyledSelect>
			</StyledFiltersContainer>
		</>
	);
};

const getCountriesBySearch = (search, countries) => {
	if (!search) return countries;
	return countries.filter(country =>
		country.name.common.toLowerCase().includes(search.toLowerCase())
	);
};

export default Filters;
