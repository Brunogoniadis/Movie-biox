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
    height: 10px;


    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin: 0px !important;
    padding: 0 !important;

    transition: all ease-in-out 1ms;

    img{
        width: auto;
        height: 10px;
        background-position: start;
        background-size: contain;
        object-fit: contain;
        padding: 0;
        margin: 0px !important;
        
    }

    .gold-star {
        color: gold;
        font-weight: 200; 
        animation: ${goldStarAnimation} 1s ease-in-out forwards; 
    }
`