import React, { Fragment, useRef, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import styles from '../styles/common/topbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
/* export default function topbar() {
    const  users = useSelector((state) => state.users);
  return (
    <div>{users.name}</div>
  )
} */


const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',

  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',

  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',

  },
]



export default function topbar() {
  const buttonRef = useRef(null) // useRef<HTMLButtonElement>(null)
  const [openState, setOpenState] = useState(false)
  const onHover = (open, action) => {
    console.log(action)
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      toggleMenu(open)
    }
  }

  const toggleMenu = (open) => {
    setOpenState((openState) => !openState)
    buttonRef?.current?.click()
  }


  return (
    <div className='sticky top-0 z-50'>
      <div className='bg-black w-full flex justify-center'>
        <div className='w-[1200px] py-2 px-1'>
          <div className='w-full flex justify-between'>
            <div className='flex'>
              <p className={styles.topbarCommonTextWithDivider}>Seller Management</p>
              <p className={styles.topbarCommonTextWithDivider + ' ml-1'}>Sell with us</p>
              <p className={styles.topbarCommonTextWithDivider + ' ml-1'}>About Us</p>
              <p className={styles.topbarCommonText + ' ml-1'}>Contact</p>
            </div>
            <div className='flex'>
              <Link href="/user/register">
                <p className={styles.topbarCommonTextWithDivider + ' ml-1'}>Register</p>
              </Link>
              <Link href="/user/login">
                <p className={styles.topbarCommonText + ' ml-1'}>Sign In</p>
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-12 mt-4'>
            <div className='lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-2 flex items-center'>
              <p className={styles.topbarCommonText + ' '}>Icon</p>
            </div>
            <div className='lg:col-span-8 md:col-span-8 sm:col-span-8 col-span-8 flex'>
              <input className={styles.commonInput} type="text" id="first" name="first" placeholder='Find your thing here !' />
              <div className='bg-white py-1 px-1'>
                <div className='bg-black h-full rounded px-4 py-2 flex items-center cursor-pointer'>
                  <Image className=" " src="/icons/topbar/magnifying-glass.png" layout="fixed" width="20" height="20" />
                </div>
              </div>
            </div>
            <div className='lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-2 flex items-center justify-center'>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className='outline-0 ' ref={buttonRef}
                   
                    >
                      <div className='absolute -right-3 -top-2 bg-red-500 z-20 rounded-full px-1 py-[2px]'>
                        <p className='mb-0 text-xs text-white font-semibold'>12</p>
                      </div>
                      <Image className="cursor-pointer border-none" src="/icons/topbar/shopping-cart.png" layout="fixed" width="30" height="30" />

                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-400"
                      enterFrom="opacity-0 translate-y-0"
                      enterTo="opacity-100 translate-y-1"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel 
                         
                           className="absolute right-[-18px] z-10  w-screen max-w-sm mt-1 transform px-4 sm:px-0 ">

                   <div style={{transform : "translate(-50%, -50%) rotate(45deg)"}}  className='bg-white w-[15px] h-[15px] absolute  right-[15px] z-20'>
                    
                      </div> 

                        <div className="overflow-hidden rounded shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-1">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                              >
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="bg-gray-50 p-4">
                            <a
                              href="##"
                              className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <span className="flex items-center">
                                <span className="text-sm font-medium text-gray-900">
                                  Documentation
                                </span>
                              </span>
                              <span className="block text-sm text-gray-500">
                                Start integrating products and tools
                              </span>
                            </a>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>


            </div>
          </div>

          <div className='grid grid-cols-12 mt-2'>
            <div className='lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-2 flex items-center'>

            </div>
            <div className='lg:col-span-8 md:col-span-8 sm:col-span-8 col-span-8 flex'>
              <div className='flex'>
                <p className={styles.topbarCommonText}>Bag</p>
                <p className={styles.topbarCommonText + ' ml-2'}>Shirt</p>
                <p className={styles.topbarCommonText + ' ml-2'}>Shoe</p>
                <p className={styles.topbarCommonText + ' ml-2'}>Mask</p>
                <p className={styles.topbarCommonText + ' ml-2'}>Jean</p>
                <p className={styles.topbarCommonText + ' ml-2'}>Hat</p>
                <p className={styles.topbarCommonText + ' ml-2'}>Umbrella</p>
              </div>
            </div>
            <div className='lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-2 flex items-center'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}