import styled from "styled-components";
import Slider from 'react-slick';




export const CustomSlider = styled(Slider)`
  *{
    text-decoration: none;
  }


  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;


      &:hover{
        .slick-prev,
        .slick-next {
    opacity: 1;


  }

  }

  .slick-prev,
  .slick-next {
    font-size: 0px;
    height:130px;
    background-color: transparent;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    border-radius: 5px;
    border: none;
    transition: all ease 500ms;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    &:hover{
  &::before {
    font-size: 70px; 
          transition: font-size 200ms ease; 

  }
    }
  }


  .slick-prev {


    display: flex;
    position: absolute;
    left: 0px;
    z-index: 501;
  }

  .slick-next {
    display: flex;
    position: absolute;
    right: 0px;
    z-index: 501;

  }


    .slick-next::before{
    content: "keyboard_arrow_right";
    font-family: 'Material Icons'; 
    font-size: 50px; 
    color: white; 
    display: flex;
    align-items: center;
    justify-content: center;
    }

        .slick-prev::before{
    content: "keyboard_arrow_left";
    font-family: 'Material Icons'; 
    font-size: 50px; 
    color: white; 
    display: flex;
    align-items: center;
    justify-content: center;
    }



  


  .slick-list{
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
