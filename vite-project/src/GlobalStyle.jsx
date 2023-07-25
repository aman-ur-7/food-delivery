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



    .hero-section{

        &>.food-slider{
            background: #dedede5f;
            /* position: relative; */

            &>div:first-child{

                &>img{
                width: 370px;
                height: 370px;
                border-radius: 50%;
                border: 10px solid orangered;
                position: relative;
                top: 70px;
                left: 400px;
            }

            &>:nth-child(2){
                width: 250px;
                height: 250px;
                border-radius: 50%;
                background-color: orangered;
                position: relative;
                top: -90px;
                left: 840px;
            }
            }
            
            
            &>div:nth-child(2){

                align-items: center;

                &>img{
                    width: 500px;
                    height: 500px;
                    border-radius: 50%;
                    border: 10px solid orangered;
                    position: relative;
                    top: -100px;
                    left: 100px;
                }

                &>div{
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    border: 20px solid orangered;
                    position: relative;
                    top: -470px;
                    left: 700px;
                }
        }

            &>div:nth-child(3){
                height: 550px;
                &>img{
                        width: 700px;
                        height: 700px;
                        border-radius: 50%;
                        border: 10px solid orangered;
                        position: relative;
                        top: -400px;
                        left: 500px;
                }
                &>div{
                        width: 570px;
                        height: 370px;
                        border-radius: 17px;
                        background-color: orangered;
                        position: relative;
                        top: -600px;
                        left: 240px;
                        color: white;
                        padding: 20px;

                        &>h1{
                            font-size: 40px;
                        }
                }
            }
        }
        .card-items{
            padding: 20px;
            background: #caf3b7;

            &>div{
                box-shadow: 0px 5px 10px 0px rgba(209, 209, 209, 0.7); 
                background: #ffffff;
                border-radius: 17px;
                width: 270px;
                height: 400px;
                display: flex;
                flex-direction: column;
                gap: 20px;
                transition: 2s;

            :hover{
                transform: translateY(-5px);
                box-shadow: 0px 10px 20px 2px rgba(219, 223, 223, 0.7);
                /* transition: 2s; */
                }

                &>img{
                    position: relative;
                    height: 47%;
                    width: 90%; 
                    object-fit:fill;
                    margin: auto;
                    border-radius: 12px;
                }

                .food-card{
                    position: relative;
                    padding: 17px;
                    top: -20px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;

                    &>div>h3{
                        font-size: 25px;
                        color: orangered;
                        font-weight: 600;
                        text-transform: capitalize;
                    }
                    &>:nth-child(2){
                        display: flex;
                        gap: 100px;
                        /* justify-content: space-around; */

                        &>select{
                        cursor: pointer;
                        
                        :hover{
                            background: #caf3b7;
                        }
                    }
                }
                }

            }
        }
    }

`;
