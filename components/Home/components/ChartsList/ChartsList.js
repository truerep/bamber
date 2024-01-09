import React from 'react'
import { ChartItem } from './components'
import styled from 'styled-components';

const ChartsList = ({
  chartsList
}) => {
  return (
    <ChartsListWrapper>
      {
        chartsList.map((chart) => {
          return chart.type === "stock" && (
            <ChartItem chartData={chart} />
          )
        })
      }
    </ChartsListWrapper>
  )
}

const ChartsListWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export default ChartsList