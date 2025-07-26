import "./App.css";
// import Question from "./components/QuestionBar/Question.jsx";
import Header from "./components/Header/Header";
// import Tagbar from "./components/Tags/Tagbar";
import AddPost from "./components/AddPostForm/AddPost";

function App() {
  return (
    <>
      <Header />
      {/* <Tagbar />
      <Question /> */}
      <AddPost/>
    </>
  );
}

export default App;
