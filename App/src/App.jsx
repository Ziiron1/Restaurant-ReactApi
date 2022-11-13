import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' /* Routes */
import './App.css' /* Style */

/* Global */
import Navbar from '../components/layout/Navbar/Navbar'
import Footer from '../components/layout/Footer/footer'

/* Pages */
import Login from './pages/Login'
import Cadastro from './pages/cadastro'
import Home from './pages/home'
import Produtos from './pages/produto'
import Agendamentos from './pages/Agendamento'

/* Load */
import Load from '../components/layout/loading/Loading'


function App() {


  return <div className='App' >
    <Router>
      <Navbar />
      {/* <Load /> */}

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
        <Route path="/agendamento" element={<Agendamentos />} > </Route>
      </Routes>


      <Footer />
    </Router>

  </div>
}

export default App
