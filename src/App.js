import { Header } from "./common/header/Header";
import "./App.css";
import { Footer } from "./common/footer/Footer";
import { BoxView } from "./pages/box-view/BoxView";
import { useEffect, useState } from "react";
import { getRequest } from "./services/HttpClient";

function App() {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getRequest("http://localhost:8080/fruits").then((response) => {

      setFruits(response);
      setLoading(false);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <BoxView fruits={fruits} loading={loading} />
      <Footer />
    </div>
  );
}

export default App;
