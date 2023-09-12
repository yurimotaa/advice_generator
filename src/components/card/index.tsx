import { useContext } from "react";
import { AdvicesContext } from "../../contexts/advicesContext";
import StyledCard from "./style";
import svgImage from "../../assets/pattern-divider-desktop.svg";
import svgButton from "../../assets/icon-dice.svg";

const Card = () => {
  const { advice, getRandomAdvice } = useContext(AdvicesContext);
  return (
    <StyledCard>
      {advice ? <span>ADVICE #{advice.id}</span> : <span>ADVICE #</span>}
      {advice ? <p>{advice.advice}</p> : <p>Click to generate advice</p>}
      <img src={svgImage} />
      <div onClick={() => getRandomAdvice()}>
        <img src={svgButton} />
      </div>
    </StyledCard>
  );
};

export default Card;
