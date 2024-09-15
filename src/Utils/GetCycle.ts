import axios from 'axios';

export const fetchCycles = async (cycleId) => {
  try {
    const response = await axios.get(`https://school-demo-back.point-dev.net/api/cycle?br_id=${cycleId}`);
    return response.data.data; // Adjust this based on the actual structure of your response
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};
