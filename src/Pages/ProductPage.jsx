import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext"; // Uncomment this when your CartContext is ready
import products from "../components/products.json";

export default function ProductPage() {
  const [productData, setProductData] = useState({});
  const [images, setImages] = useState([]);
  const [isLightbox, setLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  // const { addToCart } = useContext(CartContext);
  const { id } = useParams(); // This will give you the product id

  // UseEffect to filter the product based on the ID from products.json
  useEffect(() => {
    const product = products.find((item) => item.id == id); // Assuming 'id' is a string in your JSON
    if (product) {
      setProductData(product);
      // Repeat the product image 4 times for the gallery
      setImages([product.image, product.image, product.image, product.image]);
      setSelectedImage(product.image); // Set the selected image to the first image
    }
  }, [id]); // Add `id` to dependencies to fetch data when it changes

  useEffect(() => {
    console.log("productUpdate", productData);
  }, [productData]);

  function handleClick() {
    setLightbox(!isLightbox);
  }

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      setLightbox(!isLightbox);
    }
  }

  function fullSizeClick(image, index) {
    setSelectedImage(image);
    setCurrentIndex(index);
  }

  function nextImage() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  }

  function prevImage() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setSelectedImage(
      images[(currentIndex - 1 + images.length) % images.length]
    );
  }

  return (
    <section className="w-full px-4 sm:w-4/5 mx-auto py-8 flex flex-col">
      <div className="max-w-7xl px-4 py-4">
        <div className="flex items-center space-x-2 text-dark text-sm">
          <Link to="/" className="hover:underline hover:text-gray-600">
            Accueil
          </Link>
          <span>
            <svg
              className="h-5 w-5 leading-none text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
          <Link to="/products" className="hover:underline hover:text-gray-600">
            {productData.category}
          </Link>
          <span>
            <svg
              className="h-5 w-5 leading-none text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
          <span>{productData.name}</span>
        </div>
      </div>

      <div className="flex items-start space-y-4 gap-2 flex-col sm:flex-row max-sm:py-0 max-sm:px-0 mb-10">
        <div className="grid grid-cols-1 w-full  ">
          {selectedImage && (
            <img
              src={selectedImage}
              onClick={handleClick}
              className="rounded-lg w-[500px] h-[500px] max-sm:rounded-none border"
              alt={productData.name}
            />
          )}
          <div className="grid grid-cols-4 gap-3 pt-4 w-10/12">
            {images.map((image, imageIndex) => (
              <button key={imageIndex} className="focus:opacity-60 border">
                <img
                  className="rounded-md hover:opacity-70 w-[150px] h-[100px]"
                  src={image} // Directly use the image URL
                  alt={`image thumbnail ${imageIndex + 1}`}
                  onClick={() => fullSizeClick(image, imageIndex)} // Pass the image and index
                />
              </button>
            ))}
          </div>
          <div
            onClick={handleOverlayClick}
            style={{ display: isLightbox ? "flex" : "none" }}
            className="flex flex-col items-center justify-center group-hover:block fixed inset-0 bg-black bg-opacity-50 max-sm:justify-start"
          >
            <div className="relative flex flex-col items-end">
              <button
                onClick={prevImage}
                className="hover:opacity-80 cursor-pointer bg-white rounded-full w-fit h-fit absolute -left-5 top-1/2 transform -translate-y-1/2 px-4 py-2 max-sm:left-0"
              >
                &lt; {/* Use < symbol */}
              </button>
              <img
                className="rounded-lg max-sm:mt-12 max-sm:h-2/3"
                src={selectedImage} // Use the selected image for the lightbox
                alt={`Image ${currentIndex + 1}`}
                width={550}
              />
              <button
                onClick={nextImage}
                className="hover:opacity-80 cursor-pointer bg-white rounded-full w-fit h-fit absolute -right-5 top-1/2 transform -translate-y-1/2 px-4 py-2 max-sm:right-0"
              >
                &gt; {/* Use > symbol */}
              </button>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="max-w-lg px-4 py-12">
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-4xl">
            {productData.name}
          </h2>
          <p className="text-gray-500 text-sm">
            By{" "}
            <a href="#" className="text-primary-dark font-bold hover:underline">
              Hichem Technology{" "}
            </a>
          </p>

          <div className="flex items-center space-x-4 my-4">
            <div>
              <div className="rounded-lg flex py-1 ">
                {productData.show_price == true ? (
                  <p className="text-lg font-bold leading-tight text-gray-900 dark:text-white">
                    {productData.price} DZD
                  </p>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-green-500 px-2 py-2 text-xs font-medium text-white">
                    ARRIVAGE
                  </span>
                )}
              </div>
            </div>
          </div>

          <p className="text-gray-500 py-4 text-clip">
            {productData.description}
          </p>

          <div className="flex py-4 space-x-4">
            <button
              type="button"
              className="h-14 flex items-center space-x-3 px-6 py-2 font-semibold rounded-xl bg-primary text-secondary hover:shadow-lg active:scale-80 transition-transform active:outline-none"
            >
              <svg fill="none" viewBox="0 0 15 15" height="1.5em" width="1.5em">
                <path
                  fill="currentColor"
                  d="M6.929.757L4.383 5h6.234L8.07.757 8.93.243 11.783 5h2.514c.388 0 .703.315.703.703v.439a18.96 18.96 0 01-2.002 8.48.684.684 0 01-.612.378H2.614a.685.685 0 01-.612-.379A18.96 18.96 0 010 6.141v-.438C0 5.315.315 5 .703 5h2.514L6.07.243l.858.514z"
                />
              </svg>
              <span>Ajouter au Panier</span>
            </button>
            <button className="h-14 flex items-center space-x-3 px-6 py-2 font-semibold rounded-xl bg-white text-gray-600 border border-gray-300 hover:shadow-lg active:scale-75 transition-transform active:outline-none">
              <svg fill="none" viewBox="0 0 24 24" height="1.5em" width="1.5em">
                <path
                  fill="currentColor"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span>Ajouter à la liste de souhaits</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
