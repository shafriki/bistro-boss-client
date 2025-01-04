import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
    return (
        <div className='max-w-screen-lg mx-5 md:mx-auto my-16 '>
            <SectionTitle subHeading={'From 11.00 to 10.00pm'}
            heading={'Order Online'}>
            </SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true} 
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]} 
                autoplay={{
                    delay: 1600,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide className="relative">
                    <img src={slide1} alt="slide1" className="w-full md:h-80 object-cover" /> 
                    <h1 className="text-sm md:text-lg uppercase text-center absolute bottom-0 left-0 right-0 flex items-center justify-center text-semibold text-white bg-opacity-60 bg-black py-2">
                        Pizza
                    </h1>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slide2} alt="slide2" className="w-full md:h-80 object-cover" /> 
                    <h1 className="text-sm md:text-lg uppercase text-center absolute bottom-0 left-0 right-0 flex items-center justify-center text-semibold text-white bg-opacity-60 bg-black py-2">
                        Soup
                    </h1>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slide3} alt="slide3" className="w-full md:h-80 object-cover" /> 
                    <h1 className="text-sm md:text-lg uppercase text-center absolute bottom-0 left-0 right-0 flex items-center justify-center text-semibold text-white bg-opacity-60 bg-black py-2">
                        Vegetable
                    </h1>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slide4} alt="slide4" className="w-full md:h-80 object-cover" /> 
                    <h1 className="text-sm md:text-lg uppercase text-center absolute bottom-0 left-0 right-0 flex items-center justify-center text-semibold text-white bg-opacity-60 bg-black py-2">
                        Cake
                    </h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
