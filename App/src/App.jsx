import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' /* Routes */
import './App.css' /* Style */
import Navbar from '../components/layout/Navbar/Navbar' /* NavBar */
import Footer from '../components/layout/Footer/footer' /* Footer */

/* Pages */
import Login from './pages/Login'
import Cadastro from './pages/cadastro'
import Loading from './pages/loading'
import Home from './pages/home'
import Produtos from './pages/produtos'


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
        <Route path="/produtos" element={<Produtos />} > </Route>
      </Routes>

      <Routes>
        <Route path="/loading" element={<Loading />} > </Route>
      </Routes>


      <main>
        <section>
          <div>
            <h1>oi</h1>
            <p>sei la o que falo aqui</p>
          </div>
        </section>
      </main>


      <Footer />
    </Router>


  )
}

export default App
