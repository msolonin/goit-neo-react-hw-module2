import { useState, useEffect } from 'react'
import './App.css'
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";


const App = () => {
	const defaultValues = {
		good: 0,
		neutral: 0,
		bad: 0,
	}
	const getDefaultValues = () => {
		const values = localStorage.getItem('feedbackItems');
		if (values !== null) {
			return JSON.parse(values);
		}
		return defaultValues;
	};

	const [clicks, setClicks] = useState(getDefaultValues)
	const updateFeedback = (feedbackType) => {
		if (feedbackType === 'reset') {
			return setClicks(defaultValues)
		}
		setClicks({
			...clicks,
			[feedbackType]: clicks[feedbackType] + 1,
		})
	}

	useEffect(() => {
		localStorage.setItem('feedbackItems', JSON.stringify(clicks));
	}, [clicks]);

	const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
	const positivePercentage = ((clicks.good / totalFeedback) * 100).toFixed();
	return (
		<div>
			<Description className="container"/>
			<Options updateFeedback={updateFeedback} totalFeedback={totalFeedback}/>
			{totalFeedback === 0 ? (<Notification />
    		) : (
			<Feedback
				good={clicks.good}
				neutral={clicks.neutral}
				bad={clicks.bad}
				totalFeedback={totalFeedback}
				positivePercentage={positivePercentage}
			/>
			)}
		</div>
	)
}

export default App
