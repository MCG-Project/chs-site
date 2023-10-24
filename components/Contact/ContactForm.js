import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button, InputGroup } from "react-bootstrap";
import styles from "../../styles/Contact.module.css";

export function ContactForm() {
  const [formErrors, setFormErrors] = useState({});
  const [user_name, setUser_name] = useState("");
  const [user_email, setUser_email] = useState("");
  const [user_phone, setUser_phone] = useState("");
  const [message, setMessage] = useState("");
  const [service_type, setService_type] = useState([]);
  const [isMessageSent, setMessageSent] = useState(false);

  const contactFormData = [
    {
      formField: "Name",
      type: "text",
      name: "user_name",
      placeHolder: "Enter Name",
    },
    {
      formField: "Email",
      type: "email",
      name: "user_email",
      placeHolder: "Enter Email",
    },
    {
      formField: "Phone",
      type: "phone",
      name: "user_phone",
      placeHolder: "Enter Phone",
    },
    {
      formField: "Message",
      type: "",
      name: "message",
      placeHolder: "Enter you message here...",
      as: "textarea",
    },
  ];

  const contactService = ["Irrigation", "Landscaping", "Retaining Wall"];

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const validateForm = () => {
    const errors = {};

    if (!user_name.trim()) {
      errors.user_name = "Name is required";
    }

    if (!user_email.trim()) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user_email)) {
      errors.user_email = "Invalid email address";
    }

    if (!user_phone.trim()) {
      errors.user_phone = "Phone number is required";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const contactForm = event.target;

    const isValid = validateForm();

    if (isValid) {
      contactForm.contact_number.value = (Math.random() * 100000) | 0;

      try {
        emailjs.init("wIko9PMJ1JvlpnmbP");

        // Extract the selected services
        const selectedServices = contactService.filter((service) =>
          service_type.includes(service)
        );

        // Include the selected services in the form data
        contactForm.service_type.value = selectedServices.join(", ");

        const response = await emailjs.sendForm(
          "service_qffbaol",
          "template_vsx1wdc",
          contactForm
        );

        setMessageSent(true);

        setUser_name("");
        setUser_email("");
        setUser_phone("");
        setMessage("");
        setService_type([]);

        await delay(1000);
        window.location.href = "/";
      } catch (error) {
        console.error("FAILED...", error);
        alert("Message not sent!");
      }
    } else {
      alert("Please correct the form errors before submitting.");
    }
  };

  return (
    <>
      <Form
        className="d-flex align-items-center flex-column w-50"
        id="contact-form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="contact_number" />
        {contactFormData.map((item) => (
          <InputGroup className="mt-3" key={item.name}>
            <InputGroup.Text id={styles.inputText} className="text-white">
              {item.formField}
            </InputGroup.Text>
            <Form.Control
              type={item.type}
              name={item.name}
              value={
                item.name === "user_name"
                  ? user_name
                  : item.name === "user_email"
                  ? user_email
                  : item.name === "user_phone"
                  ? user_phone
                  : item.name === "message"
                  ? message
                  : ""
              }
              onChange={(e) => {
                switch (item.name) {
                  case "user_name":
                    setUser_name(e.target.value);
                    break;
                  case "user_email":
                    setUser_email(e.target.value);
                    break;
                  case "user_phone":
                    setUser_phone(e.target.value);
                    break;
                  case "message":
                    setMessage(e.target.value);
                    break;
                  default:
                    break;
                }
              }}
              placeholder={item.placeHolder}
              aria-label={item.formField}
              aria-describedby={item.formField}
              as={item.as}
            />
            {formErrors[item.name] && (
              <div className={styles.errorMessage}>
                {" - "}
                {formErrors[item.name]}
              </div>
            )}
          </InputGroup>
        ))}
        <Form.Text className="fw-bold fs-6 mb-2" muted>
          Select the services you wish to be contacted for:
        </Form.Text>
        {contactService.map((type) => (
          <div key={type} className="mb-3">
            <Form.Check
              type="checkbox"
              id={type}
              label={type}
              value={service_type.includes(type)} // Check if the service is selected
              onChange={() => {
                if (service_type.includes(type)) {
                  // If already selected, remove it
                  setService_type(
                    service_type.filter((selectedType) => selectedType !== type)
                  );
                } else {
                  // If not selected, add it
                  setService_type([...service_type, type]);
                }
              }}
            />
          </div>
        ))}
        <input type="hidden" name="service_type" />

        <Button type="submit" className="fw-bold w-25 mt-3" variant="dark">
          SEND
        </Button>
        {isMessageSent && (
          <div className={styles.successMessage}>Message Sent!</div>
        )}
      </Form>
    </>
  );
}
