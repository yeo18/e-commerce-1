import logo from "../Image/logo.png"
import {FaSearch,FaShoppingCart,FaCaretDown} from "react-icons/fa"
import { DarkMode } from './DarkMode'

export const Navbar = () => {
    const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

  return (
    <div className='shadow-md bg-white dark:bg-gray-900 
    dark:text-white duration-200 relative z-40 w-full'>
        <div className='bg-primary/40 py-2 ' >
            {/* upper Navbar */}
            <div className=' container w-full flex justify-between items-center px-6'>
                <div>
                    <a href="#" className='font-bold text-xl sm:2xl
                    flex gap-2 '>
                        <img src={logo} alt="" 
                        className='w-10 uppercase'/>
                        Shopsy
                    </a>
                </div>
                {/* search bar and order button */}
                <div className='flex justify-between items-center gap-4'>
                    <div className='relative hidden group sm:block'>
                        <input type="text" placeholder='search' 
                        className='w-[150px] sm:w-[180px] group-hover:w-[300px]
                        transition-all duration-300 rounded-full border border-gray-300
                        px-2 py-1 focus:outline-none focus:border-1
                        focus:border-primary'/>
                        <FaSearch className='text-gray-500 group-hover:text-primary absolute
                        top-1/2 -translate-y-1/2 right-3'/>
                    </div>
                </div>
                {/* order button */}
                <div>
                <button onClick={()=>alert(`  
                    ordering not available yet`)}
                    className='bg-gradient-to-r from-primary to-secondary transition-all duration-200
                    text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                    <span className='group-hover:block hidden transition-all duration-200
                    '>Order</span>
                    <FaShoppingCart
                    className='text-xl drop-shadow-sm cursor-pointer'/>
                </button>
                {/* DarkmodeSwitch */}
                <div>
                    <DarkMode/>
                </div>
            </div>
            </div>
        </div>
        {/* lower Navbar */}
            <div className='flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4'>
                    {
                        Menu.map((data)=>(
                            <li key={data.id}>
                                <a href={data.link}
                                className='inline-block px-4 hover:text-primary duration-200
                                '>{data.name}</a>
                            </li>
                        ))
                    }
                    {/* Simple Dropdown and Links */}
                    <li className='group relative cursor-pointer'>
                        <a href="#"
                        className='transition-all duration-200 group-hover:rotate-180 flex '>
                            Trending Items
                            <span>
                                <FaCaretDown  className='
                                transition-all duration-200 group-hover:rotate-180'/>
                            </span>
                        </a>
                        <div className='absolute z-[9999] hidden 
                        group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
                            <ul>
                                {
                                    DropdownLinks.map((data)=>(
                                         <li> 
                                            <a href={data.link}
                                            className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                                                {data.name}
                                            </a>
                                         </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
    </div>
  )
}
