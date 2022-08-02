import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styles from '../../styles/form/loginForm.module.css'
import apiService from '../../services/apiService'
import AlertBar from '../alertbar/login/alerbar'
import { RegisterSchema } from '../../services/validate/registerForm'

export default function registerForm() {
  const [messageBar, setMessageBar] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const register = async (value) => {
    setIsLoading(true)
    const registerBody = {
      first_name: value.firstname,
      last_name: value.lastname,
      email: value.email,
      password: value.password,
      user_role: 'ADMIN'
    }
    const res = await apiService('POST', 'register', null, null, registerBody)
    if (!res || res.resultCode == '50000' || res.resultCode == '40000') {
      setMessageBar({ data: 'Error,Please try again.', type: 'error' })
    }
    if (res.resultCode == '40900') {
      setMessageBar({ data: 'Email is already exits.', type: 'warning' })
    }
    if (res.resultCode == '20100') {
      setMessageBar({ data: `We sent verification email to ${value.email} please check your email.`, type: 'success' })
    }
    setIsLoading(false)
  }

  return (
    <div className='px-8 py-8 h-full'>
      <div className='w-full'>
        <div className='w-full flex justify-center'>
          <p className={styles.header}>Register</p>
        </div>
        {messageBar != null && <div className='mt-2'>
          <AlertBar data={messageBar.data} type={messageBar.type}></AlertBar>
        </div>}
        <div>
          <Formik
            initialValues={{
              firstname: 'TestFirst2',
              lastname: 'TestLast2',
              email: 'teetawatriya@gmail.com',
              password: '12345689',
              confirmPassword: '12345689',
            }}
            validationSchema={RegisterSchema}
            onSubmit={async (values) => {
              // same shape as initial values
              await register(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-group mt-1">
                  <label htmlFor="firstname" className={styles.inputLabel}>Firstname</label>
                  <Field
                    name="firstname"
                    type="text"
                    className={styles.commonInput + `${touched.firstname ? errors.firstname ? " border-red-500 mt-2" : " border-slate-300 mt-2" : ' mt-2'}`}
                    id="firstname"
                    placeholder="Enter Your Firstname"
                  />
                  <ErrorMessage component="div" name="firstname" className={styles.invalidText + ' mt-1'} />
                </div>
                <div className="form-group mt-1">
                  <label htmlFor="lastname" className={styles.inputLabel}>Lastname</label>
                  <Field
                    name="lastname"
                    type="text"
                    className={styles.commonInput + `${touched.lastname ? errors.lastname ? " border-red-500 mt-2" : " border-slate-300 mt-2" : ' mt-2'}`}
                    id="lastname"
                    placeholder="Enter Your Lastname"
                  />
                  <ErrorMessage component="div" name="lastname" className={styles.invalidText + ' mt-1'} />
                </div>
                <div className="form-group mt-1">
                  <label htmlFor="email" className={styles.inputLabel}>Email</label>
                  <Field
                    name="email"
                    type="text"
                    className={styles.commonInput + `${touched.email ? errors.email ? " border-red-500 mt-2" : " border-slate-300 mt-2" : ' mt-2'}`}
                    id="email"
                    placeholder="Enter Your Email"
                  />
                  <ErrorMessage component="div" name="email" className={styles.invalidText + ' mt-1'} />
                </div>
                <div className="form-group mt-1">
                  <label htmlFor="password" className={styles.inputLabel}>Password</label>
                  <Field name="password"
                    type="password"
                    className={styles.commonInput + `${touched.password ? errors.password ? " border-red-500 mt-2" : " border-slate-300 mt-2" : ' mt-2'}`}
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <ErrorMessage component="div" name="password" className={styles.invalidText + ' mt-1'} />
                </div>
                <div className="form-group mt-1">
                  <label htmlFor="password" className={styles.inputLabel}>Confirm Password</label>
                  <Field name="confirmPassword"
                    type="password"
                    className={styles.commonInput + `${touched.confirmPassword ? errors.confirmPassword ? " border-red-500 mt-2" : " border-slate-300 mt-2" : ' mt-2'}`}
                    id="confirmPassword"
                    placeholder="Enter Your Confirm Password"
                  />
                  <ErrorMessage component="div" name="confirmPassword" className={styles.invalidText + ' mt-1'} />
                </div>
                <div className='mt-3 flex justify-center'>
                  <button type="submit" className={styles.signInButton + ' w-full' + `${isLoading ? ' cursor-not-allowed' : ' '}`}>Register</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

    </div>

  );
}
