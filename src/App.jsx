import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Menu, About, Contact, Navbar, Footer } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/menu" exact element={<Menu />}></Route>
        <Route path="/about" exact element={<About />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
