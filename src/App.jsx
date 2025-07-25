import "./App.css";
import Question from "./components/QuestionBar/Question.jsx";
import Header from "./components/Header/Header";
import Tagbar from "./components/Tags/Tagbar";

function App() {
  return (
    <>
      <Header />
      <Tagbar />
      <Question />
    </>
  );
}

export default App;
