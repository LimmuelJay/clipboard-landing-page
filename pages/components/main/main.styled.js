import {styled} from "styled-components"

const MainStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet');

    display: flex;
    flex-direction: column;
    row-gap: 50px;
    justify-content: center;
    align-items: center;
    font-family: "Bai Jamjuree", sans-serif;
    
    .header {
        row-gap: 25px;
        /* height: 20%; */
        width: 100%;
    }

    .body {
        display: flex;
        flex-direction: column;
        width: 100%;
        row-gap: 50px;
        /* height: 75%; */
        background-color: #FFFFFF;
    }

    .footer {
        background-color: #F5F6F8;
        width: 100%;
    }

    @media screen and (max-width:782px) { 
        .body {
            row-gap: 100px;
        }
    }
`
export default MainStyled;