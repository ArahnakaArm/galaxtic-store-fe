import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styles from '../../styles/form/loginForm.module.css'
import Image from 'next/image'
import apiService from '../../services/apiService'
import AlertBar from '../alertbar/login/alerbar'
import { RegisterSchema } from '../../services/validate/loginForm'
import Link from 'next/link'

export default function loginForm() {
  const [messageBar, setMessageBar] = useState(null)
  const [isLoading , setIsLoading] = useState(false)

  const login = async (value) => {
    setIsLoading(true)
    const loginBody = {
      email: value.email,
      password: value.password
    }
    const res = await apiService('POST', 'login', null, null, loginBody)
    if (!res || !res.resultCode || res.resultCode == '50000') {
      setMessageBar({ data: 'Error,Please try again.', type: 'error' })
    }
    if (res.resultCode == '40401') {
      setMessageBar({ data: 'User not found.', type: 'error' })
    }
    if (res.resultCode == '40101') {
      setMessageBar({ data: 'Wrong Password.', type: 'error' })
    }
    if (res.resultCode == '40102') {
      setMessageBar({ data: 'Email is not verified.', type: 'warning' })
    }
    if (res.resultCode == '20000') {
      
    }
    setIsLoading(false)
  }

  return (
    <div className='px-8 py-8 h-full'>
      <div className='w-full'>
        <div className='w-full flex justify-center'>
          <p className={styles.header}>Sign In</p>
        </div>
        <div className='mt-3'>
          {messageBar != null && <AlertBar data={messageBar.data} type={messageBar.type}></AlertBar>}
        </div>

        <div>
          <Formik
            initialValues={{
              email: 'testadmin@gmail.com',
              password: '12345689',
            }}
            validationSchema={RegisterSchema}
            onSubmit={async (values) => {
              // same shape as initial values
              await login(values);
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
                  <ErrorMessage component="div" name="email" className={styles.invalidText + ' mt-1'} />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="password" className={styles.inputLabel}>Password</label>
                  <Field name="password"
                    type="password"
                    className={styles.commonInput + `${touched.password ? errors.password ? " border-red-500 mt-2" : " border-slate-300 mt-2" : ' mt-2'}`}
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <ErrorMessage component="div" name="password" className={styles.invalidText + ' mt-1'} />
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
                    <Image className=" " src="/images/header/facebook_icon.svg" layout="fixed" width="30" height="30" />
                    <div className="m-auto">
                      <span>Sign in with Facebook</span>
                    </div>
                  </div>
                </div>
                <div className='mt-4 flex justify-center'>
                <Link href="/user/forgot-password">
                  <a className={styles.forgotPassText}>
                    Forgot Password ?
                  </a>
                  </Link>
                </div>
                <div className='mt-4 flex justify-center'>
                  <button type="submit" className={styles.signInButton + ' w-full' + `${isLoading ? ' cursor-not-allowed' : ' '}`}>Sign In</button>
                </div>
                <div className='mt-4 flex justify-center'>
                  <p className='mb-0'>
                    Don't have a password ?
                    <Link href="/user/register">
                      <span className={styles.registerText + ' ml-2'}>Register</span>
                    </Link>
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
