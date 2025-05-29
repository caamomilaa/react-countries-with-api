import { StyledFiltersContainer } from './filters.styles';

const Filters = () => {
  return (
    <>
      <StyledFiltersContainer>
        <input type='text' placeholder='Search for a country…' />
        <select>
          <option value='default'>Filter by Region</option>
          <option value='africa'>Africa</option>
          <option value='america'>America</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </select>
      </StyledFiltersContainer>
    </>
  );
};
export default Filters;
