import {
	StyledCard,
	StyledDataContainer,
	StyledImg,
	StyledText,
	StyledTextBold,
	StyledTextContainer,
	StyledTitle
} from './countryCards.styles';

const CountryCards = ({ country }) => {
	// console.log(country[0].name.common);
	return (
		<>
			<StyledCard>
				<StyledImg src={country?.flags?.png} alt='' />
				<StyledDataContainer>
					<StyledTitle>{country?.name.common}</StyledTitle>
					<StyledTextContainer>
						<StyledTextBold>Population:</StyledTextBold>
						<StyledText>{country?.population}</StyledText>
					</StyledTextContainer>
					<StyledTextContainer>
						<StyledTextBold>Region:</StyledTextBold>
						<StyledText>{country?.region}</StyledText>
					</StyledTextContainer>
					<StyledTextContainer>
						<StyledTextBold>Capital:</StyledTextBold>
						<StyledText>{country?.capital}</StyledText>
					</StyledTextContainer>
				</StyledDataContainer>
			</StyledCard>
		</>
	);
};

export default CountryCards;
