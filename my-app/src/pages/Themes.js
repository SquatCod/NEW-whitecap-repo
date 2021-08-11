import { createGlobalStyle } from "styled-components";
import './styles.css';


export const lightTheme = {
    body: "#006EE6",
    fontColor: "#000",
}

export const darkTheme = {
    body: "#001833",
    fontColor: "#FFF",
}

export const GlobalStyles = createGlobalStyle`

    body {

        background-color ${props => props.theme.body};

        color ${props => props.theme.fontColor};

    }
`