import * as Yup from 'yup'

const RegisterSchema = Yup.object().shape({
    firstname: Yup.string()
        .required('This field is required.'),
    lastname: Yup.string()
        .required('This field is required.'),
    /*  name: Yup.string()
       .min(2, 'Too Short!')
       .max(50, 'Too Long!')
       .required('This field is required.'), */
    email: Yup.string()
        .email('Invalid email')
        .required('This field is required.'),
    password: Yup.string()
        .min(8, 'Please Enter less then 8 letters')
        .required('This field is required.'),
    confirmPassword: Yup.string()
        .min(8, 'Please Enter less then 8 letters')
        .required('This field is required.')
        //check is password match ?
        .test('passwords-match', 'Password not match.', function (value) {
          return this.parent.password === value;
        }), 
});


export {
    RegisterSchema
}