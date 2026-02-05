import "./App.css";
import Question from "./components/QuestionBar/Question.jsx";
import Header from "./components/Header/Header";
import Tagbar from "./components/Tags/Tagbar";
import AddPost from "./components/AddPostForm/AddPost";
import Login from "./components/Login-Signup/Login";
import IQuestions from "./components/QuestionBar/IQuestions.jsx";
import Signup from "./components/Login-Signup/Signup";
// import Home from "./components/Home/Home.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import QuestionContainer from "./components/QuestionBar/QuestionContainer.jsx";

function App() {
  const [view, setView] = useState("home");

  return (
    <>
     
      <Header setView={setView} />
      {view === "home" && (
        <>
          <Tagbar setView={setView} />
          <QuestionContainer />
          
        </>
      )}
      {/* <Home/> */}
      {view === "add" && <AddPost />}
      {view == "login" && <Login setView={setView} />}
      {view == "signup" && <Signup setView={setView} />}
    </>
  );
}

export default App;