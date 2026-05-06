import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
