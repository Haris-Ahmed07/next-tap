import "./App.css";
import RoutesConfiguration from "./components/RoutesConfiguration/RoutesConfiguration.jsx";
import { useLocation } from "react-router-dom";
import ContactButton from "./components/ContactButton/ContactButton.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const location = useLocation();

  const hideHeaderFooterRoutes = ["/checkout"];

  const hideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);
  return (
    <div className="flex flex-col min-h-screen App overflow-x-hidden relative">
    {!hideHeaderFooter && (
      <div className="z-50 mb-[5.5rem]">
        <Header />
      </div>
    )}
    <div className="flex-grow">
      <RoutesConfiguration />
    </div>

    {!hideHeaderFooter && (
      <div className="flex-grow">
        <Footer />
      </div>
    )}
    <ContactButton />
  </div>
  );
}

export default App;
