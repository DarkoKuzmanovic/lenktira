import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Gallery from "./pages/Gallery.tsx";
import Videos from "./pages/Videos.tsx";
import FunFacts from "./pages/FunFacts.tsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/fun-facts" element={<FunFacts />} />
          <Route
            path="/"
            element={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  fontSize: "3rem",
                }}
              >
                Welcome!
              </div>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
