export const config = {
  heroSection: {
    id: "hero",
    backgroundImage: "https://i.ibb.co/LzVQtmj/college-campus.png",
    title: "Welcome To,",
    description:
      "Patkar-Varde College is well-known in the western suburbs of Mumbai. Since its establishment in 1964, it has constantly worked at increasing the number of courses it offers students and bettering its infrastructure.",
    icon: "https://cdn-icons-png.flaticon.com/512/271/271228.png",
    button_text_primary: "Learn More",
    button_text_outline1: "Admissions",
    button_text_outline2: "Contact",
    notice_header: "Notice Board",
    notices: [
      {
        message:
          "Message for our alumini’s Click on this message to get connected",
        date: "07-10-2022",
        url: "https://google.com",
      },
      {
        message: "Sem V & VI ATKT Notice_Prior to 2019-20",
        date: "27-12-2022",
        url: "/google.com",
      },
      {
        message: "You College will be resuming from 1st of June,2022",
        date: "20-05-2022",
        url: "/google.com",
      },
      {
        message: "Yoga & Well being lectures",
        date: "07-10-2022",
        url: "/google.com",
      },
      {
        message: "UG SEM III V ATKT EXAMINATION NOTICE October 2022",
        date: "07-10-2022",
        url: "/google.com",
      },
      {
        message:
          "Message for our alumini’s Click on this message to get connected",
        date: "07-10-2022",
        url: "/google.com",
      },
      {
        message: "Yoga & Well being lectures",
        date: "07-10-2022",
        url: "/google.com",
      },
      {
        message:
          "Message for our alumini’s Click on this message to get connected",
        date: "07-10-2022",
        url: "/google.com",
      },
      {
        message:
          "Message for our alumini’s Click on this message to get connected",
        date: "07-10-2022",
        url: "/google.com",
      },
    ],
  },

  college: {
    id: "college",
    title: "College",
    description:
      "Get a quick glimpse about who we are, what we do and what we aspire to achieve.",
    collegeButtons: [
      {
        buttonText: "About Us",
      },
      {
        buttonText: "Our Mission",
      },
      {
        buttonText: "Mission Statement",
      },
    ],
    button_text_primary: "Learn More",

    imgUrls: {
      url: "https://i.ibb.co/KhS2FCS/college-section.png",
      alt: "College Campus",
      text: "Patkar-Varde College is well-known in the western suburbs of Mumbai. Since its establishment in 1964, it has constantly worked at increasing the number of courses it offers students and bettering its infrastructure.",
      textDescriptions: [
        "Patkar-Varde College is well-known in the western suburbs of Mumbai. Since its establishment in 1964, it has constantly worked at increasing the number of courses it offers students and bettering its infrastructure.",

        "The College has grown steadily over the last four decades and we have never turned away from challenges. In keeping with the spirit of learning and growing through criticism, we have set up high standards, working continuously towards advanced goals.",
      ],

      images: [
        {
          title: "Academics",
          imageUrl: "https://i.ibb.co/7jvjSKz/Academic.png",
        },
        {
          title: "Events",
          imageUrl: "https://i.ibb.co/KxSnG29/Events.png",
        },
        {
          title: "Infrastructure",
          imageUrl: "https://i.ibb.co/2P1TctN/Infradtructure.png",
        },
      ],
    },
  },

  campusKatta: {
    id: "campusKatta",
    backgroundImage: "https://i.ibb.co/LzVQtmj/college-campus.png",
    title: "Campus Katta",
    description:
      "Articles of general interest written by staff and students and the latest news about the College",
    buttonText: "View All",
    gallery: {
      id: "gallery",

      images: [
        {
          id: "1",
          title: "React",
          imgUrl: "https://i.ibb.co/bsgytR1/Student.png",
        },
        {
          id: "2",
          title: "React",
          imgUrl: "https://i.ibb.co/h8jGbrm/College-view.png",
        },
        {
          id: "3",
          title: "React",
          imgUrl: "https://i.ibb.co/BTPK5DL/Canteen.png",
        },
        {
          id: "4",
          title: "React",
          imgUrl: "https://i.ibb.co/j852R0M/Class.png",
        },
      ],
    },
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
        text: "info@patkarvardecollege.edu.in",
      },
      {
        img: "https://cdn-icons-png.flaticon.com/512/159/159832.png",
        text: "+91-22-2872 3731 / 2872 1875 (Office)",
      },
      {
        img: "https://cdn-icons-png.flaticon.com/512/684/684809.png",
        text: "S. V. Road, Goregaon (West),Mumbai - 400062.",
      },
    ],

    contactForm: {
      form: {
        content: {
          heading: "Please Fill Out Your Information",
          buttonText: "Send",
          inputs: [
            {
              title: "Name",
              label: "name",
              name: "name",
              type: "text",
              isRequired: true,
              value: "",
              placeholder: "Enter Your Name",
            },
            {
              title: "Email",
              label: "email",
              type: "email",
              name: "email",
              isRequired: true,
              value: "",
              placeholder: "Enter Your Email",
            },
            {
              title: "Phone Number",
              label: "Phone Number",
              type: "number",
              name: "number",
              isRequired: true,
              value: "",
              placeholder: "Enter Your Phone Number",
            },
            {
              title: "Message",
              label: "department",
              type: "select",
              name: "department",
              isRequired: true,
              value: "",
              options: ["B.sc", "BBA", "B.Com"],
              placeholder: "Select Your Department",
            },
          ],
        },
      },
    },
  },
};
