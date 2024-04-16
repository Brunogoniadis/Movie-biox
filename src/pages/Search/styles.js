import styled from 'styled-components';

export const SearchWrapper = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-position: center;
  position: relative;
  transition: ease 1s all;
  text-align: start;
  margin-top: 125px;
  gap: 35px;
  padding: 40px;

  h3 {
    width: 100%;
    text-align: start;
  }

  .mainGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 500px) {
    .mainGrid {
        display: flex;
        flex-direction: column;
    }
}
`;
