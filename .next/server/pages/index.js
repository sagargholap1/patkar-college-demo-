(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Pages_HomePage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Common/Background/Background.tsx



const Background = ({ backgroundImage , backgroundColor , children , containerClasses , mainClasses  })=>{
    const defaultClass = "text-white z-[1]";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `relative z-[1] ${mainClasses}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `z-[-1] w-full h-full absolute inset-0 ${backgroundColor}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "z-[-2] absolute inset-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: backgroundImage,
                    alt: "Image",
                    layout: "fill",
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: containerClasses ? `${containerClasses} ${defaultClass}` : defaultClass,
                children: children
            })
        ]
    });
};
/* harmony default export */ const Background_Background = (Background);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Common/Buttons/Button.tsx




const Button = ({ fullWidth , children , bgColor , icon , type , htmlType , url , rounded , fontBold , onClick  })=>{
    // Button Wrapper Component -> LINK | BUTTON
    const Wrapper = ({ children  })=>{
        if (url) {
            return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: url,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: children
                })
            });
        } else {
            return /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: htmlType ? htmlType : "button",
                onClick: ()=>{
                    if (onClick) onClick();
                },
                children: children
            });
        }
    };
    // Button Classes/Styles
    const baseClass = `${fullWidth ? "w-full" : "w-max"} ${bgColor ? bgColor : "bg-primary-main"} ${rounded ? "rounded-full p-[1rem]" : "rounded-sm px-[2rem] py-[0.8rem]"} ${fontBold ? "font-6" : "font-5"}  1500:text-h6 text-h5 `;
    const primaryButtonClass = `${baseClass} bg-primary text-white`;
    const outlineButtonClass = `${baseClass} border-[2px]`;
    const textButtonClass = `${baseClass}`;
    const finalClass = type === "primary" ? primaryButtonClass : type === "outline" ? outlineButtonClass : type === "text" ? textButtonClass : primaryButtonClass;
    // JSX
    return /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: finalClass,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-center gap-[1rem]",
                children: [
                    children && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: children
                    }),
                    icon && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative w-[1.5rem] h-[1.5rem] align-middle",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: icon,
                            alt: "Icon",
                            fill: true
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Buttons_Button = (Button);

;// CONCATENATED MODULE: external "react-multi-carousel"
const external_react_multi_carousel_namespaceObject = require("react-multi-carousel");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_namespaceObject);
// EXTERNAL MODULE: ./node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__(2694);
;// CONCATENATED MODULE: ./components/Pages/HomePage/sections/Hero/Hero.tsx


//Components



// Carousel Library


