import styled from 'styled-components';
import { FONTS } from '../../constants/fonts';
import { COLORS } from '../../constants/colors';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 1.875rem 1rem 1.875rem 1rem;
	background-color: ${COLORS.white};
	box-shadow: 0 2px 4px rgba(92, 92, 92, 0.28);
`;
const StyledTitle = styled.h1`
	font-size: ${FONTS.sizes.textS};
	font-weight: ${FONTS.weight.extrabold};
	line-height: 1.25rem;
	margin: 0;
`;
const StyledText = styled.p`
	font-size: ${FONTS.sizes.subtitle};
	font-weight: ${FONTS.weight.semibold};
	line-height: 135%;
	margin: 0;
`;
const StyledDarkModeContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: center;
`;
export { StyledHeader, StyledTitle, StyledText, StyledDarkModeContainer };
