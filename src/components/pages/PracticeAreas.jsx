import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, FolderSync, Users, Car, Building2, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/home/Ansh_Bharadwaj_Logo.png';
import courtRoom from '../../assets/home/court-room-8Og9yG1j.png';

const criminalBg = "https://images.unsplash.com/photo-1589829085413-56de8ae24c73?auto=format&fit=crop&q=80&w=800";
const civilBg = "https://images.unsplash.com/photo-1505664159871-9cae9dfdcb37?auto=format&fit=crop&q=80&w=800"; // Hands on document/desk
const famBg = "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800"; // Parent and child
const motorBg = "https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?auto=format&fit=crop&q=80&w=800"; // Cars on road/accident
const compBg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"; // Corporate building
const ipBg = "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800"; // Idea/Lightbulb concept

const PracticeAreas = () => {
    const areas = [
        {
            title: "Criminal Law",
            icon: <Scale className="w-6 h-6 text-brand-gold" />,
            description: "We handle complex criminal cases with precision and dedication. Our experienced advocates understand the intricacies of criminal law and are well-versed in defending our clients' rights and ensuring fair legal processes in police stations, trial courts, appellate courts, and more.",
            image: criminalBg
        },
        {
            title: "Civil Law",
            icon: <FolderSync className="w-6 h-6 text-brand-gold" />,
            description: "Our firm offers robust legal representation in a wide range of civil matters, including property disputes, contract controversies, recovery of money, landlord-tenant issues, injunctions, and others. We are committed to delivering practical solutions through strategic litigation. We advocate for individuals and businesses to ensure their civil rights and interests are protected with professionalism, confidentiality, and unwavering dedication.",
            image: civilBg
        },
        {
            title: "Family Law",
            icon: <Users className="w-6 h-6 text-brand-gold" />,
            description: "Navigating family law can be challenging. At our law firm, we provide compassionate legal support for issues like divorce, child custody etc., alimonies, inheritance. Our dedicated team of advocates offer personalized guidance to protect your rights and promote amicable resolutions during stressful legal processes.",
            image: famBg
        },
        {
            title: "Motor Vehicle Law",
            icon: <Car className="w-6 h-6 text-brand-gold" />,
            description: "We understand that motor vehicle disputes demand a thorough understanding of the specific rules and regulations governing motor transport and liability. We provide robust legal representation in matters relating to accidents, insurance claims, and various transport-related disputes. Our legal strategies are tailored to meet the specific requirements of our clients and advocate effectively on their behalf.",
            image: motorBg
        },
        {
            title: "Company Law",
            icon: <Building2 className="w-6 h-6 text-brand-gold" />,
            description: "We offer skilled representation in company law matters. Our firm is equipped to handle a wide range of corporate legal issues with clarity and precision. From regulatory compliance to business structuring and beyond, we are committed to providing diligent counsel and strategic advocacy for effective business legal.",
            image: compBg
        },
        {
            title: "Intellectual Property Law",
            icon: <Lightbulb className="w-6 h-6 text-brand-gold" />,
            description: "We provide comprehensive legal services to protect and enforce your intellectual property rights. From trademark search, filing, and registration to resolving disputes via litigation.",
            image: ipBg
        }
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen pt-24 font-sans">
            {/* HERO SECTION - Modeled after Home Hero */}
            <section className="relative overflow-hidden bg-brand-light pt-12 pb-24 lg:pt-24 lg:pb-32">
                <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-left"
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold font-serif text-[#5f402f] mb-6 leading-tight">
                                Our Practice Areas
                            </h1>
                            <p className="text-lg md:text-xl text-brand-dark/80 max-w-xl text-balance mb-10">
                                Comprehensive legal representation tailored to your needs. Our experienced attorneys provide strong counsel and dedicated representation to protect your interests and achieve results.
                            </p>

                            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-gold hover:bg-[#A9895B] text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                Schedule Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="hidden lg:flex justify-end items-center relative"
                        >
                            <div className="relative w-[28rem] h-[28rem] lg:w-[36rem] lg:h-[36rem]">
                                <img src={mainLogo} alt="AB&A Emblem" className="relative z-10 w-full h-full object-contain grayscale mix-blend-multiply opacity-60 contrast-125" onError={(e) => { e.target.style.display = 'none' }} />
                                {/* <span className="absolute top-16 right-16 text-2xl font-bold text-gray-500 z-20">TM</span> */}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PRACTICE AREAS LIST */}
            <section className="py-24 bg-[#F8F5EE]">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-32">
                        {areas.map((area, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={area.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                                >
                                    {/* Image Side */}
                                    <div className="w-full lg:w-1/2">
                                        <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                                            <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                            <img
                                                src={area.image}
                                                alt={area.title}
                                                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                            />
                                        </div>
                                    </div>

                                    {/* Text Side */}
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-[#f0e6d2] rounded-full flex items-center justify-center shrink-0">
                                                {area.icon}
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">
                                                {area.title}
                                            </h2>
                                        </div>
                                        <p className="text-lg text-brand-dark/80 leading-relaxed max-w-2xl">
                                            {area.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="relative py-24 overflow-hidden bg-brand-navy">
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${courtRoom})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/90 to-brand-navy/80"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        Ready to Discuss Your Legal Needs?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Our experienced attorneys are ready to provide the strong counsel and dedicated representation you deserve.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-gold hover:bg-[#A9895B] text-white px-10 py-4 rounded-md font-semibold text-lg transition-all duration-300 shadow-xl hover:-translate-y-1">
                        Schedule a Consultation
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PracticeAreas;
