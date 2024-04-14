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
    &:hover{
  &::before {
    font-size: 70px; 
          transition: font-size 200ms ease; 

  }
    }
  }
@media (max-width: 500px) {
  .slick-prev,
  .slick-next {
    opacity: 1;
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
    overflow: hidden;
    display: grid;

    margin-bottom: 2rem;


    .slick-track{
      overflow: hidden;
      width: 100vw;


    }


    div{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        
          margin-top: 2px;
          transition: ease-in 0.5ms all;
        :hover{
          margin-top: -2px;

}
        
    }
  }

`

export const Item = styled.div`

  display: flex;
  flex-direction: column; 
  align-items: flex-end; 
  justify-content: flex-end;
  width: ${props => props.width};
  height: ${props => props.height};
  position: relative;
  
.textContainer {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
    width: ${props => props.width};
  text-align: start;
}

.pTitle {
  margin-bottom: 5px;
  width: 80%;
  height: 10%;

}
.pSub {
  margin-top: 5px;
  width: 80%;
  height: 10%;
  font-size: 10px;
}
.starContainer{
  width: 100%;
  height: 55%;
  display: flex;
    align-items: end !important;
  justify-content: flex-start;
}




  .image {
    width: ${props => props.width};
    height: ${props => props.height};
      border-radius: ${props => props.borderRadius};
filter: brightness(0.5) ;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  display: flex;

  transition: all 0.3s ease; 
    position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  transition: all 0.3s ease; 


}
  


`;
