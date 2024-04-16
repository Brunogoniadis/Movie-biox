import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  color: #fff;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 1001;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1s ease;
  background-image: linear-gradient(to bottom, #000, transparent);

    .logo {
      
    width: 130px;
    height: 16px;
    object-fit: cover;
    overflow: visible;
    margin-left: 3%;
  }

  .logo img {
    width: 100%;
    height: 100%; 
    object-fit: cover;
    overflow: visible;
  }

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
    height: 4%;
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
    gap: 15px;
    button {
      background-color: transparent;
      border: none;
      margin-bottom: 12px;
      z-index: 499;
    }
    link {
      color: #fff;
      text-decoration: none;
      margin-left: 3rem;
      font-weight: bold;
      transition: color 0.3s ease;
      font-size: 16px;
      z-index: 500;
      &:hover {
        color: #f65261;
      }
    }
  }

  @media screen and (max-width: 500px) {
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;

  .logo {
    margin-right: 160px;
   
    width: 90px;
    height: 10px;
    object-fit: cover;
  }

  .logo img {
    width: 100%;
    height: 100%; 
    object-fit: cover;
    overflow: visible;
  }
    .formContainer {
      position: absolute;
      top: 15%;
      right: 0;
      width: 200px;
      justify-content: flex-end;
    }

    input {
      margin-right: 1rem;
    }

    .buttonSearch {
      position: absolute;
      right: 10px;
    }


    .menuIcon {
      display: block;
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      top: 15%;
      left: 5%;
      display: flex;
      flex-direction: column;
      position: absolute;
    }

    nav {
      position: absolute;
      top: 5vh;
      left: 0;
      display: flex;
      align-items: self-start;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.75);
      gap: 15%;
      padding: 2%;
      border-radius: 15px;
      backdrop-filter: blur(10px);
      a {
        text-align: start;
        margin-bottom: 15%;
      }
    }
  }
`;
