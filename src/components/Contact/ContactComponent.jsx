export default function ContactComponent({ text, children, href }) {
  return (
    <div className="contactComponent">
    <a href={href} target="_blank" rel="noreferrer">
        {children}
        <h4>{text}</h4>
      </a>
    </div>
  );
}
