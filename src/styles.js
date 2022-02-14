import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.07);
    padding: 3em;
    border-radius: 30px;
    color: #fff;
    text-align: center;

    h3{
        font-size: 1.2em;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.7);
    }

    @media(max-width: 1000px) {
        display: flex;
        flex-direction: column;
        margin: 8% 2%;
        padding: 3em 6em;
    }

    @media(max-width: 500px) {
        padding: 3em 2em;
    }

    @media(max-width: 320px) {
        padding: 2em 0;
    }
`

export const TeamContainer = styled.div`
    padding: 1em 3em;

    img{
        width: 100px;
        margin: 1em 0;
    }

    h2{
        font-size: 2em;
        margin: 0.5em 0;
    }

    span{
        font-size: 7em;
        margin: 0.1em 0;
    }

    @media(max-width: 500px) {
        h2 {
            font-size: 1.5em;
        }

        span{
            font-size: 5rem;
        }
    }

`

export const Info  = styled.div`
    font-size: 0.9em;
    padding: 1em;
    margin: 1em 2em;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;

    h3{
        color: #fff;
    }

    div{
        display: flex;
        justify-content: center;
        margin-top: 1em;

        span{
            margin: 0 1em;
        }
    }

    @media(max-width: 1000px) {
        margin: 5em 0;
    }

    @media(max-width: 320px) {
        margin: 0 1em;
        font-size: 0.7em;
        margin: 3em 0;
    }
`

export const GoalsNumber = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Button = styled.button`width: 50%;
    padding: 1em;
    border: none;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1em;
    margin-top: 1em;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transition: 0.6s;
    }

    @media(max-width: 500px) {
        width: auto;
    }
`