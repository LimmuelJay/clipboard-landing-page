import {styled} from "styled-components"

const HeaderStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 50px;
    /* height: 100%; */

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
    
    h2 {
        color:hsl(210, 10%, 33%);
        font-weight: 600;
        font-size: 2.3rem;
    }

    p {
        color: hsl(201, 11%, 66%);
        font-weight: 400;
        font-size: 1em;
        width: 10%;
    }

    .img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 250px;
        background-image: url("/assets/images/bg-header-desktop.png");
    }

    .title {
        height: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
    }

    .title p {
        width: 70%;
        text-align: center;
    }

    .btn-div {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 10px;
        width: 100%;
        height: 25%;
    }

    @media screen and (max-width:782px) { 
        row-gap: 30px;

        h2 {
            font-size: 2rem;
            text-align: center;
            width: 46%;
        }

        .title p {
            text-align: center;  
            width: 44%;   
        }

        .btn-div {
            flex-direction: column;
            row-gap: 10px;
        }
    }
`
export default HeaderStyled