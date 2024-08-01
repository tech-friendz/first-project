import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { Navigation, Pagination } from 'swiper';
import ring1 from '../images/ring1.png';
import ring2 from '../images/ring2.png';
import ring3 from '../images/ring3.png';
import bg2 from '../images/bg2.png';
import styles from '../css/portfolioSlider.module.css';
import {Navigation, Pagination} from "swiper/modules";
import {Link} from "react-router-dom";

function PortfolioSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { image: ring1, background: bg2 },
        { image: ring2, background: bg2 },
        { image: ring1, background: bg2 },
        { image: ring3, background: bg2 },
        { image: ring2, background: bg2 },
        { image: ring3, background: bg2 },
    ];

    return (
        <>
            <div className={styles.parentContainer}>
                <div className={styles.sliderContainer}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={3}
                        navigation={{
                            nextEl: '.swiper-button-next-unique',
                            prevEl: '.swiper-button-prev-unique',
                        }}
                        pagination={false}
                        centeredSlides={true}
                        grabCursor={true}
                        loop={true}

                        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={styles.slideBackground}
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.background})`,
                                    }}
                                >
                                    <img
                                        src={slide.image}
                                        className={styles.slideImage}
                                        alt={`Slide ${index + 1}`}
                                    />
                                </div>
                                <div className={styles.slideText}>
                                    Wedding Ring
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                <div className={styles.controllers}>
                    <button className={`swiper-button-prev-unique ${styles.sliderBtn}`}>←</button>
                    <Link to='/portfolio' className={styles.viewMoreBtn}>View More</Link>
                    <button className={`swiper-button-next-unique ${styles.sliderBtn}`}>→</button>
                </div>
            </div>

        </>

    );
}

export default PortfolioSlider;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styles from '../css/portfolioSlider.module.css';
// import ring1 from '../images/ring1.png';
// import ring2 from '../images/ring2.png';
// import ring3 from '../images/ring3.png';
// import bg2 from '../images/bg2.png';
//
// function PortfolioSlider() {
//     const [currentSlide, setCurrentSlide] = useState(0);
//
//     const slides = [
//         { image: ring1, background: bg2 },
//         { image: ring2, background: bg2 },
//         { image: ring1, background: bg2 },
//         { image: ring3, background: bg2 },
//         { image: ring2, background: bg2 },
//         { image: ring3, background: bg2 },
//     ];
//
//     const nextSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     };
//
//     const prevSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
//     };
//
//     const visibleSlides = [
//         slides[(currentSlide - 1 + slides.length) % slides.length],
//         slides[currentSlide],
//         slides[(currentSlide + 1) % slides.length],
//     ];
//
//     return (
//         <div className={styles.sliderContainer}>
//             <div className={styles.slider}>
//                 <div className={styles.slides}>
//                     {visibleSlides.map((slide, index) => (
//                         <div
//                             key={index}
//                             className={`${styles.slide} ${index === 1 ? styles.activeSlide : ''}`}
//                         >
//                             <div
//                                 className={styles.slideBackground}
//                                 style={{
//                                     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.background})`
//                                 }}
//                             >
//                                 <img
//                                     src={slide.image}
//                                     className={styles.slideImage}
//                                     alt={`Slide ${index + 1}`}
//                                 />
//                             </div>
//                             <div className={styles.slideText}>
//                                 Wedding Ring
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className={styles.controllers}>
//                     <button className={styles.sliderBtn} onClick={prevSlide}>←</button>
//                     <Link to='/portfolio' className={styles.viewMoreBtn}>View More</Link>
//                     <button className={styles.sliderBtn} onClick={nextSlide}>→</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default PortfolioSlider;
