import styled from "styled-components";

export const Container = styled.div`
    --Red: hsl(0, 78%, 62%);
    --Cyan: hsl(180, 62%, 55%);
    --Orange: hsl(34, 97%, 64%);
    --Blue: hsl(212, 86%, 64%);
    --Very-Dark-Blue: hsl(234, 12%, 34%);
    --Grayish-Blue: hsl(229, 6%, 66%);
    --Very-Light-Gray: hsl(0, 0%, 98%);
    font-size: 15px;
    font-family: Poppins;
    --light: 200;
    --semireguler: 280;
    --reguler: 400;
    --semibold: 600;
    background-color: var(--Very-Light-Gray);
    h1{
        font-size: 2.45em;
        font-weight: var(--semireguler);
        color: var(--Very-Dark-Blue);
        text-align: center;
        margin: 70px 0 0;
        line-height: 1.2em;
        @media screen and (max-width:600px) {
            font-size: 1.7em;
        }
    }
    h2{
        font-size: 1.3em;
        font-weight: var(--semibold);
        color: var(--Very-Dark-Blue);
        margin: 25px 0 5px 30px;
    }
    h3{
        font-size: 1em;
        font-weight: var(--reguler);
        color: var(--Grayish-Blue);
        text-align: center;
        margin: 15px 30%;
        @media screen and (max-width:1025px) {
            margin: 15px 8% 10px;
        }
        @media screen and (max-width:600px) {
            margin: 15px 7% 15%;
            text-align: center;
        }
    }
    span{
        font-size: 2.45em;
        font-weight: var(--semibold);
        color: var(--Very-Dark-Blue);
        text-align: center;
        @media screen and (max-width:600px) {
            font-size: 1.7em;
        }
    }
    p{
        font-size: .85em;
        font-weight: var(--reguler);
        color: var(--Grayish-Blue);
        line-height: 1.8em;
        margin: 5px 40px 0 30px;
    }
`