const Hero = ({ config: configuration  })=>{
    let carouselRef;
    // Section Configuration
    // const { heroSection: configuration } = config;
    // Responsive
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 4,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            slidesToSlide: 1
        }
    };
    // Arrows
    const CustomLeftArrow = ({ ...rest })=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "absolute left-[0rem] top-[50%] translate-y-[-50%]",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Buttons_Button, {
                type: "primary",
                rounded: true,
                icon: "https://i.ibb.co/JQpqsmB/icons8-chevron-left-50.png",
                onClick: ()=>{
                    carouselRef.previous();
                }
            })
        });
    };
    const CustomRightArrow = ({ ...rest })=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "absolute right-[0rem] top-[50%] translate-y-[-50%]",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Buttons_Button, {
                type: "primary",
                rounded: true,
                icon: "https://cdn-icons-png.flaticon.com/512/271/271228.png",
                onClick: ()=>{
                    carouselRef.next();
                }
            })
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: configuration?.id,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Background_Background, {
            backgroundImage: configuration?.backgroundImage,
            backgroundColor: "bg-secondary/90",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-center justify-center gap-[5rem] h-[calc(100vh-10rem-8rem)] 1100:h-[100%] 1100:py-[5rem]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: " w-[90%] flex justify-between gap-[5rem] items-center 900:items-start 900:flex-col-reverse",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col basis-1/2 1500:gap-[5rem] gap-[6rem] ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "1500:text-h3 font-5 text-h3 ",
                                        children: configuration.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "1500:text-h5 text-h5 font-4 ",
                                        children: configuration.description
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Buttons_Button, {
                                        type: "primary",
                                        icon: "https://cdn-icons-png.flaticon.com/512/271/271228.png",
                                        url: "/",
                                        children: configuration.button_text_primary
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "basis-1/2 ",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col items-end 900:items-center justify-between 900:flex-row gap-[5rem] ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Buttons_Button, {
                                            type: "outline",
                                            icon: "https://i.ibb.co/MVSwZ8X/Vector1.png",
                                            url: "/",
                                            children: configuration.button_text_outline1
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Buttons_Button, {
                                            type: "outline",
                                            icon: "https://i.ibb.co/Rh3j5wd/Vector.png",
                                            url: "/",
                                            children: configuration.button_text_outline2
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center justify-center w-[90%]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "notices-container",
                            className: "w-[100%] justify-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_multi_carousel_default()), {
                                ref: (el)=>carouselRef = el,
                                responsive: responsive,
                                swipeable: true,
                                draggable: true,
                                ssr: true,
                                customLeftArrow: /*#__PURE__*/ jsx_runtime_.jsx(CustomLeftArrow, {}),
                                customRightArrow: /*#__PURE__*/ jsx_runtime_.jsx(CustomRightArrow, {}),
                                children: configuration?.notices?.map((notice, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: notice.url,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "1000:w-[20rem] 1000:h-[15rem] 1100:text-[1.4rem] 1350:w-[10rem] 1350:h-[21rem] 1600:w-[30rem] 1600:h-[21rem] w-[35rem] h-[21rem] 1500:text-[2rem] flex flex-col justify-between border-2 p-[2rem] text-[2.6rem] mx-auto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: notice.message
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: notice.date
                                                })
                                            ]
                                        }, index)
                                    }))
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Hero_Hero = (Hero);

;// CONCATENATED MODULE: ./components/Pages/HomePage/sections/CampusKatta/CampusKatta.tsx




