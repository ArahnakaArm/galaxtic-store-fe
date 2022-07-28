import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from '../../styles/form/loginForm.module.css'
import Image from 'next/image'



const RegisterSchema = Yup.object().shape({
  /*  name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('This field is required.'), */
  email: Yup.string()
    .email('Invalid email')
    .required('This field is required.'),
  password: Yup.string()
    .min(3, 'Please Enter less then 3 letters')
    .required('This field is required.'),
  /*   confirmPassword: Yup.string()
      .min(3, 'Please Enter less then 3 letters')
      .required('This field is required.')
      //check is password match ?
      .test('passwords-match', 'Password not match.', function (value) {
        return this.parent.password === value;
      }), */
});


export default function loginForm() {
  return (
    <div className='px-8 py-8 h-full'>
      <div className='w-full'>
        <div className='w-full flex justify-center'>
          <p className={styles.header}>Sign In</p>
        </div>
        <div className="">
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={RegisterSchema}
            onSubmit={values => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-group mt-2">
                  <label htmlFor="email" className={styles.inputLabel} >Email</label>
                  <Field
                    name="email"
                    type="text"
                    className={styles.commonInput + `${touched.email ? errors.email ? " border-red-500 mt-2" : " border-slate-300 mt-2" : ' mt-2'}`}
                    id="email"
                    placeholder="Enter Your Email"
                  />
                  <ErrorMessage component="div" name="email" className={styles.invalidText} />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="password" >Password</label>
                  <Field name="password"
                    type="password"
                    className={styles.commonInput + `${touched.password ? errors.password ? " border-red-500 mt-2" : " border-slate-300 mt-2" : ' mt-2'}`}
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <ErrorMessage component="div" name="password" className={styles.invalidText} />
                </div>

                <div>
                  <div className={styles.googleSignIn + ' mt-4'}>
                    <Image className="" src="/images/header/google_icon.svg" layout="fixed" width="28" height="28" />
                    <div className="m-auto">
                      <span>Sign in with Google</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className={styles.facebookSignIn + ' mt-4'}>
                    <Image  className=" " src="/images/header/facebook_icon.svg" layout="fixed" width="30" height="30" />
                    <div className="m-auto">
                      <span>Sign in with Facebook</span>
                    </div>
                  </div>
                </div>

                <div className='mt-4 flex justify-center'>
                  <a className={styles.forgotPassText}>
                    Forgot Password?
                  </a>
                </div>
                <div className='mt-4 flex justify-center'>
                  <button type="submit" className={styles.signInButton}>Sign In</button>
                </div>
                <div className='mt-4 flex justify-center'>
                  <p className='mb-0'>
                    Don't have a password ? <span className={styles.registerText}>Register</span>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

    </div>

  );
}
