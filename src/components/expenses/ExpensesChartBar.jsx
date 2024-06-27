import React from 'react';
import ChartBar from './ChartBar';
import "./ExpensesChartBar.css"

const Chart = ({ dataPoints }) => {
  const values = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...values);

  return (
    <div className="chart"> 
      {dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
