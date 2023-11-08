import ContactForm from "../components/Contact/ContactForm";
export default function Contactpage({ language }) {
  {
    language === "no"
      ? (document.title = "Kontakt - Audun Holmen")
      : (document.title = "Contact - Audun Holmen");
  }
  return (
    
    <div className="contactPage">
      
      <div className="businessCard">
        {language === "no" ? (
          <>
            <h2>Kontakt meg</h2>
            <h4>Telefon: 954 22 694</h4>
            <h4>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/audun-holmen-9b595926b/"
                target="_blank"
                rel="noreferrer"
              >
                Audun Holmen
              </a>
            </h4>
            <h4>
              Epost:{" "}
              <a href="mailto:audunkodehode@gmail.com">
                audunkodehode@gmail.com
              </a>
            </h4>
          </>
        ) : (
          <>
            <h2>Contact me</h2>
            <h4>Phone: 954 22 694</h4>
            <h4>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/audun-holmen-9b595926b/"
                target="_blank"
                rel="noreferrer"
              >
                Audun Holmen
              </a>
            </h4>
            <h4>
              Email:{" "}
              <a href="mailto:audunkodehode@gmail.com">
                audunkodehode@gmail.com
              </a>
            </h4>
          </>
        )}
      </div>
      
    <ContactForm language={language} />
    </div>
  );
}
