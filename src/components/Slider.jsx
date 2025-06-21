import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 🔽 Importing all 22 images
import img1 from "../images/image (1).jpg";
import img2 from "../images/image (2).jpg";
import img3 from "../images/image (3).jpg";
import img4 from "../images/image (4).jpg";
import img5 from "../images/image (5).jpg";
import img6 from "../images/image (6).jpg";
import img7 from "../images/image (7).jpg";
import img8 from "../images/image (8).jpg";
import img9 from "../images/image (9).jpg";
import img10 from "../images/image (10).jpg";
import img11 from "../images/image (11).jpg";
import img12 from "../images/image (12).jpg";
import img13 from "../images/image (13).jpg";
import img14 from "../images/image (14).jpg";
import img15 from "../images/image (15).jpg";
import img16 from "../images/image (16).jpg";
import img17 from "../images/image (17).jpg";
import img18 from "../images/image (18).jpg";
import img19 from "../images/image (19).jpg";
import img20 from "../images/image (20).jpg";
import img21 from "../images/image (21).jpg";
import img22 from "../images/image (22).jpg";
import { Link } from "react-router-dom";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
  img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22
];

const Slider = () => {
  return (
    <>
    <Link to="/videos">
    <button
  className="mx-auto mt-6 block bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 absolute left-8"
>
  ➡️ Next
</button>
</Link>
    <div className="w-screen min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="w-full max-w-[1300px]"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-[400px] md:h-[450px] bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 group">
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover group-hover:brightness-90"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
    </>
  );
};

export default Slider;
