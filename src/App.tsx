import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contato from "./pages/contato/contato";
import ComoFunciona from "./pages/comoFunciona/comoFunciona";
import Parceiros from "./pages/parceiros/parceiros";
import Home from "./pages/home/home";
import Produtos from "./pages/produtos/produtos";
import Solicitacao from "./pages/solicitacao/solicitacao";
import SobreNos from "./pages/sobre/sobreNos";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/solicitacao" element={<Solicitacao />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/parceiros" element={<Parceiros />} />
              <Route path="/sobre-nos" element={<SobreNos />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
