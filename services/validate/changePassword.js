import * as Yup from 'yup'

const ChangePassSchema = Yup.object().shape({
 
    password: Yup.string()
        .min(3, 'Please Enter less then 3 letters')
        .required('This field is required.'),
    confirmPassword: Yup.string()
        .min(3, 'Please Enter less then 3 letters')
        .required('This field is required.')
        .test('passwords-match', 'Password not match.', function (value) {
          return this.parent.password === value;
        }), 
});


export {
    ChangePassSchema
}