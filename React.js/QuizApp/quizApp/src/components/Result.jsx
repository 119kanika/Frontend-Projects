export const Result = ({userAns, questions, resetQuiz = () => {}}) => {

    const correctAns = userAns.filter( (answer) => answer).length

    return(
        <div className="results">
            <h2>Result</h2>
            <p>You answered {correctAns} out of {questions.length} questions correct</p>
            <span onClick={resetQuiz}>Click here to retry</span>
        </div>
    )
}