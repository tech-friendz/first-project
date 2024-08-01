import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/portfolio.module.css';
import portfolioImg1 from '../images/portfolioImg1.png';
import portfolioImg2 from '../images/portfolioImg2.png';
import portfolioImg3 from '../images/portfolioImg3.png';
import seePhoto from '../assets/seeAt.png';
import arrowDown from '../assets/select-down.svg'

function Portfolio() {
    const location = useLocation();
    const initialCategory = location.state?.category || 'Sketching';

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const containerRef = useRef(null);

    const categories = ['Sketching', '3D modeling', 'Sculpting', 'Rendering', 'Rendering & more for websites and smm', 'Animations'];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setCurrentSlide(0);
    };

    const handleSelectChange = (event) => {
        setSelectedCategory(event.target.value);
        setCurrentSlide(0);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => {
            const newSlide = prev + 1;
            if (newSlide < Math.ceil(images.length / itemsPerSlide)) {
                containerRef.current.style.transform = `translateX(-${newSlide * 100}%)`;
            }
            return newSlide;
        });
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => {
            const newSlide = prev - 1;
            if (newSlide >= 0) {
                containerRef.current.style.transform = `translateX(-${newSlide * 100}%)`;
            }
            return newSlide;
        });
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth <= 768) {
                setItemsPerSlide(3);
            } else {
                setItemsPerSlide(9);
            }
        };

        window.addEventListener('resize', updateItemsPerSlide);
        updateItemsPerSlide();

        return () => {
            window.removeEventListener('resize', updateItemsPerSlide);
        };
    }, []);

    const images = [portfolioImg1, portfolioImg2, portfolioImg3, portfolioImg1, portfolioImg2, portfolioImg3, portfolioImg1, portfolioImg2, portfolioImg1, portfolioImg2, portfolioImg3];

    return (
        <div className={styles.portfolio}>
            <div className={styles.categories}>
                {categories.map((category) => (
                    <span
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`${styles.categoryTag} ${selectedCategory === category ? styles.active : ''}`}
                    >
                        {category}
                    </span>
                ))}
                <select className={styles.categorySelect} onChange={handleSelectChange} value={selectedCategory}>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <img src={arrowDown} alt="" className={styles.arrowDown} />
            </div>

            <div className={styles.categoriesTitle}>
                <p>{selectedCategory}</p>
                <hr className={styles.portfolioSectionDivider} />
            </div>

            <div className={styles.categoriesContainer} ref={containerRef}>
                {images.slice(currentSlide * itemsPerSlide, (currentSlide + 1) * itemsPerSlide).map((img, index) => (
                    <div key={index} className={styles.slideBlock} onClick={() => openModal(img)}>
                        <img src={img} alt={`Portfolio ${index + 1}`} className={styles.portfolioImage} />
                        <div className={styles.hoverEffect}>
                            <button className={styles.seeButton}><img src={seePhoto} alt="" /></button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.sliderControls}>
                <button onClick={prevSlide} disabled={currentSlide === 0} className={styles.leftBtn}>
                    ←
                </button>
                <button className={styles.viewMoreButton}>
                    View More
                </button>
                <button onClick={nextSlide} disabled={currentSlide >= Math.ceil(images.length / itemsPerSlide) - 1} className={styles.rightBtn}>
                    →
                </button>
            </div>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Zoomed" className={styles.zoomedImage} />
                        <button className={styles.closeButton} onClick={closeModal}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Portfolio;
