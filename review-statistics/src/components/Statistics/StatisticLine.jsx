export const StatisticLineName = ({ text }) => <><p>{text}</p></>

export const StatisticLineData = ({ value, isPercentage }) => <><p> {value} {isPercentage? '%' : ''}</p></>