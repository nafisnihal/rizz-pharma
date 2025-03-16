import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import "./styles/main.scss";

const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Categories = lazy(() => import("./components/Categories"));

function App() {
  return (
    <Suspense fallback={<Loader fullScreen={true} />}>
      <Header />
      <Hero />
      <Categories />
    </Suspense>
  );
}

export default App;
