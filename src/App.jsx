import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import "./styles/main.scss";

const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Categories = lazy(() => import("./components/Categories"));
const Features = lazy(() => import("./components/Features"));
const Products = lazy(() => import("./components/Products"));
const Services = lazy(() => import("./components/Services"));

function App() {
  return (
    <Suspense fallback={<Loader fullScreen={true} />}>
      <Header />
      <Hero />
      <Categories />
      <Features />
      <Products />
      <Services />
    </Suspense>
  );
}

export default App;
