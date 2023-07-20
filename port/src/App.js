import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Todo from "./Components/Todo/Todo";
import Contact from "./Components/Contact";
import ProductList from "./Components/Addcart/ProductList";
import Api from "./Components/Api";





function App() {
  return (
   
    <div className="App">
      {/* here route the component  */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         
          <Route path="/todo" element={<Todo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<ProductList/>} />
          <Route path="/api" element={<Api/>} />
       
        </Routes>
       
      </BrowserRouter>

    </div>
    
  );
}

export default App;
