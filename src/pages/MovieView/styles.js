import styled from 'styled-components';

export const MovieScreen = styled.section`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  position: relative;
  transition: ease 2s background;

    @media (max-width: 500px) {
      background-size: 80vh;
    }
  .mainMovieWrapper {
    align-self: flex-start;
    top: 10%;
    left: 10%;
    z-index: 500;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5%;
    margin-top: 150px;
    margin-bottom: 150px;

    .ButtonsWrapper {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: start;
      width: 100%;
      gap: 2%;
    }
  }

  .caroselWrapper {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 500;
    margin: 0;
    margin-bottom: 10%;
  }

  .caroselWrapper:hover {
    opacity: 1 !important;
  }

  .bottomblur {
    width: 100%;
    height: 150px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
    @media (max-width: 500px) {
      display: none;
    }
  }

  .leftblur {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.2)
    );
    @media (max-width: 500px) {
      display: none;
    }
  }

  .overblur {
    width: 100%;
    height: 250px;
    position: absolute;
    bottom: 0;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0)
    );
    @media (max-width: 500px) {
      display: none;
    }
  }

  .moviedetails {
    border-radius: 8px;
    width: 955px;
    height: 300px;

    @media (max-width: 500px) {
      width: 60vw;

      height: 700px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      overflow: hidden;
    }
  }

  .movietitle {
    font-size: 28px;
    margin-bottom: 35px;
    font-weight: bold;
  }

  .moviedetail {
    margin-bottom: 25px;
    @media (max-width: 500px) {
      margin-bottom: 75px;

    max-height: calc(1.5em * 5); 
    line-height: 1.5em; 
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: horizontal;

    }
  }
`;
