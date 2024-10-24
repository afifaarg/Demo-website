import React from "react";
import { Link } from "react-router-dom";
const Categories = () => {
  // Array of categories with name and image
  const categories = [
    {
      name: "PC Gamer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZBVYy6HSSwNeVX4W-00FINxzuwktdZaT0L__XBRwLC8i-Rkkwo1OAypR2mLPbIIGtTY&usqp=CAU",
    },
    {
      name: "Accessoires",
      image:
        "https://subsonic.com/img/cms/SA5605_PRO-GAMER-PACK-5in1_AZERTY_LD-2.jpg",
    },
    {
      name: "Chaises Gaming",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Composants",
      image: "https://media.materiel.net/categories/424.png",
    },
    {
      name: "Périphériques",
      image:
        "https://www.gamertech.fr/wp-content/uploads/2020/09/peripherique-gamer.png",
    },
    {
      name: "Moniteurs",
      image:
        "https://dlcdnwebimgs.asus.com/gain/CD75D7C5-6A84-4B78-BA57-2F1AD1738010/w717/h525",
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl text-clip font-bold text-primary">
          Nos Catégories
        </h2>
        <p className="text-neutral-600 mt-2">
          Découvrez notre sélection d'équipements pour vos besoins gaming
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container w-3/4 mx-auto px-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center justify-center"
          >
            {/* Add a wrapper for the image to control size */}
            <div className="overflow-hidden cursor-pointer rounded-xl h-60 shadow-lg transition-transform duration-300 ease-in-out transform group-hover:-translate-y-2">
              <Link to={"/products"}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </Link>
            </div>
            {/* Text below the card */}
            <h3 className="text-center text-xl font-bold mt-2 text-primary transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
