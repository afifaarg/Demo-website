import NavBar from "../components/NavBar";
import Carousel from "../components/Carousels";
import Categories from "../components/Categories";
import NewProductsSlider from "../components/newProductsSection";
import FAQ from "../components/Faq";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <Categories />
      <NewProductsSlider />
      <FAQ />
    </>
  );
}
