import styled from "styled-components";
import Slider from 'react-slick';

export const CarouselWrapper = styled.div`
    width: 99%;
    padding: 25px;
    height: 390px;
    margin-top: 35px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 500;


    h2{
      margin-top: 35px;
      display: flex;
      align-items: center;
      justify-content: start;
      width: 100%;
      font-size: 25px;
      font-weight: bold;
    }


`

export const CustomSlider = styled(Slider)`
  *{
    text-decoration: none;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 95%;

  .slick-prev,
  .slick-next {
    font-size: 0px;
    height:100px;
    background-color: transparent;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 50px;
    border-radius: 5px;
    border: 1px solid #C5C5C5;
    transition: all ease 500ms;
  }

  .slick-prev:hover,
  .slick-next:hover {
    background-color: #d9d9d9;

  }

  .slick-prev {
        background-image: url('https://www.gstatic.com/images/icons/material/system/1x/arrow_back_ios_black_24dp.png'); /* URL do ícone de seta do Google */


    display: flex;
    position: absolute;
    left: 0px;
    z-index: 501;
  }

  .slick-next {
        background-image: url('https://www.gstatic.com/images/icons/material/system/1x/arrow_forward_ios_black_24dp.png'); /* URL do ícone de seta do Google */
  display: flex;
    position: absolute;
    right: 0px;
    z-index: 501;

    

  }

  .slick-next:before,  .slick-prev:before {
      content: '';
    
  }



  .slick-list{
    width: 100vw;
    max-width: 1080px;
    height: 320px;
    overflow: hidden;
    display: grid;

    margin-bottom: 2rem;


    .slick-track{
      overflow: hidden;
      width: 1080px;
    }


    div{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        
    }
  }

`

export const Item = styled.div`
  width: 210px;
  height: 310px;
  display: flex;
  flex-direction: column; 
  align-items: flex-end; 
  justify-content: flex-end;


.image {
  height: 310px;
  width: 100%;
  background-repeat: no-repeat;
  object-fit: contain;
  background-color: #D2D2D2;
  border-radius: 5%;
  z-index: 500;
  display: flex;
  position: relative;
  transition: all 0.3s ease; /* Adicionando transição para suavizar a mudança de escala */


  }

  .title {    
    display: flex;
    position: relative;

    width: 210px;
    height: 50px;
    margin-top: -40px;
    z-index: 501;
    font-size: 20px;
    font-weight: bold;
  }
`;
