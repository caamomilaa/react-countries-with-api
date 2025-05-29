import { StyledHeader, StyledTitle } from './header.styles';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledTitle>Where in the world?</StyledTitle>
        <div>
          <img src='/assets/images/moon.svg' alt='moon' />
          <p>Dark Mode</p>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
