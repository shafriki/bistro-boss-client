import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div 
            className="my-10 py-10 relative bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${featuredImg})` }}
        >
            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                {/* Optional overlay text */}
            </div>
            
            {/* Content Section */}
            <div className="relative z-10">
                <SectionTitle subHeading="check it out" heading="Featured Item" />
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-5  md:px-16 py-10 md:py-16">
                    <div className="w-full md:w-auto">
                        <img 
                            src={featuredImg} 
                            alt="featured-image" 
                            className="w-full  md:w-[25rem] lg:w-[30rem] rounded-md mx-auto md:mx-0"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-white mb-1 text-sm ">March 20, 2023</p>
                        <p className="text-white mb-1 text-sm ">WHERE CAN I GET SOME?</p>
                        <p className="w-full  md:w-[25rem] lg:w-[30rem] text-justify text-white text-sm  mx-auto md:mx-0">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores necessitatibus optio nulla quasi iusto nihil. Sequi rerum impedit doloribus, numquam sed consequatur nostrum dolor voluptas. Atque error quo hic corporis?
                        </p>
                        <button className="rounded-xl px-5 py-1 bg-transparent border-b-4 text-white border-amber-500 mt-5 text-sm ">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
