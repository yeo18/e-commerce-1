import Img2 from "../Image/Img2.jpg"
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from 'react-icons/io5';

export const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2
            gap-6 items-center'>
                {/* image section */}
                <div data-aos="zoom-in">
                    <img src={Img2} alt="" 
                    className='max-w-[400px] h-[350px] w-full mx-auto
                    drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'/>
                </div>
                {/* text details section */}
                <div className=' flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1 className='text-2xl sm:text-3xl font-bold' >Winter Sale upto 50% Off</h1>
                    <p className='text-sm text-gray-500 tracking-wide leading-7 '>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellat animi rem accusamus, 
                        facilis tempora quia. Accusamus alias eos deserunt consectetur veniam dicta assumenda, ipsa 
                        amet maiores necessitatibu
                        s vero aspernatur quasi rem dolores laboriosam? Obcaecati ratione quisquam quis recusandae
                    </p>
                    <div className='flex flex-col gap-4'>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <GrSecure
                            className="text-3xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
                            <p>Quality Products</p>
                        </div>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <IoFastFood
                            className="text-3xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"/>
                            <p>Fast Delivery</p>
                        </div>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <GrSecure
                            className="text-3xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
                            <p>Quality Products</p>
                        </div>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <IoFastFood
                            className="text-3xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"/>
                            <p>Fast Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
