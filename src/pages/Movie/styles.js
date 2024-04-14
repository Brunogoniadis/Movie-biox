import styled from 'styled-components';

export const MovieScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  position: relative;
  transition: ease 1s all;


  .mainMovieWrapper {
    align-self: flex-start;
    top: 10%;
    left: 10%;
    z-index: 500;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5%;

    .ButtonsWrapper {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: start;
      width: 100%;
      gap: 2%;
    }
  }

  .bottomblur {
    width: 100%;
    height: 150px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  .leftblur {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.2));
  }

  .overblur {
    width: 100%;
    height: 250px;
    position: absolute;
    bottom: 0;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  }

  .moviedetails {
    
    margin-top: 5%;
    border-radius: 8px;
    width: 55%;
    
  }

  .movietitle {
    font-size: 28px;
    margin-bottom: 35px;
    font-weight: bold;
  }

  .moviedetail {
    font-size: 16px;
    margin-bottom: 25px;
  }
`;
