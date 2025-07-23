import { FaStar } from "react-icons/fa6";
 import Image3 from "../Image/Image3.png"
 import Img2 from "../Image/img2.jpg"
 import Img3 from "../Image/img3.jpg"
 import Img4 from "../Image/img4.jpg"
import AOS from "aos";
 import "aos/dist/aos.css";
 import { useEffect } from "react";

const ProductsData = [
  {
    id: 1,
    img: Image3,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];



export const Produit = () => {
   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* header section     */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p className='text-sm text-primary'>Top Selling Products for you</p>
                <h1 data-aos="fade-up" className='text-2xl font-bold'>Produits</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Optio aspernatur cupiditate alias nulla fugit,
                     nemo quibusdam qui quaerat labore dolor, quisquam autem laudantium neque adipisci?
                </p>
            </div>
            {/* body section   */}
            <div>
                <div className='
                grid grid-cols-1 sm:grid-cols-3
                md:grid-cols-4 lg:grid-cols-5 place-items-center'>
                    {/* card section */}
                    {
                        ProductsData.map((data)=>(
                            <div  key={data.id}>
                                <div 
                                data-aos="zoom-in"
                                data-aos-once={data.aosDelay}
                                className='space-y-3'>
                                    <img src={data.img} alt="" 
                                    className='h-[220px] w-[150px] object-cover rounded-md'/>
                                    <div>
                                      <h3 className='font-semibold'>{data.title}</h3>
                                      <p className='text-sm text-gray-600'>{data.color}</p>
                                      <div className='flex justify-center items-center gap-1'>
                                          <FaStar className='text-yellow-400'/>
                                          <span>{data.rating}</span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
