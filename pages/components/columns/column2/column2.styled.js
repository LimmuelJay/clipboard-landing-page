import {styled} from "styled-components"

const Column2Styled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    /* height: 30%; */

    .main-column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 50px;
    }
    
    .top-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 15px;

        h2 {
            color:hsl(210, 10%, 33%);
            font-size: 1.7rem;
            font-weight: 600;
        }

        p {
            width: 70%;
            text-align: center;
            color: hsl(201, 11%, 66%);
            font-weight: 400;
            font-size: 1rem;
        }
    }

    .bot-column {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;

        img {
            width: 100%;
        }
    }

    @media screen and (max-width:782px) { 
        .top-column {
            h2 {
                width: 40%;
                text-align: center;
            }

            p {
                width: 45%;
                font-size: 1.1rem;
                text-align: center;
            }
        } 
    }
`
export default Column2Styled