const CampusKatta = ({ config: configuration  })=>{
    // Section Configuration
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: configuration?.id,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Background_Background, {
            backgroundImage: configuration?.backgroundImage,
            backgroundColor: "bg-secondary/90",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "wrapper flex flex-col justify-center py-[7rem] gap-[5rem] ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " flex justify-between gap-[5rem] basis-1/4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col gap-[3rem]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-h3 font-6",
                                    children: configuration.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-h6 font-4 ",
                                    children: configuration.description
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Buttons_Button, {
                                type: "primary",
                                icon: "https://cdn-icons-png.flaticon.com/512/271/271228.png",
                                url: "/",
                                children: configuration.buttonText
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const CampusKatta_CampusKatta = (CampusKatta);

;// CONCATENATED MODULE: ./components/Pages/HomePage/config.ts
const config = {
    heroSection: {
        id: "hero",
        backgroundImage: "https://i.ibb.co/LzVQtmj/college-campus.png",
        title: "Welcome To,",
        description: "Patkar-Varde College is well-known in the western suburbs of Mumbai. Since its establishment in 1964, it has constantly worked at increasing the number of courses it offers students and bettering its infrastructure.",
        icon: "https://cdn-icons-png.flaticon.com/512/271/271228.png",
        button_text_primary: "Learn More",
        button_text_outline1: "Admissions",
        button_text_outline2: "Contact",
        notice_header: "Notice Board",
        notices: [
            {
                message: "Message for our alumini’s Click on this message to get connected",
                date: "07-10-2022",
                url: "https://google.com"
            },
            {
                message: "Sem V & VI ATKT Notice_Prior to 2019-20",
                date: "27-12-2022",
                url: "/google.com"
            },
            {
                message: "You College will be resuming from 1st of June,2022",
                date: "20-05-2022",
                url: "/google.com"
            },
            {
                message: "Yoga & Well being lectures",
                date: "07-10-2022",
                url: "/google.com"
            },
            {
                message: "UG SEM III V ATKT EXAMINATION NOTICE October 2022",
                date: "07-10-2022",
                url: "/google.com"
            },
            {
                message: "Message for our alumini’s Click on this message to get connected",
                date: "07-10-2022",
                url: "/google.com"
            },
            {
                message: "Yoga & Well being lectures",
                date: "07-10-2022",
                url: "/google.com"
            },
            {
                message: "Message for our alumini’s Click on this message to get connected",
                date: "07-10-2022",
                url: "/google.com"
            },
            {
                message: "Message for our alumini’s Click on this message to get connected",
                date: "07-10-2022",
                url: "/google.com"
            }
        ]
    },
    college: {
        id: "college",
        title: "College",
        description: "Get a quick glimpse about who we are, what we do and what we aspire to achieve.",
        collegeButtons: [
            {
                buttonText: "About Us"
            },
            {
                buttonText: "Our Mission"
            },
            {
                buttonText: "Mission Statement"
            }
        ],
        button_text_primary: "Learn More",
        imgUrls: {
            url: "https://i.ibb.co/KhS2FCS/college-section.png",
            alt: "College Campus",
            text: "Patkar-Varde College is well-known in the western suburbs of Mumbai. Since its establishment in 1964, it has constantly worked at increasing the number of courses it offers students and bettering its infrastructure.",
            textDescriptions: [
                "Patkar-Varde College is well-known in the western suburbs of Mumbai. Since its establishment in 1964, it has constantly worked at increasing the number of courses it offers students and bettering its infrastructure.",
                "The College has grown steadily over the last four decades and we have never turned away from challenges. In keeping with the spirit of learning and growing through criticism, we have set up high standards, working continuously towards advanced goals."
            ],
            images: [
                {
                    title: "Academics",
                    imageUrl: "https://i.ibb.co/7jvjSKz/Academic.png"
                },
                {
                    title: "Events",
                    imageUrl: "https://i.ibb.co/KxSnG29/Events.png"
                },
                {
                    title: "Infrastructure",
                    imageUrl: "https://i.ibb.co/2P1TctN/Infradtructure.png"
                }
            ]
        }
    },
    campusKatta: {
        id: "campusKatta",
        backgroundImage: "https://i.ibb.co/LzVQtmj/college-campus.png",
        title: "Campus Katta",
        description: "Articles of general interest written by staff and students and the latest news about the College",
        buttonText: "View All"
    },
    contact: {
        id: "contact",
        title: "Contact Us",
        description: "Reach out to us for any or all queries.",
        buttonText: "Send",
        email: "info@patkarvardecollege.edu.in",
        phoneno: "+91-22-2872 3731 / 2872 1875 (Office)",
        location: "S. V. Road, Goregaon (West),Mumbai - 400062.",
        details: [
            {
                img: "https://cdn-icons-png.flaticon.com/512/2089/2089181.png",
                text: "info@patkarvardecollege.edu.in"
            },
            {
                img: "https://cdn-icons-png.flaticon.com/512/159/159832.png",
                text: "+91-22-2872 3731 / 2872 1875 (Office)"
            },
            {
                img: "https://cdn-icons-png.flaticon.com/512/684/684809.png",
                text: "S. V. Road, Goregaon (West),Mumbai - 400062."
            }
        ],
        contactForm: {
            form: {
                content: {
                    heading: "Please Fill Out Your Information",
                    inputs: [
                        {
                            title: "Name",
                            label: "name",
                            name: "name",
                            type: "text",
                            isRequired: true,
                            value: "",
                            placeholder: "Enter Your Name"
                        },
                        {
                            title: "Email",
                            label: "email",
                            type: "email",
                            name: "email",
                            isRequired: true,
                            value: "",
                            placeholder: "Enter Your Email"
                        },
                        {
                            title: "Phone Number",
                            label: "Phone Number",
                            type: "number",
                            name: "number",
                            isRequired: true,
                            value: "",
                            placeholder: "Enter Your Phone Number"
                        }
                    ]
                }
            }
        }
    }
};

;// CONCATENATED MODULE: ./components/Pages/HomePage/sections/College/College.tsx





const College = ({ config: configuration  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: configuration.id,
        className: " py-[7rem] relative flex flex-col gap-[10rem] ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " wrapper flex-row 900:flex-col 900:items-center flex justify-between gap-[5rem] ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col gap-[3rem] w-[25%] items-center 900:w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-h3 font-6",
                                children: configuration.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-h6 font-4 ",
                                children: configuration.description
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "self-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex flex-col gap-[2rem] items-start",
                                    children: config.college.collegeButtons.map((button, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hover:text-primary hover:font-8 text-h6",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Buttons_Button, {
                                                type: "text",
                                                children: button.buttonText
                                            })
                                        }, index))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "self-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Buttons_Button, {
                                    type: "primary",
                                    icon: "https://cdn-icons-png.flaticon.com/512/271/271228.png",
                                    url: "/",
                                    children: configuration.button_text_primary
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col justify-end items-end right-0 900:top-[0] w-[100%]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " absolute 1100:relative w-[40%] 1100:w-[100%] 900:w-[100%] top-[7rem] right-0 1100:right-[0] ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: configuration.imgUrls.url,
                                    alt: configuration.imgUrls.alt,
                                    width: 250,
                                    height: 250,
                                    objectFit: "cover"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " bg-background border z-[1] w-[75%] 900:w-[100%] gap-[1rem] drop-shadow-lg ",
                                children: config.college.imgUrls.textDescriptions.map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "gap-[.5rem] font-6 flex flex-col justify-between px-[2rem] py-[1rem] 1100:text-subtitle-2",
                                        children: text
                                    }, index))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "images-sec",
                className: "wrapper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-between 1100:flex-col gap-[3rem] 1100:items-center",
                    children: config.college.imgUrls.images.map((image, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative 1100:w-[50rem]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: image.imageUrl,
                                        alt: "",
                                        width: 450,
                                        height: 250
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-primary fill-red-600",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Buttons_Button, {
                                        fontBold: true,
                                        type: "text",
                                        icon: "https://img.icons8.com/ios-filled/512/long-arrow-right.png",
                                        url: "/",
                                        children: image.title
                                    })
                                })
                            ]
                        }, index))
                })
            })
        ]
    });
};
/* harmony default export */ const College_College = (College); // w-[42rem] h-[23rem]

