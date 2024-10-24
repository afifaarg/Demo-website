import React, { useEffect, useState } from "react";
import productsData from "./products.json"; // Adjust the path as necessary
import Product from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
import { Link } from "react-router-dom";

const NewProductsSlider = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    // Filter for new products
    const newProductsArray = productsData.filter(
      (product) => product.show_price
    );

    // Shuffle the new products and pick 6
    const shuffledProducts = newProductsArray
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    setNewProducts(shuffledProducts);
  }, []);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-2 mb-10  overflow-hidden bg-neutral-100" id="products">
      {" "}
      {/* Added margin-bottom here */}
      <div className="py-4 border-primary-dark flex flex-col justify-center mx-12 items-center">
        <h1 className="font-bold pb-2 text-3xl sm:text-4xl text-primary-dark text-start">
          Nouveaux Produits
        </h1>
        <p className="max-w-4xl text-center">
          Découvrez nos dernières arrivées ! Explorez notre sélection de
          produits innovants et tendance, soigneusement choisis pour répondre à
          vos envies. Ne manquez pas ces nouveautés !
        </p>
      </div>
      <Slider {...settings} className=" max-w-full px-4 py-6">
        {newProducts.map((product) => (
          <div key={product.id} className="px-2">
            {" "}
            {/* Added padding for space between cards */}
            <Product product={product} />
          </div>
        ))}
      </Slider>
      <div className="py-4 border-primary-dark flex flex-col justify-center mx-12 items-center">
        <Link
          to={"/products"}
          className="font-bold py-2 text-lg hover:underline  text-primary-dark text-start"
        >
          Voir Tous les Produits
        </Link>
      </div>
    </div>
  );
};

export default NewProductsSlider;
