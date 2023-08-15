import Home from "./components/Home"
import CreateNews from "./components/CreateNews"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NewsDetails from "./components/NewsDetails"
import NotFound from "./components/404Page"

function App() {

  return (
    <Router>
      <div className="font-body font-Poppins">
        <Navbar />
        <div className="max-w-4xl my-[5px] mx-auto p-[10px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateNews />} />
            <Route path="/news/:id" element={<NewsDetails />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
