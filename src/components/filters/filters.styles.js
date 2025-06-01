import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const StyledFiltersContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	padding: 24px 16px 32px 16px;
`;

const StyledSearchbar = styled.input`
	padding: 16px 0 16px 32px;
	border-radius: 5px;
	border: none;
	color: ${COLORS.grey250};
	font-size: ${FONTS.sizes.subtitle};
	line-height: 135%;
	box-shadow: 0 2px 9px rgba(92, 92, 92, 0.28);
`;

const StyledSelect = styled.select`
	padding: 16px 24.5px 16px 24.5px;
	width: 200px;
	color: ${COLORS.grey950};
	border: none;
	box-shadow: 0 2px 9px rgba(92, 92, 92, 0.28);
	border-radius: 5px;
	font-size: ${FONTS.sizes.subtitle};
	font-weight: ${FONTS.weight.regular};
	appearance: none;
	background-image: url(/assets/images/chevron.svg);
	background-repeat: no-repeat;
	background-position: 90% 50%;
`;

export { StyledFiltersContainer, StyledSearchbar, StyledSelect };
