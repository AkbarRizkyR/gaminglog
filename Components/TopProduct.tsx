import React from 'react'
import ProductCard from  './Helper/ProductCard'

const TopProduct = () => {
    return (
        <div className='bg-gray-800 pt-[4rem] pb-[3rem]'>
            <div className='w-[80%] mx-auto flex items-center justify-between'>
                <h1 className='md:text-[28px] text-[22px] lg:text-[34px] text-white'>
                    Top Product
                </h1>
                <button className='uppercase text-[13px] md:text-[15px] text-yellow-500'>
                    View All Products
                </button>
            </div>
            <div className='grid mt-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[80%] mx-auto'>
                <div data-aos="fade-right" data-aos-delay="400">
                <ProductCard title="Dota 2 (Ardalan Set)" actualPrice='Rp. 150.000' discountPrice='Rp. 125.000' category='MOBA' image='/images/G1.jpg' />
                </div>
                <div data-aos="fade-right" data-aos-delay="500">
                <ProductCard title="Dota 2 (Female AntiMage Set)" actualPrice='Rp. 1050.000' discountPrice='Rp. 925.000' category='MOBA' image='/images/G2.jpg' />
                </div>
                <div data-aos="fade-right" data-aos-delay="600">
                <ProductCard title="Valorant (Kuronami Vandal)" actualPrice='Rp. 250.000' discountPrice='Rp. 225.000' category='Shooting' image='/images/g3.jpg' />
                </div>
                <div data-aos="fade-right" data-aos-delay="700">
                <ProductCard title="Valorant (Kuronami No Yaiba)" actualPrice='Rp. 750.000' discountPrice='Rp. 555.000' category='Shooting' image='/images/g4.jpg' />
                </div>
                <div data-aos="fade-right" data-aos-delay="800">
                <ProductCard title="Valorant (Kuronami Marshal)" actualPrice='Rp. 250.000' discountPrice='Rp. 155.000' category='Shooting' image='/images/g5.jpg' />
                </div>
                <div data-aos="fade-right" data-aos-delay="900">
                <ProductCard title="Valorant (Battle Pass EPS.3)" actualPrice='Rp. 150.000' discountPrice='Rp. 125.000' category='Shooting' image='/images/g6.jpg' />
                </div>
                <div data-aos="fade-right" data-aos-delay="1000">
                <ProductCard title="League Of Legends (High Noon Yasuo)" actualPrice='Rp. 50.000' discountPrice='Rp. 25.000' category='MOBA' image='/images/g7.jpg' />
                </div>
                <div data-aos="fade-right" data-aos-delay="1100">
                <ProductCard title="League Of Legends (Ocean Song)" actualPrice='Rp. 150.000' discountPrice='Rp. 125.000' category='MOBA' image='/images/g9.jpg' />
                </div>
            </div>
        </div>
    )
}

export default TopProduct