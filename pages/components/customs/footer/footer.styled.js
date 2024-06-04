import {styled} from "styled-components"

const FooterStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 100px;

    h3 {
        color: hsl(201, 11%, 66%);
        font-weight: 400;
        font-size: 1rem;
    }

    a {
        text-decoration: none;
        width: 100px;
    }

    .main-column {
        display: flex;
        column-gap: 200px;
        justify-content: center;
        width: 100%;
        align-items: center;
    }

    .buttons {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 30px;
        row-gap: 20px;
        width: 100%;
        padding: 20px;
    }

    .icons {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;
        width: 60%;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10%;
        padding-left: 100px;
    }

    @media screen and (max-width:880px) { 
        .main-column {
            column-gap: 100px;
        }

        .buttons {
            column-gap: 20px;
            row-gap: 10px;
            width: 60%;
        }
    }

    @media screen and (max-width:782px) { 
        .main-column {
            flex-direction: column;
        }
        
        .logo {
            padding: 20px 0 0 0;
        }

        .icons {
            padding-bottom: 20px;
        }

        .buttons {
            flex-direction: column;
            row-gap: 20px
        }

        a {
            width: auto;
        }
    }
`
export default FooterStyled