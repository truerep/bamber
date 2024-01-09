import React from 'react'
import ChartItem from './ChartItem'

const ChartItemContainer = ({
  chartData
}) => {
  // const dummyData =[
  //   4952,
  //   6951,
  //   3951,
  //   4951,
  //   2951,
  //   7537,
  //   6951,
  //   3951,
  //   4951
  // ];

  let colorShade = "#F6465D";
  // if (dummyData[0] <= dummyData[dummyData.length - 1]) {
  //   colorShade = "#70ff0f";
  // }

  let dataPoints = chartData?.data.map((data) => (data.price))
  if (dataPoints[0] <= dataPoints[dataPoints.length - 1]) {
    colorShade = "#70ff0f";
  }

  let stockName = chartData.symbol;

  const chartOptions = {
    chart: {
      type: "areaspline",
      height: 150,
      backgroundColor: 'transparent',
      margin: [0, 0, 0, 0]
    },
    title: {
      text: '',
      align: 'left'
    },
    subtitle: {
      text: '',
      align: 'left'
    },
    xAxis: {
      type: 'datetime',
      crosshair: true,
      labels: {
        enabled: false
      }
    },
    yAxis: {
      gridLineWidth: 0,
      title: {
        text: ''
      },
      labels: {
        style: {
          fontSize: '10px',
          fontWeight: '600',
          fontFamily: 'Quicksand,sans-serif'
        },
      },
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<b>₹ {point.y:.0f}</b>',
    },
    series: [{
      cursor: 'crosshair',
      lineWidth: 1,
      marker: {
        enabled: false
      },
      data: dataPoints,
      color: colorShade,
      fillColor: {
        linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
        stops: [
          [0, colorShade],
          [1, '#fff0']
        ]
      }
    }]
  };

  return (
    <ChartItem 
      chartOptions={chartOptions}
      stockName={stockName}
    />
  )
}

export default ChartItemContainer