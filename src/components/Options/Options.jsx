
const Options = ({ clicks, updateFeedback }) => {
	if (clicks.good === 0 && clicks.neutral === 0 && clicks.bad === 0) {
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