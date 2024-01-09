import axios from 'axios';

import { appEnv } from '@/helpers';

const getAllCharts = async () => {
  try {
    const response = await axios.get(`${appEnv.apiUrl}/stocksdata/1000`, {});

    return response.data;
  } catch (error) {
    console.error('Failed to fetch data', error);
    throw error;
  }
}

export default getAllCharts;