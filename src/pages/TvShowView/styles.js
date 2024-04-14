import styled from 'styled-components';

export const TvShowScreen = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  position: relative;
  transition: ease 1s all;


  .mainTvShowWrapper {
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

      .caroselWrapper{

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
        
    .caroselWrapper:hover  {
      opacity: 1 !important;
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

  .TvShowdetails {
    
    margin-top: 5%;
    border-radius: 8px;
    width: 55%;
    
  }

  .tvTitle {
    font-size: 28px;
    margin-bottom: 35px;
    font-weight: bold;
  }

  .tvDetail {
    font-size: 16px;
    margin-bottom: 25px;
  }
`;
