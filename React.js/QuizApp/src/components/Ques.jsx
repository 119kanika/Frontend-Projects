const Ques = ({ ques, onAnsClick = () => {} }) => {
    return (
        <div className="questionCard">
            <h2>{ques.question}</h2>
            <div className="container">
                <ul className="options">
                    {ques.answerOptions.map((option) => {
                        return (
                            <li key={option.text}>
                                <button onClick={() => {
                                    onAnsClick(option.isCorrect)
                                }}>
                                    {option.text}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}


export default Ques;