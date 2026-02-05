import React, { useEffect, useState } from 'react'
import IQuestions from './IQuestions';
import axios from 'axios';

const QuestionContainer = () => {
    const [questions, setQuestions] = useState([]);
    const fetchQuestions = async () => {
        const data = await axios.get('/api/v1/questions/getQuestions');
        const fquestions = data.data.questions;
        setQuestions(fquestions);
    }
    
    useEffect(() => {
        fetchQuestions();
    }, [])

    return (
        <div>
            {
                questions && questions.map((ques)=>{
                   return <IQuestions title={ques.title} desc={ques.desc} tags={ques.tags} user={ques.askedBy.username} created={ques.createdAt}/> 

                })
            }

        </div>
    )
}

export default QuestionContainer
