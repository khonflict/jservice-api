

function Question({ questionObj, handleToggle}) {
    console.log(questionObj.question === "" ? "click to play" : "playing");
    return (
            questionObj.question === "" ?
                <h2 className="letsPlay" >Let's Get Started!</h2>
            :
            <div className="question">
                <h2 className="category">Category: {questionObj.category}</h2>
                <h2>Points: {questionObj.points}</h2>
                <h2>Answer: {questionObj.question}</h2>
                {questionObj.showQuestion && <h2>Question: What is {questionObj.answer}</h2>}
                <button className="reveal" onClick={handleToggle}>- Reveal Question -</button>
             </div>
    );
}

export default Question;