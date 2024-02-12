import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LANDINGPAGE from "./pages/LANDINGPAGE";
import REGISTERNOWFINALPHASE from "./pages/REGISTERNOWFINALPHASE";
import REGISTERNOWPHASE1RULES from "./pages/REGISTERNOWPHASE1RULES";
import SIGNUP from "./pages/SIGNUP";
import SIGNIN from "./pages/SIGNIN";
import SEEMORE from "./pages/SEEMORE";
import Gallery from "./pages/Gallery";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/registernowfinal-phase":
        title = "";
        metaDescription = "";
        break;
      case "/registernow-phase1-rules":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/signin":
        title = "";
        metaDescription = "";
        break;
      case "/see-more":
        title = "";
        metaDescription = "";
        break;
      case "/gallery":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LANDINGPAGE />} />
      <Route
        path="/registernowfinal-phase"
        element={<REGISTERNOWFINALPHASE />}
      />
      <Route
        path="/registernow-phase1-rules"
        element={<REGISTERNOWPHASE1RULES />}
      />
      <Route path="/signup" element={<SIGNUP />} />
      <Route path="/signin" element={<SIGNIN />} />
      <Route path="/see-more" element={<SEEMORE />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}
export default App;
