import { useState } from 'react'
import './App.scss'
import { Game } from './components/Game'
import { Result } from './components/Result'

function App({ questions }) {
	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const question = questions[step]

	const onClickVariant = index => {
		setStep(step + 1)
		if (index === question.correct) {
			setCorrect(correct + 1)
		}
	}


	return (
		<div className='App'>
			{step !== questions.length ? (
				<Game
					step={step}
					question={question}
					onClickVariant={onClickVariant}
					questions={questions}
				/>
			) : (
				<Result correct={correct} questions={questions} />
			)}
		</div>
	)
}

export default App
