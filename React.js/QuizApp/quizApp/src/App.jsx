import { useState } from 'react'
import './App.css'
import questions from "./constants/questions.json"
import Ques from './components/Ques'

function App() {
  const [currQues, setCurrQues] = useState(0)
  const [userAns, setUserans] = useState([]);

  const handleNextQues = () => {

  }

  return (
    <div className='app'>
      <h1>World Quiz</h1>

      <Ques ques={questions[currQues]} onAnsClick={handleNextQues}/>

      {/* result comp */}
    </div>
  )
}

export default App
