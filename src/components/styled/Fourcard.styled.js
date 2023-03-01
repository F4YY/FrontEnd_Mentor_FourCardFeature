import styled from "styled-components";

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstackflexi = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    margin:0 0 0 9%;
    @media screen and (max-width:1181px) {
        margin:0 0 0 3%;
    }
    @media screen and (max-width:1025px) {
        position: initial;
        flex-wrap: wrap;
        margin:8% 20px;
    }
    @media screen and (max-width:600px) {
        flex-direction: column;
        position: initial;
        margin:0 20px 20px;
    }
`
export const Styledfourcard = styled.article`
    display:flex;
    flex-direction: column;
`
export const Styledcard = styled(Vstack)`
    max-width: 350px;
    height: 250px;
    border-radius: 8px;
    background-color: #fff;
    margin-top: 190px;
    margin-bottom: 200px;
    box-shadow: 0 10px 20px -2px rgba(0,0,0,0.15);
    :nth-child(1){
        border-top: 5px solid var(--Cyan);
    }
    :nth-child(2){
        position: absolute;
        top: -140px;
        left: 380px;
        border-top: 5px solid var(--Red);
    }
    :nth-child(3){
        position: absolute;
        top: 140px;
        left: 380px;
        border-top: 5px solid var(--Orange);
    }
    :nth-child(4){
        position: absolute;
        top: 0;
        left: 760px;
        border-top: 5px solid var(--Blue);
    }
    @media screen and (max-width:1025px) {
        width: 48%;
        height:auto;
        margin:10px auto;
        :nth-child(1),:nth-child(2),:nth-child(3),:nth-child(4){
            position: initial;
        }
    }
    @media screen and (max-width:600px) {
        width: auto;
        height:auto;
        margin:0 10px 25px;
        :nth-child(1),:nth-child(2),:nth-child(3),:nth-child(4){
            position: initial;
        }
    }
`
export const Cardicon = styled.img`
    width: 60px;
    height: 60px;
    margin: 15% 0 0 75%;
    @media screen and (max-width:1025px) {
        margin:10% 70% 8%;
    }
    @media screen and (max-width:600px) {
        margin:10% 70%;
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    margin: 10px auto 5px;
    text-align: center;
    justify-content: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 5px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:0;
    color: hsl(228, 45%, 44%);
    p{
        font-size: .7rem;
    }
`