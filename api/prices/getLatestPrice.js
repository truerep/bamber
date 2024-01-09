import axios from 'axios';

import { appEnv } from '@/helpers';

const getLatestPrice = async (symbol) => {
  try {
    const response = await axios.get(`${appEnv.apiUrl}/stocks/latest/${symbol}`, {});

    return response.data;
  } catch (error) {
    console.error('Failed to fetch data', error);
    throw error;
  }
}

export default getLatestPrice;