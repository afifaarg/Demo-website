import { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div
      key={product.id}
      className="relative rounded-xl border border-gray-200 bg-white hover:shadow-xl shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="h-64 p-4 w-full rounded-t-xl bg-cover bg-center overflow-hidden relative shadow-lg">
        <Link to={`/products/${product.id}`}>
          <img
            className="w-full h-full rounded-t-xl transform transition-transform duration-500 hover:scale-110 "
            src={product.image}
            alt={product.name}
          />
        </Link>

        {/* Button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            className="inline-flex justify-center items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <svg
              className="-ms-2 me-2 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            <span>Ajouter au Panier</span>
          </button>
        </div>
      </div>

      <div className="pt-4 p-4">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-red-500 px-2.5 py-0.5 text-xs font-medium text-secondary dark:bg-primary-dark dark:text-primary-300">
            {product.category}
          </span>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-1">
            <Link
              to={`/products/${product.id}`}
              className="rounded-lg p-2 text-primary hover:bg-gray-100"
              data-tooltip-target={`tooltip-quick-look-${product.id}`}
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </Link>
            <div
              id={`tooltip-quick-look-${product.id}`}
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              data-popper-placement="top"
            >
              Voir Produit
              <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>

            <button
              type="button"
              data-tooltip-target={`tooltip-add-to-favorites-${product.id}`}
              className="rounded-lg p-2 text-primary hover:bg-gray-100"
            >
              <span className="sr-only">Ajouter aux favories</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                />
              </svg>
            </button>
            <div
              id={`tooltip-add-to-favorites-${product.id}`}
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              data-popper-placement="top"
            >
              Ajouter aux favories
              <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>
          </div>
        </div>

        {/* Product Name */}
        <a
          href="#"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
        >
          {product.name}
        </a>

        {/* Features */}
        <ul className="mt-2 flex justify-between items-center gap-4">
          <li className="flex items-center gap-2">
            {/* Fast Delivery Icon */}
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4H9m4 0v4m0 0H9"
              />
            </svg>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Livraison rapide
            </span>
          </li>
          <li className="flex items-center gap-2">
            {/* Show price or badge */}
            {product.show_price == true ? (
              <p className="text-lg font-bold leading-tight text-gray-900 dark:text-white">
                {product.price} DZD
              </p>
            ) : (
              <span className="inline-flex items-center rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
                ARRIVAGE
              </span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
