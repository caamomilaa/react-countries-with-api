import styled from 'styled-components';
import { FONTS } from '../../constants/fonts';

const StyledHeader = styled.header`
  display: flex;
`;
const StyledTitle = styled.h1`
  font-size: ${FONTS.sizes.textS};
  font-weight: ${FONTS.weight.extrabold};
  line-height: 1.25rem;
`;

export { StyledHeader, StyledTitle };
