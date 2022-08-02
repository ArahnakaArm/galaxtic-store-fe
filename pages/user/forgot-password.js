import React, { useState } from 'react'
import styles from '../../styles/common/common.module.css'
import { ForgotPasswordSchema } from '../../services/validate/forgotPassword.js'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import apiService from '../../services/apiService'
import AlertBar from '../../components/alertbar/login/alerbar'

export default function forgotPassword() {
    const [messageBar, setMessageBar] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const sendEmailVerify = async (value, resetForm) => {
        setIsLoading(true)

        const res = await apiService('POST', 'forgot-password', null, null, { email: value.email })
        if (!res || !res.resultCode || res.resultCode == '50000') {
            //System Error
            setMessageBar({ data: 'Error,Please try again.', type: 'error' })
        }
        if (res.resultCode == '40401') {
            //Error data not found
            setMessageBar({ data: 'Email not found.', type: 'error' })
        }
        if (res.resultCode == '20000') {
            setMessageBar({ data: `We sent change password link to ${value.email} please check your email.`, type: 'success' })
            resetForm()
        }

        setIsLoading(false)
    }

    const onSubmit = async (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
        await sendEmailVerify(values, resetForm);
    }

    return (
        <div className='h-full lg:px-28 md:px-12 sm:px-8 px-4 bg-slate-200 flex items-center justify-center'>
            <div className='w-full bg-white min-h-[200px] w-[500px] rounded-lg overflow-hidden shadow-xl py-3'>
                <div className='w-full flex justify-center'>
                    <p className={styles.commonHeader}>Forgot Password</p>
                </div>
                <div className='lg:px-16 md:px-12 sm:px-8 px-4'>
                    {messageBar != null && <div className='mt-3'>
                        <AlertBar data={messageBar.data} type={messageBar.type}></AlertBar>
                    </div>}
                    <p className={styles.descriptionText + ' mt-2 ml-1'}>
                        We'll send change password link to your email.
                    </p>

                    <Formik
                        initialValues={{
                            email: '',
                        }}
                        validationSchema={ForgotPasswordSchema}
                        onSubmit={onSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="form-group mt-3">

                                    <Field
                                        name="email"
                                        type="text"
                                        className={styles.commonInput + `${touched.email ? errors.email ? " border-red-500 mt-2" : " border-slate-300 mt-2" : ' mt-2'}`}
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <ErrorMessage component="div" name="email" className={styles.invalidText + ' mt-1'} />
                                </div>
                                <div className='mt-4 flex justify-center'>
                                    <button type="submit" className={styles.changePassButton + ' w-full' + `${isLoading ? ' cursor-not-allowed' : ' '}`}>Send Email</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>


            </div>
        </div>


    )
}
