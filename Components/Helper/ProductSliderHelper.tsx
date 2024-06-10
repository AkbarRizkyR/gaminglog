import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1300 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1300, min: 764 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1
    }
};

const ProductSliderHelper = () => {
    return (
        <Carousel additionalTransfrom={0} arrows={true} autoPlay={true} autoPlaySpeed={5000} centerMode={false} 
        infinite responsive={responsive} itemClass='item'>
            <ProductCard title="Dota 2 (Ardalan Set)" actualPrice='Rp. 150.000' discountPrice='Rp. 125.000' category='MOBA' image='/images/G1.jpg' />
            <ProductCard title="Dota 2 (Female AntiMage Set)" actualPrice='Rp. 1050.000' discountPrice='Rp. 925.000' category='MOBA' image='/images/G2.jpg' />
            <ProductCard title="Valorant (Kuronami Vandal)" actualPrice='Rp. 250.000' discountPrice='Rp. 225.000' category='Shooting' image='/images/g3.jpg' />
            <ProductCard title="Valorant (Kuronami No Yaiba)" actualPrice='Rp. 750.000' discountPrice='Rp. 555.000' category='Shooting' image='/images/g4.jpg' />
            <ProductCard title="Valorant (Kuronami Marshal)" actualPrice='Rp. 250.000' discountPrice='Rp. 155.000' category='Shooting' image='/images/g5.jpg' />
            <ProductCard title="Valorant (Battle Pass EPS.3)" actualPrice='Rp. 150.000' discountPrice='Rp. 125.000' category='Shooting' image='/images/g6.jpg' />
        </Carousel>
    )
}

export default ProductSliderHelper