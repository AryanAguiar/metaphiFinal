import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layouts';
import ScrollToTop from './components/ScrollToTop';
import Test from './pages/Test';
import About from './pages/About';
function App() {

  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/test' element = {<Test />} />
          <Route path='/about' element = {<About/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
