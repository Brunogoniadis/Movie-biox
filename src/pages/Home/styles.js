
import styled from 'styled-components';

export const HomeWrapper = styled.header`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 110%;
  background-position: center;
  position: relative;


  .maincontent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;



    .mainMovieWrapper{
      width: 40%;
      height: 40%;
      align-self: flex-start;
      margin-top: 10%;
      left: 10%;
      z-index: 500;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 5%;


      .ButtonsWrapper{
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: start;
        width: 100%;
        gap: 2%;
      }

    }

  }

  .leftblur {
    width: 85%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0; 
    background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  .overblur{
    width: 100%;
    height: 150px;
    position: absolute;
    bottom: 0;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

  }
`;


