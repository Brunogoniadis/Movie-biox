import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-text: #FFFFFF;
    --color-text-in-primary: #000000;
    --color-primary: #3EC863;
    --color-secondary: #310A27;
    --color-tertiary: #102542;
    --color-border: rgba(255, 255, 255, 0.2);
    --color-success: #7CC39C;
    --color-warning: #FBEA85;
    --color-error: #EA524F;

    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    position: relative;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background-color:  #080D07 ;
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
    overflow-y: overlay;
  }

  body, input, button, textarea {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }
a{
  text-decoration: none;
  color: white;
}
  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }
`;
