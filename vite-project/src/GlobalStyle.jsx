import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    header{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        padding: 20px;
        align-items: center;
        min-width: auto;
        filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
        /* box-shadow: 1px 3px 6px 1px rgba(180, 178, 178, 0.3); */


        &>.logo{

            &>h4{
                display: flex;
                align-items: center;
            }
            .io-logo:hover {
            -webkit-animation-name: wiggle;
            -ms-animation-name: wiggle;
            -ms-animation-duration: 1000ms;
            -webkit-animation-duration: 1000ms;
            -webkit-animation-iteration-count: 1;
            -ms-animation-iteration-count: 1;
            -webkit-animation-timing-function: ease-in-out;
            -ms-animation-timing-function: ease-in-out;
            }

            @-webkit-keyframes wiggle {
            0% {-webkit-transform: rotate(10deg);}
            25% {-webkit-transform: rotate(-10deg);}
            50% {-webkit-transform: rotate(20deg);}
            75% {-webkit-transform: rotate(-5deg);}
            100% {-webkit-transform: rotate(0deg);}
            }

            @-ms-keyframes wiggle {
            0% {-ms-transform: rotate(1deg);}
            25% {-ms-transform: rotate(-1deg);}
            50% {-ms-transform: rotate(1.5deg);}
            75% {-ms-transform: rotate(-5deg);}
            100% {-ms-transform: rotate(0deg);}
            }

            @keyframes wiggle {
            0% {transform: rotate(10deg);}
            25% {transform: rotate(-10deg);}
            50% {transform: rotate(20deg);}
            75% {transform: rotate(-5deg);}
            100% {transform: rotate(0deg);}
            }
        }


        &>.header-content{
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            &>:hover{
                cursor: pointer;
                color: orange;
                transition: 100ms;
            }

            &>input{
                padding: 2px;
                border-radius: 7px;
                outline: 1px solid black;
                color: #0c7f53be;
            }
        }
    }

    span{
        font-size: 20px;
        text-transform: capitalize;
        font-weight: 600;
        color: #000000bb;
    }
`;
