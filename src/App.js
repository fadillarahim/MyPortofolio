import { useEffect } from 'react'; 
import Aos from 'aos';

import './App.css';

import Header from './assets/components/Header/Header';
import Footer from './assets/components/Footer/Footer';
import Hero from './assets/components/UI/Hero';
import Services from './assets/components/UI/Services';
import Portofolio from './assets/components/UI/Portofolio';
import Contact from './assets/components/UI/Contact';

function App() {

  useEffect(() => {
    Aos.init();
  }, []);



  return (
  <>
    <Header/>
    <main>
      <Hero />
      <Services />
      <Portofolio />
      <Contact />
    </main>
    <Footer/>
  </>
  );
}

export default App;
