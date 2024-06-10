import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[3rem] pb-[3rem] bg-gray-800'>
        <div className='w-[80%] border-b-[1.2px] pb-[2rem] border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[4rem]'>
            <div>
                <h1 className='text-[25px] uppercase text-white mb-[1rem]'>
                    Gaming Time
                </h1>
                <p className='text-[14px] text-white opacity-60'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nulla non itaque recusandae expedita repellendus sint quidem magni,
                    atque exercitationem nostrum voluptatem vitae totam est! Laborum voluptas doloremque illo id cupiditate.
                </p>
                <p className='text-[14px] text-white opacity-80 mt-[1.4rem]'>
                    More Information - (+62 8000 8888 3200)
                </p>
            </div>
            <div className='lg:mx-auto'>
                <h1 className='text-[20px] text-white mb-[1.5rem]'>
                    Information
                </h1>
                <p className='footer_link'>About Us</p>
                <p className='footer_link'>Privacy Policies</p>
                <p className='footer_link'>Return Policies</p>
                <p className='footer_link'>Shipping Policies</p>
                <p className='footer_link'>DropShipping</p>
            </div>
            <div className='lg:mx-auto'>
                <h1 className='text-[20px] text-white mb-[1.5rem]'>
                    Account
                </h1>
                <p className='footer_link'>Dashboard</p>
                <p className='footer_link'>My Orders</p>
                <p className='footer_link'>Account Details</p>
                <p className='footer_link'>Track My Order</p>
            </div>
            <div className='lg:mx-auto'>
                <h1 className='text-[20px] text-white mb-[1.5rem]'>
                    Shop
                </h1>
                <p className='footer_link'>Affiliate</p>
                <p className='footer_link'>Best Seller</p>
                <p className='footer_link'>Lastest Product</p>
                <p className='footer_link'>Sale Product</p>
            </div>
        </div>
        <div className='mt-[2rem] grid grid-cols-1 sm:grid-cols-2 gap-[1.4rem] justify-between w-[80%] mx-auto'>
            <p className='text-[14px] text-white opacity-80'>
                &#169; Copyright 2024
            </p>
            <Image src="/images/pay.svg" alt='pay' width={230} height={230} className='object-contain sm:ml-auto'/>
        </div>
    </div>
  )
}

export default Footer