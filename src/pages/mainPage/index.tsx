import { useContext } from "react";
import { AdvicesContext } from "../../contexts/advicesContext";

const MainPage = () => {
  const { advice, getRandomAdvice } = useContext(AdvicesContext);

  return (
    <div>
      {advice ? <p>{advice.advice}</p> : <p>Clique para gerar um conselho</p>}
      <button onClick={() => getRandomAdvice()}>Clique</button>
    </div>
  );
};

export default MainPage;
