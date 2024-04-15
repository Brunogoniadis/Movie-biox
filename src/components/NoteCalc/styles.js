import styled, { keyframes } from "styled-components";


const goldStarAnimation = keyframes`
    0% {
        transform: scale(0); 
    }

    75% {
        transform: scale(1.3); 
    }

    100% {
        transform: scale(1); 
    }
`;

export const NoteWrapper = styled.div`
    width: 150px;
    height: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin: 0px !important;
    padding: 0 !important;
    transition: all ease-in-out 1ms;
    img{
        width: auto;
        height: 5px;
        background-position: start;
        background-size: contain;
        object-fit: contain;
        padding: 0;
        margin: 0px !important;
    }
    .gold-star {
        font-size: ${props => props.starWidth};
        color: gold;
        width: 70px;
        font-weight: 200; 
        animation: ${goldStarAnimation} 1s ease-in-out forwards; 
    }
        .gold-star-no-anim {
        font-size: ${props => props.starWidth};
        color: gold;
        width: 70px;
        font-weight: 200; 
    }
`