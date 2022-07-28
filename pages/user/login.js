import React from 'react'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import { setCredential, getCredential } from '../../services/credentialService'
import apiService from '../../services/apiService'
import LoginForm from '../../components/form/loginForm'

export default function login() {
    const setToken = async (token) => {
        /*   setCredential(token)
          const credential =  getCredential()
          console.log(credential)
   */
      /*   await apiService('GET', 'sdsd') */
    }
    return (
        <div className='h-full lg:px-28 md:px-12 sm:px-8 px-4 bg-slate-200 flex items-center'>
            <div className='grid grid-cols-12 w-full bg-white h-[600px] rounded-lg overflow-hidden shadow-xl'>
                <div className='lg:col-span-8 md:col-span-8 sm:col-span-0 col-span-0  lg:block md:block sm:hidden hidden'>
                   <img className='h-full w-full' src='https://pbs.twimg.com/media/FD26vH5WUAgyQTW?format=jpg&name=large'></img>
                </div>

                <div className='lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12'>
                    <LoginForm ></LoginForm>
                </div>

            </div>
        </div>


    )
}
