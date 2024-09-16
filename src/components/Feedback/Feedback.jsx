const Feedback = ({ good, neutral, bad, totalFeedback, positivePercentage}) => {
	return (
        <>
            <div>
                <p>Good: {good}</p>
            </div>
            <div>
                <p>Neutral: {neutral}</p>
            </div>
            <div>
                <p>Bad: {bad}</p>
            </div>
            <div>
                <p>Total: {totalFeedback}</p>
            </div>
            <div>
                <p>Positive: {positivePercentage}%</p>
            </div>
        </>
    )
}

export default Feedback
