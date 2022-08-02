import * as Yup from 'yup'

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('This field is required.'),
  });
  

  export {
    ForgotPasswordSchema
  }