import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection";

export const metadata = {
  title: "Anon",
  icons : {
    icon : '/shopify-favicon.svg'
  }
};

export default function Home() {
  return (
    <>
      <Hero/>
      <ProductSection/>
    </>
  );
}
