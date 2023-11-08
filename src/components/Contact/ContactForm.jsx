import { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/457289f0-7e28-11ee-8bd5-e178f08d9cb2"; // TODO - update to the correct endpoint

const ContactForm = ({ language }) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We&apos;ll be in touch soon.</div>
      </>
    );
  }

  return (
    <>
      <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
        <div className="contactForm">
            <label htmlFor="name">{language === "no" ? "Navn" : "Name"}</label>
          <input
            type="text"
            placeholder={language === "no" ? "Navn" : "Name"}
            name="name"
            className="contactFormInput"
            required
          />
          <label htmlFor="name">{language === "no" ? "Epost" : "Email"}</label>
          <input
            type="email"
            placeholder={language === "no" ? "Epost" : "Email"}
            name="email"
            className="contactFormInput"
            required
          />
          <label htmlFor="name">{language === "no" ? "Telefon" : "Phone"}</label>
          <input
            type="phone"
            placeholder={language === "no" ? "Telefon" : "Phone"}
            name="phone"
            className="contactFormInput"
          />
          <label htmlFor="name">{language === "no" ? "Din melding" : "Your message"}</label>
          <textarea
            placeholder={language === "no" ? "Din melding" : "Your message"}
            name="message"
            className="messageInput contactFormInput"
            required
          />
            <button className="submitButton" type="submit">
              {language === "no" ? <>Send melding</> : (<>Send message</>)}
            </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
