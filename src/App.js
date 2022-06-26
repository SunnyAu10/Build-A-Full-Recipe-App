import "./styles.css";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
