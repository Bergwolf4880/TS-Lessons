import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { useFormik } from 'formik';
import {
  EmployeeFormContainer,
  CheckboxContainer,
  CheckboxLabel,
  Checkbox,
} from './styles';
import { EmployeeFormValues } from './types';

export const EmloyeeForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      secondName: '',
      age: '',
      position: '',
      agreement: false,
    } as EmployeeFormValues,
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
      />
      <Input
        name="secondName"
        type="text"
        placeholder="Enter your second name"
        label="Surname"
        onInputChange={formik.handleChange}
        value={formik.values.secondName}
      />
      <Input
        name="position"
        type="text"
        label="Job title"
        placeholder="Enter your job title"
        onInputChange={formik.handleChange}
        value={formik.values.position}
      />
      <Input
        name="age"
        type="number"
        label="Age"
        onInputChange={formik.handleChange}
        value={formik.values.age}
      />
      <CheckboxContainer>
        <CheckboxLabel htmlFor="agreement_id">Terms and Conditions</CheckboxLabel>
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
