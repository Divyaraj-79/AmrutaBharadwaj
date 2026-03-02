import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, HeartHandshake, Scale, Award, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import sealLogo from '../../assets/home/Ansh_Bharadwaj_Logo.png';
// Using available assets that most likely correspond to the screenshot
import respectingImg from '../../assets/home/p7-BB-5S_jE.jpeg';
import collage1 from '../../assets/home/p6-DL7GSB8B.jpeg';
import collage2 from '../../assets/home/P4-DOn4qVDq.jpeg';
import collage3 from '../../assets/home/p3-DjSC5oSl.jpeg';
// Reusing SVGs for decorative elements
import patternBg from '../../assets/home/teamsection2-BQSNYcyQ.svg';
import balanceScaleBg from '../../assets/home/aboutsection3-Dy7gmn5D.svg';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const practiceAreas = [
        "Criminal Law",
        "Civil Law",
        "Family Law",
        "Motor Vehicle Law",
        "IPR Law",
        "Company Law"
    ];

    const principles = [
        {
            icon: <Scale className="w-8 h-8 text-[#A07B4D]" />,
            title: "Integrity",
            description: "We execute uncompromising ethical standards in every case, ensuring transparency, honesty, and accountability in all client engagements."
        },
        {
            icon: <BookOpen className="w-8 h-8 text-[#A07B4D]" />,
            title: "Excellence",
            description: "We continuously elevate our practice by staying updated with evolving laws, delivering exceptional counsel, and achieving the best possible outcomes for you."
        },
        {
            icon: <HeartHandshake className="w-8 h-8 text-[#A07B4D]" />,
            title: "Dedication",
            description: "We believe in complete commitment to every cause we undertake. Treating every client's challenge as our own, providing timely, dedicated support."
        },
        {
            icon: <Award className="w-8 h-8 text-[#A07B4D]" />,
            title: "Trust",
            description: "We build enduring relationships on a foundation of genuine care, mutual respect, and maintaining strict confidentiality throughout our association."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[60vh] flex items-center">
                {/* Decorative border pattern from screenshot */}
                <div className="absolute top-0 left-0 w-full md:w-1/2 h-full opacity-30 pointer-events-none mix-blend-multiply z-0 flex justify-start items-start">
                    {/* <img src={patternBg} alt="Pattern" className="w-[120%] max-w-none -ml-40 -mt-20 object-contain" /> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#8a6b42] mb-6 leading-tight">
                            About Abhay Bharadwaj &<br />Associates
                        </h1>
                        <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                            We are a four-and-a-half-decade-old law firm based out of Rajkot, Gujarat. Established by Late Shri Abhay Bharadwaj, a former member of the Law Commission of India, in the year 1980.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center md:justify-end"
                    >
                        <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] opacity-90 transition-transform duration-700 hover:scale-105">
                            <img src={sealLogo} alt="Firm Seal" className="w-full h-full object-contain filter drop-shadow-xl saturate-50" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Upholding the Rule of Law */}
            <section className="py-24 bg-[#F9F7F2]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-5 relative"
                        >
                            <div className="relative rounded-sm overflow-hidden shadow-2xl z-10 p-2 bg-white">
                                <img
                                    src={respectingImg}
                                    alt="Advocate Amruta Bharadwaj paying respects"
                                    className="w-full h-auto object-cover sm:h-[550px] object-center"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-7"
                        >
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4 leading-tight">
                                Upholding the Rule of Law and<br className="hidden md:block" />People's Rights
                            </h2>
                            <div className="w-full h-0.5 bg-gradient-to-r from-brand-gold to-transparent mb-8"></div>

                            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed mb-10 font-medium">
                                <p>
                                    We are a four-and-a-half-decade-old law firm based out of Rajkot, Gujarat. Established by Late Shri Abhay Bharadwaj, a former member of the Law Commission of India, in the year 1980. We have gradually cemented our position as a pillar of legal excellence.
                                </p>
                                <p>
                                    AB & A, with a team of over 50 skilled lawyers led by Adv. Amruta Bharadwaj, has her work spread across Gujarat, specifically in the Saurashtra-Kutch region. Our expertise spans Criminal Law, Civil Law, Family Law, Motor Vehicle Law, Company Law, and IPR Law—making us a one-stop solution for clients' wide range of legal challenges.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 mb-2">
                                {practiceAreas.map((area, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.4 }}
                                        className="flex items-center gap-3 py-2 text-brand-navy font-semibold text-lg"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-[#D1AA5B] flex-shrink-0" />
                                        <span>{area}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Four Decades of Excellence - Brown Section */}
            <section className="py-24 bg-gradient-to-br from-[#4A2E15] via-[#634020] to-[#8C5D30] relative text-white shadow-inner">
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
                            Four Decades of Excellence and Trusted Advocacy.
                        </h2>
                        <p className="text-[#EADFCC] text-lg font-medium">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="bg-[#FAF8F5] text-brand-navy rounded-sm p-8 shadow-xl flex flex-col items-center text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-b-4 border-transparent hover:border-[#B58A46]"
                            >
                                <div className="w-16 h-16 bg-[#F1E9DA] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#EADFCC] transition-all duration-300 shadow-sm border border-[#D5BE98]">
                                    {principle.icon}
                                </div>
                                <h3 className="font-serif font-bold text-xl mb-3">{principle.title}</h3>
                                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                    {principle.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join us for professional legal guidance */}
            <section className="py-24 bg-[#FDFCF9] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="flex relative">
                                {/* Thin yellow border accent */}
                                <div className="w-1.5 bg-[#D1AA5B] h-16 mr-6 rounded-full mt-2 shrink-0"></div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-navy mb-12 leading-snug">
                                        Join us for professional legal<br className="hidden md:block" /> guidance.
                                    </h2>

                                    <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
                                        <div className="bg-white shadow-2xl rounded-sm p-8 text-center shrink-0 border border-gray-100 min-w-[160px] relative">
                                            {/* Glow effect */}
                                            <div className="absolute inset-0 bg-[#D1AA5B] blur-2xl opacity-10 rounded-full"></div>
                                            <div className="text-5xl font-serif font-bold text-brand-navy mb-2 relative z-10">45+</div>
                                            <div className="text-[11px] uppercase tracking-widest text-[#B58A46] font-bold relative z-10">Years of<br />Experience</div>
                                        </div>

                                        <p className="text-gray-700 text-lg leading-relaxed font-medium mt-2">
                                            Over four decades, our firm has stood for a symbol of legal integrity and professional excellence across Gujarat.
                                        </p>
                                    </div>

                                    <p className="text-gray-700 text-lg leading-relaxed font-medium">
                                        We combine extensive courtroom experience with modern legal strategies – delivering clarity, confidence, and results when it matters most.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="grid grid-cols-2 gap-4 h-full">
                                <div className="space-y-4">
                                    <div className="bg-white p-1.5 rounded-sm shadow-xl">
                                        <img src={collage1} alt="Legal Consultation" className="w-full h-48 md:h-60 object-cover rounded-sm grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                                    </div>
                                    <div className="bg-white p-1.5 rounded-sm shadow-xl">
                                        <img src={collage2} alt="Legal Research" className="w-full h-48 md:h-60 object-cover rounded-sm grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-white p-1.5 rounded-sm shadow-2xl w-full">
                                        <img src={collage3} alt="Court Arguments" className="w-full h-72 md:h-[496px] object-cover rounded-sm grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#56657c] relative text-white border-b-8 border-brand-navy">
                <div className="absolute left-0 bottom-0 top-0 w-1/3 opacity-[0.08] pointer-events-none flex items-center justify-start mix-blend-screen scale-x-[-1]">
                    <img src={balanceScaleBg} alt="Scale Background" className="h-[120%] object-contain -ml-20" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Ready to Work With Us?
                        </h2>
                        <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto font-medium">
                            Let full-service team of expert legal professionals handle your legal situation.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-[#F9A826] hover:bg-[#E09015] text-white px-10 py-4 rounded-md font-bold transition-all duration-300 shadow-[0_0_20px_rgba(249,168,38,0.3)] hover:shadow-[0_0_30px_rgba(249,168,38,0.5)] transform hover:-translate-y-1 text-lg"
                        >
                            Get Consultation Today <ArrowRight className="w-5 h-5 ml-1" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
