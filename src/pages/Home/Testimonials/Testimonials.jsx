import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft, FaRegStar, FaStar } from 'react-icons/fa';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./carousel.css";
import './Testimonials.css'

// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import Rating from "react-rating";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
        })
    }, [])

    return (
        <section className="max-w-screen-xl mx-auto my-10">
            <SectionTitle
                subHeading={'What our client say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>

            <div className="w-full md:w-5/6 mx-auto px-3 md:mt-16 mt-10">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper md:-mt-10 ">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="text center">
                            <div className="flex justify-center">
                                <Rating
                                    placeholderRating={review.rating}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </div>
                            <div className="flex justify-center mt-3">
                                <FaQuoteLeft className="w-16 h-16"></FaQuoteLeft>
                            </div>
                                <p className="mt-4 md:w-9/12  mx-auto">{review.details}</p>
                                <h3 className="text-warning text-xl mt-1 mb-1">{review.name}</h3>
                            </div>
                            </SwiperSlide>)
                    }
                    
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;