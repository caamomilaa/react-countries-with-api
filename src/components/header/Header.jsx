import {
	StyledDarkModeContainer,
	StyledHeader,
	StyledText,
	StyledTitle
} from './header.styles';

const Header = () => {
	return (
		<>
			<StyledHeader>
				<StyledTitle>Where in the world?</StyledTitle>
				<StyledDarkModeContainer>
					<img src='/assets/images/moon.svg' alt='moon' />
					<StyledText>Dark Mode</StyledText>
				</StyledDarkModeContainer>
			</StyledHeader>
		</>
	);
};

export default Header;