;// CONCATENATED MODULE: ./components/Common/Form/formconfig.ts
const formconfig_config = {
    contactForm: {
        form: {
            content: {
                heading: "Please Fill Out Your Information",
                buttonText: "Submit",
                inputs: [
                    {
                        title: "Name",
                        label: "name",
                        name: "name",
                        type: "text",
                        isRequired: true,
                        value: "",
                        placeholder: "Enter Your Name"
                    },
                    {
                        title: "Email",
                        label: "email",
                        type: "email",
                        name: "email",
                        isRequired: true,
                        value: "",
                        placeholder: "Enter Your Email"
                    },
                    {
                        title: "Phone Number",
                        label: "Phone Number",
                        type: "number",
                        name: "number",
                        isRequired: true,
                        value: "",
                        placeholder: "Enter Your Phone Number"
                    },
                    {
                        title: "Department",
                        label: "department",
                        type: "select",
                        name: "department",
                        isRequired: true,
                        value: "",
                        options: [
                            "B.sc",
                            "BBA",
                            "B.Com"
                        ],
                        placeholder: "Select Your Department"
                    }
                ]
            }
        }
    }
};

;// CONCATENATED MODULE: ./components/Common/Form/Form.tsx



// Types

const Form = ()=>{
    const { contactForm: configuration  } = formconfig_config;
    // States
    // const { activeCard, card1, card2 } = cardConfig;
    // const currentCard = cardNum === 1 ? card1 : cardNum === 2 ? card2 : card1;
    // const currentCardKey =
    //   cardNum === 1 ? "card1" : cardNum === 2 ? "card2" : "card1";
    // Handle Change
    const handleChange = (label, value)=>{
        const inputs = configuration.form.content.inputs.map((input)=>{
            if (input.label === label) return {
                ...input,
                value
            };
            else return input;
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-[25%] flex flex-col content-center gap-[2rem] border p-[2rem]",
            children: [
                configuration.form.content.inputs.map((input, index)=>{
                    const inputClass = "bg-transparent focus:outline-none border-2 border-secondary-main focus:border-secondary-surface h-[4rem] px-[1rem] placeholder-secondary-main focus:placeholder-secondary-surface";
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: "text-body-3 flex flex-col gap-[0.6rem]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "font-6",
                                children: [
                                    input.title,
                                    " ",
                                    input.isRequired ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "(Optional)"
                                    })
                                ]
                            }),
                            input.type === "text" || input.type === "email" || input.type === "password" || input.type === "number" ? /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: inputClass,
                                name: input.name,
                                required: input.isRequired,
                                type: input.type,
                                placeholder: input.placeholder,
                                value: input.value,
                                onChange: (e)=>handleChange(input.label, e.target.value)
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                className: `${inputClass} ${input.value ? "text-neutral-50" : "text-secondary-main focus:text-secondary-surface"}`,
                                name: input.name,
                                required: input.isRequired,
                                value: input.value,
                                children: [
                                    ...[
                                        ""
                                    ],
                                    ...(input?.options)
                                ].map((option, index)=>{
                                    if (index === 0) {
                                        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "",
                                            selected: true,
                                            disabled: true,
                                            hidden: true,
                                            children: input.placeholder
                                        }, index);
                                    } else {
                                        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: option,
                                            className: "bg-neutral-50 text-neutral-900",
                                            children: option
                                        }, index);
                                    }
                                })
                            })
                        ]
                    }, index);
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "max-w-max m-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Buttons_Button, {
                        type: "primary",
                        url: "/",
                        children: configuration.form.content.buttonText
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Form_Form = (Form);

