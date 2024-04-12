import styled from 'styled-components';



export const HeaderWrapper = styled.header`

  color: #fff;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px; /* Ajustando a altura para 60px, semelhante à Netflix */
  z-index: 1001;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 1s ease;
  background-image: linear-gradient(to bottom, #000,  transparent);



  .formContainer {
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      display: flex;
      flex-direction: row;
      position: relative;
    }
  }

  input {
    border: none;
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 25px;
    border: 1px solid;
    transition: all 0.3s ease;

    ::placeholder {
      color: #ccc;
    }
  }

  .icon-small {
    font-size: 16px;
  }

  .buttonSearch {
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    left: -30px;
  }

  nav {
    display: flex;
    align-items: center;

    a {
      color: #fff;
      text-decoration: none;
      margin-left: 3rem;
      font-weight: bold;
      transition: color 0.3s ease;
      font-size: 12px;
      &:hover {
        color: #f65261;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .formContainer {
      width: 100%;
    }

    input {
      width: 80%;
    }
  }
`;
