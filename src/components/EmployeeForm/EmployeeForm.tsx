import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { useFormik } from 'formik';
import { EmployeeFormContainer, CheckboxContainer, Paragraph } from './styles';
import { EmployeeFormValues } from './types';
import { useState } from 'react';

export const EmloyeeForm = () => {
  const [isAgreed, setIsAgreed] = useState(true);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      secondName: '',
      age:  '',
      position: '',
      agreement: false,
    } as EmployeeFormValues,
    onSubmit: (values: EmployeeFormValues) => {
      console.log('values', values);
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
      <Paragraph>Terms and Conditions</Paragraph>
        <Input
          name="agreement"
          type="checkbox"
          onInputChange={formik.handleChange}
          checked={formik.values.agreement}
          onInputBlur={() => setIsAgreed(false)}
        />
      </CheckboxContainer>
      <Button name="Create" type="submit" disabled={isAgreed} />
    </EmployeeFormContainer>
  );
};
