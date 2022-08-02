import React from 'react'
import Image from 'next/image'

export default function AlertBar(props) {
  return (
    <div>
      {props.type == 'error' && <div className='w-full min-h-[36px] border border-red-400 bg-red-50 flex items-center px-2'>
        <Image src="/images/alerbar/incorrect-red.png" layout="fixed" width="18" height="18" />
        <p className='mb-0 text-sm ml-1'>{props.data}</p>
      </div>}
      {props.type == 'warning' && <div className='w-full min-h-[36px] border border-orange-400 bg-orange-50 flex items-center px-2'>
        <p className='mb-0 text-sm ml-1'>{props.data}</p>
      </div>}
      {props.type == 'success' && <div className='w-full min-h-[36px] border border-green-400 bg-green-50 flex items-center px-2'>
        <p className='mb-0 text-sm ml-2'>{props.data}</p>
      </div>}
    </div>
  )
}
