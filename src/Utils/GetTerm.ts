// api.js
import axios from 'axios';

export const fetchTerm = async (cycleId) => {
  try {
    const response = await axios.get(`https://school-demo-back.point-dev.net/api/term?cy_id=${cycleId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching terms:', error);
    throw error;
  }
};
