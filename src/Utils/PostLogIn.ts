import axios from 'axios';

export const login = async (formData) => {
    console.log(formData);
    
  try {
    const response = await axios.post('https://school-demo-back.point-dev.net/api/login', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
