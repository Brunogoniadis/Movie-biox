import styled from "styled-components";

export const MovieSearchWrapper = styled.div`
    position: relative;
    width: 100%;
    height: calc(12vw);
    background-color: red;
    background: ${props => props.background};
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: center;

    transition: all ease-in-out 1ms;

    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 5%;
    z-index: 499;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 498;
        border-radius: 15px;
    }



    > p ,div {
        z-index: 500;
        font-size: 18px;
        font-weight: bold;

    }

    

`;
