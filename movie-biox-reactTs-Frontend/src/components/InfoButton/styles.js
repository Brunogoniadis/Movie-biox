import styled from 'styled-components';



export const InfoButtonButtonWrapper = styled.button`
 && {
    background-color: #474747; // Cor de fundo
    color: white;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    font-size: 16px;

    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.4);
    transition: all 0.3s, box-shadow 0.3s;

    &:hover {
      color: black; 
      background-color: white;
      transform: scale(1.1);
      
    }
  }
`;
