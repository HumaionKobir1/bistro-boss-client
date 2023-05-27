import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const OrderTab = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    }
        
    return (
        <div >
            

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="grid md:grid-cols-3 gap-10 max-w-screen-xl mx-auto my-10">
                        {
                        items.map(item => <FoodCard
                            key={item._id}
                            item={item}
                        ></FoodCard>)
                        }
                    </div>
                    
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderTab;