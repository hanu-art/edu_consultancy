import {BrowserRouter }from 'react-router-dom'
import Header from './components/layout/Header/Header'
import AppRoutes from './constants/AppRoutes' 
import Footer from './components/layout/Footer/Footer'
function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
    <AppRoutes/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
