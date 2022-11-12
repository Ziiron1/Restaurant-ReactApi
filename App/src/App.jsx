import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css' /* Style */
import Navbar from '../components/layout/navbar' /* NavBar */
import Footer from '../components/layout/footer' /* Footer */


import Login from './pages/Login'
import Cadastro from './pages/cadastro'
import Loading from './pages/loading'
import Home from './pages/home'

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact='true' path="/" element={<Home />} > </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} > </Route>
      </Routes>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} > </Route>
      </Routes>
      <Routes>
        <Route path="/loading" element={<Loading />} > </Route>
      </Routes>



      <Footer />



    </Router>


  )
}

export default App
