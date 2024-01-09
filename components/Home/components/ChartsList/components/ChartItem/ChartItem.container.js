import React from 'react'
import ChartItem from './ChartItem'
import { getLatestPrice } from '@/api';

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
      type: "spline",
      height: 150,
      backgroundColor: 'transparent',
      margin: [0, 0, 0, 0],

      events: {
        load: function () {
          const series = this.series[0];
          // const series = this.series[0];
          console.log(series, "<--series")
          setInterval(async function async () { 
            if (series) {
              let res = await getLatestPrice(stockName);
              console.log(res, "<----")
              series.addPoint(res.latestPrice, true, true);
            }
          }, 1000);
        }
      }

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
      // min: Math.min(...dataPoints),
      // max: Math.max(...dataPoints),
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
      lineWidth: 2,
      marker: {
        enabled: false
      },
      data: dataPoints,
      // color: colorShade,
      threshold: null,
      // fillColor: {
      //   linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
      //   stops: [
      //     [0, colorShade],
      //     [1, '#fff0']
      //   ]
      // }
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