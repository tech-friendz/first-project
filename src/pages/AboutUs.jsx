import React from 'react';
import styles from '../css/aboutus.module.css';

function AboutUs() {
    return (
        <div className={styles.about}>
            <div className={styles.servicesContent}>
                <p>About Us</p>
                <hr className={styles.aboutSectionDivider} />
            </div>
            <div className={styles.aboutSubtitle}>
                <p className={styles.firstSubtitle}>Hi, so good to see you here!</p>
            </div>
            <div className={styles.aboutusContent}>
                <p>Welcome to Sirunyan Jewelry and Accessories CAD Studio, where the elegance of traditional jewelry design meets the precision of modern digital technology. At Sirunyan, we specialize in providing computer-aided design (CAD) services tailored specifically for the jewelry and accessories industry. Our expertise lies in transforming and beautifying creative visions into detailed digital blueprints, ensuring each piece is crafted with the highest level of accuracy, beauty and care. Our personalized approach means that every client receives individual attention and bespoke solutions tailored to their specific needs. We are not just a CAD studio; we are a partner in your creative journey, dedicated to helping you achieve perfection in every piece of jewelry you design.</p>
            </div>
            <div className={styles.ourTeam}>
                <div className={styles.title}>
                    <p>Our Team</p>
                    <hr className={styles.aboutSectionDivider} />
                </div>
            </div>
            {/* OUR TEAM SLIDER HERE!!! */}
            <div className={styles.ourTeamSlider}>
                <div className={styles.controllers}>
                    <button>Next</button>
                    <button>Prev</button>
                </div>
            </div>

            <div className={styles.whatWeDo}>
                <div className={styles.title}>
                    <p>What Makes Us Love What We Do</p>

                    <hr className={styles.aboutSectionDivider} />
                </div>
                <div className={styles.whatWeDoContent}>
                    <div className={styles.ourMission}>
                        <div className={styles.ourMissionTitle}>
                            <p>Our Mission</p>
                            <hr className={styles.ourMissionAboutSectionDivider} />
                        </div>
                        <div className={styles.ourMissionContent}>
                            Our mission is to empower companies and individuals interested in creating jewelry with the precision of digital technology, enabling them to create beautiful, unique pieces with ease and efficiency. We are dedicated to providing innovative CAD solutions that enhance creativity, ensure quality, and bring intricate designs to life with impeccable accuracy and realistic visuals.
                        </div>
                    </div>
                    <div className={styles.ourValues}>
                        <div className={styles.ourValuesTitle}>
                            <p>Our Values</p>
                            <hr className={styles.ourMissionAboutSectionDivider} />
                        </div>
                        <div className={styles.ourValuesContent}>
                            <p><strong>1. Quality:</strong> We ensure that every piece meets the highest standards of craftsmanship and durability.</p>
                            <p><strong>2. Customer-Centric:</strong> Our clients' satisfaction is our top priority. We delve into the customers’ concepts to understand their needs and provide personalized solutions that bring their ideas to life.</p>
                            <p><strong>3. Creativity:</strong> We encourage our team and our clients to think outside the box and push the boundaries of traditional jewelry design.</p>
                            <p><strong>4. Privacy:</strong> Our robust data protection measures ensure that all files are handled with the utmost confidentiality.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Slider here */}
        </div>
    );
}

export default AboutUs;

