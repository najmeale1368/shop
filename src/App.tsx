import { Routes, Route } from "react-router-dom";
import { Header } from "./components/TopHeader/Header";
import { Home } from "./pages/Home/Home";
import { SearchResults } from "./pages/SearchResults/SearchResults";
import { Blog } from "./pages/Blog/Blog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
