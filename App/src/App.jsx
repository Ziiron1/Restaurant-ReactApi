import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' /* Routes */
import './App.css' /* Style */

/* Global */
import Navbar from '../components/layout/Navbar/Navbar'
import Footer from '../components/layout/Footer/footer'

/* Pages */
import Login from './pages/Cliente/Login'
import Cadastro from './pages/Cliente/cadastro'
import Home from './pages/home'
import Produtos from './pages/Produtos/Produto'
// import Agendamentos from './pages/Agendamento/Agendamento'

/* Load */
import Load from '../components/layout/loading/Loading'

/* Cookie */
import Cookies from '../components/Cookies/Cookie'



function App() {


  return <div className='App' >

    <Router>
      <Navbar />
      {/* <Load /> */}



      {/* Rotas */}

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

      {/* <Routes>
        <Route path="/agendamento" element={<Agendamentos />} > </Route>
      </Routes> */}

      <Cookies />


      <Footer />
    </Router>

  </div>
}

export default App
