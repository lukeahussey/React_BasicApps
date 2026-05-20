import { Header } from '../ui/Header'
import StatisticTable from './StatisticTable'

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  const average = total ? (good - bad) / total : 0

  const goodPercentage = total ? (good / total * 100) : 0

  if (!good && !neutral && !bad) {
    return (
      <div>
        <Header text='statistics' />
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <Header text='statistics' />
      <StatisticTable 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        goodPercentage={goodPercentage} />
    </div>
  )
}

export default Statistics