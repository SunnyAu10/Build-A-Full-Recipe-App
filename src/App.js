import "./styles.css";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Header from "./components/Header";
import styled from "styled-components";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <AppStyle>
          <Header />
          <Search />
          <Category />
          <Pages />
        </AppStyle>
      </BrowserRouter>
    </div>
  );
}

const AppStyle = styled.div`
  margin: 0 10rem;
`;
