import {styled} from "styled-components"

const Column1Styled = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    width: 100%;
    /* height: 30%; */

    .top-column {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        justify-content: center;
        align-items: center;

        h2 {
            color:hsl(210, 10%, 33%);
            font-size: 1.7rem;
            font-weight: 600;
        }

        p {
            width: 50%;
            color: hsl(201, 11%, 66%);
            font-weight: 400;
            font-size: 1rem;
            text-align: center;
        }
    }

    .bot-column {
        display: flex;
        align-items: center;
        column-gap: 130px;

        .img-wrapper {
            width: 60%;
            display: flex;
            margin-left: -20px;

            img {
                width: 100%;
            }
        }

        .description {
            display: flex;
            flex-direction: column;
            row-gap: 40px;

            div {
                display: flex;
                flex-direction: column;
                row-gap: 10px;
            }

            h3 {
                font-weight: 600;
                font-size: 1.4rem;
                color:hsl(210, 10%, 33%);
            }

            p {
                font-weight: 400;
                color: hsl(201, 11%, 66%);
                width: 60%;
            }
        }
    }

    @media screen and (max-width:782px) { 
        .top-column {
            h2 {
                width: 40%;
                text-align: center;
            }

            p {
                width: 40%;
                font-size: 1.1rem;
            }
        }
        .bot-column {
            flex-direction: column;
            row-gap: 30px;
        }

        .description {
            justify-content: center;
            row-gap: 30px;

            div { 
                align-items: center;
            }

            p { 
                text-align: center;
                font-size: 1rem;
                width: 40%;
            }
                
            h3{
                text-align: center;
                font-size: 1.4rem;
            }
        }
    }
`
export default Column1Styled