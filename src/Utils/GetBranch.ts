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











// import axios from 'axios';
// import { useQuery } from 'react-query';

//  const fetchBranch = async () => {
//   const response = await axios.get('https://school-demo-back.point-dev.net/api/branch');
//   return response.data;
// };

// export const useFetchBranch = () => {
//   return useQuery('branch', fetchBranch);
// };
