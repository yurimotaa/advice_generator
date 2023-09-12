import { styled } from "styled-components";

const StyledCard = styled.div`
  position: relative;
  width: 500px;
  max-width: 90%;
  height: 300px;

  border-radius: 8px;

  background-color: var(--dark-grayish-blue);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: var(--font-primary);

  > span {
    color: var(--color-secondary);
  }

  > p {
    font-size: 28px;
    text-align: center;
    color: var(--color-primary);
    line-height: 150%;
    padding: 15px;
  }

  > img {
    max-width: 90%;
  }

  > div {
    position: absolute;
    bottom: -25px;
    background-color: var(--color-secondary);

    height: 60px;
    width: 60px;

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
