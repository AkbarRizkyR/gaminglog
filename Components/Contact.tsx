import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[8rem]'>
                <div>
                    <h1 className='text-[25px] md:text-[35px] lg:text-[40px] leading-[2.4rem] text-white'>
                        Get Our Email for info new items, news, and more
                    </h1>
                    <p className='text-[17px] text-white mt-[0.8rem] mb-[1.5rem] opacity-80'>
                        We&aposll email you a voucher 20% off when you first order more than Rp. 300.000
                    </p>
                    <div className='w-full relative h-[2.7rem] mb-[0.3rem] bg-white'>
                        <input type='email' placeholder='Enter Your Email' className='w-[70%] md:w-[79%] bg-white ml-4 outline-none h-[2.7rem]' />
                        <button className='w-[20%] md:w-[18.5%] right-0 absolute h-[2.7rem] bg-blue-700 hover:bg-blue-900 transition-all duration-200'>
                            Subscribe
                        </button>
                    </div>
                    <p className='text-[14px] mt-[0.2rem] text-white capitalize opacity-35 font-thin'>
                        By subscribing you agree of our term, condition, policies, & cookies policy
                    </p>
                </div>
                <div>
                    <h1 className='text-[20px] md:text-[25px] lg:text-[30px] leading-[2.4rem] text-white'>
                        Need Help?
                        <br />
                        (+62 8000 8888 3200)
                    </h1>
                    <p className='text-white opacity-75 mt-2'>
                        We are avaiable at 08.00 to 17.00 GMT+7 (Jakarta)
                    </p>
                    <div className='mt-[2rem] flex items-center space-x-2'>
                        <Image width={130} height={130} alt="playstore" className='object-contain' src="/images/gp.png" />
                        {/* <Image width={130} height={130} alt="appstore" className='object-contain' src="/images/as.png" /> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact