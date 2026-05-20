import { Header } from '../ui/Header'
import { Button } from '../ui/Button'

const GiveFeedback = ({ good, setGood, neutral, setNeutral, bad, setBad }) => {
  return (
    <div>
      <Header text='give feedback' />
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />
    </div>
  )
}

export default GiveFeedback