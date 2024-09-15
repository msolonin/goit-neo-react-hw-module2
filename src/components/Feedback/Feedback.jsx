const Feedback = ({ good=0, neutral=0, bad=0, totalFeedback=0}) => {
    if (totalFeedback === 0) {
        return (
            <p>No feedback yet</p>
        )
    }
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
                <p>Posititve: {((good / totalFeedback) * 100).toFixed()}%</p>
            </div>
        </>
    )
}

export default Feedback
