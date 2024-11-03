import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [flyer, setFlyer] = useState(false);

  return (
    <>
      {/* NavBar */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="font-bold font-serif text-secondary text-xl">
                  <img src="logo.jpg" alt="" className="h-14" />
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="rounded-md p-2 inline-flex items-center justify-center text-secondary-light hover:text-secondary-dark"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-10 items-center">
              <div className="relative">
                <button
                  type="button"
                  className="group rounded-md justify-center text-secondary-light hover:text-secondary-dark inline-flex items-center text-base font-medium focus:outline-none"
                  onClick={() => setFlyer(!flyer)}
                >
                  <span>Nos Produits</span>
                  <svg
                    className={`ml-2 h-5 w-5 text-secondary-light hover:text-secondary-dark transition-transform ease-out duration-200 ${
                      flyer ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Dropdown
                <div
                  className={`${
                    flyer
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1 pointer-events-none"
                  } transition ease-out duration-200 absolute z-10 mt-3 w-screen max-w-md sm:px-0 lg:left-1/2 lg:-translate-x-1/2`}
                  onMouseLeave={() => setFlyer(false)}
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="bg-white p-5">Here get categories</div>
                  </div>
                </div> */}
              </div>

              <Link 
                to="/products"
                className="text-base font-medium text-secondary-light hover:text-primary"
              >
                Nouveautés
              </Link>
             <Link 
                to="/products"
                className="text-base font-medium text-secondary-light hover:text-primary"
              >
                PC-GAMER
             </Link>
             <Link 
                to="/products"
                className="text-base font-medium text-secondary-light hover:text-primary"
              >
                Accessoires
              </Link>
              <Link
                to="/products"
                className="text-base font-medium text-secondary-light hover:text-primary"
              >
                Peripheriques
              </Link>
            </nav>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                to="/cart"
                className="px-2 whitespace-nowrap text-primary inline-flex items-center justify-center text-secondary font-bold cursor-pointer hover:text-secondary-dark"
              >
                <svg
                  fill="none"
                  viewBox="0 0 15 15"
                  height="1.5em"
                  width="1.5em"
                >
                  <path
                    fill="currentColor"
                    d="M6.929.757L4.383 5h6.234L8.07.757 8.93.243 11.783 5h2.514c.388 0 .703.315.703.703v.439a18.96 18.96 0 01-2.002 8.48.684.684 0 01-.612.378H2.614a.685.685 0 01-.612-.379A18.96 18.96 0 010 6.141v-.438C0 5.315.315 5 .703 5h2.514L6.07.243l.858.514z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 fixed inset-0 h-screen z-10 bg-transparent md:hidden"
              : "opacity-0 scale-95 pointer-events-none fixed inset-0 h-screen z-10 md:hidden"
          }`}
        >
          <div className="rounded-lg shadow-lg h-screen ring-1 bg-black/20 bg-opacity-75 backdrop-blur-sm divide-y-2 divide-gray-50">
            <div className="px-5 flex items-center justify-between py-2">
              <div></div>
              <button
                type="button"
                className="rounded-md p-2 inline-flex items-center justify-center text-secondary-dark focus:outline-none"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="py-4 px-4 space-y-6">
              <Link
                to="/products"
                className="block text-secondary-dark hover:text-secondary text-xl font-semibold"
              >
                Nouveautés
              </Link>
              <Link
                to="/products"
                className="block text-secondary-dark hover:text-secondary text-xl font-semibold"
              >
                PC-GAMER
              </Link>
              <Link
                to="/products"
                className="block text-secondary-dark hover:text-secondary text-xl font-semibold"
              >
                Accessoires
              </Link>
              <Link
                to="/products"
                className="block text-secondary-dark hover:text-secondary text-xl font-semibold"
              >
                Peripheriques
              </Link>
            </div>
            <div className="flex items-center py-4 space-x-2">
              <Link
                to="/"
                className="px-2 whitespace-nowrap inline-flex items-center justify-center  text-secondary rounded-md shadow-sm text-base font-medium font-bold text-primary cursor-pointer hover:text-secondary-dark"
              >
                <svg
                  fill="none"
                  viewBox="0 0 15 15"
                  height="1.5em"
                  width="1.5em"
                >
                  <path
                    fill="currentColor"
                    d="M6.929.757L4.383 5h6.234L8.07.757 8.93.243 11.783 5h2.514c.388 0 .703.315.703.703v.439a18.96 18.96 0 01-2.002 8.48.684.684 0 01-.612.378H2.614a.685.685 0 01-.612-.379A18.96 18.96 0 010 6.141v-.438C0 5.315.315 5 .703 5h2.514L6.07.243l.858.514z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
