import React from 'react'
import styled from 'styled-components';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const ChartItem = ({
  chartOptions,
  stockName
}) => {
  return (
    <ChartItemWrapper>
      <h3>{stockName}</h3>
      <HighChartWrapper>
        <HighchartsReact 
          highcharts={Highcharts}
          options={chartOptions} 
        />
      </HighChartWrapper>
    </ChartItemWrapper>
  )
}

const ChartItemWrapper = styled.div`
  background: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;

  h3 {
    font-size: 13px;
    font-weight: 600;
    background: #f4f4f4;
    padding: 2px 10px;
  }
`;

const HighChartWrapper = styled.div`

`;

export default ChartItem