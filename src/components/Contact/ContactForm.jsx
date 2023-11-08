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
            <p>{language === "no" ? "Navn" : "Name"}</p>
          <input
            type="text"
            placeholder={language === "no" ? "Navn" : "Name"}
            name="name"
            className="contactFormInput"
            autoComplete="name"
            required
          />
          <p>{language === "no" ? "Epost" : "Email"}</p>
          <input
            type="email"
            placeholder={language === "no" ? "Epost" : "Email"}
            name="email"
            className="contactFormInput"
            autoComplete="email"
            required
          />
          <p>{language === "no" ? "Telefonnummer" : "Phone number"}</p>
          <input
            type="phone"
            placeholder={language === "no" ? "Telefonnummer" : "Phone number"}
            name="phone"
            autoComplete="phone"
            className="contactFormInput"
          />
          <p>{language === "no" ? "Din melding" : "Your message"}</p>
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