;// CONCATENATED MODULE: ./components/Pages/HomePage/sections/Contact/Contact.tsx




const Contact = ({ config: configuration  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: " py-[7rem] flex flex-col gap-[5rem] wrapper",
        id: configuration.id,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex-col flex justify-end gap-[3rem] w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-h3 font-6",
                        children: configuration.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-base2 font-6 ",
                        children: configuration.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-row 1100:flex-col 1100:gap-[2rem] justify-between items-center text-primary ",
                        children: configuration?.details?.map((detail, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-evenly items-center gap-[1rem] font-7",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "relative w-[1.5rem] h-[1.5rem]",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: detail.img,
                                            alt: "",
                                            fill: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: detail.text
                                    })
                                ]
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Form_Form, {})
            })
        ]
    });
};
/* harmony default export */ const Contact_Contact = (Contact);

;// CONCATENATED MODULE: ./components/Pages/HomePage/index.tsx


// Components




const HomePage = ({ pageConfig  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero_Hero, {
                config: pageConfig?.heroSection
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(College_College, {
                config: pageConfig?.college
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CampusKatta_CampusKatta, {
                config: pageConfig?.campusKatta
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact_Contact, {
                config: pageConfig?.contact
            })
        ]
    });
};
/* harmony default export */ const Pages_HomePage = (HomePage);


/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Pages_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9250);
/* harmony import */ var _lib_get_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_get_config__WEBPACK_IMPORTED_MODULE_4__]);
_lib_get_config__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// Components

// Lib

const Home = ({ pageConfig  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Patkar | Home"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pages_HomePage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    pageConfig: pageConfig
                })
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const pageConfig = await (0,_lib_get_config__WEBPACK_IMPORTED_MODULE_4__/* .getConfig */ .i)("hero");
    return {
        props: {
            pageConfig
        },
        revalidate: 120
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2694:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,847], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();