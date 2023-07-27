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
            padding: 15px;

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
    }

`;
