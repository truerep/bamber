import React, { useEffect, useState } from 'react'
import ChartsList from './ChartsList'
import { getAllCharts } from '@/api'

const ChartsListContainer = () => {
  const [chartsList, setChartsList] = useState([])
  const getChartsData = async () => {
    const chartData = await getAllCharts();
    setChartsList(chartData)
  }

  useEffect(() => {
    getChartsData();
    // const intervalId = setInterval(getChartsData, 2000);
    // return () => clearInterval(intervalId);
  }, [])
  
  return (
    <ChartsList chartsList={chartsList} />
  )
}

export default ChartsListContainer