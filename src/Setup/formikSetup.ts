import { useFormik } from 'formik';
import { validationSchema } from '../Schema/SchemaForLogIn';
import { login } from '../Utils/PostLogIn';

export const useLoginFormik = () => {
  return useFormik({
    initialValues: {
      username: '',
      password: '',
      cycle: '',
      year: '',
      term: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const formData = {
        username: values.username,
        password: values.password,
        branch: values.cycle,
        cycle: values.year,
        term: values.term,
      };
      login(formData);
      console.log(values);
      console.log('Username:', values.username);
      console.log('Password:', values.password);
      console.log('Cycle:', values.cycle);
      console.log('Year:', values.year);
      console.log('Term:', values.term);
    },
  });
};
