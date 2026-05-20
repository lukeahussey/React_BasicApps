import { StatisticLineName, StatisticLineData } from './StatisticLine'

const StatisticTable = ({ good, neutral, bad, total, average, goodPercentage }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th><StatisticLineName text={'good'} /></th>
          <td><StatisticLineData value={good} /></td>
        </tr>
        <tr>
          <th><StatisticLineName text={'neutral'} /></th>
          <td><StatisticLineData value={neutral} /></td>
        </tr>
        <tr>
          <th><StatisticLineName text={'bad'} /></th>
          <td><StatisticLineData value={bad} /></td>
        </tr>
        <tr>
          <th><StatisticLineName text={'all'} /></th>
          <td><StatisticLineData value={total} /></td>
        </tr>
        <tr>
          <th><StatisticLineName text={'average'} /></th>
          <td><StatisticLineData value={average} /></td>
        </tr>
        <tr>
          <th><StatisticLineName text={'positive'} /></th>
          <td><StatisticLineData value={goodPercentage} isPercentage={true} /></td>
        </tr>
      </tbody>
    </table>
  )
}

export default StatisticTable