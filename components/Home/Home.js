import React from 'react'
import styled from 'styled-components'
import { ChartsList } from './components';

const Home = () => {
  return (
    <HomeWrapper>
      {/* <div></div> */}
      <ChartsList />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

export default Home