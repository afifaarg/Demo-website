import React from "react";
import brandsData from "./brands.json"; // Adjust the path as necessary

const BrandsSection = () => {
  return (
    <section className="py-14 bg-neutral-100">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-primary">Nos Marques</h2>
        <p className="text-neutral-600 mt-2">
          Découvrez nos marques partenaires
        </p>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto px-4">
        {brandsData.map((brand) => (
          <div
            key={brand.id}
            className="flex flex-col items-center justify-center"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-16 mb-4 object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <h3 className="text-lg font-semibold text-neutral-800">
              {brand.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
