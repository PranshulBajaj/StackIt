import "./App.css";
// import Question from "./components/QuestionBar/Question.jsx";
import Header from "./components/Header/Header";
// import Tagbar from "./components/Tags/Tagbar";
import AddPost from "./components/AddPostForm/AddPost";
import Login from "./components/Login-Signup/Login";
import Signup from "./components/Login-Signup/Signup";

function App() {
  return (
    <>
      <Header />
      <Login />
      {/* <Tagbar />
      <Question /> */}
      <AddPost/>
    </>
  );
}

export default App;
