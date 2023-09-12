import { styled } from "styled-components";

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  font-family: var(--font-primary);
  color: var(--dark-blue);
  background-color: var(--color-secondary);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  height: 50px;
  max-width: 100%;

  > a {
    text-decoration: none;
  }

  @media (max-width: 475px) {
    font-size: 10px;
  }
`;

export default StyledFooter;
