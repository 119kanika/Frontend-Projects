import { useState } from 'react'
import './App.css'
import questions from "./constants/questions.json"
import Ques from './components/Ques'
import { Result } from './components/Result'

function App() {
  const [currQues, setCurrQues] = useState(0)
  const [userAns, setUserAns] = useState([]);

  const handleNextQues = (isCorrect) => {
    setCurrQues(currQues + 1); //move onto next ques
    setUserAns([...userAns, isCorrect])
  }

  const resetQuiz = () => {
    setCurrQues(0);
    setUserAns([])
  }

  return (
    <div className='app'>
      <h1>World Quiz</h1>

      {
        currQues < questions.length && (
          <Ques
            ques={questions[currQues]}
            onAnsClick={handleNextQues}
          />
        )
      }


      {
        currQues === questions.length && (
          <Result
            userAns={userAns}
            questions={questions}
            resetQuiz={resetQuiz}
          />
        )
      }


    </div>
  )
}

export default App
