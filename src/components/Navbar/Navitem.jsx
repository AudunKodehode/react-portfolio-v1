import { Link } from "react-router-dom";
export default function Navitem({ className, to, children, onClick }) {
    
  return (
    <>
      <Link className={className} to={to} onClick={onClick}>
        {children}
      </Link>
    </>
  );
}
