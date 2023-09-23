import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsNav from './components/ProductsNav';

function App() {

  return (
    <>
      <div className=''>
        <Navbar />
        <ProductsNav />
        <Hero />
        <Footer />
      </div>
    </>
  )
}

export default App
