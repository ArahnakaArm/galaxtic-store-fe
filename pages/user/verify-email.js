import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import apiService from '../../services/apiService'
import styles from '../../styles/pages/user/verify-email.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function verifyEmail() {
    const router = useRouter()
    const { verify_code } = router.query
    const [ isError , setIsError] = useState(false)
    const [ isLoading , setIsLoading ] = useState(true)

    const verifyEmail = async (code) => {
        const res = await apiService('POST', 'verify-email', null, null, { verify_code: code })
        if(res.resultCode == '20000') setIsError(false)
        else  setIsError(true)
        setIsLoading(false)
    }

    useEffect(() => {
        if (Object.keys(router.query).length > 0) {
          verifyEmail(verify_code)
        }
    }, [router.query]);
    
    return (
        <div className='h-full lg:px-28 md:px-12 sm:px-8 px-4 bg-slate-200 flex items-center justify-center'>
            <div className='w-full bg-white min-h-[250px] w-[500px] rounded-lg overflow-hidden shadow-xl py-3'>
                {!isError && !isLoading && <div>
                    <div className='flex justify-center w-full'>
                    <p className={styles.header}>
                        Verified
                    </p>
                </div>
                <div className='flex justify-center w-full mt-3'>
                    <Image src="/images/alerbar/check.png" layout="fixed" width="75" height="75" />
                </div>
                <div className='flex justify-center w-full mt-2'>
                    <p className={styles.header}>
                        Your email has been verified.
                    </p>
                </div>

                <div className='mt-3 flex justify-center lg:px-24 md:px-24 sm:px-24 px-8'>
                    <Link href="/user/login">
                        <button className={styles.signInButton + ' w-full'}>Go to Sign In</button>
                    </Link>
                </div>

                </div>}
               

                {isError && !isLoading && <div>
                    <div className='flex justify-center w-full'>
                    <p className={styles.header}>
                        Error
                    </p>
                </div>
                <div className='flex justify-center w-full mt-3'>
                    <Image src="/images/alerbar/incorrect-red.png" layout="fixed" width="75" height="75" />
                </div>
                <div className='flex justify-center w-full mt-2'>
                    <p className={styles.header}>
                    Error occurred please try again.
                    </p>
                </div>

                <div className='mt-3 flex justify-center lg:px-24 md:px-24 sm:px-24 px-8'>
                    <Link href="/user/login">
                        <button className={styles.signInButton + ' w-full'}>Go to Sign In</button>
                    </Link>
                </div>

                </div>}

            </div>
        </div>


    )
}
