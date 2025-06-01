import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	background-color: ${COLORS.white};
	box-shadow: 0 2px 9px rgba(92, 92, 92, 0.28);
`;
const StyledImg = styled.img`
	overflow: hidden;
	border-radius: 5px 5px 0 0;
	height: 160px;
	object-fit: cover;
`;

const StyledDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 22px 0 48px 24px;
`;
const StyledTitle = styled.h2`
	margin: 0 0 16px 0;
	font-size: ${FONTS.sizes.textL};
	font-weight: ${FONTS.weight.extrabold};
	line-height: 145%;
`;
const StyledTextContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`;
const StyledTextBold = styled.p`
	font-weight: ${FONTS.weight.semibold};
	font-size: ${FONTS.sizes.textS};
	line-height: 16%;
`;
const StyledText = styled.span`
	font-size: ${FONTS.sizes.textS};
	font-weight: ${FONTS.weight.light};
	line-height: 16%;
`;
export {
	StyledCard,
	StyledImg,
	StyledDataContainer,
	StyledTitle,
	StyledTextContainer,
	StyledTextBold,
	StyledText
};
