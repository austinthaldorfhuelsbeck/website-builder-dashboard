import { createGlobalStyle } from "styled-components"
import "./theme.css"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;
    }

    ::-webkit-scrollbar {
        display:none;
    }

    html {
        text-rendering: geometricPrecision;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    body {
        padding: 0;
        margin: 0;
        color: var(--indigo);
        font-family: var(--font-primary);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        overflow-y: scroll;
    }

    h3, h4, h5, h6 {
        font-family: var(--font-secondary);
    }

    input, button {
        font-family: var(--font-tertiary);
    }

    pre {
        font-family: var(--font-mono);
    }

    hr {
        border-top: 1px solid var(--aluminium);
        border-bottom: none;
    }

    a {
        color: var(--dark-goldenrod);
        text-decoration: none;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    strong {
        font-weight: 500;
    }

    small {
        font-size: 1.2rem;
    }

    body,
    button,
    input,
    select,
    textarea {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    button,
    input,
    select,
    textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    figure {
        margin: 0;
    }

    img {
        vertical-align: middle;
    }

    #root {
        height: 100%;
        width: 100%;
    }

    @media only screen and (max-width: 640px) {
        .mobile-scroll-lock {
            overflow: hidden;
        }
    }
`

export { GlobalStyles }
