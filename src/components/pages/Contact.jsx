import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight, Upload, Linkedin, Instagram } from 'lucide-react';
import logo from '../../assets/home/Ansh_Bharadwaj_Logo.png';
import mainLogo from '../../assets/home/Ansh_Bharadwaj_Logo.png';
import ladyJusticeSvg from '../../assets/home/aboutsection3-Dy7gmn5D.svg';

const Contact = () => {
    const [formType, setFormType] = useState('inquiry');

    return (
        <div className="bg-[#FDFBF7] min-h-screen pt-24 font-sans">
            {/* HERO SECTION - Modeled after Home Hero */}
            <section className="relative overflow-hidden bg-brand-light pt-12 pb-24 lg:pt-24 lg:pb-32">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                    {/* Decorative SVGs can go here, using ladyJusticeSvg as a subtle backdrop if needed */}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-left"
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-brand-navy mb-6">
                                Contact Us
                            </h1>
                            <p className="text-lg md:text-xl text-brand-dark/80 max-w-xl text-balance">
                                We're here to help. Reach out to us anytime and let's discuss how we can assist with your legal needs.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="hidden lg:flex justify-end items-center"
                        >
                            <div className="relative w-[24rem] h-[24rem] lg:w-[32rem] lg:h-[32rem]">
                                <img src={mainLogo} alt="AB&A Emblem" className="relative z-10 w-full h-full object-contain grayscale mix-blend-multiply opacity-50 contrast-125" onError={(e) => { e.target.style.display = 'none' }} />
                                {/* Overlay "TM" text if necessary, screenshot shows TM */}
                                {/* <span className="absolute top-12 right-16 text-3xl font-bold text-gray-400 z-20">TM</span> */}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FORM SECTION */}
            <section className="relative py-24 bg-[#FDFBF7] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Form Toggle */}
                    <div className="flex justify-center mb-16">
                        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-1 flex items-center">
                            <button
                                onClick={() => setFormType('inquiry')}
                                className={`px-6 py-2.5 rounded-sm text-sm font-semibold transition-colors duration-300 ${formType === 'inquiry' ? 'bg-[#5f402f] text-white' : 'text-brand-dark hover:bg-gray-50'}`}
                            >
                                Inquiry Box
                            </button>
                            <button
                                onClick={() => setFormType('appointment')}
                                className={`px-6 py-2.5 rounded-sm text-sm font-semibold transition-colors duration-300 ${formType === 'appointment' ? 'bg-[#5f402f] text-white' : 'text-brand-dark hover:bg-gray-50'}`}
                            >
                                Book Appointment
                            </button>
                        </div>
                    </div>

                    <div className="max-w-5xl mx-auto items-start">
                        {/* Form Only Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 relative"
                        >
                            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-100">
                                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center p-2.5 shrink-0">
                                    <img src={logo} alt="Logo icon" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-serif font-bold text-brand-navy">
                                        {formType === 'inquiry' ? 'Inquiry Box' : 'Book Appointment'}
                                    </h3>
                                    <p className="text-base text-brand-dark/70 mt-1">
                                        {formType === 'inquiry' ? 'Send us a message via email. You can attach PDF and Word documents.' : 'Schedule a consultation with our experts via email.'}
                                    </p>
                                </div>
                            </div>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                                        <input type="text" placeholder="John Doe" className="w-full px-5 py-3.5 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold focus:bg-white transition-colors text-brand-dark placeholder:text-gray-400" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                        <input type="email" placeholder="john.doe@example.com" className="w-full px-5 py-3.5 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold focus:bg-white transition-colors text-brand-dark placeholder:text-gray-400" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                                    <input type="tel" placeholder="+91 9999999999" className="w-full px-5 py-3.5 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold focus:bg-white transition-colors text-brand-dark placeholder:text-gray-400" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                                    <textarea rows="5" placeholder="How can we help you?" className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold focus:bg-white transition-colors resize-none text-brand-dark placeholder:text-gray-400"></textarea>
                                </div>

                                {/* File Upload */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Attach Document (PDF, Word)</label>
                                    <div className="border-2 border-dashed border-gray-200 bg-gray-50 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white hover:border-brand-gold/50 transition-colors group">
                                        <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <Upload className="w-6 h-6 text-brand-gold" />
                                        </div>
                                        <span className="text-base font-semibold text-brand-navy">Click to upload PDF or Word document</span>
                                        <span className="text-sm text-gray-400 mt-2">PDF, DOC, DOCX | Max 10MB</span>
                                    </div>
                                </div>

                                <button type="button" className="w-full py-4 bg-[#5f402f] hover:bg-brand-navy text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#5f402f]/20 hover:shadow-brand-navy/30 text-sm uppercase tracking-wider mt-4">
                                    <Mail className="w-5 h-5" />
                                    Send via Email
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* INFO SECTION */}
            <section className="py-24 bg-[#F8F5EE]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-[40px] font-serif font-bold text-brand-navy"
                    >
                        Reach out to us for Legal Consultation
                    </motion.h2>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                        {/* Contact Info Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-[22px] font-bold font-serif text-brand-navy mb-8">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-0.5"><MapPin className="w-5 h-5 text-brand-gold" /></div>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                                            Fourth Floor, The Spire 2, 424, Chowk, 150 Feet Ring Rd, Sheetal Park, Rajkot, Gujarat 360007
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="mt-0.5"><Phone className="w-5 h-5 text-brand-gold" /></div>
                                        <p className="text-sm md:text-base text-gray-600 font-medium">+91 9328275523</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="mt-0.5"><Phone className="w-5 h-5 text-brand-gold" /></div>
                                        <p className="text-sm md:text-base text-gray-600 font-medium">+91 9879929797</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="mt-0.5"><Mail className="w-5 h-5 text-brand-gold" /></div>
                                        <p className="text-sm md:text-base font-medium"><a href="mailto:aba.legal.info@gmail.com" className="text-gray-600 hover:text-brand-gold transition-colors">aba.legal.info@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 pt-6 border-t border-gray-100">
                                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#5f402f] hover:text-brand-gold font-bold text-sm tracking-wide transition-colors uppercase">
                                    View on Google Maps <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Map Image / Iframe */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden h-[350px] md:h-auto min-h-[350px] border border-gray-100 relative group"
                        >
                            <iframe
                                title="Office Location Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.874135501725!2d70.76840747600863!3d22.282744843530863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbe7d0a271fb%3A0xc3f58a9e229e06cd!2sThe%20Spire%202!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                            ></iframe>
                        </motion.div>
                    </div>

                    {/* Availability Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-12 -translate-y-12">
                            <img src={logo} alt="" className="w-64 h-64 grayscale" />
                        </div>

                        <div className="flex items-center gap-3 mb-10 relative z-10">
                            <svg className="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <h3 className="text-[22px] font-bold font-serif text-brand-navy">Availability</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative z-10">
                            <div className="space-y-8">
                                <div>
                                    <p className="font-bold text-brand-navy mb-1 text-[13px] uppercase tracking-wider">Monday - Friday</p>
                                    <p className="text-gray-600 font-medium">5:00 PM - 8:00 PM</p>
                                </div>
                                <div>
                                    <p className="font-bold text-brand-navy mb-1 text-[13px] uppercase tracking-wider">Other Saturdays</p>
                                    <p className="text-gray-600 font-medium">5:00 PM - 8:00 PM</p>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <p className="font-bold text-brand-navy mb-1 text-[13px] uppercase tracking-wider">2nd & 4th Saturday</p>
                                    <p className="text-gray-600 font-medium">10:30 AM - 1:00 PM</p>
                                    <p className="text-gray-600 font-medium">5:00 PM - 8:00 PM</p>
                                </div>
                                <div>
                                    <p className="font-bold text-brand-navy mb-1 text-[13px] uppercase tracking-wider">Sunday</p>
                                    <p className="text-gray-600 font-medium">Closed</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Connect With Us */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center pb-8"
                >
                    <h3 className="text-[22px] font-serif font-bold text-brand-navy mb-8">Connect With Us</h3>
                    <div className="flex justify-center gap-4">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#422e23] hover:bg-brand-navy text-white px-7 py-3 rounded-md text-sm font-semibold transition-colors duration-300 shadow-lg group">
                            <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" /> LinkedIn
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#422e23] hover:bg-brand-navy text-white px-7 py-3 rounded-md text-sm font-semibold transition-colors duration-300 shadow-lg group">
                            <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" /> Instagram
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Contact;
