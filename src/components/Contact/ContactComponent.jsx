export default function ContactComponent({ text, children, href }) {
  return (
    <a href={href} target="_blank">
    <div className="contactComponent">
        {children}
        <h4>{text}</h4>
    </div>
      </a>
  );
}
