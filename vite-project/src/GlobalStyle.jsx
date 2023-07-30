import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .home-page{
        display: grid;
        height: 100vh;
        width: 100%;
        grid-template-columns: 1.5fr 20fr 8fr;

        &>div{
            display: flex;
            flex-direction: column;
            padding: 20px;
            gap: 20px;
        }
        &>.left-header{
            background: #F3F3F3;
            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: center;
            justify-content: center;

            &>svg{

                :hover{
                    color: #FF5C28 !important;
                }
            }
        }

        .header{

            &>.inside-header{
                background: #F3F3F3;
                gap: 420px;
                display: flex;
                align-items: center;
                padding: 20px;
                border-radius: 2px;
                -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
                -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
                box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

                &>div{
                    display: flex;
                    gap: 13px;
                    align-items: center; 

                    &>:nth-child(2)>input{
                        background: #F3F3F3;
                        outline: none;
                        border: none;
                        font-size: large;
                        width: 250px;
                    }
                }
            }
        }
        .hero-section{
            display: flex;
            flex-direction: column;
            gap: 20px ;


            .slider{

                .override-image{
                    position: absolute;
                    width: 237.5px;
                    height: inherit;
                    left: 0px;
                    top: 0px;
                    background: #FF5C28;
                    z-index: 2;
                    clip-path: polygon(0 0, 100% 0, 50% 100%, 0 100%);

                &>div{
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    transform: translate(-10% , 20%);
                    align-items: center;
                    &>h1{
                        font-size: 40px ;
                        color: #000000;
                        font-weight: bold;
                    }
                    &>span{
                        text-transform: capitalize;
                        font-size: 30px;
                        color: #ffffff;
                        font-weight: bold;
                    }
                }
             }
                .override-image2{
                position: absolute;
                width: 237.5px;
                height: inherit;
                left: 40px;
                top: 70px;
                background: #DA3805;
                z-index: 1;
                clip-path: polygon(0 0, 100% 0, 50% 100%, 0 100%);
                transform: rotate(69deg);
                }

                .swiper-scrollbar{
                    display: none;
                }
                .swiper-slide>img {
                    /* width: 100%; */
                    float: right;
                    object-fit: fill;
                    position: relative;
                    top: -30px;
                    transform: scaleX(-1) scaleY(1);
                    filter: grayscale(100%);
                }
                &>.mySwiper{
                    display: inline-block;
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 12px;
                }
            }

            .content-icons{
                display: flex;
                align-items: center;
                justify-content: space-between;

                .underline-icons{
                    text-decoration: underline;
                    color: #FF5C28;
                }
                &>div{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;

                    &>svg{
                        color:  #FF5C28;
                    }
                    &>h3{
                        text-transform: capitalize;
                        font-size: 17px;
                        font-weight: 400;
                    }
                }
            }


            .icons-content{
                display: grid;
                grid-template-columns: 2fr 2fr 2fr;
                gap: 30px;
                overflow-y:scroll; 
                height: 197px;

              ::-webkit-scrollbar{
                display: none;
            } 

            &>.food-cart{
                display: flex;
                flex-direction: column;

                &>img{
                    width: 200px;
                    border-radius: 12px;
                    height: 120px;
                    object-fit: cover;
                }
                &>div{
                    align-items: center;
                    padding: 7px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    &>:nth-child(1){
                        font-size: large;
                        text-transform: capitalize;
                        font-weight: bold;
                    }
                    &>:nth-child(2){
                        font-size: large;
                        text-transform: capitalize;
                        /* font-weight: bold; */
                    }
                }
            }
            }
        }


        &>.orders{
            background: #F3F3F3;
        }
    }

`;
