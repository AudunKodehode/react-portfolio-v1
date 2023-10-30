import { Link } from "react-router-dom";
export default function Navitem({className, href, children}) {
  return (
    <>
      <button className={className}>
        <Link to={href}>{children}</Link>
      </button>
    </>
  );
}
