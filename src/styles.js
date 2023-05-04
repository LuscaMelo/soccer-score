import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.2rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 30px;
    color: #fff;
    text-align: center;
    margin: 2rem;
    padding: 0 2rem;
    padding-top: 15px;

    h3{
        font-size: 1.2em;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.7);
    }

    @media screen and (min-width: 700px){
        flex-direction: row;
        gap: 2rem;
        padding: 3rem;
    }
`

export const TeamContainer = styled.div`

    img {
        width: 3.5rem;
        margin: 1rem 0;

        @media screen and (min-width: 700px){
        width: 7rem;
    }
    }
`

export const Info = styled.div`
    font-size: 0.85rem;
    padding: 1rem;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.08);

    h3 {
        font-size: 0.9rem;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    
    p {
        font-size: 0.8rem;
        margin: 0.5rem 0;
    }
`

export const Hr = styled.div`
    width: 20px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.35);
`

export const GoalsNumber = styled.div`
    position: relative;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;

    span {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(6px);
        border: 1px solid rgba(255, 255, 255, 0.07);
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        font-size: 1.2rem;
        margin: 1rem 0;
    }

    
`

export const Button = styled.button`
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 5px 28px;
    border-radius: 20px;
    cursor: pointer;
    scale: 0.9;

    :hover {
        background-color: rgba(255, 255, 255, 0.7);
        scale: 1;
        transition: 0.5s ease-in-out;
    }
`