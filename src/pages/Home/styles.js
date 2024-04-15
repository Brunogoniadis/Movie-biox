
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  position: relative;

  transition: ease 1s all;

  .mainController{
    background-color: transparent;


      @media screen and (max-width: 500px) {
    padding-top: 15vh;
  }
  }
  .maincontent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;

  

    .caroselWrapper{
      width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 500;

    margin: 0;
    margin-bottom: 10%;
    }

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

  
  .bottomblur {
    width: 100%;
    height: 150px;
    position: absolute;
    top: 0;
    left: 0; 
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

      @media screen and (max-width: 500px) {
           margin-top:6vh;
      }
  }


  .leftblur {
    width: 85%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0; 
    background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

    
          @media screen and (max-width: 500px) {
            display: none;
          }
  }

  .overblur{
    width: 100%;
    height: 150px;
    position: absolute;
    bottom: 0;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

          @media screen and (max-width: 500px) {
            display: none;
          }
  }
`;


