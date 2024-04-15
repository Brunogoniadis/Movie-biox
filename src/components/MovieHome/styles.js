import styled from 'styled-components';

export const ShowHomeWrapper = styled.div`
  width: 100vw;
  height: 130vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  position: relative;
  transition: ease 1s all;

  @media (max-width: 500px) {
    height: 95vh;
  }

  .mainContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;

    @media (max-width: 500px) {
      margin-top: -15vh;
    }
    .caroselWrapper {
      width: 100%;
      overflow: visible;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      z-index: 500;
      margin: 0;
    }

    .caroselWrapper:hover {
      opacity: 1 !important;
    }

    .mainMovieWrapper {
      align-self: flex-start;
      top: -10%;
      left: 10%;
      z-index: 500;
      display: flex;
      flex-direction: column;
      
      align-items: start;

      h2,
      p,
      div{
        margin-bottom:15px
      }

      @media (max-width: 500px) {
      left: 10%;
        top: 3vh;
        height: 25vh;
      }

      .ButtonsWrapper {
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
    height: 160px;
    position: absolute;
    top: -2px;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
    @media (max-width: 500px) {
      height: 60px;
    }
  }

  .leftblur {
    width: 45%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );

    @media (max-width: 500px) {
      display: none;
    }
  }

  .overblur {
    width: 100%;
    height: 650px;
    position: absolute;
    bottom: 0;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );

    @media (max-width: 500px) {
      display: none;
    }
  }
`;
