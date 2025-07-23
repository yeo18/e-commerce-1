import shirt from "../Image/shirt.png"
import shirt2 from "../Image/shirt2.png"
import shirt3 from "../Image/shirt3.png"
import {FaStar} from "react-icons/fa"

export const TopProduit = () => {
    const ProductsData = [
  {
    id: 1,
    img: shirt,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: shirt2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: shirt3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
  return (
    <div>
        <div className='container'>
            {/* header section */}
             <div className='text-left mb-10'>
                <p className='text-sm text-primary'>Best Products</p>
                <h1 data-aos="fade-up" className='text-2xl font-bold'>Produits</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Optio aspernatur cupiditate alias nulla fugit,
                     nemo quibusdam qui quaerat labore dolor, quisquam autem laudantium neque adipisci?
                </p>
            </div>
            {/* body section */}
            <div  className='flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {
                    ProductsData.map((data)=>(
                        <div
                        data-aos="zoom-in">
                            {/* image section */}
                            <div className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
                            hover:text-white relative shadow-xl duration-300 group max-w-[300px] h-[150px]'>
                                <img src={data.img} alt=""
                                className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105
                                duration-300 drop-shadow-md' />
                            </div>
                            {/* details section */}
                            <div className='p-4 text-center'>
                                {/* star rating */}
                                <div className='w-full flex items-center justify-center gap-1'>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                </div>
                                <h1 className='text-xl font-bold'>{data.title}</h1>
                                <p className='text-gray-500 group-hover::text-white duration-300 text-sm line-clamp-2'>
                                    {data.description}
                                </p>
                                <button className='bg-primary hover:scale-105 duration-300 text-white py-1
                                px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                                // onClick={handleOrderPopup}
                                >
                                        Order Now
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* VIEW ALL BUTTON */}
            <div className="flex justify-center">
                <button className='text-center mt-10 cursor-pointer
                bg-primary text-white py-1 px-5 rounded-md'>voir tout</button>
            </div>
        </div>
    </div>
  )
}
