import { styled } from "styled-components";

const StyledCard = styled.div`
  width: 500px;
  max-width: 100%;
  height: 300px;

  border-radius: 8px;

  background-color: var(--grayish-blue);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  font-family: var(--font-primary);

  > span {
    color: var(--color-secondary);
  }

  > p {
    font-size: 28px;
    text-align: center;
    color: var(--color-primary);
  }

  > div {
    background-color: var(--color-secondary);

    height: 60px;
    width: 60px;
    margin-bottom: -50px;

    border-radius: 35px;

    display: flex;

    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: box-shadow 0.3s;
  }

  > div:hover {
    box-shadow: 0 0 10px 5px hsla(150, 100%, 66%, 0.7);
  }
`;

export default StyledCard;
