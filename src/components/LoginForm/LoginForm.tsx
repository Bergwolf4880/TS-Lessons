import { useFormik } from 'formik';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { LoginFormComponent, LoginFormName, InputsContainer } from './styles';
import { LoginFormValues, LOGIN_FIELD_NAMES } from './types';
import * as Yup from 'yup'

function LoginForm() {

  const schema = Yup.object().shape({
    [LOGIN_FIELD_NAMES.EMAIL]: Yup.string().required('Field email required'),
    // [LOGIN_FIELD_NAMES.PASSWORD]:Yup.string().required('Field password required')
    [LOGIN_FIELD_NAMES.PASSWORD]: Yup.number()
      .typeError('password must be numerical')
      .required('Field password required')
      .min(3, 'Password too short')
      .max(10, 'Password too long')
})

//сохранение возвращаемого значения useFormik в переменную 
  const formik = useFormik({
    initialValues: {
      [LOGIN_FIELD_NAMES.EMAIL]: '',
      [LOGIN_FIELD_NAMES.PASSWORD]: '',
    } as LoginFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: LoginFormValues) => {
      console.log(values);
    },
  });
  console.log(formik);

  return (
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <LoginFormName>Login form</LoginFormName>
      <InputsContainer>
        <Input
          name={LOGIN_FIELD_NAMES.EMAIL}
          placeholder="Enter your email"
          label="Email"
          onInputChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Input
          name={LOGIN_FIELD_NAMES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          onInputChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </LoginFormComponent>
  );
}

export default LoginForm;
