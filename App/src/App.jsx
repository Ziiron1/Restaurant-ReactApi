import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom' /* Routes */
import './App.css' /* Style */


/* Global */
import Navbar from '../components/layout/Navbar/Navbar'
import Footer from '../components/layout/Footer/Footer'

/* Pages */
import Home from './pages/home'
import Produtos from './pages/Produtos/Produto'
import NotFound from './pages/NotFound/notFound'
// import Agendamentos from './pages/Agendamento/Agendamento'

/* Load */
import Load from '../components/layout/loading/Loading'

/* Cookie */
import Cookies from '../components/Cookies/Cookie'


function App() {

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://crudserver2.onrender.com/pratos/`,
      )
      .then(({ data }) => {
        setLoading(false)
        setResponse(data);
      });
  }, []);

  if (loading) return <Load />



  return <div className='App'>

    <Router>
      <Navbar />

      {/* Rotas */}
      <Routes>
        <Route exact='true' path="/" element={<Home />} />

        <Route path="/produtos" element={<Produtos />} />

        <Route path='/404' element={<NotFound />} />

        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>

      <Cookies />

      <Footer />
    </Router>

  </div>
}

export default App
