
import './App.css'
import { Navbar } from './assets/pagehtml/Navbar'
import { Hero } from './assets/pagehtml/Hero'
import { Produit } from './assets/pagehtml/Produit'
import AOS from "aos";
 import "aos/dist/aos.css";
 import {useEffect} from "react"
 import { TopProduit } from './assets/pagehtml/TopProduit';
 import { Banner } from './assets/pagehtml/Banner';
import { Suscribre } from './assets/pagehtml/Suscribre';
import { Temoignage } from './assets/pagehtml/Temoignage';
import { Footer } from './assets/pagehtml/Footer';
function App() {
 useEffect(()=>{
      AOS.init({
        offset:100,
        duration:800,
        easing:"ease-in-sine",
        delay:100,
      });
        AOS.refresh(); // <-- Ajoute ça pour forcer AOS à scanner tous les éléments

    },[])
  return (
    <div  className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar/>
      <Hero/>
      <Produit/>
      <TopProduit/>
      <Banner/>
      <Suscribre/>
      <Produit/>
      <Temoignage/>
      <Footer/>
    </div >
  )
}

export default App
