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
                    &>:nth-child(4){
                        width: 20%;
                        cursor: pointer;
                        font-size: 20px;
                        color: #FF5C28;
                    }
                }
            }
            }
        }


        &>.orders{
            background: #F3F3F3;
            display: flex;
            flex-direction: column;
            gap: 10px;

            &>h1{
                font-size: 20px;
                font-weight: 700;
                color: #000000;
            }
            &>div{
                &>h3{
                    color: #363535;
                }
                &>h1{
                    font-size: 20px;
                    font-weight: 700;
                    color: #000000;
                }
            }
            .orders-icons{
                display: flex;
                align-items: center;
                gap: 40px;
                
                &>div{
                    padding: 5px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    color: #797575;
                }
            }

            .orders-cart{
                /* height: 150px; */
                /* overflow: scroll; */
                display: flex;
                flex-direction: column;
                gap: 10px;



             /* ::-webkit-scrollbar{
                display: none;
            }  */
                

                &>div{
                    background: #ffffff;
                    padding: 15px;
                    border-radius: 12px;
                    height: 120px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
                    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
                    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

                    &>img{
                        border-radius: 8px;
                        height: 80px;
                        width: 100px;
                        object-fit: fill;
                    }
                    .card-name{
                        display: flex;
                        flex-direction: column;

                        &>div{
                            align-items: center;
                            display: flex;
                            gap: 10px;

                            &>:nth-child(1){
                                font-size: large;
                                text-transform: capitalize;
                                font-weight: 700;
                            }
                            &>:nth-child(2){
                                font-size: large;
                                text-transform: capitalize;
                                font-weight: 700;
                            }
                        }

                        &>span{
                            font-size: large;
                            font-weight: 500;
                        }
                        &>select{
                            font-weight:bold;
                            width: 40%;
                            margin-left:20px;
                            outline: none;
                            padding: 5px;
                            border-radius: 5px;
                            border: 1px solid #797575;
                            -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
                            -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
                            box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
                        }
                    }
                }
            }

            .delivery{
                display: flex;
                flex-direction: column;
                gap: 10px;

                &>div>img{
                    height: 100px;
                    width: 100%;
                    object-fit: cover;
                    object-position: 50% 30%;
                    border-radius: 8px;
                }

                hr{
                    padding: 1px;
                    background: #D9D9D9;
                }

                .delivery-content{
                    display: flex;
                    flex-direction: column;

                    &>div{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        &>h3{
                            color: #797575;
                        }
                        &>span{
                            font-size: large;
                            font-weight: bold;
                        }
                    }
                }
                
                .delivery-cost{
                    display: flex;
                    justify-content: space-between;

                    &>h3{
                        color: #797575;
                    }
                    &>span{
                        font-size: large;
                        font-weight: bold;
                    }
                }
                .button{
                    padding: 8px;
                    background: #FF5C28;
                    border-radius: 6px;
                    color: #ffffff;
                }
            }
        }
    }

    .main-page{
        display: flex;

        .inside-tabs{
            margin: auto;
            display: flex;
            top: 50px;
            position: relative;
            text-align: center;
            background: #f0f0f0;
            padding: 20px;
            border-radius: 12px;
            width: 35%;

            .chakra-tabs__tab{
                color: #797575;
                border-bottom: none;
            }
            .css-52dxnr[aria-selected=true], .css-52dxnr[data-selected]{
                border-bottom:none;
                color: #FF5C28;
                border-radius: 5px;
                background: #ede9e9;
            }
            .css-1xhq01z{
                border-bottom: none;
            }

            .tabs{
                display: flex;
                margin: auto;
                flex-direction: column;
                width: 90%;
            }
            .tablist{
                display: flex;
                justify-content: space-around;
            }

            .form{
                display: flex;
                flex-direction: column;
                gap: 10px;

                &>div>input{
                    outline: none;
                    border: none;
                }

                fieldset {
                    padding: 0px 2px 4px 2px;
                    border: 1px solid #7a7a7a;
                    border-radius: 6px;
                    align-items: center;

                    &>input{
                        background: none;
                        outline: none;
                        width: 100%;
                        color: #FF5C28;
                    }
                }
                    
                &>button{
                        margin: auto;
                        background:#FF5C28 ;
                        width: 50%;
                        padding: 6px;
                        border-radius: 4px;
                        color: white;
                        font-weight: 400;
                    }
            }
        }
    }


`;
