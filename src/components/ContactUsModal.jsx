import React, {useEffect, useState} from 'react';
import EmailJS from 'emailjs-com';
import styles from '../css/contactUs.module.css';
import phone from '../assets/phone.png';
import message from '../assets/message.png';
import location from '../assets/location.png';
import instagram from '../assets/Instagram.png';
import discord from '../assets/Discord.png';
import twitter from '../assets/twitter.png';
import ring from '../assets/ring.png'
import letterSend from '../assets/letter_send 1.png'
import closeBtn from '../assets/closeBtn.svg'

function ContactUsModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: [], // Array to store selected services
        message: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const handleChange = (event) => {
        const { name, value, type } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? [...prevState.service, value] : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { firstName, lastName, email, phone, service, message } = formData;

        if (!email || !message) {
            setErrorMessage('Please fill in your email and message.');
            return;
        }

        const serviceList = service.join(', '); // Combine selected services into a string

        const templateParams = {
            from_name: `${firstName} ${lastName}`,
            email,
            phone,
            service: serviceList,
            message,
        };

        EmailJS.send(
            'service_g47e02d', // Replace with your EmailJS service ID
            'template_akkueoq', // Replace with your EmailJS template ID
            templateParams,
            '1Y7XlOdaLi1u0QuSz' // Replace with your EmailJS user ID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccessMessage('Your message has been sent successfully!');
                setFormData({ firstName: '', lastName: '', email: '', phone: '', service: [], message: '' }); // Clear form after successful submission
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setErrorMessage('An error occurred. Please try again later.');
            });
    };


    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.contactUs}>
                {/* Close button */}
                <button className={styles.closeButton} onClick={onClose}>
                    <img src={closeBtn} alt="Close" className={styles.closeButton} />
                </button>

                <div className={styles.contactInformation}>
                    <div className={styles.contactTitles}>
                        <div className={styles.title}>Contact Information</div>
                        <div className={styles.subtitle}>Say something to start a live chat!</div>
                    </div>
                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <img src={phone} alt="Phone" />
                            <span>+374 77 543 443</span>
                        </div>
                        <div className={styles.detailItem}>
                            <img src={message} alt="Email" />
                            <span>demo@gmail.com</span>
                        </div>
                        <div className={styles.detailItem}>
                            <img src={location} alt="Location" />
                            <span>75 Baghramyan Ave, 0033 Yerevan, Republic of Armenia</span>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <img src={twitter} alt="Twitter" />
                        <img src={instagram} alt="Instagram" />
                        <img src={discord} alt="Discord" />
                    </div>
                    <img src={ring} alt="Background" className={styles.backgrounImg} />
                </div>

                <div className={styles.contactForm}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    id="firstName"
                                    className={styles.inputField}
                                    type="text"
                                    placeholder=""
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    id="lastName"
                                    className={styles.inputField}
                                    type="text"
                                    placeholder=""
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    className={styles.inputField}
                                    type="email"
                                    placeholder=""
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    id="phone"
                                    className={styles.inputField}
                                    type="tel"
                                    placeholder=""
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={styles.SelectFormGroup}>
                            <div className={styles.formgroupTitle}>Select Service?</div>
                            <div className={styles.checkbox}>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="service"
                                        value="sketching"
                                        checked={formData.service.includes('sketching')}
                                        onChange={handleChange}
                                    />
                                    <span className={styles.customCheckbox}></span>
                                    Sketching
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="service"
                                        value="modeling"
                                        checked={formData.service.includes('modeling')}
                                        onChange={handleChange}
                                    />
                                    <span className={styles.customCheckbox}></span>
                                    3D Modeling
                                </label>
                                <label>
                                    <input type="checkbox" name="service" value="sculpting"/>
                                    <span className={styles.customCheckbox}></span>
                                    Sculpting
                                </label>
                                <label>
                                    <input type="checkbox" name="service" value="rendering"/>
                                    <span className={styles.customCheckbox}></span>
                                    Rendering
                                </label>
                                <label>
                                    <input type="checkbox" name="service" value="web"/>
                                    <span className={styles.customCheckbox}></span>
                                    Rendering for Websites and SMM
                                </label>
                                <label>
                                    <input type="checkbox" name="service" value="animation"/>
                                    <span className={styles.customCheckbox}></span>
                                    Animations
                                </label>
                                <label>
                                    <input type="checkbox" name="service" value="other"/>
                                    <span className={styles.customCheckbox}></span>
                                    Other
                                </label>
                            </div>
                        </div>
                        <div className={styles.textFormGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className={styles.textArea}
                                placeholder="Write your message.."
                                rows="3"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.sendMessageButton}>
                            <button type="submit">Send Message</button>
                        </div>
                        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
                        {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
                    </form>


                    <img src={letterSend} alt="Letter Send" className={styles.letterSend}/>
                </div>
            </div>
        </div>
    );
}

export default ContactUsModal;
