import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 text-center fixed bottom-0 left-0 right-0 rounded-lg shadow p-6 bg-bieze ">
      <div className="text-sm text-gray-600 text-center">
        © 2023{" "}
        <Link to={"/"} className="hover:underline">
          Srijan
        </Link>
        . All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
