import * as Yup from 'yup';

export const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    cycle: Yup.string().required('Cycle is required'),
    term: Yup.number().required('Term is required').typeError("You should write a number"),
    year: Yup.number().required('Year is required').typeError("You should write a number"),
  })