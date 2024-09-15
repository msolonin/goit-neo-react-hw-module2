
const Options = ({updateFeedback, totalFeedback }) => {
	if (totalFeedback === 0) {
		return (
			<>
				<button onClick={() => updateFeedback('good')}>Good</button>
				<button onClick={() => updateFeedback('neutral')}>Neutral</button>
				<button onClick={() => updateFeedback('bad')}>Bad</button>
			</>
		)
	}
	return (
		<>
			<button onClick={() => updateFeedback('good')}>Good</button>
			<button onClick={() => updateFeedback('neutral')}>Neutral</button>
			<button onClick={() => updateFeedback('bad')}>Bad</button>
			<button onClick={() => updateFeedback('reset')}>Reset</button>
		</>
	)
}

export default Options