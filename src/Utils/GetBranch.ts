// api.js
import axios from 'axios';

export const fetchBranch = async () => {
  try {
    const response = await axios.get('https://school-demo-back.point-dev.net/api/branch');
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the data!', error);
    throw error;
  }
};
