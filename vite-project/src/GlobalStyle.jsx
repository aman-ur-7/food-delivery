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
        content: ''; 
        position :absolute;
        width: 32%;
        height: 95vh;
        border: 1px solid #FFF;
        border-radius: 25px;
        box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.30);
        top: 10px;
        left: 490px;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;


        
        .tablist{

        .chakra-tabs__tab{
             border-bottom: none;
        }
        }

        .tabs{
            height: 350px;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;


            .chakra-tabs__tablist{
                border-bottom:none;
                color: #535353;
                
            .css-52dxnr[aria-selected=true], .css-52dxnr[data-selected] ,.main-page .tabs .chakra-tabs__tablist .css-52dxnr[data-selected]{
                --tabs-color: #282727;
                font-size: 28px;
                font-weight: bold;
                border-color: currentColor;
            }
            } 
            } 


            .tab-panels{
                padding: 20px;

                .form{
                    display: flex;
                    flex-direction: column;
                    gap: 25px;

                    &>::placeholder{
                        color: #717171;
                        font-weight: 400;
                    }
                &>input{
                    color: black;
                    width: 278px;
                    outline: none;
                    border: none;
                    border-bottom: 2px solid #DDD;
                }
                
                .button{
                    width: 142px;
                    height: 44px;
                    flex-shrink: 0;
                    border-radius: 15px;
                    background: #7795FF ;
                    box-shadow: 0px 1.8518518209457397px 3.1481480598449707px 0px rgba(76, 95, 137, 0.02), 0px 8.148148536682129px 6.518518447875977px 0px rgba(76, 95, 137, 0.03), 0px 20px 13px 0px rgba(76, 95, 137, 0.04), 0px 38.51852035522461px 25.481481552124023px 0px rgba(76, 95, 137, 0.04), 0px 64.81481170654297px 46.85185241699219px 0px rgba(76, 95, 137, 0.05), 0px 100px 80px 0px rgba(76, 95, 137, 0.07);
                     }

                     .resets{
                        display: flex;
                        align-items: center;
                        gap: 30px;

                        &>.nav-link>span{
                            color: tomato;
                        }
                     }
                }
            }
        }
        
    .reset-password{     
        content: ''; 
        position :absolute;
        width: 28%;
        height: 95vh;
        border: 1px solid #FFF;
        border-radius: 25px;
        box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.30);
        top: 10px;
        left: 490px;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;


        .reset-content{
            display: flex;
            flex-direction: column;
            padding: 30px;
            gap: 20px;

            &>h1{
                font-size: 25px;
                font-weight: bold;
                color: #363535;
            }
            &>div{
                display: flex;
                flex-direction: column;
                gap: 20px;

                &>input{
                    outline: none;
                    border: none;
                    border-bottom: 1px solid black;
                }
            }
                    

            .reset-button{
                   width: 142px;
                   height: 44px;
                   flex-shrink: 0;
                    border-radius: 15px;
                    background: #7795FF ;
                    box-shadow: 0px 1.8518518209457397px 3.1481480598449707px 0px rgba(76, 95, 137, 0.02), 0px 8.148148536682129px 6.518518447875977px 0px rgba(76, 95, 137, 0.03), 0px 20px 13px 0px rgba(76, 95, 137, 0.04), 0px 38.51852035522461px 25.481481552124023px 0px rgba(76, 95, 137, 0.04), 0px 64.81481170654297px 46.85185241699219px 0px rgba(76, 95, 137, 0.05), 0px 100px 80px 0px rgba(76, 95, 137, 0.07);
                }
        }
    }
`;
