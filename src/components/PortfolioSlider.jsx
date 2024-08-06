import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import styles from '../css/portfolioSlider.module.css';
import ring1 from '../images/ring1.png';
import ring2 from '../images/ring2.png';
import ring3 from '../images/ring3.png';
import bg2 from '../images/bg2.png';
import {EffectCoverflow} from "swiper/modules";

const PortfolioSlider = () => {
    const slides = [
        { image: ring1, background: bg2 },
        { image: ring2, background: bg2 },
        { image: ring1, background: bg2 },
        { image: ring3, background: bg2 },
        { image: ring2, background: bg2 },
        { image: ring3, background: bg2 },
        { image: ring3, background: bg2 },
        { image: ring3, background: bg2 },
    ];

    return (
        <div className={styles.parentContainer}>
            <div className={styles.sliderContainer}>
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    spaceBetween={0}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 350,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    modules={[EffectCoverflow]}
                    navigation={{
                        prevEl: '.swiper-button-prev-footer',
                        nextEl: '.swiper-button-next-footer',
                    }}
                    className={styles.slider}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1200: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    <div className={styles.controllers}>
                        <button className={`swiper-button-prev-footer ${styles.sliderBtn}`}>←</button>
                        <div className={styles.viewMoreContainer}>
                            <Link to='/portfolio' className={styles.viewMoreBtn}>View More</Link>
                        </div>
                        <button className={`swiper-button-next-footer ${styles.sliderBtn}`}>→</button>
                    </div>
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className={styles.slide}>
                            <div
                                className={styles.slideBackground}
                                style={{
                                    backgroundImage: `linear-gradient(155.18deg, rgba(5, 5, 5, 0.19) 0%, rgba(5, 5, 5, 0) 76.84%), url(${slide.background})`
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
        </div>

    );
};

export default PortfolioSlider;
