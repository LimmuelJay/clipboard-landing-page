import {styled} from "styled-components"

const Column4Styled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 60px;
    width: 100%;
    /* height: 23%; */

    button {
        font-size:15px;
        width:174px;
        height:40px;
        border-width:0px;
        font-weight:600;
        border-radius: 28px;
        color: white;
    }

    button:hover {
        background: grey;
    }

    .btn-ios {
        background-color: hsl(171, 66%, 44%);
    }

    .btn-mac {
        background-color: hsl(233, 100%, 69%);
    }

    .top-column {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 60px;
    }

    .bot-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 30px;
        justify-content: center;
    }

    .description {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        align-items: center;

        h2 {
            color:hsl(210, 10%, 33%);
            font-size: 1.7rem;
            font-weight: 600;
        }

        p {
            width: 60%;
            color: hsl(201, 11%, 66%);
            font-weight: 400;
            font-size: 1rem;
            text-align: center;
        }
    }

    .btn-div {
        display: flex;
        column-gap: 10px;
    }

    @media screen and (max-width:880px) {
        .top-column {
            column-gap: 40px;
        }

        .top-column > img:nth-child(1) {
            height: 39px;
            width: 130px;
        }
        .top-column > img:nth-child(2) {
            height: 39px;
            width: 130px;
        }
        .top-column > img:nth-child(3) {
            height: 18.4px;
            width: 80px;
        }
        .top-column > img:nth-child(4) {
            height: 37.5px;
            width: 100px;
        }
        .top-column > img:nth-child(5) {
            height: 20px;
            width: 80px;
        }
    }

    @media screen and (max-width:782px) { 

        .top-column {
            flex-direction: column;
            row-gap: 70px;
        }

        .top-column > img:nth-child(2) { 
            height: 30px;
            width: 100px;
        }

        .top-column > img:nth-child(3) { 
            height: 27.6px;
            width: 120px;
        }

        .top-column > img:nth-child(5) { 
            height: 25px;
            width: 100px;
        }

        .description {
            h2 {
                width: 50%;
                text-align: center;
                font-size: 1.6rem;
            }

            p {
                width: 50%;
                font-size: 1.1rem;
            }
        }
        
        .btn-div {
            flex-direction: column;
            row-gap: 10px;
        }
    }
`
export default Column4Styled