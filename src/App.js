import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import Cocktail from './components/Cocktail'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/cocktails/:id" element={<SingleCocktail/>}/>
        {/* error page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App