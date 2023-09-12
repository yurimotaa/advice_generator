import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "./styles/GlobalStyles";
import MainPage from "./pages/mainPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainPage />
      <ToastContainer />
    </>
  );
}

export default App;
