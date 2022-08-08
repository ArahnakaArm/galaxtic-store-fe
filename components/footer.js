import React from 'react'
import styles from '../styles/common/footer.module.css'

export default function footer() {
  return (
    <div className='bg-backgroud-footer'>
      <div className='flex justify-center'>
        <div className='max-w-[1200px] grid grid-cols-10 w-full py-12 border-b-2 border-gray-300 px-1'>
          <div className='lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-2 '>
            <div>
              <p className={styles.footerHeader}>CUSTOMER SERVICE</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>Help Center</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>How To Buy</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>How To Sell</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>Payment Methods</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>Galax Coins</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>Shipping & Delivery</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>Return & Refund</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>Shopee Gurantee</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>Contact Us</p>
            </div>
          </div>
          <div className='lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-2'>
            <div>
              <p className={styles.footerHeader}>ABOUT GLT</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>About Us</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>Policies</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>Privacy Policy</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>GLT Blog</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>GLT Mall</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>Seller Management</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>Flash Deals</p>
            </div>
            <div>
              <p className={styles.footerText + ' mt-3'}>Media Contact</p>
            </div>

          </div>
          <div className='lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-2'>
            <p className={styles.footerHeader}>PAYMENT</p>
          </div>
          <div className='lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-2'>
            <p className={styles.footerHeader}>FOLLOW US</p>
          </div>
          <div className='lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-2'>
            <p className={styles.footerHeader}>APPS DOWNLOAD</p>
          </div>
        </div>

      </div>
      <div className='flex justify-center'>
        <div className='max-w-[1200px] grid grid-cols-12 w-full py-8'>
          <div className='lg:col-span-5 md:col-span-5 sm:col-span-5 col-span-5'>
            <div>
              <p className={styles.footerTextMedium}>© 2022 Galaxtic Store. All Rights Reserved.</p>
            </div>
          </div>
          <div className='lg:col-span-7 md:col-span-7 sm:col-span-7 col-span-7'>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
