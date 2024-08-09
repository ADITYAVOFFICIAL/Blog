import Blogcard from "./components/blogcard/blogcard";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Newsletter from "./components/newsletter/newsletter"
import Brands from "./components/brands/brands"
import Developers from "./components/developers/developers"
import Hero from "./components/hero/hero"
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Blogcard />
      <Brands/>
      <Developers/>
      <Newsletter/>
      <Footer />
    </div>
  );
}