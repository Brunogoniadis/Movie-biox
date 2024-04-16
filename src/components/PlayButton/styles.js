import styled from 'styled-components';



export const PlayButtonWrapper = styled.button`
 && {
    background-color: white;
    color: black;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.4);
    transition: all 0.3s, box-shadow 0.3s;

    a{
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      color: #474747; 
      transform: scale(1.1);
      
    }
  }
`;
