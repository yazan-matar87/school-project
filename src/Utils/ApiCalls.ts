import { fetchBranch } from '../Utils/GetBranch';
import { fetchCycles } from '../Utils/GetCycle';
import { fetchTerm } from '../Utils/GetTerm';

export const getBranchData = async (setBranch) => {
  try {
    const response = await fetchBranch();
    console.log('Fetched Branch:', response);
    setBranch(response.data);
  } catch (error) {
    console.error('Error fetching Branch:', error);
  }
};

export const handleBranchChange = async (value, formik, setCycles) => {
  formik.setFieldValue('cycle', value);
  try {
    const CyclesData = await fetchCycles(value);
    console.log("CyclesData:", CyclesData);
    setCycles(CyclesData);
  } catch (error) {
    console.error('Error fetching Cycles:', error);
  }
};

export const handleCycleChange = async (value, formik, setYear) => {
  formik.setFieldValue('year', value);
  try {
    const YearData = await fetchTerm(value);
    console.log("YearData:", YearData);
    setYear(YearData.data); // Extract the data array
  } catch (error) {
    console.error('Error fetching Year:', error);
  }
};
