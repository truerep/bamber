import React, { useState } from 'react'
import ChartItem from './ChartItem'
import { getLatestPrice } from '@/api';

const ChartItemContainer = ({
  chartData
}) => {
  const [currColor, setCurrColor] = useState('#F6465D')
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
  // if (dataPoints[0] <= dataPoints[dataPoints.length - 1]) {
  //   colorShade = "#70ff0f";
  // }

  let stockName = chartData.symbol;

  const chartOptions = {
    chart: {
      type: "areaspline",
      height: 150,
      backgroundColor: 'transparent',
      margin: [0, 0, 0, 0],

      events: {
        load: function () {
          const series = this.series[0];
          // const series = this.series[0];
          setInterval(async function async () { 
            if (series) {
              let res = await getLatestPrice(stockName);
              if (series.data[0].y <= res.latestPrice) {
                setCurrColor('#70ff0f')
              } else {
                setCurrColor('#F6465D')
              }
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
      pointFormat: '<b>₹ {point.y:.2f}</b>',
    },
    series: [{
      cursor: 'crosshair',
      lineWidth: 2,
      marker: {
        enabled: false
      },
      data: dataPoints,
      color: currColor,
      threshold: null,
      fillColor: {
        linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
        stops: [
          [0, currColor],
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