import {styled} from "styled-components"

const Column3Styled = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    align-items: center;
    width: 100%;
    /* height: 17%; */

    .top-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 10px;

        h2 {
            color:hsl(210, 10%, 33%);
            font-weight: 600;
            font-size: 1.7rem;
            text-align: center;
        }

        p {
            color: hsl(201, 11%, 66%);
            font-weight: 400;
            font-size: 1rem;
            text-align: center;
        }
    }

    .bot-column {
        display: flex;
    }

    .header1, .header2, .header3 {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        align-items: center;
        width: 33%;
    }

    .header1 h3, .header2 h3, .header3 h3 {
        color:hsl(210, 10%, 33%);
        font-weight: 600;
        font-size: 1.3rem
    }

    .header1 p, .header2 p, .header3 p {
        width: 50%;
        text-align: center;
        color: hsl(201, 11%, 66%);
        font-weight: 400;
        font-size: 1rem;
    }

    @media screen and (max-width:782px) { 
        .top-column h2 {
            width: 70%;
        }

        .top-column p {
            width: 75%;
            font-size: 1.1rem;
        }

        .bot-column {
            flex-direction: column;
            align-items: center;
            row-gap: 50px;
        }

        .header1 h3, .header2 h3, .header3 h3 { 
            font-size: 1.3rem;
            text-align: center;
        }

        .header1 p, .header2 p, .header3 p { 
            font-size: 0.9rem;
            width: 80%;
            text-align: center;
        }
    }
`
export default Column3Styled