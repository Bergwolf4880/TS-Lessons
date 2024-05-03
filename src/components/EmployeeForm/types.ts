export interface EmployeeFormValues {
  firstName: string;
  secondName: string;
  age: string;
  position: string;
  agreement: boolean;
}
export enum EMPLOYEE_FORM_NAMES {
  FIRSTNAME = 'firstName',
  SECONDNAME = 'secondName',
  AGE = 'age',
  POSITION = 'position',
  AGREEMENT = 'agreement',
}
