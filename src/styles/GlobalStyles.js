import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/colors';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }

    img {
        display: block;
        max-width: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    nav ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    body {
        margin: 0;
        font-family: "Nunito Sans", sans-serif;
        color: ${COLORS.grey950};
        background-color: ${COLORS.grey50};
    }
`;
