import React from 'react'
import styles from '../css/services.module.css'
import ServicesItem from '../components/ServicesItem'; //Child Element
import img1 from '../images/servicesImg1.jpg'
import img2 from '../images/servicesImg2.jpg'
import img3 from '../images/servicesImg3.jpg'
import img4 from '../images/servicesImg4.jpg'
import img5 from '../images/servicesImg5.jpg'
import img6 from '../images/servicesImg6.jpg'



const services = [
    {
        image: img1,
        title: 'Sketching',
        description: 'Transform your vision into exquisite jewelry pieces with our sketching services. As the first phase of the jewelry computer-aided design process, our detailed sketches lay the foundation for intricate 3D modeling. Collaborate with our sketchers to express your dream jewelry, ensuring every detail is captured before the magic of modeling begins.'
    },
    {
        image: img2,
        title: '3D Modeling',
        description: 'Second phase of our comprehensive jewelry CAD services: 3D Modeling. After our initial sketching phase, we bring your jewelry designs to life with 3D modeling. Our skilled professionals create ready-to-print 3D models not only of jewelry pieces but also fashion accessories, ensuring every intricate detail is perfected before moving on to production.'
    },
    {
        image: img3,
        title: 'Sculpting',
        description: 'Our digital sculpting service elevates your designs by adding a unique, artisanal touch to your pieces. Whether it`s for jewelry or fashion accessories, our sculpting process enhances the design, bringing depth, texture, and new level of craftsmanship. By using advanced software, we meticulously sculpt intricate details and textures, bringing your jewelry and fashion accessory concepts to life. This service is ideal for creating bespoke, high-quality pieces that stand out.'
    },
    {
        image: img4,
        title: 'Rendering',
        description: 'After preparing the 3D model, we create photorealistic images that showcase every detail of your designs by utilizing advanced software. Perfect for presentations, marketing, and client approvals, our renderings bring your creations to life with stunning clarity and precision.'
    },
    {
        image: img5,
        title: 'Rendering for Website and SMM',
        description: 'Tailored for social media marketing and website use, our rendering services create photorealistic images in digital studios that capture and highlight every intricate detail of your jewelry and accessories. These striking visuals elevate your brand’s digital presence, making your designs stand out and engage your audience with aesthetics and elegance.'
    },
    {
        image: img6,
        title: 'Animation',
        description: 'Second phase of our comprehensive jewelry CAD services: 3D Modeling. After our initial sketching phase, we bring your jewelry designs to life with 3D modeling. Our skilled professionals create ready-to-print 3D models not only of jewelry pieces but also fashion accessories, ensuring every intricate detail is perfected before moving on to production.'
    },
];

function Services() {
    return (
        <div className={styles.container}>
            {services.map((service, index) => (
                <ServicesItem
                    key={index}
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    isReversed={index % 2 !== 0}
                />
            ))}
        </div>
    )
}

export default Services
