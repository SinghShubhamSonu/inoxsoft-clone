import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

const FAQItem = ({ title, content, isOpen, toggleOpen }) => {
    return (
        <div
            itemScope
            itemType="https://schema.org/Question"
            className="border-b border-gray-700 py-5 cursor-pointer"
            onClick={toggleOpen}
        >
            <div className="flex justify-between items-center">
                <h3 itemProp="name" className="text-white text-xl font-bold ">{title}</h3>
                <ChevronDown
                    className={`w-4 h-4 text-white transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </div>

            {isOpen && (
                <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="pt-3"
                >
                    <div itemProp="text" className="text-gray-300 text-lg">
                        <p>{content}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const AnimatedButton = ({ children, isPrimary = true }) => {
    const buttonRef = useRef(null);
    const pseudoElementRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(buttonRef.current, {
            duration: 0.2,
            ease: "power1.out"
        });

        gsap.to(pseudoElementRef.current, {
            width: '500px',
            duration: 1,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        gsap.to(buttonRef.current, {
            duration: 0.2,
            ease: "power1.out"
        });

        gsap.to(pseudoElementRef.current, {
            width: '0px',
            duration: 1,
            ease: "power2.out"
        });
    };

    return (
        <div className="relative inline-block">
            <button
                ref={buttonRef}
                className={`relative inline-flex items-center justify-center px-5 py-4 ${
                    isPrimary 
                        ? "bg-white text-gray-900 border border-[#00283b] hover:border-white hover:text-white" 
                        : "bg-transparent text-white border border-white  hover:text-[#00283b]"
                } rounded-full transition-all duration-300 overflow-hidden w-64`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span className="relative z-10 font-medium">{children}</span>
                {/* <span className="ml-1 relative z-10">›</span> */}
                <i className="fa fa-angle-right ml-2 relative z-10 hover:text-white"></i>
                <span
                    ref={pseudoElementRef}
                    className={`absolute left-[-20px] w-0 h-[500px] ${
                        isPrimary ? "bg-[#00283b]" : "bg-white"
                    } rotate-[-29deg]`}
                ></span>
            </button>
        </div>
    );
};

const ReactNativeFaqSection = () => {
    const faqData = [
        {
            id: 1,
            title: "Commitment to projects' success",
            content: "We offer our commitment – you estimate the progress. Inoxoft's experience and professionalism are proved by the number of our case studies showcasing narrow-field solutions we delivered to various businesses."
        },
        {
            id: 2,
            title: "Personalized approach",
            content: "We treat each idea with respect. Our aim is to create a solution that can fully meet your requirements and preserve your vision over the web solution. We know how essential it is to have a quality product you can present to your customers."
        },
        {
            id: 3,
            title: "Reliability",
            content: "Our service has an excellent reputation among clients thanks to great experience and attention to each separate project. We know what to offer and which technologies to use to achieve the necessary result."
        },
        {
            id: 4,
            title: "Money-saving solutions",
            content: "Inoxoft guarantees your money will be spent properly without overspending. Web development with real professionals can definitely turn into a great pleasure."
        }
    ];

    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <section className="bg-[#00283b] py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-28 px-6">
                    {/* Left Column: Title and Buttons */}
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                        <h1 className="text-4xl font-bold text-white mb-8">FREQUENTLY ASKED QUESTIONS</h1>
                        
                        <div className="flex flex-col space-y-4">
                            <AnimatedButton isPrimary={true}>
                                ASK MANAGER
                            </AnimatedButton>
                            
                            <AnimatedButton isPrimary={false}>
                                MORE QUESTIONS
                            </AnimatedButton>
                        </div>
                    </div>
                    
                    {/* Right Column: FAQ Items */}
                    <div className="lg:flex-1" itemScope itemType="https://schema.org/FAQPage">
                        {faqData.map(item => (
                            <FAQItem
                                key={item.id}
                                title={item.title}
                                content={item.content}
                                isOpen={openItem === item.id}
                                toggleOpen={() => toggleItem(item.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReactNativeFaqSection;