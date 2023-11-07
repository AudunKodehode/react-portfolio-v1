import norwegian from "/public/icons/norwegian.webp";
import english from "/public/icons/english.webp";

export default function LanguageSwitcher({language, setLanguage}) {
    function switchLanguage() {
      if (language === "no") {
        setLanguage("en");
      } else {
        setLanguage("no");
      }
    }
  return <>
  <div  onClick={() => switchLanguage()}
  className="languageSwitcher fadeOut"
  >
{language === "no" ? (
    <>
    <img className="languageIcon" src={norwegian}></img>
    </>
) : 
(<>
    <img className="languageIcon" src={english}></img>
</>
)}
</div>
  </>;
}
