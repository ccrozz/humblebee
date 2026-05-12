import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Story from "@/components/Story";
import CleanLabel from "@/components/CleanLabel";
import Founders from "@/components/Founders";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Products />
      <Story />
      <CleanLabel />
      <Founders />
      <Footer />
    </main>
  );
}
