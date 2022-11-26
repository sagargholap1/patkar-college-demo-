export const config = {
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
            title: "Department",
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
};
