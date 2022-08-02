import React, { useState, useEffect } from 'react'
import styles from '../../styles/common/common.module.css'
import { ChangePassSchema } from '../../services/validate/changePassword.js'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import apiService from '../../services/apiService'
import AlertBar from '../../components/alertbar/change-password-verify/alerbar.js'
import { useRouter } from 'next/router'

export default function changePasswordVerify() {
    const router = useRouter()
    const [messageBar, setMessageBar] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { verify_code } = router.query

    const onSubmit = async (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
        await changePassword(values, resetForm);
    }

    const changePassword = async (value, resetForm) => {
        setIsLoading(true)

        const res = await apiService('PATCH', 'change-password-verify', null, null, { password: value.password, verify_code_password: verify_code })
        if (!res || !res.resultCode || res.resultCode == '50000') {
            //System Error
            setMessageBar({ data: 'Error,Please try again.', type: 'error' })
        }
        if (res.resultCode == '40401') {
            //Error data not found
            setMessageBar({ data: 'Data not found.', type: 'error' })
        }
        if (res.resultCode == '20000') {
            setMessageBar({ data: `Password changed.`, type: 'success' })
            resetForm()
        }

        setIsLoading(false)
    }

    return (
        <div className='h-full lg:px-28 md:px-12 sm:px-8 px-4 bg-slate-200 flex items-center justify-center'>
            <div className='w-full bg-white min-h-[200px] w-[500px] rounded-lg overflow-hidden shadow-xl py-3'>
                <div className='w-full flex justify-center'>
                    <p className={styles.commonHeader}>Change Password</p>
                </div>
                <div className='lg:px-16 md:px-12 sm:px-8 px-4'>
                    {messageBar != null && <div className='mt-3'>
                        <AlertBar data={messageBar.data} type={messageBar.type}></AlertBar>
                    </div>}

                    <Formik
                        initialValues={{
                            password: '',
                            confirmPassword: '',
                        }}
                        validationSchema={ChangePassSchema}
                        onSubmit={onSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form>

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
                                    <button type="submit" className={styles.changePassButton + ' w-full' + `${isLoading ? ' cursor-not-allowed' : ' '}`}>Change Password</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>


            </div>
        </div>


    )
}
