import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import {
  EmployeeFormContainer,
  CheckboxContainer,
  CheckboxLabel,
  Checkbox,
} from './styles';
import { EmployeeFormValues, EMPLOYEE_FORM_NAMES } from './types';

const schema = Yup.object().shape({
  [EMPLOYEE_FORM_NAMES.FIRSTNAME]: Yup.string()
    .required('Name required')
    .min(2, 'Name too short')
    .max(50, 'Name too long'),
  [EMPLOYEE_FORM_NAMES.SECONDNAME]: Yup.string()
    .required('Surname required')
    .max(15, 'Surname too long'),
  [EMPLOYEE_FORM_NAMES.POSITION]: Yup.string().max(30, 'Too many characters'),
  [EMPLOYEE_FORM_NAMES.AGE]: Yup.string()
    .required('Please enter yourr age')
    .min(1, 'I am waiting...')
    .max(3, 'Are you sure?'),  
  [EMPLOYEE_FORM_NAMES.AGREEMENT]:Yup.boolean()
});

export const EmloyeeForm = () => {
  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.FIRSTNAME]: '',
      [EMPLOYEE_FORM_NAMES.SECONDNAME]: '',
      [EMPLOYEE_FORM_NAMES.POSITION]: '',
      [EMPLOYEE_FORM_NAMES.AGE]: '',      
      [EMPLOYEE_FORM_NAMES.AGREEMENT]: false,
    } as EmployeeFormValues,
    validationSchema: schema,
    validateOnChange:false,
    onSubmit: (values: EmployeeFormValues) => {
      console.table(values);
    },
  });

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <Input
        name="firstName"
        type="text"
        placeholder="Enter your first name"
        label="Name"
        onInputChange={formik.handleChange}
        value={formik.values.firstName}
        error={formik.errors.firstName}
      />
      <Input
        name="secondName"
        type="text"
        placeholder="Enter your second name"
        label="Surname"
        onInputChange={formik.handleChange}
        value={formik.values.secondName}
        error={formik.errors.secondName}
      />
      <Input
        name="position"
        type="text"
        label="Job title"
        placeholder="Enter your job title"
        onInputChange={formik.handleChange}
        value={formik.values.position}
        error={formik.errors.position}
      />
      <Input
        name="age"
        type="number"
        label="Age"
        onInputChange={formik.handleChange}
        value={formik.values.age}
        error={formik.errors.age}

      />
      <CheckboxContainer>
        <CheckboxLabel htmlFor="agreement_id">
          Terms and Conditions
        </CheckboxLabel>
        <Checkbox
          id="agreement_id"
          name="agreement"
          type="checkbox"
          onChange={formik.handleChange}
          checked={formik.values.agreement}
        ></Checkbox>
      </CheckboxContainer>
      <Button name="Create" type="submit" disabled={!formik.values.agreement} />
    </EmployeeFormContainer>
  );
};
